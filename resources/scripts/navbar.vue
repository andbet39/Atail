<template>
    <nav class="navbar has-shadow">
        <a class="navbar-item">
            <h1 class="title"> ATailA</h1>
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
                             <a @click.prevent="increaseFont" class="button is-small"> <i class="fa fa-plus" aria-hidden="true"></i></a>
                             <a @click.prevent="decreaseFont" class="button is-small"> <i class="fa fa-minus" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                 <div class="navbar-item">
                    <div class="columns">
                        <div class="column">
                             <a @click.prevent="toggleDate" class="button is-small"> Toggle Date</i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navbar-item">
                <a href="#">GitHub</a>
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
            },
            toggleDate:function(){
                 this.$emit('toggledate')
            }
        }
    }
</script>

<style scoped>

</style>