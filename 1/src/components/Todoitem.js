import React, { Component } from 'react'

export default class Todoitem extends Component {
  render() {
        
        return (
            <li className='list-group-item   d-flex justify-content-between my-2 '>
               <h6>{this.props.title}</h6>
               <div className='todo-icon'>
               
                 <i className='fa-solid text-info fa-pen'></i>
                
                <span className='mx-2' onClick={this.props.handleDelete}> 
                 <i className='fa-solid text-info fa-trash'></i>
                </span>
               
            </div>
         </li>
        )
    }
}
