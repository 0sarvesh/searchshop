import { Component } from "react";
class Cardlist extends Component{
    render(){
        const {products } =this.props
        return(
            <div className="container">
         
              {
                products.map((e)=>{
                    return(
                        <div key={e.id} >
                            
                            
                           
                           <div  className="columns">
                           <img alt="no image" src={e.images[1]} className="img"></img>
                        
                           <div className="title">{e.title}</div> <br></br>
                           <>{e.description}</>



                           </div>
                            
                            
                            
                            </div >
                    )
                })
              }

            </div>
        )
    }
}
export default Cardlist