// let mouseCursor = document.querySelector('.cursor');

// const cursor=(e)=>{
//     console.log(e)
//   if (mouseCursor){
//     mouseCursor.style.top = e.pageY + 'px' 
//     mouseCursor.style.left = e.pageX + 'px'
//   }
// }
// window.addEventListener('mousemove',cursor);
import { React, useEffect }from 'react';

 function Cursor(){
     useEffect(()=>{
    let mouseCursor = document.querySelector('.cursor');

const cursor=(e)=>{
  if (mouseCursor){
    mouseCursor.style.top = e.pageY + 'px' 
    mouseCursor.style.left = e.pageX + 'px'
  }
}

window.addEventListener('mousemove', cursor);
},[])
     return(
         <div className = 'cursor'>
             <div></div>
         </div>
     )
 }

 export default Cursor;