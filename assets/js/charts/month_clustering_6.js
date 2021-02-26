(function(){
	 var myChart = echarts.init(document.getElementById('month6_cluster_5'));

option = {
   
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['第一类中心曲线','第二类中心曲线','第三类中心曲线','第四类中心曲线','第五类中心曲线']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
       show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'line', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
	 calculable : true,
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [

"2014/6/1",	"2014/6/2"	,"2014/6/3"	,"2014/6/4",	"2014/6/5",
        	 "2014/6/6",	"2014/6/7",	"2014/6/8",	"2014/6/9"	,"2014/6/10"	,
		    "2014/6/11",	"2014/6/12",	"2014/6/13",	"2014/6/14",	"2014/6/15",	
		   "2014/6/16",	"2014/6/17",	"2014/6/18",	"2014/6/19",	"2014/6/20",	
		   "2014/6/21",	"2014/6/22",	"2014/6/23",	"2014/6/24",	"2014/6/25",
		   "2014/6/26",	"2014/6/27",	"2014/6/28",	"2014/6/29",	"2014/6/30"
		   
   
              ]  
    },
    yAxis: {
        type: 'value'
    },
    series : [
	
      {
symbol: 'none',
name:'第一类中心曲线',
type:'line',
stack: '总量',
data:[5.679479695,4.883219543,4.415095939,4.43024797,4.584172081,4.787611929,5.53214467,6.004908629,5.447734391,5.297088198,5.360571193,5.219066624,5.66599797,6.845420685,6.291076396,4.958625381,4.71066599,4.584555584,4.864247589,4.948381599,5.061467386,5.141993528,4.85794302,5.122944289,4.933065863,4.831665863,4.590985406,5.060224492,5.618739721,5.296803426]
},
{
symbol: 'none',
name:'第二类中心曲线',
type:'line',
stack: '总量',

data:[1,3.852632613,3.411902063,3.078793615,3.0485222,3.114589784,3.279239391,3.697229273,3.912547348,3.504474165,3.467677505,3.465538802,3.457830354,3.662926719,4.388780845,4.129581238,3.36060501,3.16676945,3.19246778,3.263887623,3.304528782,3.410442927,3.468372397,3.261750688,3.447347544,3.393289784,3.279815226,3.16519666,3.432367682,3.745941356,3.523393615]
},
{
symbol: 'none',
name:'第三类中心曲线',
type:'line',
stack: '总量',

data:[11.2950136,9.1889576,8.617772,8.7181184,9.1350784,9.9504096,11.7607296,12.6974376,11.6327176,11.5300544,11.4048136,11.31128,12.02674,14.27988,13.3857864,9.7141144,8.7645944,8.9521944,9.8107312,10.0894024,9.9010992,10.2498984,9.946192,10.85956,9.6617864,8.6817576,9.0353576,10.4699976,11.66288,10.88832]
},
{
symbol: 'none',
name:'第四类中心曲线',
type:'line',
stack: '总量',
data:[7.967510638,6.64431,6.035933617,6.193314255,6.328918936,6.825584681,7.893338723,8.335095745,7.592551915,7.57369766,7.552611277,7.446975745,8.116508511,9.733003404,8.992363191,6.99845383,6.388401702,6.412320426,6.754897447,6.883220426,7.035802553,7.125365745,6.883358723,7.234081489,6.980748723,6.433217872,6.368600851,6.999473191,7.86185617,7.523132766]
},
{
symbol: 'none',
name:'第五类中心曲线',
type:'line',
stack: '总量',
data:[1.879525543,1.620365609,1.53373606,1.508477796,1.491086311,1.585849416,1.624971953,1.710071452,1.548057262,1.541612688,1.508445075,1.542487646,1.604109015,1.897162437,1.933617696,1.593875125,1.476806678,1.46465025,1.58573222,1.595926878,1.662344574,1.704174124,1.560612855,1.60495626,1.64332571,1.570273456,1.546261269,1.62183606,1.748506845,1.644260601]
}
 ]
};

myChart.setOption(option);
})();

