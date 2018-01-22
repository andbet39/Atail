<template>
    <aside class="menu">
              
        <h3 class="menu-label">Channel List</h3>
        <ul class="menu-list">
            <li v-for="channel in channels">
                <a @click.prevent="joinChannel(channel)" href="#">{{channel}}</a>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        props:['channels'],
        methods:{
            joinChannel:function(channel){
                console.log("joined : " + channel)
                this.$emit('joinchannel',{'channel':channel})
            }
        }
    }
</script>

<style scoped>
    .menu{
        padding-top: 30px;
    }
</style>