function Demo2()
{


    var parseString = require('xml2js').parseString;
    var xml = require('./Scf.xml')
    parseString(xml, function (err, result) {
        console.log(result);
    });
    
    return 'xml2js'

}

export default Demo2;