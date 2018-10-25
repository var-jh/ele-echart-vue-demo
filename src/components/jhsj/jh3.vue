<template>
    <div>
        
        <span :title="msg">
            你说滴点我一下
            <button @click="alest" >切换</button>
        </span>
        <div class="vif" v-show="ttt" :class="{ red:zhuangtai }">
        </div>
            <hr>
         <div class="vif" v-if="sss" :class="[styles.hiden]">
        </div>

        <div v-else :style="quan">
            您的权限不够。
        </div>


        <ol>
            <li v-for="todo in todos">
                {{todo.text}}
            </li>
        </ol>
        <input type="text"  placeholder="输入数字">
        <textarea  type="text" v-model="model" placeholder="请输入文字"></textarea>
        <div style="white-space: pre-line;">{{model}}</div>

        <hr>
        <input type="button" value="sssss">
        <button >
           sssss
        </button>
        <hr>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>

        <hr>
        <div id="example-3">
            <input type="checkbox" name="ex" id="jack" value="jack" v-model="checkedNames">
            <label for="jack">jack</label>

              <input type="checkbox" name="ex" id="john" value="john" v-model="checkedNames">
            <label for="john">john</label>

              <input type="checkbox" name="ex" id="mike" value="mike" v-model="checkedNames">
            <label for="mike">jack</label>
            <br>
            <span>
                选中状态的值：{{checkedNames}}
            </span>
        </div>

        <hr>
        <select v-model="selected">
            <option v-for="option in options" :value="option.value">
                {{option.text}}
            </option>
          
        </select>
         <span>你选择了{{selected}}</span> 

        <hr>

        <!-- <iframe src="../../../build/解忧杂货店.pdf" frameborder="0"  width="1000px" height="600px">
           
        </iframe> -->

  
    </div>
</template>

<script>
    export default {
        data(){
            return{
                model:'',
                checked:'', //true or false
                checkedNames:[], //存储选中数组的值
                selected:'A',
                styles:{
                     hiden:'red'
                },
                quan:{
                    
                    width:'200px',
                    height:'100px',
                    border:'1px red solid',
                    'text-align': 'center',
                },

              zhuangtai:true,
               msg:'页面加载于 ' + new Date().toLocaleString(),
               sss: true ,//false
               ttt:false,
               todos:[
                { text: '学习 JavaScript' },
                { text: '学习 Vue' },
                { text: '整个牛项目' }
            ],
                options:[
                    {text:'one',value:'ASSSS'},
                    {text:'two',value:'B'},
                    {text:'three',value:'C'}
                ]


            }

            

            
        },

    methods:{
       

        alest(){
            // !hiden
            // console.log(hiden);
            // this.$set(this.todos,"text","干巴爹")
          }

    },

    mounted(){

    }


    }
</script>

<style scoped>
    .vif{
        text-align: center;
        background: blueviolet;
        width: 200px;
        height: 120px;
        
    }
    .red{
        background: deeppink;
        width: 300px;
        height: 120px;
    }
</style>