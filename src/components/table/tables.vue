<template>
  <div>
      <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label= "日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
    <el-button type="primary" @click="exportTable()">导出Excel</el-button>
  </div>
  </div>
</template>

<script>
  export default {
data() {
      return {
        tableData: [{
          date: '3456-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '4344-05-02',
          name: '咸鱼王',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '3322-05-04',
          name: '徐嵩',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '3333-05-01',
          name: '天地一号',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-22-08',
          name: '你说啥',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
        exportTable() {
        require.ensure([], () => {
          const { export_json_to_excel } = require('../../../vendor/Export2Excel');
            const tHeader = ['日期', '姓名', '地址'];
            const filterVal = ['date', 'name', 'address'];
            const list = this.tableData;
            const data = this.formatJson(filterVal, list);
            export_json_to_excel(tHeader, data, '档案文件');
          })
        },
        formatJson(filterVal, jsonData) {
          return jsonData.map(v => filterVal.map(j => v[j]))
        }
    }
    
  }
</script>

<style scoped>

</style>