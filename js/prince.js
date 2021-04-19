var Prince = require('prince');
var util = require('utils');
function Prince(){
    Prince()
				.inputs("../demo.html")
				.output("test.pdf")
				.execute()
				.then(function () {
					console.log("OK: done");
				}, function (error) {
					console.log("ERROR: ", util.inspect(error));
				})
}