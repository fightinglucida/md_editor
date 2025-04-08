<script setup lang="ts">
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([`close`])

function onUpdate(val: boolean) {
  if (!val) {
    emit(`close`)
  }
}

const links = [
  { label: `公众号批量采集工具`, url: `https://hiuinilx1w.feishu.cn/docx/IilldFTYLot3nPxsZmBcA9jTnmf?from=from_copylink` },
  { label: `公众号导航站`, url: `https://www.weixinwriter.com` },
]

function onRedirect(url: string) {
  window.open(url, `_blank`)
}
</script>

<template>
  <Dialog :open="props.visible" @update:open="onUpdate">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>关于</DialogTitle>
      </DialogHeader>
      <div class="text-center">
        <h1>微信 Markdown 编辑器</h1>
        <p />
        <p>扫码关注林书，获取公众号对标库资源</p>
        <img
          class="mx-auto my-5"
          src="https://telegraph-image-evj.pages.dev/file/AgACAgUAAyEGAASVtTkdAAMDZ-yyfXgAATWytCcyFNs5I-emMIflAAJ9wDEbsb1oVy0PE8EDhnzFAQADAgADeAADNgQ.png"
          alt="扫码关注林书，获取公众号对标库资源"
          style="width: 40%"
        >
      </div>
      <DialogFooter class="sm:justify-evenly">
        <Button
          v-for="link in links"
          :key="link.url"
          @click="onRedirect(link.url)"
        >
          {{ link.label }}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
