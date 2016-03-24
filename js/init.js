/**
 * Created by liutongtong on 3/23/16.
 */

var chart = $('#map');
chart.css('height', $(window).height());
var echart = echarts.init(document.getElementById('map'));
$(document).ready(function() {
    $(window).resize(function() {
        chart.css('height', $(window).height());
        echart.resize();
    });
});
