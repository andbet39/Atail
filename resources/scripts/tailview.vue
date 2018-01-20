<template>
    <div class="logcontainer" v-chat-scroll :style="{  fontSize: fontsize + 'px' }" >
        <ul >
            <li v-for="line in lines">{{line.timestamp | moment("D-M-YY, h:mm:ss")}} - {{line.line}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['lines','fontsize'],
        updated:function(){
            
        },
        data:function(){
            return{
                
                
            }
        }
     }
     
 </script>

<style scoped>
.logcontainer{

    overflow-y: auto;
    max-height: 90vh;
    flex: 1 1 auto;
    
}
.logcontainer::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

.logcontainer::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}

.logcontainer::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>