<template>
  <div>
    <Button @click="() => {
      show = true
    }">树形</Button>
    <Tree v-model:visible="show"></Tree>
  </div>
</template>

<script setup lang="ts">
import { Button, Popup, Calendar, ActionSheet } from 'vant';
import { ref } from 'vue'
import { Tree } from './components'

const show = ref(false)
const showCalendar = ref(false)

const onConfirm = () => {
  console.log(555);

}

</script>


<style scoped></style>
