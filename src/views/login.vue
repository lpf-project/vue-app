<template>
	<div>
		<x-header :left-options="{showBack: true}" title="登录"></x-header>
		<div class='input'>
			<group>
      		<x-input title="手机号码" is-type="china-mobile" required v-model='userphone' keyboard="number" placeholder="请输入您的手机号码">
        	<img slot="label" style="padding-right:10px;display:block;" src="../assets/imgs/iphone.png" width="24" height="24">
      		</x-input>
    		</group>
		</div>
		<div class='input'>
			<group>
      		<x-input title="发送验证码" class="weui-vcode" v-model='pwd' keyboard="number" placeholder="请输入密码">
      		<img slot="label" style="padding-right:10px;display:block;" src="../assets/imgs/dentifyingcode.png" width="24" height="24">
       			 <!-- <x-button slot="right" type="primary" mini>发送验证码</x-button> -->
      		</x-input>
    		</group>
		</div>
		<div class='button-long'>
			<x-button @click.native="login_in" id='login_button' type="primary">登录</x-button>
		</div>
		<div v-transfer-dom>
	      <alert v-model="show" title="提示" @on-show="onShow" @on-hide="onHide">{{hintInfo}}</alert>
	    </div>
		<!-- <p class='goRegister'>还没有账号,现在去<span @click='register'>注册</span></p> -->
	</div>
</template>
<script>
import { XHeader,XInput,Group,XButton,Alert,TransferDomDirective as TransferDom } from 'vux'
import { mapGetters } from 'vuex'
	export default {
		data () {
			return {
				userphone:'',
				pwd:'',
				show:false,
				hintInfo:''
			}
		},
		directives: {
    		TransferDom
  		},
		components:{
			XHeader,
			Group,
			XInput,
			XButton,
			Alert
		},
	    computed: {
	      ...mapGetters([
	       'getLogin',
	       'getuname',
	       'getpwd'
	      ])
	    },
		methods:{
			login_in () {
				//console.info('canshu',this.getuname,this.getpwd)
				this.show = true;
				if (this.userphone === '' || this.pwd === '') {
					this.hintInfo = '用户名或密码不能为空';
		            return;
		      }
		      if (this.userphone !== this.getuname || this.pwd !== this.getpwd) {
		      	this.hintInfo = '用户名或密码错误';
		      } else {
		        this.$store.dispatch('setLogin', true);
		        sessionStorage.setItem('setLogin', true);
		        this.$router.replace('/');
		      }
			},
			onHide () {
		      console.log('on hide')
		    },
		    onShow () {
		      console.log('on show')
		    },
		},
		mounted () {

		}
	}
</script>
<style>
	.input{
		padding:0 5px;
	}	
	.button-long{
		margin-top:20px;
	}
	#login_button{
		width:90%;
	}
	.goRegister{
		margin-top:20px;
	}
	.goRegister span{
		color:red;
	}
</style>
