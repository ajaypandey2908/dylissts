import React from 'react'

function ArrayList(){

    const fruits = ["Apple","Banana","Mango","Grapes","Orange"]

    return(
        <>
        <div>
           {fruits.map(x=><li key={x}>{x}</li>)}
        </div>
        </>
    )
}
export default ArrayList