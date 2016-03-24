/**
 * Created by liutongtong on 3/23/16.
 */

option = {
    backgroundColor: '#404a59',
    textStyle: {
        fontStyle: 'normal',
        fontFamily: 'HelveticaNeue, Helvetica, Arial, Hiragino Sans GB, sans-serif'
    },
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
    tooltip : {
        trigger: 'item',
        formatter: function(params) {
            if (params.data.value) {
                return params.data.name + '<br>'
                    + params.seriesName + ': ' + params.data.value + '%<br>'
                    + 'Base year: ' + params.data.base;
            }
            else {
                return params.seriesName + '<br>'
                    + params.data.name + ': Empty';
            }
        }
    },
    // legend: {
    //     orient: 'vertical',
    //     top: 'bottom',
    //     left: 'right',
    //     data: ['各经济体碳排放构成'],
    //     textStyle: {
    //         color: '#fff'
    //     }
    // },
    visualMap: {
        min: 0,
        max: 100,
        text: ['%', 'INDEC减排量:'],
        realtime: false,
        calculable: true,
        seriesIndex: 0,
        inRange: {
            color: ['#50a3ba', '#eac736', '#d94e5d']
        },
        textStyle: {
            color: '#fff'
        },
        padding: [0, 0, 20, 0],
        orient: 'horizontal',
        top: 'bottom',
        left: 'right'
    },
    // geo: {
    //     map: 'world',
    //     label: {
    //         emphasis: {
    //             show: false
    //         }
    //     },
    //     roam: true,
    //     itemStyle: {
    //         normal: {
    //             areaColor: '#323c48',
    //             borderColor: '#111'
    //         },
    //         emphasis: {
    //             areaColor: '#2a333d'
    //         }
    //     }
    // },
    series : [
        {
            name: 'INDC',
            type: 'map',
            mapType: 'world',
            roam: true,
            itemStyle:{
                normal: {
                    areaColor: '#404a59',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: null,
                    shadowColor: 'rgba(255, 255, 255, 0.5)',
                    shadowBlur: 10
                }
            },
            data: convertINDC(INDCData)
        }
        // {
        //     name: 'INDC减排目标',
        //     type: 'scatter',
        //     coordinateSystem: 'geo',
        //     data: convertData(data),
        //     symbolSize: function (val) {
        //         return val[2] / 10;
        //     },
        //     label: {
        //         normal: {
        //             formatter: '{b}',
        //             position: 'right',
        //             show: false
        //         },
        //         emphasis: {
        //             show: true
        //         }
        //     },
        //     itemStyle: {
        //         normal: {
        //             color: '#ddb926'
        //         }
        //     }
        // },
        // {
        //     name: 'Top 5',
        //     type: 'effectScatter',
        //     coordinateSystem: 'geo',
        //     data: convertData(data.sort(function (a, b) {
        //         return b.value - a.value;
        //     }).slice(0, 6)),
        //     symbolSize: function (val) {
        //         return val[2] / 10;
        //     },
        //     showEffectOn: 'render',
        //     rippleEffect: {
        //         brushType: 'stroke'
        //     },
        //     hoverAnimation: true,
        //     label: {
        //         normal: {
        //             formatter: '{b}',
        //             position: 'right',
        //             show: true
        //         }
        //     },
        //     itemStyle: {
        //         normal: {
        //             color: '#f4e925',
        //             shadowBlur: 10,
        //             shadowColor: '#333'
        //         }
        //     },
        //     zlevel: 1
        // },
    ]
};

echart.setOption(option);
