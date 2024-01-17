import { Component } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
export default class CCCalc extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          number1: 0,
          number2: 0,
          result: 0
        };
      }
    
      chgNumber1 = (e) => {
        this.setState({number1:  Number(e.target.value)});
      }
      chgNumber2 = (e) => {
        this.setState({number2:  Number(e.target.value)});
      }

      addbtn=()=>{
        this.setState({result:this.state.number1+this.state.number2});
      }

      minusbtn=()=>{
        this.setState({result:this.state.number1-this.state.number2});
      }
      multbtn=()=>{
        this.setState({result:this.state.number1*this.state.number2});
      }
      dividbtn=()=>{
        this.setState({result:this.state.number1/this.state.number2});
      }


    render(){
        return(
            <div>
<InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">First Number</InputGroup.Text>
          <Form.Control
            placeholder="enter a number"
            aria-label="number2"
            aria-describedby="basic-addon1"
            onChange={this.chgNumber1}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Second Number</InputGroup.Text>
          <Form.Control
            placeholder="enter a number"
            aria-label="number2"
            aria-describedby="basic-addon1"
            onChange={this.chgNumber2}
          />
        </InputGroup>

        <Button onClick={this.addbtn} variant="outline-success"><svg id="i-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M16 2 L16 30 M2 16 L30 16" />
</svg></Button>
        
        <Button onClick={this.minusbtn} variant="outline-success"><svg id="i-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M2 16 L30 16" />
</svg></Button> <br />
        
        <Button onClick={this.multbtn} variant="outline-success"><svg id="i-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M2 30 L30 2 M30 30 L2 2" />
</svg></Button> 
        
        <Button onClick={this.dividbtn} variant="outline-success"><svg id="i-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <circle cx="16" cy="7" r="2" />
    <circle cx="16" cy="16" r="2" />
    <circle cx="16" cy="25" r="2" />
</svg></Button> <br />
        = {this.state.result }
            </div>
            
        

        
        )
    }
}