<template lang="html">
    <section class="main">
      <navbar></navbar> 
       <div class="columns">
          <div class="column is-3 aside  hero is-fullheight">
              <div class="container is-fluid">
                <channel-list @joinchannel="joinChannel" :channels="channels"></channel-list>
              </div>
          </div>

          <div class="column is-9 hero is-fullheight">
              <tail-view :lines="buffers[selected_channel]" fontsize="10" ></tail-view>
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
    'channel-list': ChannelList
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

      if(!this.channels.includes(channel)){
        this.channels.push(channel)
      }


    }
  },
  computed: {
    // a computed getter
    lines: function () {
      // `this` points to the vm instance
      return this.buffers[this.selected_channel]
    }
  },
  created:function(){
  },
  data: function() {
    return {
      sidenav_toggle:true,
      channels:[],
      buffers:{},
      selected_channel:null
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
