import React, {Component} from 'react'
import Staff from './Staff'
import staffdata from "../staffdata"
import Title from "./Title"

export default class Stafflist extends Component {


    
    render()
    {   const staffs = staffdata.map(staff => {
            let id = staff.sys.id;
            let tempStaff = {...staff.fields, id};
            return tempStaff;
        })

        return (
            <>
                <section className="staffslist">
                    <Title title="Hotel Staffs"/>
                    <div className="staffslist-center">
                        {staffs.map(staff => {
                            return <Staff key={staff.id} staff={staff}/>
                        })}
                    </div>
                </section>
            </>
        )   
    }
}
