<template>

</template>
<script lang="ts"  setup>
import {onMounted, reactive} from "vue";
import homeRequest from '@/service/home';
const state = reactive({
  color: 'red'
})
onMounted(()=>{
  homeRequest.index(0).then((res: Object)=>{
     console.log(res)
  })
})
</script>
<style>
.text {
  color: v-bind("state.color")
}
</style>