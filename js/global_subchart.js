/**
 * Created by liutongtong on 3/25/16.
 */

var echart = echarts.init(document.getElementById('global-subchart'), 'shine');

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
            name: 'Carbon Emission Coverage',
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
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            data: getData()
        }
    ]
};

echart.setOption(option);
