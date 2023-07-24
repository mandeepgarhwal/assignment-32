import React from 'react'

import PromoteFunc from './PromoteButton.jsx'



export default function NewRow(props) {

    console.log(props.k)
  return (

    <>

    <tr >
      <td scope="row">{props.index} </td>
      <td>{props.name}</td>
      <td>{props.name.length}</td>
      <td>
        {
        <PromoteFunc l = {props.k} promote2 ={props.callbackpromote}/>
        }
      </td>
      <td><button className='btn btn-primary' onClick={props.callbackreverse}>Reverse</button></td>
    </tr>
    
    </>
  )
}
