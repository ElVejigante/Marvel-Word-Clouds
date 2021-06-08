var path="../Resources/Data/Marvel_US_ITTEM.csv"
var xpStrings
var xpArray=[]
var xpArrayCounts = {}
d3.csv(path).then(function(dFrame){
  //console.log(dFrame)
  xpArray=dFrame.map(strings => strings.EXPERIENCE)
  //console.log(xpArray)
  xpStrings=xpArray.join(',').toLowerCase().split(/[ .?!:;,*'"]/);
  xpStrings.forEach(xp => xpArrayCounts[xp] ? xpArrayCounts[xp]++ : xpArrayCounts[xp] = 1 );
  //console.log(xpArrayCounts)
  var width = 750,
     height = 550;
  d3.layout.cloud().size([width, height])
    .data.map(function(d) {
      return {text: d, size: 10 + Math.random() * 90};
  })
  var margin = { top: 10, right: 10, bottom: 10, left: 10 },
    width = 900 - margin.left - margin.right,
    height = 900 - margin.top - margin.bottom;
  var svg = d3.select("#d3-word-cloud").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");
  var layout = d3.layout.cloud()
    .size([width, height])
    .words(data.slice(0,slice).map(function (d) { return { text: d.Words, size: d.WordCount }; }))
    .padding(5)       
    .rotate(function () { return ~~(Math.random() * 2) * 90; })
    .fontSize(function (d) { return d.size; })      // font size of words
    .on("end", draw);
    layout.start();     
});
//     console.log(data.map(function (d) { return { text: d.Words, size: d.WordCount }; }))
//     var svg = d3.select("#d3-word-cloud").append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform",
//         "translate(" + margin.left + "," + margin.top + ")");
//     var layout = d3.layout.cloud()
//       .size([width, height])
//       .words(data.slice(0,slice).map(function (d) { return { text: d.Words, size: d.WordCount }; }))
//       .padding(5)        //space between words
//       .rotate(function () { return ~~(Math.random() * 2) * 90; })
//       .fontSize(function (d) { return d.size; })      // font size of words
//       .on("end", draw);
//     layout.start();
//     function draw(words) {
//       svg
//         .append("g")
//         .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
//         .selectAll("text")
//         .data(words)
//         .enter().append("text")
//         .style("font-size", function (d) { return d.size; })
//         .style("fill", "#69b3a2")
//         .attr("text-anchor", "middle")
//         .style("font-family", "Impact")
//         .attr("transform", function (d) {
//           return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
//         })
//         .text(function (d) { return d.text; });
//     }
//   }
// )}


// function init() {
//   marvelXPCloud("../Resources/Data/Marvel_US_ITTEM.csv",slice)
// };
// init();