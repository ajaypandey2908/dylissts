import React from 'react'

function indexList(){

    const colors=["White","Pink","Green","Red","Black"]

    return(
        <div>
            {colors.map((items,index) => <li key={index}>{items}</li>)}
        </div>
    )
}
export default indexList