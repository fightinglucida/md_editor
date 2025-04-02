<script setup lang="ts">
const aboutDialogVisible = ref(false)
</script>

<template>
  <MenubarMenu>
    <MenubarTrigger @click="aboutDialogVisible = true">
      关于
    </MenubarTrigger>
  </MenubarMenu>

  <AboutDialog :visible="aboutDialogVisible" @close="aboutDialogVisible = false" />
</template>
