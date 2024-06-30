<template>
  <div>
    <Button @click="() => {
      baseVisible = true
    }">树形</Button>
  </div>
</template>

<script setup lang="ts">
import { Button, Popup, Calendar, ActionSheet } from 'vant';
import { computed } from 'vue';
import { ref } from 'vue'


interface Props {
  visible: boolean
}

const props = withDefaults(defineProps<Props>(), {
  visible: false
})

const emits = defineEmits(['update:visible'])


const baseVisible = computed({
  get() {
    return props.visible
  },
  set() {
    emits('update:visible')
  }
})



</script>


<style scoped></style>
