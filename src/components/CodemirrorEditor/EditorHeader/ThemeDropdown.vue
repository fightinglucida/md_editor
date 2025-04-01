<script setup lang="ts">
import { themeOptions } from '@/config'
import { useStore } from '@/stores'

const store = useStore()
const { theme } = storeToRefs(store)
const { themeChanged } = store
</script>

<template>
  <MenubarMenu>
    <MenubarTrigger> 主题 </MenubarTrigger>
    <MenubarContent class="w-56" align="start">
      <MenubarRadioGroup v-model="theme">
        <MenubarRadioItem
          v-for="option in themeOptions"
          :key="option.value"
          :value="option.value"
          @click="themeChanged(option.value)"
        >
          {{ option.label }}
          <span v-if="option.desc" class="text-muted-foreground ml-2 text-xs">{{ option.desc }}</span>
        </MenubarRadioItem>
      </MenubarRadioGroup>
    </MenubarContent>
  </MenubarMenu>
</template>
