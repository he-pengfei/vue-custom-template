<template>
       
<div  >
    <template v-for="(item,index) in headerObject"  >
        <el-table-column
            :key="index"
            :prop="item.prop"
            :label="item.label"
            width="300"
            >
            <template slot-scope="scope"  >
               <template  v-if="item.isBtn">
                    <el-button v-for="(child,index2) in item.fuc" :type="child.type" :key="index2" @click="onClick(scope.row,index2)">
                    {{child.name}}
                    </el-button>
               </template>

                <span>{{scope.row[item.prop]}}</span>
             </template>
        </el-table-column>
    </template>


</div>
        
</template>

<script>

export default {
    props:{
        headerObject:Array
    },
   data() {

    return {

      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "家"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司"
        }
      ]
    };
  },
  methods: {
    onClick(e,i){
       let data = {
           row:e,
           index:i+1
       } 
        
       this.$emit("click",data)
    }
  }
};
</script>
