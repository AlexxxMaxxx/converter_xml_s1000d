<template>
  <div class="app">
    <h1>Конвертировать Word в XML S1000D</h1>
    <Uploader></Uploader>
    <span class="file-info">Файл: {{ uploaderFile.name }}</span>
  </div>
</template>

<script>
import Uploader from '@/components/Uploader';
import { ref } from 'vue';

export default {
  components: {
    Uploader
  },
  setup() {
    const uploaderFile = ref("");
    
    return {
      uploaderFile
    };
  },
}
</script>

<style lang="scss">
  
</style>