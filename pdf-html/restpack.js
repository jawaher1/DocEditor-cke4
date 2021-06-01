var request = require('request');
var fs = require('fs');

request({
  url: 'https://restpack.io/api/html2pdf/v3/convert',
  method: 'POST',
  qs: {
    access_token: 'exvoq3nYIFkBpa3h45VxUNiKFxqVpvIoyUY1EOpbXUAECpND',
  },
  json: {
    html_data: `
<p style="text-align:center">&nbsp;</p>`
  },
  encoding: null // In order to receive a Buffer as response
}, function(err, resp, body) {
   
  if (err) {
    console.error(err);
    process.exit(-1);
  }


  fs.writeFile('out.pdf',  JSON.stringify(body), function() {
    console.log("PDF Saved.");
    console.log("PDF Url: " + body.mediaLink)
  })
})