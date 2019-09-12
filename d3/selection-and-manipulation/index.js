// Selecting the first h1 tag and changing its color to red
d3.select('h1').style('color','red')
.text('Updated H1 text '); // Changed the text

// Adding a Paragraph tag with text
d3.select('body')
.append('p')
.text('Add Paragraph');

d3.select('body')
.append('p')
.text('Add Second Paragraph');

d3.select('body')
.append('p')
.text('Add Third Paragraph');

// Selects all the p tags and changes its color to orange
d3.selectAll('p').style('color','orange');
