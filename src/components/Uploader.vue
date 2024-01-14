<template>
  <div class="uploader">
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

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app{
  padding: 20px;
}

.uploader {
  margin: 0 auto;
  padding: 15px;
  width: 50%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  border: 2px black dashed;
  border-radius: 10px;
  background-color: white;
  transition: 0.3s ease all;

  label {
    padding: 8px 12px;
    color: white;
    background-color: #A63CD4;
    transition: 0.3s ease all;

    input {
      display: none;
    }
  }
}
</style>