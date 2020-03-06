import React, {Component} from 'react';
//import axios from 'axios';
//import  './Scf.xml';
import './Scf1.xml'
import  'react-xml-parser';
//import { xml2json } from 'xml-js';
import Sample2 from './Sample2.js';




class Sample1 extends Component {
constructor(props){
super(props);
this.state={val:[],
val1:[],
val2:[],
}
this.files=null;


}

componentDidMount()
{

 let scs=require('./Scf1.xml')

fetch(scs)

.then(res=>{return res.text()}
)
.then(data=> {
//let parser=new DOMParser();
let XMLParser= require('react-xml-parser');
//let xml=parser.parseFromString(data,'text/xml')
let str=data.replace(/<!--.*?-->/sg, "");
let xml = new XMLParser().parseFromString(str);

this.setState({val:xml.getElementsByTagName('cube')})


//console.log(xml.getElementsByTagName('Dimension'))
console.log(this.state.val);

})

}

handleclick=(e)=>

{
  this.setState({val1:e.target.value})
}



render()
{
  console.log('sample1');
  return(

    
<div>


CUBE => 
  <form >
<select onClick={this.handleclick}>
  <option>select</option>
{this.state.val.map((result,index)=><option value={index} key={result.attributes.name}>{result.attributes.name}</option>)}
</select>
</form>





<Sample2 selectedCustomer={this.state.val1}/>
 
</div>


)
}

}

export default Sample1;
