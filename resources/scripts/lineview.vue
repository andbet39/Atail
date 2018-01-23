<template>
    <div class="columns">
        <div v-if="datevisible" class="column is-2 ansi_console_snippet">{{linedata.timestamp | moment("D-M-YY, h:mm:ss")}}</div>
        <div v-html="linedata.line" class="column ansi_console_snippet"></div>
    </div>
</template>

<script>
    export default {
        props:['linedata','datevisible']
    }
</script>

<style scoped>
.data-time{
    padding-top: 4px;
    padding-bottom: 4px;
}
.data-line{
    padding-top: 4px;
    padding-bottom: 4px;
 }
  
</style>