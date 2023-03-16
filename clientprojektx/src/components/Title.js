import React, { Component } from 'react';
import './ListState.css';

class Title extends Component{
  componentDidMount= () =>{
    fetch('http://localhost:8000/datatitle')
    .then(response => response.json())
    .then(json =>{
         this.setState({title: json.title,
                    whomade: json.whomade});
     
    })
  }
  
    static defaultProps={
      title:'',
      whomade:''
  
    }
    state={
     title:this.props.title,
     whomade:this.props.whomade
      

    }
  
   
   
    render(){
      const{title,whomade}=this.state
      

      return(
        <div className="flexdiv">
            <h2>{title}</h2>
            <h3>{whomade}</h3>
         </div>
         )}
  }
   
  export default Title