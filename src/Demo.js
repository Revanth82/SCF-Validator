//import react from 'react';
import  './Scf.xml';

import  'react-xml-parser';

function Demo()
{

    let str = ` <?xml version='1.0' encoding='utf-8'?>
    <Library>
    <Books count='1'>
    <!-- Dimension name="LAST_TX_DATE" title="Last Transaction Date" / -->
        <Book id='1'>
            <Name>Me Before You</Name>
            <Author>Jojo Moyes</Author>
        </Book>
    </Books>
    <Booking count='1'>
        <Books id='1'>
            <Name>Me Before You</Name>
            <Author>Jojo Moyes</Author>
        </Books>
    </Booking>
    </Library>;
`
    let str1 =str.replace(/<!--.*?-->/sg, "");
   //console.log(str1);


var XMLParser = require('react-xml-parser');
var xml = new XMLParser().parseFromString(str1);    // Assume xmlText contains the example XML
console.log(xml);
//console.log(xml.getElementsByTagName('Name'));
    return 's';


}

export default Demo; 