<template lang="html">
    <section class="main">
      <navbar @toggledate="datevisible=!datevisible" @increasefont="fontsize++" @decreasefont="fontsize--" ></navbar> 
       <div class="columns">
          <div class="column is-2 aside  hero is-fullheight">
              <div class="container is-fluid">
                <channel-list @joinchannel="joinChannel" :channels="channels"></channel-list>
              </div>
          </div>

          <div class="column is-10 hero is-fullheight">
              <tail-view :datevisible="datevisible" :lines="buffers[selected_channel]" :fontsize="fontsize" ></tail-view>
          </div>
     
       </div>
       </section>
</template>

<script>

import TailView from './tailview.vue'
import NavBar from './navbar.vue'
import ChannelList from './channelList.vue'

export default {
  components:{
    'tail-view':TailView,
    'navbar':NavBar,
    'channel-list': ChannelList,
  },
  sockets:{
    connect: function(){
      console.log('socket connected')
    },
    newline: function(val){
      const channel = val.message.channel

      if (!this.buffers[channel]){
        this.buffers[channel]=[]
      }
      this.buffers[channel].push(val.message) 

      if (this.buffers[channel].length > this.max_buffer_size){
        this.buffers[channel].shift()
      }

      if(!this.channels.includes(channel)){
        this.channels.push(channel)
      }

    
    }
  },
  created:function(){
  },
  data: function() {
    return {
      sidenav_toggle:true,
      channels:[],
      buffers:{},
      selected_channel:null,
      fontsize:14,
      max_buffer_size:500,
      datevisible:true
    }
  },
  methods:{
    joinChannel:function(event){
      console.log(event)
      this.selected_channel=event.channel
    },
    togglesidebar:function(){
      this.sidenav_toggle = !this.sidenav_toggle
    }
  }
}
</script>

<style>

</style>
