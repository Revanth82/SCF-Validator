import React, {Component} from 'react';
//import axios from 'axios';
//import  './Scf.xml';
import './Scf1.xml'
import  'react-xml-parser';
//import { xml2json } from 'xml-js';




class Sample2 extends Component {
constructor(props){
super(props);
this.state={val4:[],
val5:{},

}

}

componentDidMount(){
this.getDetails(this.props.selectedCustomer);
}

componentDidUpdate(prevProps) {

    
    if (this.props.selectedCustomer !== prevProps.selectedCustomer) {
      this.getDetails(this.props.selectedCustomer)
    }
  }

getDetails(id)

{
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

this.setState({val4:xml.getElementsByTagName('cube')[id]})
this.setState({val5:this.state.val4})


console.log(this.state.val4);
//console.log(xml.getElementsByTagName('Dimension'))
//console.log(this.state.val5);

})

}


 

render()
{
    if (!this.state.val5)
    return (<p>Please select the Cube</p>)
  return(
   

<div>

<p>1.Primary Key :{this.state.val5.children && this.state.val5.children.map((res)=><p>{res.name==='PrimaryKey'?
    
    res.attributes.name:""}</p>)}</p>
 
 <p>2.Dimension :{this.state.val5.children && this.state.val5.children.map((res)=><p>{res.name==='Dimension'?
    
 res.attributes.name:""}</p>)}</p>

<p>3.Measure: {this.state.val5.children && this.state.val5.children.map((res)=><p>{res.name==='Measure'?
    
    res.attributes.name:""}</p>)}</p>



</div>
)
}

}

export default Sample2;
