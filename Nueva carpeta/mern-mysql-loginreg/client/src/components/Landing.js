import React, {Component} from 'react'
import Carrusel from './Carrusel'
import './index.css'

class Landing extends Component {
    render() {
        return (
            <div style={{"padding-top":"50px","padding-bottom":"30px"}}>

            
                <div className="container">
                    <div className="jumbotron bg-dark text-white mt-5">
                        <div className="col-sm-8 mx-auto">
                            <h1 className="text-center">Bienvenido</h1>
                                <Carrusel/>


                                
                        
                        </div>
                    
                    </div>            
                
                </div>

                 

            </div>
        )
    }
}

export default Landing