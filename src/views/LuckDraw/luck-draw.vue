<template>

</template>
<script lang="ts"  setup>
import {onMounted, reactive} from "vue";

const state = reactive({
  color: 'red'
})
onMounted(()=>{

})
</script>
<style>
/*.text {*/
/*  color: v-bind("state.color")*/
/*}*/
</style>