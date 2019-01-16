<template>
    <div>
      <el-button @click="resetDateFilter">清除日期过滤器</el-button>
      <el-button @click="clearFilter">清除所有过滤器</el-button>
        <el-table
          ref="filterTable"
          :data="tableData"
          style="width: 100%">
        
              <table-component :headerObject="tableHeader" v-on:click="onClick"/>
      
        </el-table>
        
    </div>

 
  
</template>

<script>
import tableComponent  from '../components/tableComponents.vue';
export default {
  components :{
    "table-component":tableComponent
  },
  data() {
    return {
     tableHeader:[
          {label:"操作",isBtn:true,fuc:[{name:"点击1",type:"primary"},{name:"点击2",type:"danger"}]},
           {prop:"date",label:"日期",isBtn:false},
          {prop:"name",label:"姓名",isBtn:false},
          {prop:"address",label:"地址",isBtn:false},
      ],  
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎123132",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎123123123",
          address: "上海市普陀区金沙江路 1517 弄",
    
        },
        {
          date: "2016-05-01",
          name: "王小虎12313",
          address: "上海市普陀区金沙江路 1519 弄",
      
        },
        {
          date: "2016-05-03",
          name: "王小虎313231231",
          address: "上海市普陀区金沙江路 1516 弄",
        
        }
      ]
    };
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    onClick(e){

      console.log(e,"77777777777777777777777")

    }
  }
};
</script>
