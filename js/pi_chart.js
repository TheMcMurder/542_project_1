var section = d3.select("#build_pi_chart")
var svg = section.append("svg")




var width = 400,
height = 400,
radius = Math.min(width, height) / 2;

// var data;

// data = [
// ["Camera", 1500],
// ["Xbox One", 100],
// ["Playstation 4", 0],
// ["Sony 4kTV", 5]    

// ]

data = d3.range(10).map(Math.random).sort(d3.descending);

// console.log(data)

var color = d3.scale.category20();

var arc = d3.svg.arc()
.outerRadius(radius - 10)
.innerRadius(radius - 70);

var pie = d3.layout.pie();

svg.attr("width", width)
.attr("height", height)
var group = svg.append("g")
// .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
// console.log(group)


var arcs = svg.selectAll("g.arc")
.data(pie(data))
.enter().append("g")
.attr("class", "arc");

arcs.append("path")
.attr("fill", function(d, i) { return color(i); })
// .attr("d", arc)

.transition()
.duration(1000)
.attrTween("d", tweenDonutChart)

arcs.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


function tweenDonutChart(b) {
  b.innerRadius = 0;
  var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
  return function(t) { return arc(i(t)); };
}