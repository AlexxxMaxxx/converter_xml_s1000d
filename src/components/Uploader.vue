<template>
  <div 
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    class="uploader"
  >
     <span>Перетащите файл сюда</span>
     <span>ИЛИ</span>
     <label>
      Выберите файл
      <input 
        type="file" 
        name="uploaderFile"
        accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"/>
     </label>
     
  </div>
</template>

<script>
export default {
  name: "Uploader",

}
</script>