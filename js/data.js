/**
 * Created by liutongtong on 3/24/16.
 */

// INDC数据部分
var EU = [
    'Austria',
    'Belgium',
    'Bulgaria',
    'Cyprus',
    'Croatia',
    'CzechRepublic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'Hungary',
    'Ireland',
    'Italy',
    'Latvia',
    'Lithuania',
    'Luxembourg',
    'Malta',
    'Netherlands',
    'Poland',
    'Portugal',
    'Romania',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden',
    'United Kingdom'
];

var INDCData = [
    ['Afghanistan',0,''],
    ['Albania',11.50,'2016'],
    ['Algeria',14.5,'2005'],
    ['Antigua and Barbuda',0,''],
    ['Andorra',37,'2005'],
    ['Angola',42.5,'2005'],
    ['Argentina',22.5,'2005'],
    ['Armenia',0,''],
    ['Australia',27,'2005'],
    ['Azerbaijan',35,'1990'],
    ['Bahrain',0,''],
    ['Bangladesh',20,'2005'],
    ['Barbados',44,'2005'],
    ['Belarus',28,'1990'],
    ['Belize',0,''],
    ['Benin',21.4,'2005'],
    ['Bhutan',0,''],
    ['Bolivia',0,''],
    ['Bosnia and Herzegovina',23,'2005'],
    ['Botswana',15,'2010'],
    ['Brazil',37,'2005'],
    ['Brunei',63,'2005'],
    ['Burkina Faso',11.6,'BAU'],
    ['Burundi',23,'BAU'],
    ['Cambodia',27,'BAU'],
    ['Cameroon',32,'BAU'],
    ['Canada',30,'2005'],
    ['Cape Verde',0,''],
    ['Central African Republic',15,'BAU'],
    ['Chad',18.2,'BAU'],
    ['Chile',30,'2007'],
    ['China',63,'2005'],
    ['Colombia',25,'BAU'],
    ['Comoros',84,'BAU'],
    ['Cook Islands',43,'2006'],
    ['Costa Rica',44,'BAU'],
    ['Cuba',0,''],
    ['Democratic Republic of the Congo',17,'BAU'],
    ['Djibouti',20,''],
    ['Dominica',44.7,'2014'],
    ['Dominican Republic',25,'2010'],
    ['Ecuador',23,'BAU'],
    ['Egypt',0,''],
    ['El Salvador',0,''],
    ['Equatorial Guinea',20,'2010'],
    ['Eritrea',39.2,'2005'],
    ['Ethiopia',64,'BAU'],
    ['European Union (28)',40,'1990'],
    ['Federated States of Micronesia',28,'2000'],
    ['Fiji',30,'BAU'],
    ['Gabon',0,''],
    ['Gambia',45.40,''],
    ['Georgia',15,'BAU'],
    ['Ghana',15,'BAU'],
    ['Grenada',40,'2010'],
    ['Guatemala',11.2,'BAU'],
    ['Guinea',13,'1994'],
    ['Guinea Bissau',0,''],
    ['Guyana',0,''],
    ['Haiti',0,''],
    ['Honduras',0,''],
    ['Iceland',40,'1990'],
    ['India',34,'2005'],
    ['Indonesia',29,'BAU'],
    ['Iran',4,'BAU'],
    ['Iraq',0,''],
    ['Israel',26,'2005'],
    ['Ivory Coast',0,''],
    ['Jamaica',7.8,'BAU'],
    ['Japan',25.4,'2005'],
    ['Jordan',14,'BAU'],
    ['Kazakhstan',20,'1990'],
    ['Kenya',30,'BAU'],
    ['Kiribati',12.8,'BAU'],
    ['Kuwait',0,''],
    ['Kyrgyzstan',12.6,'BAU'],
    ['Laos',0,''],
    ['Lebanon',0,''],
    ['Lesotho',10,'BAU'],
    ['Liberia',0,''],
    ['Liechtenstein',40,''],
    ['Macedonia',33,'BAU'],
    ['Madagascar',23,'BAU'],
    ['Malawi',0,''],
    ['Malaysia',40,'2005'],
    ['Maldives',10,'BAU'],
    ['Mali',0,''],
    ['Marshall Islands',45,'2010'],
    ['Mauritania',22.3,'BAU'],
    ['Mauritius',30,'BAU'],
    ['Mexico',40,'2013'],
    ['Moldova',65.50,'1990'],
    ['Monaco',50,'1990'],
    ['Mongolia',14,'BAU'],
    ['Montenegro',30,'1990'],
    ['Morocco',32,'BAU'],
    ['Mozambique',0,''],
    ['Myanmar',0,''],
    ['Namibia',89,'BAU'],
    ['Nauru',0,''],
    ['Nepal',0,''],
    ['New Zealand',30,'2005'],
    ['Niger',0,''],
    ['Nigeria',20,'BAU'],
    ['Niue',0,''],
    ['Norway',40,'1990'],
    ['Oman',2,'BAU'],
    ['Pakistan',0,''],
    ['Palau',22,'2005'],
    ['Papua New Guinea',0,''],
    ['Paraguay',0,''],
    ['Peru',30,'BAU'],
    ['Philippines',70,'BAU'],
    ['Qatar',0,''],
    ['Republic of Congo',0,''],
    ['Republic of Serbia',9.80,'1990'],
    ['Russia',73,'1990'],
    ['Rwanda',0,''],
    ['Saint Kitts and Nevis',29,'BAU'],
    ['Saint Lucia', 23,'BAU'],
    ['Samoa',0,''],
    ['San Marino',20,'2005'],
    ['Sao Tome and Principe',24,'BAU'],
    ['Saudi Arabia',0,''],
    ['Senegal',21,'BAU'],
    ['Seychelles',29.00,'BAU'],
    ['Sierra Leone',0,''],
    ['Singapore',36,'2005'],
    ['Solomon Islands',0,''],
    ['Somalia',0,''],
    ['South Africa',0,''],
    ['South Korea',37,'BAU'],
    ['South Sudan',0,''],
    ['Sri Lanka',7,'BAU'],
    ['St Vincent & the Grenadines',22,'BAU'],
    ['Sudan',0,''],
    ['Suriname',0,''],
    ['Swaziland',0,''],
    ['Switzerland',50,'1990'],
    ['Tajikistan',0,''],
    ['Thailand',20,'BAU'],
    ['The Bahamas',30,'BAU'],
    ['Togo',31.14,'BAU'],
    ['Tonga',0,''],
    ['Trinidad and Tobago',15,'BAU'],
    ['Tunisia',41,'2010'],
    ['Turkey',21,'BAU'],
    ['Turkmenistan',0,''],
    ['Tuvalu',0,''],
    ['Uganda',22,'BAU'],
    ['Ukraine',60,'1990'],
    ['United Arab Emirates',0,''],
    ['United Republic of Tanzania',15,'BAU'],
    ['United States of America',27,'2005'],
    ['Uruguay',0,''],
    ['Vanuatu',0,''],
    ['Venezuela',20,'BAU'],
    ['Vietnam',8,'BAU'],
    ['Yemen',14,'BAU'],
    ['Zambia',47,'2010'],
    ['Zimbabwe',33,'BAU']
];

var convertINDCData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; ++i) {
        if (data[i][0] == 'European Union (28)') {
            for (var j = 0; j < EU.length; ++j) {
                res.push({
                    name: EU[j],
                    value: data[i][1],
                    base: data[i][2]
                });
            }
        } else if (data[i][1]) {
            res.push({
                name: data[i][0],
                value: data[i][1],
                base: data[i][2]
            });
        }
    }
    return res;
};

// 全球主要碳市场排放数据
var GlobalMarketData = [
    // ['Switzerland',7.43,46.95,50.75],
    ['European Union (28)',4.35,50.85,4399.15],
    ['Kazakhstan',71.05,51.02,290.89],
    ['South Korea',127,37.58,693.33],
    ['New Zealand',174.78,-41.28,76.59],
    ['Japan',139.73,35.68,1344.58],
    ['South Africa',28.18,-25.71,462.60],
    ['Chile',-70.67,-33.45,100.73],
    ['Mexico',-99.15,19.47,723.85]
];

var convertGlobalMarketData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; ++i) {
        if (data[i][0] == 'Japan') {
            res.push({
                name: data[i][0],
                value: data[i].slice(1),
                label: {
                    normal: {
                        position: 'right'
                    }
                }
            });
        } else {
            res.push({
                name: data[i][0],
                value: data[i].slice(1)
            });
        }
    }
    return res;
};

// 国内碳市场试点数据
var DomesticMarketList = ['Beijing', 'Tianjin', 'Shanghai', 'Hubei', 'Chongqing', 'Guangdong', 'Shenzhen'];

var DomesticMarketData = [
    ['Beijing', 551, 47, 1.245],
    ['Tianjin', 114, 160, 0.043],
    ['Shanghai', 310, 53, 1.640],
    ['Hubei', 138, 324, 13.338],
    ['Chongqing', 242, 106, 0.132],
    ['Guangdong', 242, 370, 4.795],
    ['Shenzhen', 635, 30, 3.152]
];

var DomesticSchema = [
    {name: 'Enterprises', index: 0, text: 'Enterprises'},
    {name: 'Carbon Allowance(MtCO2e)', index: 1, text: 'Carbon Allowance(MtCO2e)'},
    {name: 'Carbon Traded(MtCO2e)', index: 2, text: 'Carbon Traded(MtCO2e)'}
];

var convertDomesticMarketData = function(data, name) {
    var res = [];
    for (var i = 0; i < data.length; ++i) {
        if (name == null || data[i][0] == name) {
            res.push({
                name: data[i][0],
                value: data[i].slice(1)
            });
        }
    }
    return res;
};

// 全球主要谈市场的覆盖范围
var GlobalCompositionData = {
    'Mexico': [0, 48, 0],
    'Chile': [0, 42, 0],
    'South Africa': [0, 80, 0],
    'European Union (28)': [41, 7, 4],
    'Kazakhstan': [55, 0, 0],
    'South Korea': [66, 0, 0],
    'Japan': [0, 66, 0],
    'New Zealand': [54, 0, 0],
    'Beijing': [40, 0, 0],
    'Tianjin': [60, 0, 0],
    'Shanghai': [50, 0, 0],
    'Hubei': [35, 0, 0],
    'Chongqing': [40, 0, 0],
    'Guangdong': [60, 0, 0],
    'Shenzhen': [40, 0, 0],
    'California': [85, 0, 0],
    'British Columbia': [0, 70, 0],
    'Alberta': [43, 0, 0],
    'RGGI': [21, 0, 0],
    'Quebec': [85, 0, 0]
};

var convertGlobalCompostionData = function(name) {
    if (name in GlobalCompositionData) {
        var res = [];
        var value = GlobalCompositionData[name][0];
        if (value > 0) {
            res.push({name: 'ETS', value: value});
        }
        value = GlobalCompositionData[name][1];
        if (value > 0) {
            res.push({name: 'Carbon Tax', value: value});
        }
        value = GlobalCompositionData[name][2];
        if (value > 0) {
            res.push({name: 'Both', value: value});
        }
        value = 100 - GlobalCompositionData[name][0] - GlobalCompositionData[name][1] - GlobalCompositionData[name][2];
        if (value > 0) {
            res.push({name: 'Other', value: value});
        }
        return res;
    } else {
        return [];
    }
};

// 国内碳市场行业的覆盖范围
var SectorList = [
    'Agriculture',
    'Mining Industry',
    'Manufacture',
    'Electricity, Heat, Gas，Water Production and Supply Industry',
    'Construction Industry',
    'Wholesale and Retail Trade',
    'Transportation, Warehousing and Postal Services',
    'Hotels and Catering Services',
    'Information Transmission, computer and software Services ',
    'Finance Industry',
    'Real Estate Development',
    'Rent and Commercial Affairs',
    'Research and Technology Services',
    'Hydraulic, Environment, and Property Management',
    'Citizen service, Repairing and Other services',
    'Education',
    'Public health and social work',
    'Culture, sports and entertainment',
    'Public management, social security and social organization',
    'International Organization'
];

var DomesticCompositionData = {
    'Beijing': [0,4,185,46,0,25,11,42,23,35,79,2,11,2,1,53,11,13,8,0],
    'Tianjin': [0,4,80,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    'Shanghai': [0,0,228,35,0,6,315,0,3,2,0,0,0,0,0,0,0,0,0],
    'Hubei': [0,0,111,27,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    'Chongqing': [0,5,218,18,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    'Guangdong': [0,0,157,85,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    'Shenzhen': [0,0,622,8,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0]
};

var bigLabel = {
    normal: {
        formatter: '{d}%',
        position: 'inside',
        textStyle: {
            fontSize: 14
        },
        show: true
    }
};
var smallLabel = {
    normal: {
        formatter: '{d}%',
        // position: 'inside',
        textStyle: {
            fontSize: 14
        },
        show: true
    }
};

var convertDomesticCompositionData = function(name) {
    if (name in DomesticCompositionData) {
        var res = [];
        var legends = [];
        var values = DomesticCompositionData[name];
        var sum = eval(values.join('+'));

        if (name == 'Beijing') {
            var c = 0;
            for (var i = 0; i < values.length; ++i) {
                if (values[i] >= 25) {
                    if (values[i] / sum > 0.07) {
                        res.push({
                            name: SectorList[i],
                            value: values[i],
                            label: bigLabel
                        });
                    } else {
                        res.push({
                            name: SectorList[i],
                            value: values[i],
                            label: smallLabel
                        });
                    }
                    legends.push(SectorList[i]);
                    c += values[i];
                }
            }
            res.push({name: 'Other', value: sum - c, label: smallLabel});
            legends.push('Other');
            return [legends, res];
        }

        for (var i = 0; i < values.length; ++i) {
            if (values[i] > 0) {
                if (values[i] / sum > 0.1) {
                    res.push({
                        name: SectorList[i],
                        value: values[i],
                        label: bigLabel
                    });
                } else {
                    res.push({
                        name: SectorList[i],
                        value: values[i],
                        label: smallLabel
                    });
                }
                legends.push(SectorList[i]);
            }
        }
        return [legends, res];
    } else {
        return [[], []];
    }
};

// 国内碳市场行业的履约率数据
var ImplementData = {
    'Beijing': 100,
    'Tianjin': 99.1,
    'Shanghai': 100,
    'Hubei': 100,
    'Chongqing': 70,
    'Guangdong': 100,
    'Shenzhen': 99.7
};

var convertImplementData = function(name) {
    var value = ImplementData[name];
    var res = [];
    res.push({
        name: 'Done',
        value: value,
        label: {
            normal: {
                show: true,
                formatter: '{b}: {d}%',
                position: 'center',
                textStyle: {
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            }
        },
        itemStyle: {
            normal: {
                color: '#0098d9'
            }
        }
    });
    if (value < 100) {
        res.push({
            name: 'Undone',
            value: 100 - value,
            itemStyle: {
                normal: {
                    color: '#c12e34'
                }
            }
        });
    }
    return res;
};