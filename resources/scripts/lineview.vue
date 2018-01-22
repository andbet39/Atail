<template>
    <div class="columns ">
        <div class="column is-2 data-time">{{linedata.timestamp | moment("D-M-YY, h:mm:ss")}}</div>
        <div class="column data-line ">{{linedata.line}}</div>
    </div>
</template>

<script>
    export default {
        props:['linedata']
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