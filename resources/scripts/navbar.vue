<template>
    <nav class="navbar has-shadow">
        <a class="navbar-item">
            <h1 class="title"> ATaliA</h1>
        </a>
        <div class="navbar-end">
        <div class="navbar-item has-dropdown"  :class="{'is-active' : setting_enabled}">
            <a @click.prevent="toggleSettings" class="navbar-link">
            Settings
            </a>

            <div class="navbar-dropdown">
                <div class="navbar-item">
                    <div class="columns">
                        <div class="column">
                            Font Size
                        </div>
                        <div class="column">
                             <button @click.prevent="increaseFont" class="button is-small is-rounded"> + </button>
                             <button  @click.prevent="decreaseFont" class="button button is-small is-rounded"> - </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </nav>
</template>

<script>
    export default {
        data:function(){
            return {
                setting_enabled:false
            }
        },
        methods:{
            increaseFont:function (e){
                this.$emit('increasefont')
            },
            decreaseFont : function(e){
                this.$emit('decreasefont')
            },
            toggleSettings : function(){
                this.setting_enabled = !this.setting_enabled
            }
        }
    }
</script>

<style scoped>

</style>