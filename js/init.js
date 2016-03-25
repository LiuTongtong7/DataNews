/**
 * Created by liutongtong on 3/23/16.
 */

var chart = $('#main-chart');
chart.css('height', $(window).height());
var echart = echarts.init(document.getElementById('main-chart'), 'shine');
$(document).ready(function() {
    $(window).resize(function() {
        chart.css('height', $(window).height());
        echart.resize();
    });
});
