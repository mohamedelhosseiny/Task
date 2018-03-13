var myarr = [];

$.get('https://jsonplaceholder.typicode.com/posts', (data) => {
  var sliced = data.slice(0,10);
  sliced.forEach( (e)=> {
    e.source = "local";
  }) 
  for (var i = 0; i < sliced.length; i++) {
    myarr.push(sliced[i]);
  }
})

