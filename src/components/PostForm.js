import React, { Component } from 'react'
import {connect} from 'react-redux';

 class PostForm extends Component {
    handleSubmit=(e)=>{
        e.preventDefault();
        const title=this.getTitle.value;
        const description=this.getDesc.value;
        const data={
            id: new Date(),
            title,
            description,
            editing:false
        }
        //console.log(data)
        this.props.dispatch({
            type:'ADD_POST',
            data
        })
        this.getTitle.value='';
        this.getDesc.value='';

    }
  render() {
    return (
      <div>
        <h1>Post Form</h1>
        <form onSubmit={this.handleSubmit}>
            <input required type="text" placeholder="title" ref={(input)=>this.getTitle=input}/>
            <br/>
            <textarea required rows="5" cols="28" placeholder="description" ref={(input)=>this.getDesc=input}/>
            <br/>
            <button>Post</button>
        </form>
      </div>
    )
  }
}


export default connect()(PostForm)
