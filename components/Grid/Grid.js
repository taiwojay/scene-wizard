import React from 'react';
import { Link } from 'react-router-dom';

import './Grid.css'



    
    
const Grid = () =>{
      return(
            <div className='containerg pointer'>
                       
                        <div className='boxg series'> 
                        <Link to={'/categories/series'} className='gridtextg'> Series </Link> 
                        </div>
                       
                        <div className='boxg animations'>
                        <Link to={'/categories/animations' } className='gridtextg'>Animations  </Link>
                        </div>                     
                        
                        <div className='boxg movies'>
                        <Link to={'/categories/movies'} className='gridtextg'>Movies</Link>
                        </div>
                        
                        <div className='boxg marveldc'>
                        <Link to={'/categories/marveldc'} className='gridtextg' > Marvel/DC </Link>
                        </div>
                    

                        <div className='boxg games'>
                        <Link to={'/categories/games'} className='gridtextg'>Games </Link>
                        </div>     
                       
                        
            </div>
      );
     } 

export default Grid;