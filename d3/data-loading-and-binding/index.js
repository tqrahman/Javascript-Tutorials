// Creating some data

var dataset = [1,2,3,4,5];

d3.select('body')
  .selectAll('p')
  .data(dataset)
  .enter() // takes elements in data and perform operations
  .append('p') // appends a p tag for each element in dataset
  //.text('D3 is awesome!')
  .text(function(d){return d})
