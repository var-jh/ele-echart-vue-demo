<template>
    <div>
        <h2>第二版本</h2>
        <input type="text" value="">
        <button >提交</button>
    <!-- 显示信息 -->

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="area"
        label="居住地"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="180">
      </el-table-column>
      <el-table-column
        prop="birthday"
        label="出生日期">
      </el-table-column>
    </el-table>

    </div>
</template>

<script>
import axios from 'axios'

    export default {
        data(){
            
            return{
                tableData: []//data数据
            }

        },
        methods:{

        refer :function(){
           
            this.axios({
                url:'/api/idcard/index',
                params: {
                    key:'99dbb9a12254cea76a395878ec7031cc',
                    cardno:'36028119990928145x'
                }
            }).then(res=>{
                console.log(res);
                console.log(res.data);
                console.log(res.data.result.area);
              
            })

            }
                 
        },

        mounted: function () {
            var _this = this   //很重要！！
            axios.get('/api/idcard/index',{
                 params: {
                    key:'99dbb9a12254cea76a395878ec7031cc',
                    cardno:'36028119990928145x'
                }
            })
                .then(function (res) {
                    console.log(res);
                    _this.tableData = res.data
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

    }
</script>

<style scoped>

</style>