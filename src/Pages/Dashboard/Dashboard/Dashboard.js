import React, { useState } from 'react';
import 'react-bootstrap-drawer/lib/style.css';
import './Dashboard.css';
import ManageOrder from '../ManageOrder/ManageOrder';
import DashboardHome from '../DashboardHome/DashboardHome';
import AddProduct from '../AddProduct/AddProduct';
import AllProduct from '../AllProduct/AllProduct';
import MyOrder from '../MyOrder/MyOrder';
import {
    Button,
	Col,
	Collapse,
	Container,
	Nav,
	Navbar,
	Row,
} from 'react-bootstrap';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Drawer } from 'react-bootstrap-drawer';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
	const [open, setOpen] = useState(false);
    const { admin, user, logOut } = useAuth();

	const handleToggle = () => setOpen(!open);

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
            </Navbar>
            <Container fluid>
                <Row className="flex-xl-nowrap">
                    <Col xs={ 12 } md={ 3 } lg={ 2 } className="p-0">
                        <Drawer>
                            <Drawer.Toggle onClick={ handleToggle } />
                            <Collapse in={ open }>
                                <Drawer.Overflow>
                                    <Drawer.ToC>
                                        <Nav.Link className="dashboard" as={Link} to="/">
                                            <i className="fa fa-home" aria-hidden="true"></i> Bongo Car Bazar
                                        </Nav.Link>

                                        <Drawer.Nav>
                                            <Nav.Link className="nav-item" as={Link} to={`${url}/dashboardHome`}>
                                                <i className="fas fa-circle"></i> Dashboard
                                            </Nav.Link>
                                        </Drawer.Nav>
                                        {admin && 
                                        <Drawer.Nav>
                                            <Nav.Link className="nav-item" as={Link} to={`${url}/add-admin`}>
                                                <i className="fas fa-circle"></i> Make Admin
                                            </Nav.Link>
                                        </Drawer.Nav>
                                        }
                                        {admin && 
                                        <Drawer.Nav>
                                            <Nav.Link className="nav-item" as={Link} to={`${url}/manage-all-orders`}>
                                                <i className="fas fa-circle"></i> Manage All Orders
                                            </Nav.Link>
                                        </Drawer.Nav>
                                        }
                                        {admin && 
                                        <Drawer.Nav>
                                            <Nav.Link className="nav-item" as={Link} to={`${url}/add-product`}>
                                                <i className="fas fa-circle"></i> Add A Product
                                            </Nav.Link>
                                        </Drawer.Nav>
                                        }
                                        {admin && 
                                        <Drawer.Nav>
                                            <Nav.Link className="nav-item" as={Link} to={`${url}/manage-products`}>
                                                <i className="fas fa-circle"></i> Manage Products
                                            </Nav.Link>
                                        </Drawer.Nav>
                                        }
                                        {!admin && 
                                        <Drawer.Nav>
                                            <Nav.Link className="nav-item" as={Link} to={`${url}/payment`}>
                                                <i className="fas fa-circle"></i> Pay
                                            </Nav.Link>
                                        </Drawer.Nav>
                                        }
                                        {!admin && 
                                        <Drawer.Nav>
                                            <Nav.Link className="nav-item" as={Link} to={`${url}/my-orders`}>
                                                <i className="fas fa-circle"></i> My Orders
                                            </Nav.Link>
                                        </Drawer.Nav>
                                        }
                                        {!admin && 
                                        <Drawer.Nav>
                                            <Nav.Link className="nav-item" as={Link} to={`${url}/review`}>
                                                <i className="fas fa-circle"></i> Review
                                            </Nav.Link>
                                        </Drawer.Nav>
                                        }
                                        {user.email && 
                                            <Button onClick={logOut} className="btn-sm px-2 mt-3" variant="light">Logout</Button>
                                        }
                                    </Drawer.ToC>
                                </Drawer.Overflow>
                            </Collapse>
                        </Drawer>
                    </Col>
                    <Col xs={ 12 } md={ 9 } lg={ 10 }>
                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/dashboardHome`}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <AdminRoute path={`${path}/add-product`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manage-products`}>
                                <AllProduct></AllProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manage-all-orders`}>
                                <ManageOrder></ManageOrder>
                            </AdminRoute>
                            <AdminRoute path={`${path}/add-admin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <Route exact path={`${path}/my-orders`}>
                                <MyOrder></MyOrder>
                            </Route>
                            <Route exact path={`${path}/payment`}>
                                <Pay></Pay>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;