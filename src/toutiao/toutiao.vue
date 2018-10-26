<template>
    <div>

       <!-- 导航按钮 -->
        <el-button  @click="onclick('top')">
            头条
        </el-button>

      <el-button  @click="onclick('shehui')">
            社会
        </el-button>

        <el-button  @click="onclick('guonei')">
            国内
        </el-button>
            <el-button  @click="onclick('yule')">
            娱乐
        </el-button>
            <el-button  @click="onclick('tiyu')">
            体育
        </el-button>
            <el-button  @click="onclick('shishang')">
            时尚
        </el-button>
            <el-button  @click="onclick('keji')">
            科技
        </el-button>
            <el-button  @click="onclick('junshi')">
            军事
        </el-button>

        <ul>
            <li v-for="n in items" :key="n.id"> 
                <div :title="n.date">
                   {{n.author_name}}
                </div>
                <div>
                      {{n.title}}
                </div>
                <div >
                     <a :href="n.url">
                        <img :src="n.thumbnail_pic_s" alt="" :title="n.date">
                        <img :src="n.thumbnail_pic_s02" alt="" :title="n.date">
                        <img :src="n.thumbnail_pic_s03" alt="" :title="n.date">
                  </a>
                </div>
               
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                items:[],//存储数据,

                // style:{
                //     border:"1px red solid",
                //     width:'70px',
                //     height:'40px',
                //     'font-size':'20px',
                //     display:'inline-block'
                // }
            }
        },

        methods:{//写方法
            onclick:function(e){
                // this.axios.get({
                //     // methods:'get',
                //     url:'http://v.juhe.cn/toutiao/index?type=top&key=dd759f2f7bded32dc8516ad6fbc93143',
                //     // data:{
                //     //     key:"dd759f2f7bded32dc8516ad6fbc93143"
                //     // }
                // }).then(res=>{

                //     console.log(res);

                // }).catch(error=>{


                // })
            
                this.axios.get('/apis/toutiao/index',
                    {
                        
                        params:{
                            type: e,
                            key:'dd759f2f7bded32dc8516ad6fbc93143'
                        }
                    }
                ) 
                .then(rep=>{
                    this.items=rep.data.result.data;
                    console.log(rep);
                    console.log(...rep.data);
                    console.log('-------------------------');
                  
                })
            }
        },

        mounted(){//调方法

        },
        created(){
            this.onclick('top');
        },

        // watch(){

        // }

    }
</script>

<style scoped>
h1{
    display: inline-block;
}
</style>