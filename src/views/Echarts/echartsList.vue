<template>
    <div>
        <div ref="myEcharts" id="demoDov"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
import {worldMap, taiYUanMap} from '../../assets/Mapdata'
export default{
    data(){
        return {}
    },
    mounted(){
        let myEcharts = echarts.init(this.$refs.myEcharts);
        echarts.registerMap("chinaMap",worldMap)
        myEcharts.setOption(
            {
                geo:{
                    type:"map",
                    map:"chinaMap",
                    roma:true, //可以平移
                    // zoom:5,   //缩放放大
                    // center:[116.387803,39.940361]  //可以设置中心点
                 
                },
                series:[
                    {
                        type:"scatter", //散点图
                        data:[
                            {
                                name:"北京市",
                                value:[
                                    116.46,
                                    39.92,
                                    4000
                                ]
                            }
                        ],
                        coordinateSystem:"geo",
                        symBolSize:30
                    },
                    {
                        type:"effectScatter", //涟漪效果散点图
                        coordinateSystem:"geo",
                        data:[
                            {
                                name:"西安",
                                value:[
                                    108.95,
                                    34.26
                                ],
                            }
                        ],
                        // 设置联谊的效果样式
                        rippleEffect:{
                            number:2,
                            scale:4
                        },
                        itemStyle:{
                            color:"red"
                        }
                    }
                ]
            }
        )
    }
}
</script>

<style>
#demoDov{
    width: 500px;
    height:500px;
}
</style>