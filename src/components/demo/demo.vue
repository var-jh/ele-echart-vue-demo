<template>
    <div>
        <!-- <ul>
            <li class="lis">
                <div>移入</div>
                <div class="div">
                    haver显示
                </div>
            </li>
            <li class="lis">
                <div>移入</div>
                <div class="div">
                    haver显示
                </div>
            </li>
            <li class="lis">
                <div>移入</div>
                <div class="div">
                    haver显示
                </div>
            </li>
            <li class="lis">
                <div>移入</div>
                <div class="div">
                    haver显示
                </div>
            </li>
            <li class="lis">
                <div>移入</div>
                <div class="div">
                    haver显示
                </div>
            </li>
            <li class="lis">
                <div>移入</div>
                <div class="div">
                    haver显示
                </div>
            </li>
            
        </ul> -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
           
            }
           

        },
        methods:{
        
        }
    }
</script>

<style scoped>
.lis{
    width: 200px;
    height: 30px;
    background: blue;
    position: relative;
    
}
.lis .div{

    background: red;
    /* float: right; */
    position: absolute;
    display: none;
    right:-90px;
    
}
.lis div{
   display: inline-block;
}
.lis:hover .div{
     display: inline-block;
}
</style>