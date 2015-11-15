!function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:!1};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _creditRatesBase=__webpack_require__(1),_creditRatesBase2=_interopRequireDefault(_creditRatesBase),_creditRatesSocial=__webpack_require__(2),_creditRatesSocial2=_interopRequireDefault(_creditRatesSocial);angular.module("dit-calculator",["ngMaterial"]).controller("mainController",function($scope){function getTaxAmount(taxableIncome,age,socialSecurity){var taxAmountPeriods=[19822,13767,23996,1/0],taxRates=[.365,.42,.42,.52],taxRatesUnSecure=[.0835,.1385,.42,.52],taxRates64=[.1575,.235,.42,.52];socialSecurity||(taxRates=taxRatesUnSecure),age&&(taxRates=taxRates64);for(var taxAmount=0,i=0;i<taxRates.length;i++){if(taxableIncome-taxAmountPeriods[i]<0){taxAmount+=Math.floor(taxableIncome*taxRates[i]);break}taxAmount+=Math.floor(taxAmountPeriods[i]*taxRates[i]),taxableIncome-=taxAmountPeriods[i]}return taxAmount}function getCredits(salary,socialSecurity){var index=void 0,currentRates=_creditRatesBase2["default"];for(socialSecurity&&(currentRates=_creditRatesSocial2["default"]),index=0;index<currentRates.length&&!(currentRates[index].salary>salary);index++);return index?currentRates[index-1]:currentRates[0]}var _this=this;this.salary={grossYear:0,grossMonth:0,netYear:0,netMonth:0,taxRate:0,ruling:!1,age:!1,socialSecurity:!0,allowance:!1},this.salary.grossYear=36e3,this.salaryOutputOptions={taxableYear:"Taxable Income",incomeTax:"Income Tax",generalCredit:"General Tax Credit",labourCredit:"Labour Tax Credit",netYear:"Year net income",netMonth:"Monthly net income"},$scope.$watchGroup(["main.salary.age","main.salary.ruling","main.salary.socialSecurity","main.salary.grossYear","main.salary.allowance"],function(){var grossYear=_this.salary.grossYear||0;_this.salary.taxableYear=grossYear,_this.salary.ruling&&(_this.salary.taxableYear=.7*_this.salary.taxableYear),_this.salary.generalCredit=getCredits(grossYear,_this.salary.socialSecurity).lk,_this.salary.labourCredit=getCredits(grossYear,_this.salary.socialSecurity).ak,_this.salary.grossMonth=~~(grossYear/12),_this.salary.netYear=grossYear-getTaxAmount(_this.salary.taxableYear,_this.salary.age,_this.salary.socialSecurity),_this.salary.allowance&&(_this.salary.netYear=.92*_this.salary.netYear),_this.salary.netYear+=_this.salary.generalCredit+_this.salary.labourCredit,_this.salary.netMonth=~~(_this.salary.netYear/12),_this.salary.incomeTax=getTaxAmount(_this.salary.taxableYear,_this.salary.age,_this.salary.socialSecurity)})})},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var creditRatesBase=[{salary:1e4,lk:332,ak:19},{salary:11e3,lk:332,ak:21},{salary:12e3,lk:332,ak:23},{salary:13e3,lk:332,ak:294},{salary:14e3,lk:332,ak:315},{salary:15e3,lk:332,ak:336},{salary:16e3,lk:332,ak:357},{salary:17e3,lk:332,ak:377},{salary:18e3,lk:332,ak:398},{salary:19e3,lk:332,ak:419},{salary:2e4,lk:332,ak:439},{salary:21e3,lk:332,ak:460},{salary:22e3,lk:332,ak:481},{salary:23e3,lk:332,ak:502},{salary:24e3,lk:332,ak:522},{salary:25e3,lk:332,ak:543},{salary:26e3,lk:332,ak:564},{salary:27e3,lk:332,ak:584},{salary:28e3,lk:332,ak:331},{salary:29e3,lk:330,ak:331},{salary:3e4,lk:328,ak:331},{salary:31e3,lk:326,ak:331},{salary:32e3,lk:323,ak:331},{salary:33e3,lk:321,ak:331},{salary:34e3,lk:319,ak:331},{salary:35e3,lk:317,ak:331},{salary:36e3,lk:314,ak:331},{salary:37e3,lk:312,ak:331},{salary:38e3,lk:310,ak:331},{salary:39e3,lk:308,ak:331},{salary:4e4,lk:306,ak:331},{salary:41e3,lk:303,ak:331},{salary:42e3,lk:301,ak:331},{salary:43e3,lk:299,ak:331},{salary:44e3,lk:297,ak:331},{salary:45e3,lk:295,ak:331},{salary:46e3,lk:292,ak:331},{salary:47e3,lk:290,ak:331},{salary:48e3,lk:288,ak:331},{salary:49e3,lk:286,ak:331},{salary:5e4,lk:283,ak:331},{salary:51e3,lk:281,ak:331},{salary:52e3,lk:279,ak:331},{salary:53e3,lk:277,ak:331},{salary:54e3,lk:275,ak:331},{salary:55e3,lk:272,ak:331},{salary:56e3,lk:270,ak:331},{salary:57e3,lk:268,ak:331},{salary:58e3,lk:266,ak:331},{salary:59e3,lk:264,ak:327},{salary:6e4,lk:261,ak:323},{salary:61e3,lk:259,ak:319},{salary:62e3,lk:257,ak:314},{salary:63e3,lk:255,ak:310},{salary:64e3,lk:252,ak:305},{salary:65e3,lk:250,ak:301},{salary:66e3,lk:248,ak:296},{salary:67e3,lk:246,ak:292},{salary:68e3,lk:244,ak:288},{salary:69e3,lk:241,ak:283},{salary:7e4,lk:239,ak:279},{salary:71e3,lk:237,ak:274},{salary:72e3,lk:235,ak:270},{salary:73e3,lk:233,ak:265},{salary:74e3,lk:230,ak:261},{salary:75e3,lk:228,ak:257},{salary:76e3,lk:226,ak:252},{salary:77e3,lk:224,ak:248},{salary:78e3,lk:221,ak:243},{salary:79e3,lk:219,ak:239},{salary:8e4,lk:217,ak:234},{salary:81e3,lk:215,ak:230},{salary:82e3,lk:215,ak:226},{salary:83e3,lk:215,ak:221},{salary:84e3,lk:215,ak:217},{salary:85e3,lk:215,ak:212},{salary:86e3,lk:215,ak:208},{salary:87e3,lk:215,ak:203},{salary:88e3,lk:215,ak:199},{salary:89e3,lk:215,ak:195},{salary:9e4,lk:215,ak:190},{salary:91e3,lk:215,ak:186},{salary:92e3,lk:215,ak:181},{salary:93e3,lk:215,ak:177},{salary:94e3,lk:215,ak:172},{salary:95e3,lk:215,ak:168},{salary:96e3,lk:215,ak:164},{salary:97e3,lk:215,ak:159},{salary:98e3,lk:215,ak:155},{salary:99e3,lk:215,ak:150},{salary:1e5,lk:215,ak:146},{salary:101e3,lk:215,ak:141},{salary:102e3,lk:215,ak:137},{salary:103e3,lk:215,ak:133},{salary:104e3,lk:215,ak:128},{salary:105e3,lk:215,ak:124},{salary:106e3,lk:215,ak:119},{salary:107e3,lk:215,ak:115},{salary:108e3,lk:215,ak:110},{salary:109e3,lk:215,ak:106},{salary:11e4,lk:215,ak:102},{salary:111e3,lk:215,ak:97},{salary:112e3,lk:215,ak:93},{salary:113e3,lk:215,ak:88},{salary:114e3,lk:215,ak:84},{salary:115e3,lk:215,ak:80},{salary:116e3,lk:215,ak:75},{salary:117e3,lk:215,ak:71},{salary:118e3,lk:215,ak:66},{salary:119e3,lk:215,ak:62},{salary:12e4,lk:215,ak:58}];exports["default"]=creditRatesBase},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var creditRatesSocial=[{salary:1e4,lk:2103,ak:126},{salary:10500,lk:2103,ak:132},{salary:11e3,lk:2103,ak:139},{salary:11500,lk:2103,ak:145},{salary:12e3,lk:2103,ak:151},{salary:12500,lk:2103,ak:158},{salary:13e3,lk:2103,ak:1864},{salary:13500,lk:2103,ak:1930},{salary:14e3,lk:2103,ak:1995},{salary:14500,lk:2103,ak:2061},{salary:15e3,lk:2103,ak:2127},{salary:15500,lk:2103,ak:2192},{salary:16e3,lk:2103,ak:2258},{salary:16500,lk:2103,ak:2323},{salary:17e3,lk:2103,ak:2389},{salary:17500,lk:2103,ak:2454},{salary:18e3,lk:2103,ak:2520},{salary:18500,lk:2103,ak:2585},{salary:19e3,lk:2103,ak:2651},{salary:19500,lk:2103,ak:2716},{salary:2e4,lk:2103,ak:2782},{salary:20500,lk:2103,ak:2847},{salary:21e3,lk:2103,ak:2913},{salary:21500,lk:2103,ak:2978},{salary:22e3,lk:2103,ak:3044},{salary:22500,lk:2103,ak:3110},{salary:23e3,lk:2103,ak:3175},{salary:23500,lk:2103,ak:3241},{salary:24e3,lk:2103,ak:3306},{salary:24500,lk:2103,ak:3372},{salary:25e3,lk:2103,ak:3437},{salary:25500,lk:2103,ak:3503},{salary:26e3,lk:2103,ak:3568},{salary:26500,lk:2103,ak:3634},{salary:27e3,lk:2103,ak:3699},{salary:27500,lk:2103,ak:2097},{salary:28e3,lk:2103,ak:2097},{salary:28500,lk:2097,ak:2097},{salary:29e3,lk:2090,ak:2097},{salary:29500,lk:2083,ak:2097},{salary:3e4,lk:2076,ak:2097},{salary:30500,lk:2069,ak:2097},{salary:31e3,lk:2062,ak:2097},{salary:31500,lk:2055,ak:2097},{salary:32e3,lk:2048,ak:2097},{salary:32500,lk:2041,ak:2097},{salary:33e3,lk:2034,ak:2097},{salary:33500,lk:2027,ak:2097},{salary:34e3,lk:2020,ak:2097},{salary:34500,lk:2013,ak:2097},{salary:35e3,lk:2006,ak:2097},{salary:35500,lk:1999,ak:2097},{salary:36e3,lk:1992,ak:2097},{salary:36500,lk:1985,ak:2097},{salary:37e3,lk:1978,ak:2097},{salary:37500,lk:1971,ak:2097},{salary:38e3,lk:1964,ak:2097},{salary:38500,lk:1957,ak:2097},{salary:39e3,lk:1950,ak:2097},{salary:39500,lk:1943,ak:2097},{salary:4e4,lk:1936,ak:2097},{salary:40500,lk:1929,ak:2097},{salary:41e3,lk:1922,ak:2097},{salary:41500,lk:1915,ak:2097},{salary:42e3,lk:1908,ak:2097},{salary:42500,lk:1901,ak:2097},{salary:43e3,lk:1894,ak:2097},{salary:43500,lk:1887,ak:2097},{salary:44e3,lk:1880,ak:2097},{salary:44500,lk:1873,ak:2097},{salary:45e3,lk:1866,ak:2097},{salary:45500,lk:1859,ak:2097},{salary:46e3,lk:1852,ak:2097},{salary:46500,lk:1845,ak:2097},{salary:47e3,lk:1838,ak:2097},{salary:47500,lk:1831,ak:2097},{salary:48e3,lk:1824,ak:2097},{salary:48500,lk:1817,ak:2097},{salary:49e3,lk:1810,ak:2097},{salary:49500,lk:1803,ak:2097},{salary:5e4,lk:1796,ak:2097},{salary:50500,lk:1789,ak:2097},{salary:51e3,lk:1782,ak:2097},{salary:51500,lk:1775,ak:2097},{salary:52e3,lk:1768,ak:2097},{salary:52500,lk:1761,ak:2097},{salary:53e3,lk:1754,ak:2097},{salary:53500,lk:1747,ak:2097},{salary:54e3,lk:1740,ak:2097},{salary:54500,lk:1733,ak:2097},{salary:55e3,lk:1726,ak:2097},{salary:55500,lk:1719,ak:2097},{salary:56e3,lk:1712,ak:2097},{salary:56500,lk:1705,ak:2097},{salary:57e3,lk:1698,ak:2097},{salary:57500,lk:1691,ak:2097},{salary:58e3,lk:1684,ak:2097},{salary:58500,lk:1677,ak:2088},{salary:59e3,lk:1670,ak:2074},{salary:59500,lk:1663,ak:2060},{salary:6e4,lk:1656,ak:2046},{salary:60500,lk:1649,ak:2032},{salary:61e3,lk:1642,ak:2018},{salary:61500,lk:1635,ak:2004},{salary:62e3,lk:1628,ak:1990},{salary:62500,lk:1621,ak:1976},{salary:63e3,lk:1614,ak:1962},{salary:63500,lk:1607,ak:1948},{salary:64e3,lk:1600,ak:1934},{salary:64500,lk:1593,ak:1920},{salary:65e3,lk:1586,ak:1906},{salary:65500,lk:1579,ak:1892},{salary:66e3,lk:1572,ak:1878},{salary:66500,lk:1565,ak:1864},{salary:67e3,lk:1558,ak:1850},{salary:67500,lk:1551,ak:1836},{salary:68e3,lk:1544,ak:1822},{salary:68500,lk:1537,ak:1808},{salary:69e3,lk:1530,ak:1794},{salary:69500,lk:1523,ak:1780},{salary:7e4,lk:1516,ak:1766},{salary:70500,lk:1509,ak:1752},{salary:71e3,lk:1502,ak:1738},{salary:71500,lk:1495,ak:1724},{salary:72e3,lk:1488,ak:1710},{salary:72500,lk:1481,ak:1696},{salary:73e3,lk:1474,ak:1682},{salary:73500,lk:1467,ak:1668},{salary:74e3,lk:1460,ak:1654},{salary:74500,lk:1453,ak:1640},{salary:75e3,lk:1446,ak:1626},{salary:75500,lk:1439,ak:1612},{salary:76e3,lk:1432,ak:1598},{salary:76500,lk:1425,ak:1584},{salary:77e3,lk:1418,ak:1570},{salary:77500,lk:1411,ak:1556},{salary:78e3,lk:1404,ak:1542},{salary:78500,lk:1397,ak:1528},{salary:79e3,lk:1390,ak:1514},{salary:79500,lk:1383,ak:1500},{salary:8e4,lk:1376,ak:1486},{salary:80500,lk:1369,ak:1472},{salary:81e3,lk:1366,ak:1458},{salary:81500,lk:1366,ak:1444},{salary:82e3,lk:1366,ak:1430},{salary:82500,lk:1366,ak:1416},{salary:83e3,lk:1366,ak:1402},{salary:83500,lk:1366,ak:1388},{salary:84e3,lk:1366,ak:1374},{salary:84500,lk:1366,ak:1360},{salary:85e3,lk:1366,ak:1346},{salary:85500,lk:1366,ak:1332},{salary:86e3,lk:1366,ak:1318},{salary:86500,lk:1366,ak:1304},{salary:87e3,lk:1366,ak:1290},{salary:87500,lk:1366,ak:1276},{salary:88e3,lk:1366,ak:1262},{salary:88500,lk:1366,ak:1248},{salary:89e3,lk:1366,ak:1234},{salary:89500,lk:1366,ak:1220},{salary:9e4,lk:1366,ak:1206},{salary:90500,lk:1366,ak:1192},{salary:91e3,lk:1366,ak:1178},{salary:91500,lk:1366,ak:1164},{salary:92e3,lk:1366,ak:1150},{salary:92500,lk:1366,ak:1136},{salary:93e3,lk:1366,ak:1122},{salary:93500,lk:1366,ak:1108},{salary:94e3,lk:1366,ak:1094},{salary:94500,lk:1366,ak:1080},{salary:95e3,lk:1366,ak:1066},{salary:95500,lk:1366,ak:1052},{salary:96e3,lk:1366,ak:1038},{salary:96500,lk:1366,ak:1024},{salary:97e3,lk:1366,ak:1010},{salary:97500,lk:1366,ak:996},{salary:98e3,lk:1366,ak:982},{salary:98500,lk:1366,ak:968},{salary:99e3,lk:1366,ak:954},{salary:99500,lk:1366,ak:940},{salary:1e5,lk:1366,ak:926},{salary:100500,lk:1366,ak:912},{salary:101e3,lk:1366,ak:898},{salary:101500,lk:1366,ak:884},{salary:102e3,lk:1366,ak:870},{salary:102500,lk:1366,ak:856},{salary:103e3,lk:1366,ak:842},{salary:103500,lk:1366,ak:828},{salary:104e3,lk:1366,ak:814},{salary:104500,lk:1366,ak:800},{salary:105e3,lk:1366,ak:786},{salary:105500,lk:1366,ak:772},{salary:106e3,lk:1366,ak:758},{salary:106500,lk:1366,ak:744},{salary:107e3,lk:1366,ak:730},{salary:107500,lk:1366,ak:716},{salary:108e3,lk:1366,ak:702},{salary:108500,lk:1366,ak:688},{salary:109e3,lk:1366,ak:674},{salary:109500,lk:1366,ak:660},{salary:11e4,lk:1366,ak:646},{salary:110500,lk:1366,ak:632},{salary:111e3,lk:1366,ak:618},{salary:111500,lk:1366,ak:604},{salary:112e3,lk:1366,ak:590},{salary:112500,lk:1366,ak:576},{salary:113e3,lk:1366,ak:562},{salary:113500,lk:1366,ak:548},{salary:114e3,lk:1366,ak:534},{salary:114500,lk:1366,ak:520},{salary:115e3,lk:1366,ak:506},{salary:115500,lk:1366,ak:492},{salary:116e3,lk:1366,ak:478},{salary:116500,lk:1366,ak:464},{salary:117e3,lk:1366,ak:450},{salary:117500,lk:1366,ak:436},{salary:118e3,lk:1366,ak:422},{salary:118500,lk:1366,ak:408},{salary:119e3,lk:1366,ak:394},{salary:119500,lk:1366,ak:380}];exports["default"]=creditRatesSocial}]);