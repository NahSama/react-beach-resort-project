import React from 'react'

export default function Staff({staff}) {

    const {name, role, avatar, quote } = staff;

    return (
        <article className="staff">
            <div className="img-container">
                <img src={avatar} alr="staff"/>
                <div className="role-top">
                    <h6>{role}</h6>
                </div>
            </div>
            <p className="staff-info">{name}</p>
        </article>
    )
}
