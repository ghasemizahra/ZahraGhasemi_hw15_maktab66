import React, { Component } from 'react'
import Todoitem from './Todoitem';

export default class Todolist extends Component {
    
  render() {
      const{list,handleDelete}=this.props
    return (
        <ul className='list-group list-container bg-warning my-5'>
           <h3 className='text-capitalize text-center text-white'>لیست کارها</h3>
            {list.map(item=>{return(
              <Todoitem key={item.id} 
                title={item.text}
                handleDelete={()=>handleDelete(item.id)}

              />
            )})}
         </ul>
    )
  }
}