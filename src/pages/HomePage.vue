<template>
    <div class="home">
      <h1>Конвертировать Word в XML S1000D</h1>
      <Uploader
       @drop.prevent="drop" @change="selectedFile"
      ></Uploader>
      <span class="file-info">Файл: <strong>{{ uploaderFile.name }}</strong></span>
      <button 
       class="home__next-btn next-bth"
       @click="$router.push('/getResult')"
      >Convert</button>
      <!--style + disabled (look btn in pages)-->
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
    let uploaderFile = ref("");

    const drop = (e) => {
      uploaderFile.value = e.dataTransfer.files[0]
    };

    const selectedFile = () => {
       uploaderFile.value = document.querySelector('.uploaderFile').files[0];
    };

    return {
      uploaderFile, drop, selectedFile
    };
  },
}
</script>
