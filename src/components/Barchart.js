// import React from 'react'
import * as d3 from 'd3';

const Barchart = () => {

    var w = 800,
    h = 300,
    maxValue = 100;
    var dataset = [ 5, 10, 13, 19, 21, 24, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
    
    var svg = d3.select('svg')
            .attr('width', w)
            .attr('height', h);
    
    var xScale = d3.scaleBand()
               .domain(d3.range(dataset.length))
               .rangeRound([0, w])
               .paddingInner(0.05);
    var yScale = d3.scaleLinear()
               .domain([0, d3.max(dataset)])
               .range([0, h]);
    
    svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', function(d, i) {
       return xScale(i);
    })
    .attr('y', function(d) {
       return h - yScale(d);
    })
    .attr('width', xScale.bandwidth())
    .attr('height', function(d) {
       return yScale(d);
    })
    .attr('fill', function(d) {
       return 'rgb(50, 150, ' + Math.round(d * 10) + ')';
    });
    
    svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d) {
       return d;
    })
    .attr('x', function(d, i) {
       return xScale(i) + xScale.bandwidth() / 2;
    })
    .attr('y', function(d) {
       return d > 5 ? (h - yScale(d) + 14) : (h - yScale(d) - 6);
    })
    .attr('fill', function(d){
       return d > 5 ? '#fff' : '#000';
    });
    
    d3.select('button')
    .on('click', function(){
      var newDataset= [];
      for(var i = 0; i < dataset.length; i++) {
          newDataset.push(Math.floor(Math.random() * maxValue));
      }
      yScale.domain([0, d3.max(newDataset)])
    
      svg.selectAll('rect')
         .data(newDataset)
         .transition()
         .delay(function(d, i){
             return i / newDataset.length * 700;
         })
         .duration(300)
         .ease(d3.easeLinear)
         .attr('y', function(d){
             return h - yScale(d);
         })
         .attr('height', function(d){
             return yScale(d);
         })
         .attr('fill', function(d) {
             return 'rgb(50, 150, ' + Math.round(d * 10) + ')';
         });
    
      svg.selectAll('text')
         .data(newDataset)
         .transition()
         .delay(function(d, i){
             return i / dataset.length * 700;
         })
         .duration(300)
         .ease(d3.easeLinear)
         .text(function(d) {
             return d;
         })
         .attr('y', function(d) {
             return d > 5 ? (h - yScale(d) + 14) : (h - yScale(d) - 6);
         })
         .attr('fill', function(d){
             return d > 5 ? '#fff' : '#000';
         });
      });
}

export default Barchart