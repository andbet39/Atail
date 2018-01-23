<template>
    <div class="logcontainer" v-chat-scroll :style="{  fontSize: fontsize + 'px' }" >

        <ul class="shell-body">
            <li v-for="line in intlines"><lineview :datevisible="datevisible" :linedata="line"> </lineview></li>
        </ul>
    </div>
</template>

<script>
    import LineView from './lineview.vue'
    export default {
        props:['lines','fontsize','datevisible'],
        components:{
            'lineview':LineView
        },
        data:function(){
            return{
                intlines:[]
                }
        },
        watch:{
            lines:
            {
                handler:function(newval){
                      this.intlines=newval
                },
                deep:true
            }
        }
     }
     
 </script>

<style scoped>
.logcontainer{
    background-color: #222222;
    max-height: 93vh;
    min-height: 93vh;
    overflow-y: auto;
    padding-bottom: 100px;
}

.shell-wrap {
 
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

 

.shell-body {
  margin: 0;
  padding: 5px;
  list-style: none;
  background: #141414;
  color: #45D40C;
  font: 1.2em 'Andale Mono', Consolas, 'Courier New';
  line-height: 1.7em;

  -webkit-border-bottom-right-radius: 3px;
  -webkit-border-bottom-left-radius: 3px;
  -moz-border-radius-bottomright: 3px;
  -moz-border-radius-bottomleft: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.shell-body li:before {
  position: absolute;
  left: 0;
  top: 0;
}

.shell-body li {
  word-wrap: break-word;
  position: relative;
  padding: 0 0 0 15px;
}
</style>