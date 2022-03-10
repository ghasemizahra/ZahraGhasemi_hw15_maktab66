import React, { Component } from 'react'
import { Button, Form } from "react-bootstrap";
export default class Todoform extends Component {
  render() {
        return (
          <div className=' form-container '>
              <Form onSubmit={this.props.handleSubmit} className=" my-5 d-flex align-items-center ">
                  <Form.Group  className="flex-grow-1" >
                      <Form.Control onChange={this.props.handleChange} 
                          type="text " 
                          placeholder='اضافه کردن کار جدید' 
                          value={this.props.value}
                          variant=".text-white"
                        />
                    </Form.Group>  
                    <Button type="submit"
                      className='fw-bold px-5 mx-1 '
                      variant="outline-light " 
                      disabled={this.props.value?false:true}
                    >اضافه کردن</Button>
                </Form>
        
            </div>
        )
    }
}    
