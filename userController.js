var Mozscape = require('mozscape').Mozscape;

var moz = new Mozscape('mozscape-36e33ccbf8', '76f28509ffc0917e942e547ec04557f4');


module.exports = {
  getMetrics: function(req, res) {

    console.log("I got to the controller");
    moz.urlMetrics(url, ['title', 'url', 'links'] , function(err, res) {
      if (err) {
        console.log(err);
        return;
      }

      console.log("This is the res", res);
    });
  }
}
