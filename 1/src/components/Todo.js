import React, { Component } from 'react'

import Todoform from './Todoform'
import Todolist from './Todolist'

export default class Todo extends Component {
    constructor(props){
      super(props)
    {
       this.state = {
            value: '',
            list: [],
           
        }   
    } 
    }
    
    handleInput=(event)=>{
      // console.log(event.target.value);
        this.setState({value: event.targeventt.value})
    }
    
    handleSubmit=(e)=>{
      e.preventDefault()
      this.setState({list: [{ "id": Math.floor(Math.random()*1000), "todo": this.state.value}, ...this.state.list], value: ' '})
    }
    
    handleDelete=(id)=>{
      const filteredItems=this.state.list.filter(item=>item.id!==id)
      this.setState({list:filteredItems})
    }
    render() {
      console.log(this.state.item);
       return (
          <div className='container'>
              <div className='row'>
                    <div className='col-10 mx-auto mt-5 '>
                      <h3 className='text-capitalize text-center text-danger'> فهرست کارهای روزانه</h3>
                    </div>
                    <Todoform
                      value={this.state.value}
                      handleInput={this.handleInput}
                      handleSubmit={this.handleSubmit}
                      
                    />
                    <Todolist
                      item={this.state.item}
                      handleDelete={this.handleDelete}
                    />
                </div>
            </div>
        )
    }
    }
