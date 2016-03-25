/**
 * Created by liutongtong on 3/23/16.
 */

var globalOption = {
    backgroundColor: config.backgroundColor,
    textStyle: config.textStyle,
    title: {
        text: config.title.text,
        subtext: config.title.global_subtext,
        left: 'center',
        top: 'top',
        textStyle: config.title.textStyle,
        subtextStyle: config.title.subtextStyle
    },
    tooltip : {
        padding: config.tooltip.padding,
        backgroundColor: config.tooltip.backgroundColor,
        borderColor: config.tooltip.borderColor,
        borderWidth: config.tooltip.borderWidth,
        textStyle: {
            color: '#333'
        },
        formatter: function(params) {
            if (params.seriesName == 'INDC Target') {
                if (params.data.value) {
                    return '<div style="border-bottom: 1px solid rgba(0,0,0,.7); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' + params.data.name + '</div>'
                        + params.seriesName + ': ' + params.data.value + '%<br>'
                        + 'Base year: ' + params.data.base;
                }
                else {
                    return '<div style="border-bottom: 1px solid rgba(0,0,0,.7); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' + params.data.name + '</div>'
                        + params.seriesName + ': Empty';
                }
            } else if (params.seriesName == 'GHG Emission') {
                var content = '<div style="border-bottom: 1px solid rgba(0,0,0,.7); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' + params.data.name + '</div>'
                    + params.seriesName + ': ' + params.data.value[2] + ' MtCO2e<br>';
                content += '<iframe frameborder="0" width="400" height="250" src="./global.html?region=' + params.data.name + '" scrolling="no">';
                return content;
            }
        }
    },
    visualMap: {
        min: 0,
        max: 100,
        text: ['%', 'INDC Target:'],
        realtime: false,
        calculable: true,
        seriesIndex: 0,
        // inRange: {
        //     color: ['#a2d4e6', '#1790cf']
        // },
        padding: [0, 0, config.padding, 0],
        orient: 'horizontal',
        top: 'bottom',
        left: 'center'
    },
    geo: {
        map: 'world',
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#d3d3d3',
                borderColor: '#ffffff'
            }
        }
    },
    series : [
        {
            name: 'INDC Target',
            type: 'map',
            mapType: 'world',
            roam: true,
            itemStyle:{
                normal: {
                    areaColor: '#d3d3d3',
                    borderColor: '#ffffff'
                },
                emphasis: {
                    areaColor: null,
                    borderColor: '#777',
                    borderWidth: 3
                }
            },
            data: convertINDCData(INDCData)
        },
        {
            name: 'GHG Emission',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertGlobalMarketData(GlobalMarketData),
            symbolSize: function (val) {
                return Math.sqrt(val[2]) * 1.5;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'left',
                    textStyle: {
                        fontSize: 14,
                        color: '#333333'
                    },
                    show: true
                }
            },
            // itemStyle: {
            //     normal: {
            //         color: '#444444'
            //     }
            // }
        }
    ]
};


var itemStyle = {
    opacity: 0.8,
    shadowBlur: 10,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: 'rgba(0, 0, 0, 0.5)'
};

var getSeries = function(namelist) {
    var res = [];
    for (var i = 0; i < namelist.length; ++i) {
        var seriesItem = {
            name: namelist[i],
            data: convertDomesticMarketData(DomesticMarketData, namelist[i]),
            type: 'scatter',
            itemStyle: itemStyle,
            symbolSize: function (val) {
                return Math.sqrt(val[2]) * 50;
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    show: true,
                    position: 'right',
                    textStyle: {
                        fontSize: 16,
                        color: '#333'
                    }
                }
            }
        };
        if (namelist[i] == 'Beijing') {
            seriesItem.label.normal.position = 'left';
        } else if (namelist[i] == 'Hubei') {
            seriesItem.label.normal.position = 'bottom';
        }
        res.push(seriesItem);
    }
    return res;
};

var domesticOption = {
    backgroundColor: config.backgroundColor,
    textStyle: config.textStyle,
    title: {
        text: config.title.text,
        subtext: config.title.domestic_subtext,
        left: 'center',
        top: 'top',
        textStyle: config.title.textStyle,
        subtextStyle: config.title.subtextStyle
    },
    legend: {
        top: 'bottom',
        data: DomesticMarketList,
        textStyle: {
            fontSize: 16
        },
        padding: config.padding
    },
    grid: {
        x: '25%',
        x2: '25%',
        y: '25%',
        y2: '20%'
    },
    tooltip: {
        padding: config.tooltip.padding,
        backgroundColor: config.tooltip.backgroundColor,
        borderColor: config.tooltip.borderColor,
        borderWidth: config.tooltip.borderWidth,
        textStyle: {
            color: '#333'
        },
        formatter: function (params) {
            var value = params.value;
            var content = '<div style="border-bottom: 1px solid rgba(0,0,0,.7); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + params.name + '</div>'
                + DomesticSchema[0].text + '：' + value[0] + '<br>'
                + DomesticSchema[1].text + '：' + value[1] + '<br>'
                + DomesticSchema[2].text + '：' + value[2] + '<br>';
            content += '<iframe frameborder="0" width="500" height="300" src="./domestic.html?region=' + params.data.name + '" scrolling="no">';
            return content;
        }
    },
    xAxis: {
        type: 'value',
        name: 'Enterprises',
        nameGap: 16,
        nameTextStyle: {
            fontSize: 16
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            formatter: '{value}'
        }
    },
    yAxis: {
        type: 'value',
        name: 'Carbon Allowance (MtCO2e)',
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
            fontSize: 16
        },
        splitLine: {
            show: false
        }
    },
    series: getSeries(DomesticMarketList)
};

// echart.setOption(globalOption);
echart.setOption(domesticOption);
