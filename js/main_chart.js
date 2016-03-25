/**
 * Created by liutongtong on 3/23/16.
 */

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

var globalOption = {
    backgroundColor: config.backgroundColor,
    textStyle: config.textStyle,
    title: {
        text: 'Carbon Emission Trading: Who is on the stage?',
        subtext: 'Global Situation',
        left: 'center',
        top: 'top',
        padding: [config.padding, 0, 0, 0]
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
                content += '<iframe frameborder="0" width="400" height="250" src="./global.html?region=' + params.data.name + '" scrolling="no"' +
                    ' allowTransparency="true">';
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

t
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
        res.push({
            name: namelist[i],
            data: convertDomesticMarketData(DomesticMarketData, namelist[i]),
            type: 'scatter',
            itemStyle: itemStyle,
            symbolSize: function (val) {
                return Math.sqrt(val[2]) * 50;
            },
            hoverAnimation: true
        });
    }
    return res;
};

var domesticOption = {
    title: {
        text: '主标题',
        subtext: '副标题',
        left: 'center',
        top: 'top',
        textStyle: {
            color: '#fff',
            fontWeight: 'bold'
        },
        subtextStyle: {
            fontWeight: 'lighter'
        },
        padding: [20, 0, 0, 0]
    },
    backgroundColor: '#333',
    legend: {
        top: 'bottom',
        data: DomesticMarketList,
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    grid: {
        x: '10%',
        x2: '10%',
        y: '18%',
        y2: '10%'
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (params) {
            var value = params.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + params.name + '</div>'
                + DomesticSchema[0].text + '：' + value[0] + '<br>'
                + DomesticSchema[1].text + '：' + value[1] + '<br>'
                + DomesticSchema[2].text + '：' + value[2] + '<br>'
                + DomesticSchema[3].text + '：' + value[3] + '%<br>'
        }
    },
    xAxis: {
        type: 'value',
        name: '企业数量',
        nameGap: 16,
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#777'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#777'
            }
        },
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#fff'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '碳配额',
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#777'
            }
        },
        axisTick: {
            lineStyle: {
                color: '#777'
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        }
    },
    series: getSeries(DomesticMarketList)
};

echart.setOption(globalOption);
// echart.setOption(domesticOption);
