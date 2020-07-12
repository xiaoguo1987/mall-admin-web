<template>

 <!--- <ve-line :data="chartData" :settings="chartSettings"></ve-line> --->
  <div>
              <ve-line
                :data="chartData"
                :loading="loading"
                :data-empty="dataEmpty"
                :settings="chartSettings"></ve-line>
            </div>
</template>

<!--
<script>
  export default {
    name: 'pressureUnderground',
    data () {
      this.chartSettings = {
        metrics: [ "initStratumPres","testPres",'presRate'],
        dataType:{
          'presRate': 'percent'
        },
        axisSite: { right: ['presRate'] },
        yAxisType: ['KMB', 'percent'],
        yAxisName: ['数值', '比率']
      }
      return {
        loading: false,
        dataEmpty: false,
        chartData: {
          columns: ["createTime", "testPres","initStratumPres","presRate"],
          rows: [
            {"initStratumPres":100,"testPres":70,"presRate":0.7,"createTime":"2020-06-01"},
            {"initStratumPres":200,"testPres":90,"presRate":0.45,"createTime":"2020-06-02"},
            {"initStratumPres":230,"testPres":93,"presRate":0.404,"createTime":"2020-06-03"},
            {"initStratumPres":322.345,"testPres":123.456,"presRate":0.383,"createTime":"2020-06-04"},
            {"initStratumPres":400,"testPres":545,"presRate":1.363,"createTime":"2020-06-05"},
            {"initStratumPres":600,"testPres":342,"presRate":0.57,"createTime":"2020-06-06"},
            {"initStratumPres":543,"testPres":393,"presRate":0.724,"createTime":"2020-06-07"},
            {"initStratumPres":454,"testPres":543,"presRate":1.196,"createTime":"2020-06-08"},
            {"initStratumPres":908,"testPres":784,"presRate":0.863,"createTime":"2020-06-09"},
            {"initStratumPres":3441,"testPres":192,"presRate":0.056,"createTime":"2020-06-10"},
            {"initStratumPres":2323,"testPres":346,"presRate":0.149,"createTime":"2020-06-11"},
            {"initStratumPres":3432,"testPres":276,"presRate":0.08,"createTime":"2020-06-12"}
          ]
        }
      }
    }
  }
</script>
-->
<script>
import {pressureUndergroundList} from '@/api/pressureunderground';
  
  const defaultListQuery = {
    endDate: "2020-07-12",
    layerNo: 0 ,
    startDate: "2020-05-12",
    wellId: 1
  };

  export default {
    name: 'pressureUnderground',
    data() {
      return {
        listQuery: defaultListQuery,
        chartSettings : {
        metrics: [ "initStratumPres","testPres",'presRate'],
        dataType:{
          'presRate': 'percent'
        },
        labelMap: {
          initStratumPres: '原始地层压力',
          testPres: '测试压力',
          presRate: '压力保持水平'
        },
        axisSite: { right: ['presRate'] },
        yAxisType: ['KMB', 'percent'],
        yAxisName: ['数值', '比率']
        },
        chartData: {
          columns: [],
          rows: []
        },
        loading: false,
        dataEmpty: false,
      };
    },
    created() {
      this.getList();
    },
    methods: {
      getList(){
        setTimeout(() => {
        pressureUndergroundList(this.listQuery).then(response => {
          this.chartData = {
            columns: ["createTime", "testPres","initStratumPres","presRate"],
            rows: []
          };
          //this.chartData.rows = response.data;
          var data = response.data;
          for(let i=0;i<data.length;i++){
            let item=data[i];
            this.chartData.rows.push(item);
          }
          //this.chartData.rows.push(response.data);
          this.dataEmpty = false;
          this.loading = false
        })
      }, 1000)
    }
   }
  }
</script>
