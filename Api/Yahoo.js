var query = encodeURI('select * from weather.forecast where location="98101"');
var url = "https://query.yahooapis.com/v1/public/yql?q=" + query+"&format=json"; 
startWebRequest(url, function(status, type, content) {
  console.log(status);
  console.log(type);
  console.log(content);
});
