/**
 * Created by liutongtong on 3/25/16.
 */

var echart = echarts.init(document.getElementById('domestic-subchart'), 'shine');

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

var getCompositionData = function(i) {
    var query = getRequest();
    if ('region' in query) {
        var res = convertDomesticCompositionData(query['region']);
        return res[i];
    } else {
        return [];
    }
};

var getImplementData = function() {
    var query = getRequest();
    if ('region' in query) {
        return convertImplementData(query['region']);
    } else {
        return 0;
    }
};

option = {
    backgroundColor: config.tooltip.backgroundColor,
    legend: {
        x : 'center',
        y : 'bottom',
        data: getCompositionData(0)
    },
    series : [
        {
            name: 'Sectoral Coverage',
            type: 'pie',
            radius : '60%',
            center : ['25%', '40%'],
            itemStyle: {
                normal: {
                    opacity: 0.8
                }
            },
            data: getCompositionData(1)
        }, {
            name: 'Implementation',
            type: 'pie',
            radius : ['40%', '60%'],
            center : ['75%', '40%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false
                }
            },
            data: getImplementData()
        }
    ]
};

echart.setOption(option);
