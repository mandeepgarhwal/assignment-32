import React from 'react'
// import teachers  from '../App'

export default function PromoteFunc(props) {
//    console.log(props.l)
  return (
    <button className='btn btn-primary' onClick={() => props.promote2(props.l)}>Promote</button>
  )
}
