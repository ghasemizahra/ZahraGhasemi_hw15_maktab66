import React, { Component } from 'react'
import Todoform from './Todoform'
import Todolist from './Todolist'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state={
            value: '',
            list: [],
             
        }
    }  
    handleChange=(event)=>{
     this.setState({value: event.target.value})
    }
      
    handleSubmit=(e)=>{
        e.preventDefault()
        this.setState({list: [{ "id": Math.floor(Math.random()*1000), "todo": this.state.value}, ...this.state.list], value: ' '})
    }
      
    handleDelete=(id)=>{
      const items=this.state.list.filter(item=>item.id!==id)
      this.setState({list:items})
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mx-auto mt-5  '>
                        <h3 className='text-capitalize text-center text-white'> فهرست کارها</h3>
                    </div>
                    <Todoform
                        value={this.state.value}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        
                    />
                    <Todolist
                        items={this.state.list}
                        handleDelete={this.handleDelete}
                    />
                </div>
            </div>
        )
    }
}
