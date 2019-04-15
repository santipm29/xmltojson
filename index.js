
let fs = require('fs');
let parser = require('xml2js').parseString;
let options = {ignoreAttrs : true, explicitArray : false};

fs.readFile(__dirname + '/inputxml.xml','UTF-8',function(err, data) {
    parser(data, options ,function (err, result) {
        console.log(JSON.stringify(result));   
    });
});
