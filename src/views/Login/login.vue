<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="loginForm.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="loginForm.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>
<script lang="ts" setup>
import {reactive} from "vue";
import {useUserState} from "@/store/modules/user";
import { useRouter } from 'vue-router'
interface ILogin {
  username: string,
  password: string
}
const loginForm = reactive({
  username: '',
  password: ''
})
const router = useRouter();
const onSubmit = () =>{
  const store = useUserState()
  //$action会先于actions函数调用之前执行 相当于watch一个监听器
  store.$onAction(({
                     name,//某个action函数名字
                     store,//当前仓库实例store
                     args,//actions中被调用函数的实参，数组类型
                     after,//钩子函数，promise成功的返回值
                     onError//promise失败的返回值
  }) => {
    if(name === "login"){
      after((result)=>{
        router.push({path: '/'})
      })
    }
    onError ((error) => {
      console.log(error)
    })
  })
  store.login(loginForm)
}
</script>