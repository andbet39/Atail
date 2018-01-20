<template lang="html">
 <div id="wrapper" :class="{toggled : sidenav_toggle}" >
        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                        ATail
                    </a>
                </li>
                <li class="active" ><a href="#">Channel1</a></li>
                <li><a href="#">Channel2</a></li>
                <li><a href="#">Channel3</a></li>
                <li><a href="#">Channel4</a></li>
            </ul>
        </div>
        <!-- /#sidebar-wrapper -->
                <nav class="navbar navbar-light bg-light">
                  <div class="navbar-brand" href="#">
                    <button @click="togglesidebar()" class="navbar-toggler" type="button"   aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <span class="channelname">Channel name</span>
                  </div>
                   
                </nav>
        <!-- Page Content -->
        <div id="page-content-wrapper">
          <tail-view :lines="lines" :fontsize="12"/>
        </div>
        <!-- /#page-content-wrapper -->

    </div>
</template>

<script>

import TailView from './tailview.vue'
export default {
  components:{
    'tail-view':TailView
  },
  sockets:{
    connect: function(){
      console.log('socket connected')
    },
    newline: function(val){
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
      this.lines.push(val.message)
    }
  },
  created:function(){
    this.$socket.emit('join', 'channel1');
  },
  data: function() {
    return {
      lines:[],
      sidenav_toggle:true
    }
  },
  methods:{
    togglesidebar:function(){
      this.sidenav_toggle = !this.sidenav_toggle
    }
  }
}
</script>

<style>
#page-content-wrapper{
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
}
.channelname{
  padding-left: 30px;
}
</style>
