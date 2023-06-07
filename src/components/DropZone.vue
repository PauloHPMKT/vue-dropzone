<template>
  <div 
    :class="{ 'active-dropzone' : active }"
    class="dropzone"
  >
    <span>Drag or Drop file</span>
    <span>OR</span>
    <label for="dropzoneFile">Select file here</label>
    <input type="file" ref="file" @change="sendFile" id="dropzoneFile" />
  </div>
</template>

<script>
import Service from '../service/service-requests'

export default {
  name: 'DropZone',
  data() {
    return {
      file: '',
      message: '',
      error: false,
      active: false,
    }
  },

  methods: {
    async sendFile() {
      const file = this.$refs.file.files[0]
      const formData = new FormData()
      formData.append('file', file)

      try {
        await Service.criarImagem(formData)
        console.log(formData)
      } catch(err) {
        this.message = err.response
        this.error = true
      }
    },

    toggleActive() {
      this.active = !this.active
    }
  }
}
</script>

<style scoped>
.dropzone {
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 16px;
  border: 2px dashed;
  transition: .3s ease all;
}

.dropzone label {
  padding: 8px 12px;
  color: #fff;
  background-color: #41b883;
  transition: .3s ease all;
  cursor: pointer;
}

input {
  display: none;
}

.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: #41b883;
}

label {
  background-color: #fff;
  color: #41b883;
}
</style>