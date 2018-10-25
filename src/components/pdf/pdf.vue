<template>

    <div>
        <code>
         
            <iframe :src="url" frameborder="0" width="100px" height="70px" :style="">
                
            </iframe>
            <hr>

            <!-- <iframe :src="'/static/pdf/web/viewer.html?file='+checkUrl" height="560" width="100%">

            </iframe> -->
            <!-- <iframe :src="checkUrl"  width="100%" height="560" :style="">
                
            </iframe> -->


            <button @click="open">解忧杂货铺</button>
            <button @click="opens">demo</button>

            <el-button @click="checkContract">
                点击预览pdf
            </el-button>
            
            <!-- 被 checkContract 控制 子组件-->
            <!-- <md-view :visible="contractVisable"
                    
                        @handleModal="close">

            </md-view> -->

               <md-contract :visible="contractVisable"
                     :showBtns="true"
                     @handleModal="close">
                </md-contract>


            <hr>
           
		
            <iframe :src="'https://view.officeapps.live.com/op/view.aspx?src='+exUrl" width='100%' height='500' frameborder='1' >

            </iframe>
        </code>
    </div>
</template>

<script>
import mdContract from "./pdfzi";
    export default {
        name: 'page-one',
        components: {
            mdContract
        },
        data(){
            return{
               exUrl:'http://storage.xuetangx.com/public_assets/xuetangx/PDF/1.xls',
              exUrls:'./软件需求确认书2018.10.22.docx',
                checkUrl:'http://image.cache.timepack.cn/nodejs.pdf',
                
                sss:'./excel-list.xlsx',
                url:'../../../static/pdf/web/解忧杂货店.pdf',
                xuqiu:'D:/GS/jiqiao/element/project-name/src/components/pdf/档案文件.xls',


                contractVisable: false,
                visible:true
            }
        },

        methods:{
            open(){
                let url ='解忧杂货店.pdf'
              window.open('/static/pdf/web/viewer.html?file'+ this.url)
            },
            opens(){
               let url = 'http://image.cache.timepack.cn/nodejs.pdf'  // 有效 服务器配置跨域处理
                window.location.href('/static/pdf/web/viewer.html?file=' + url)

            },


            checkContract() {
                this.contractVisable = !this.contractVisable
            },
            close () {
                this.contractVisable = false
            }
        }
        
    }
</script>

<style scoped>

</style>