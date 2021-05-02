import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BellIcon from 'react-bell-icon';
import Book from './Book';
import {Button} from 'react-bootstrap';
import ProductstylingController from './ProductstylingController'
class ListAllBooks extends React.Component {


    state = {
isEditing:false,
        books: [],
        editMode :false
    }
    toggleEditing = () =>{
        this.setState({

            isEditing:!this.state.isEditing
        })
    }
    componentDidMount() {
        Book.getAllBooks()
            .then(data => {
                this.setState({
                    books: data.data.books
                });
            });
    }  
    editBlogSubmitHandler = event => {      
       event.preventDefault();      
    }
    Update = id =>{
        console.log(id);  
        let updatedBlogs = [...this.state.books].filter(i => i.id !== id);
        this.setState({books: updatedBlogs});     
    }
    render() {
const { book } =this.props;
if(this.state.isEditing){
    return <li>
        <form onSubmit={this.editBlogSubmitHandler}>
        {
                    this.state.books.map(book =>
                 <div>            
<div className="CreateBook">
<div className="container">
  <div className="row">
    <div className="col-md-8 m-auto">
      <h1 className="display-6 text-center"> Edit Blog</h1>    
      {/* <div className='form-group'>
          <input type='text' placeholder='id ' name='id' className='form-control' defaultValue={book._id} />
        </div> */}
        <div className='form-group'>
          <input type='text' placeholder='Title ' name='title' className='form-control' defaultValue={book.title} />
        </div>
        <br />
        <div className='form-group'>
          <input type='text' placeholder='Description' name='description' className='form-control' defaultValue={book.description} />
        </div>
        <p>Image Upload:</p>
        <p>
          <input type='file' name='image'  />
          <img src={this.state.file} />
        </p>
        <button type="submit" onClick={()=>this.Update(book._id)} className="btn btn-outline-warning btn-block mt-4" background-color=" #4CAF50" >Update Blog</button>
        <button onClick={this.toggleEditing}>Cancel</button>
    </div>
  </div>
</div>
</div>
            </div> 
                    )}
        </form>
    </li>
}
        return (

            <div className="container">
                <div className="coloumn">

        <h1>Blog List</h1>
        </div>
                <div className="row" >

                {
                    this.state.books.map(book =>
                      
                     
                        <div>
                            <ProductstylingController  booksObject={book} title={book.title} description={book.description} imagePath={book.imagePath} />
                            <Link to={`/edit/${this.state.book._id}`} class="btn btn-success">Edit</Link>&nbsp;
                        <button variant="info"  onClick={this.toggleEditing}>Edit</button>
                        </div>
                        
                    )}
                    </div>
                   
                    <br></br>
                  <div> <button id="back" >< Link to="/">Back</ Link></button></div> 
            </div>




        );
    }
}



export default ListAllBooks;
