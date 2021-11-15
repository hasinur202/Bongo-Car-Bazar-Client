import React from 'react';

import person1 from '../../../images/members/member-1.jpg';
import person2 from '../../../images/members/member-2.jpg'
import person3 from '../../../images/members/member-3.jpg'
import person4 from '../../../images/members/member-4.jpg'
import Member from '../Member/Member';

const experts = [
    {
        img: person1,
        name: 'Walter White',
        expertize: 'Chief Executive Officer'
    },
    {
        img: person4,
        name: 'Sarah Jhonson',
        expertize: 'Information Executive'
    },
    {
        img: person3,
        name: 'William Anderson',
        expertize: 'Planning Manager'
    },
    {
        img: person2,
        name: 'Amanda Jepson',
        expertize: 'Booking Manager'
    },
]

const Members = () => {
    return (
        <section id="team" className="doctors section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                <h2>TEAM ACTIVITY</h2>
                <p>Our team always ready to help you to deliver your products.</p>
                </div>
                <div className="row">
                    {
                        experts.map(expert => <Member
                            key={expert.name}
                            expert={expert}
                        >
                        </Member>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Members;