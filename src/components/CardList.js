import React from 'react';
import Card from './Card';
import '../containers/styles.css';


const CardList = ({robots})=>{
    return(
            <div>
                {
                    robots.map((user, i) => {
                        return(
                                    <Card
                                    key={i}
                                    id={robots[i].id}
                                    name={robots[i].first_name}
                                    lname={robots[i].last_name}
                                    email={robots[i].email}
                                    />
                            );
                    })
                }

                <br></br><br></br>
                
                <b><p className='copy' >Copyright &copy; Nidhi Mathur</p></b>
            </div>
        );
}

export default CardList;
