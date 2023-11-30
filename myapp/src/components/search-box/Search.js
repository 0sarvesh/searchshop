import { Component } from "react";

class Search extends Component{
    render(){
        const {change} =this.props
        return(
            <div className="header">
         <div className="text">SHOPPER</div>
        <input
          className="search"
          type="search"
          placeholder="Search Products Here"
          onChange={change}
        ></input>
            
            </div>
        )
    }
}
export default Search