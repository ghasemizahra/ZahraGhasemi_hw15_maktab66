import React, { Component } from 'react'
import Todoitem from './Todoitem'
export default class Todolist extends Component {
  render() {
    const{items,handleDelete}=this.props
    console.log(items);
    return (
      
      <ul className='list-group list-container  my-5'>
         <h3 className='text-capitalize text-center text-white'>لیست کارها</h3>
          {items.map(item=>{return(
            <Todoitem key={item.id} 
              title={item.todo}
              handleDelete={()=>handleDelete(item.id)}

            />
          )})}
       </ul>
      
    )
  }
}
