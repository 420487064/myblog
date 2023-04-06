<template>
    <div id="maxbox">
        <h1>用户登录页面</h1>
        <div class="inputbox">

            <div class="inputText">
                <span class="iconfont icon-mine"></span>
                <input id="zhanghao" type="text" placeholder="账号" autocomplete="off" v-model="form.user"  />
            </div>
            <div class="inputText">
                <span class="iconfont icon-lock"></span>
                <input id="mima" type="password" placeholder="密码" autocomplete="off" v-model="form.pw" />
            </div>

            <input type="button" id="fanhui" value="返回" @click="back()" />
            <input type="button" class="inputButton" value="登入"  @click="dr" />
            <div class="jg"></div>
            <div id="sign_up">
                没有账号？ <a href="#">注册</a>
            </div>

        </div>
    </div>
</template>

<script>
import { login } from '@/api'
export default {
    name:'login',
    data(){
        return {
            form:{
            user:'',
            pw:'',
            }
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        dr(){
            login(this.form).then((data)=>{
                if(data.code == 200){
                this.$cookies.remove('token')
                this.$cookies.set('token',data.token);
                this.$router.push('/home')
                }
            })
            
        }
    }
}
</script>

<style scoped >
@import './index.less';
</style>