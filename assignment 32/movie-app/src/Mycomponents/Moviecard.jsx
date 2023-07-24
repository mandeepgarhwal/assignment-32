import React from 'react'
import {useImage} from 'react-image'


// function MyCardImage(imageurl) {
//     const {src} = useImage({
//       srcList: {imageurl},
//     })
  
//     return <img src={src} className="card-img-top" alt="..." />
//   }

export default function Moviecard(props) {
    console.log(props.names)
    // function MyCardImage(imageurl) {
    //   const {src} = useImage({
    //     srcList: {imageurl},
    //   })
    
    //   return <img src={src} className="card-img-top" alt="..." />
    // }
    // let image1 = MyCardImage(props.names[0].imgSrc)

  return (
    <div className="card-group" style={{display : "flex", padding : "40px"} }>
    <div className="card" style={{display : "flex", flexDirection : "column", padding : "30px"} }>

      <img src= {props.names[0].imgSrc} className="card-img-top" alt="..." style={{width :"400px", height : "400px"  }}/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign : "center"}}>{props.names[0].title}</h5>
        <p className="card-text" style={{textAlign : "center"}}>{props.names[0].text}</p>
        {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
        <a href="#" class="btn btn-primary">Buy tickets</a>
      </div>
    </div>
    <div className="card" style={{display : "flex", flexDirection : "column", padding : "30px"} }>
 
      <img src={props.names[1].imgSrc} className="card-img-top" alt="..." style={{width :"400px", height : "400px"  }}/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign : "center"}}>{props.names[1].title}</h5>
        <p className="card-text" style={{textAlign : "center"}}>{props.names[1].text}</p>
        {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
        <a href="#" class="btn btn-primary">Buy tickets</a>
      </div>
    </div>
    <div className="card" style={{display : "flex", flexDirection : "column", padding : "30px"} }>

      <img src={props.names[2].imgSrc} className="card-img-top" alt="..." style={{width :"400px", height : "400px"  }}/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign : "center"}}>{props.names[2].title}</h5>
        <p className="card-text" style={{textAlign : "center"}}>{props.names[2].text}</p>
        {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
        <a href="#" class="btn btn-primary">Buy tickets</a>
      </div>
    </div>
  </div>
 )
}
