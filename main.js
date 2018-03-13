// Results array
var myarr = [];

// jQuery used for neater looking GET requests
// Global GET Request
$.get('https://example.url/global', (data) => {

  // add source attribute to each JSON object assuming it is
  // an array of objects
  data.forEach( (e) => {
    e.source = "global";
  })

  // push the results to the array
  for (var i = 0; i < data.length; i++) {
    myarr.push(data[i]);
  }

  // local GET request
  $.get('https://example.url/local', (data2) => {

  // add source attribute to each JSON object assuming it is
  // push the results to the array
  data2.forEach( (e) => {
    e.source = "local";
  })

  // push the results to the array
  for (var i = 0; i < data2.length; i++) {
    myarr.push(data2[i]);
  }

  // sort the array using compare function
   myarr.sort((a,b)=> b.timestamp - a.timestamp);

  })  

})

