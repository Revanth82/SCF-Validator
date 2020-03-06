import React, {Component} from 'react';
//import axios from 'axios';
//import  './Scf.xml';
import './Scf1.xml'
import  'react-xml-parser';
//import { xml2json } from 'xml-js';





class Sample extends Component {
constructor(){
super();
this.state={val:[],
val1:[],
val2:[]}

}

componentDidMount(){

let scs= require('./Scf1.xml')
fetch(scs)
.then(res=>{return res.text()}
)
.then(data=> {
//let parser=new DOMParser();
let XMLParser= require('react-xml-parser');
//let xml=parser.parseFromString(data,'text/xml')
let str=data.replace(/<!--.*?-->/sg, "");
let xml = new XMLParser().parseFromString(str);

this.setState({val:xml.getElementsByTagName('cube')[3]})


//console.log(xml.getElementsByTagName('Dimension'))
console.log(this.state.val);

})

}

handleclick=(event)=>
{
  this.setState({val1: event.target.value})
  
  //this.setState({val2:this.state.val1[0].name})
  
  
}

 

render()
{
  return(
<div>
{/* CUBE => 
  <form >
<select onClick={this.handleclick}>
  <option>select</option>
{this.state.val.map((result,index)=><option value={index} key={result.attributes.name}>{result.attributes.name}</option>)}
</select>

</form>
 */}

{this.state.val && this.state.val.children && this.state.val.children.map(res=>res.name)}
 

</div>
)
}

}

export default Sample;
