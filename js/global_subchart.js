/**
 * Created by liutongtong on 3/25/16.
 */

var echart = echarts.init(document.getElementById('global-subchart'), 'shine');
var config = {
    textStyle: {
        fontFamily: 'HelveticaNeue, Helvetica, Arial, Hiragino Sans GB, sans-serif'
    },
    backgroundColor: '#ffffff',
    padding: 20,
    tooltip: {
        padding: 10,
        backgroundColor: '#ffffff',
        borderColor: '#777',
        borderWidth: 1
    }
};

var getRequest = function() {
    var url = location.search;
    var res = {};
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; ++i) {
            res[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return res;
};

var getData = function() {
    var query = getRequest();
    if ('region' in query) {
        return convertGlobalCompostionData(query['region']);
    } else {
        return [];
    }
};

option = {
    backgroundColor: config.tooltip.backgroundColor,
    color: ['#2b821d','#0098d9','#e6b600','#c12e34'],
    series : [
        {
            name: 'Sectoral Coverage',
            type: 'pie',
            radius : '70%',
            center : ['50%', '50%'],
            label: {
                normal: {
                    formatter: '{b}: {d}%',
                    textStyle: {
                        fontSize: 14
                    },
                    show: true
                }
            },
            data: getData()
        }
    ]
};

echart.setOption(option);
