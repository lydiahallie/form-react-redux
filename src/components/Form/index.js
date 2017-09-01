import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email:"",
      message:""
    };
  }

  onChangeHandler = (key, value) => {
    this.setState({ [key]: value });
  }

  render() {
    return (
      <div className="Form">
        <Input label="name" onChangeHandler={this.onChangeHandler} value={this.state.name} />
        <Input label="email" onChangeHandler={this.onChangeHandler} value={this.state.email} />
        <Input label="message" onChangeHandler={this.onChangeHandler} value={this.state.message} />
        <Button formInfo={this.state} />
      </div>
    );
  }
}

export default Form;
