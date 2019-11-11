import React from 'react';
import casa from '../img/homeIcon.png'


class Footer extends React.Component {
   render () {
       return (
         <div className="container">
           <div className="fixed-bottom center">
           <a href="/container" > <img className="responsive-img imagef" src={casa}></img> </a>
         </div>
         </div>
       )
      }
   }

   export default Footer
