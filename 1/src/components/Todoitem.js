import React, { Component } from 'react'

export default class Todoitem extends Component {
  render() {
      const{todo,handleDelete}=this.props
    return (
        <li className='list-group-item bg-success todo-container text-capitalize d-flex justify-content-between my-2 bg-list-bg'>
           <h6>{todo}</h6>
           <div className='todo-icon'>
                <button onClick={handleDelete}/> 
               
            </div>
         </li>
    )
  }
}
