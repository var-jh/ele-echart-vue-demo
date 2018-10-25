<template>
    <div>
        <input type="text" value="" id="input">
        <button @click="refer">提交</button>
    <!-- 显示信息 -->

    <el-table
      :data="itemList"
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
    export default {
        data(){
            
            return{
                itemList: [
                    {area:'居住地',
                    sex:'中性',
                    birthday:'1000-100-100'
                    }

                ]//data数据
              
            }
 
        },
        methods:{
        
       
        refer :function(){
             var value=document.getElementById('input').value;
             console.log(value);
            //  var _this =this
            this.axios({
                url:'/api/idcard/index',
                params: {
                    key:'99dbb9a12254cea76a395878ec7031cc',
                    cardno:'value'
                }
            }).then(res=>{
                console.log(res);
                console.log(res.data);
                console.log(res.data.result.area);
              this.itemList =res.data
            })

            }
                 
        },

        mounted(){
                 
           
              
        }

    }
</script>

<style scoped>

</style>