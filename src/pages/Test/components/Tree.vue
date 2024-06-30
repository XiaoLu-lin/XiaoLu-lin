<template>
  <Popup v-model:show="baseVisible" round position="bottom" :style="{ height: '80%' }">
    <div class="popup-title">
      <div class="popup-title-close" @click="() => baseVisible = false">
        <Icon name="cross" size="16" />
      </div>
      <div class="popup-title-name">标题</div>
      <div class="popup-title-confirm" @click="handleConfirm">确定</div>
    </div>
    <div class="popup-content">
      {{ checked }}
      <CheckboxGroup v-model="checked">
        <Tabs v-model:active="active" shrink>
          <Tab v-for="(item, index) in tabList" :name="item.id">
            <template #title>
              {{ item?.text ? item?.text : '请选择' }}

            </template>

            <CellGroup inset>
              <Cell v-for="(item, index) in list" clickable :key="item.id" :isLink="!!item.children"
                :title="`复选框 ${item.text}`" @click="toggle(index, item)">
                <template #icon>
                  <Checkbox :name="item.text" :ref="el => checkboxRefs[index] = el" @click.stop />
                </template>
              </Cell>
            </CellGroup>
          </Tab>
        </Tabs>
      </CheckboxGroup>

    </div>
  </Popup>
</template>

<script setup lang="ts">
import { Button, Popup, Tab, Tabs, Icon, CheckboxGroup, Checkbox, CellGroup, Cell } from 'vant';
import { onBeforeUpdate } from 'vue';
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
const active = ref()
const tabList = ref<{ id?: string | number, text?: string }[]>([{}])
const list = ref([
  {
    text: '浙江',
    id: 10,
    children: [
      { text: '杭州', id: 101 },
      { text: '温州', id: 102 },
      { text: '宁波', id: 103, disabled: true },
    ],
  },
  {
    text: '江苏',
    id: 20,
    children: [
      { text: '南京', id: 204 },
      { text: '无锡', id: 205 },
      {
        text: '徐州', id: 206, children: {
          text: '大景山',
          id: 2078,
          children: [
            { text: '南京', id: 20789 },
            { text: '无锡', id: 20785 },
            { text: '徐州', id: 20186 },
          ],
        },

      },
    ],

  },

  { text: '福建', id: 30, disabled: true },
])

const handleConfirm = () => {
  baseVisible.value = false
}
const checked = ref([]);
const checkboxRefs = ref([]);
const toggle = (index, item) => {
  checkboxRefs.value[index].toggle();
  if (item?.children) {
    tabList.value.push(item)
  }
};

onBeforeUpdate(() => {
  checkboxRefs.value = [];
});



</script>


<style scoped >
.popup-title {
  display: flex;
  align-items: center;
  padding: 8px;

}

.popup-content {
  /* padding: 8px; */

}

.popup-title-close {
  width: 40px;

}

.popup-title-name {
  flex: 1;
  text-align: center;
}

.popup-title-confirm {
  width: 40px;

}
</style>
