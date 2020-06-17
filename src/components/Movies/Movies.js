import React from 'react';
import './Movies.css'
import './seventhson.jpg'

const Movies = () =>{
 return(
        <div>
        <h1>Let's go to the Movies</h1>
              <div className='table'>
                     <div className='grid-wrapper'> 

                       <div className='box zone pointer seventhson'>
                       <div className='gridtext'>Seventh Son</div>
                       </div>

                       <div className='onceinholly box zone pointer'>
                       <div className='gridtext'>Once Upon A Time In Hollywood</div>
                       </div>

                       <div className='mazerunner box zone pointer'>
                       <div className='gridtext'>The Maze Runner</div>
                       </div>
                       
                       <div>
                              
                       </div>

                     </div>
              </div>
        </div>
 );
} 

export default Movies;