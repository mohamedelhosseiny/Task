// Results array
var resultArr = [
  {
    "timestamp": 150892000,
    "headline": "New version of the product announced.",
    "link": "http://example.url/new_version",
    "authorName": "Paul Abbot",
    "authorImageUrl": "http://example.url/authors/abbot.jpg"
  },
  {
    "timestamp": 150892600,
    "headline": "Even newer version of the product announced.",
    "link": "http://example.url/newer_version",
    "authorName": "Lisa Halliday",
    "authorImageUrl": "http://example.url/authors/halliday.jpg"
  }
];


// jQuery used for neater looking GET requests
// Global GET Request
$.get('https://example.url/global', (data) => {

  // Parse JSON object
  var globalData = JSON.parse(data);

  // add source attribute to each JSON object assuming it is
  // an array of objects
  globalData.forEach( (e) => {
    e.source = "global";
  })

  // push the results to the array
  for (var i = 0; i < globalData.length; i++) {
    resultArr.push(globalData[i]);
  }

  // local GET request
  $.get('https://example.url/local', (data2) => {

  // Parse JSON object
  var localData = JSON.parse(data2);

  // add source attribute to each JSON object assuming it is
  // push the results to the array
  localData.forEach( (e) => {
    e.source = "local";
  })

  // push the results to the array
  for (var i = 0; i < localData.length; i++) {
    resultArr.push(localData[i]);
  }

  // sort the array using compare function
   resultArr.sort((a,b)=> b.timestamp - a.timestamp);

  })  

})

