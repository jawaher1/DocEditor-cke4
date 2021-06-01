// URL
/*
global.btoa = (b) => Buffer.from(b).toString('base64')
const fs = require('fs');
const fetch = require('node-fetch')

fetch('https://api.pdfshift.io/v3/convert/pdf', {
    method: 'POST',
    headers: {
        Authorization: 'Basic ' + btoa('api:0d807060c3d24f98ae86019076671c60'),
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        source: 'https://www.seeyond-am.fr/fr/pro/gips/4503',
        landscape: false,
        use_print: false
    })
}).then(response => {
    response.body.pipe(fs.createWriteStream('test.pdf'))
})
*/


// html page

const pdfshift = require('pdfshift')('0d807060c3d24f98ae86019076671c60');
const fs = require('fs');

let data = fs.readFileSync('../demo.html', 'utf8');

pdfshift.convert( data,
{    sandbox: true,
   css: '../css/mystyles.css',
}).then(function (binary_file) {
   
    fs.writeFile('PDFshift-sandbox-result-test.pdf', binary_file, "binary", function () {})
}).catch(function({message, code, response, errors = null}) {})


