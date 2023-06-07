<template>
<div class="home">
  <h1>DropZone</h1>
  <drop-zone />
</div>
</template>

<script>
import DropZone from '../components/DropZone.vue'

export default {
  name: 'HomeView',
  components: { DropZone },
  
}
/*import DropZone from "../components/DropZone.vue"
import { ref } from 'vue'

export default {
  components: { DropZone },
  name: 'HomeView',
  setup() {
    let dropzoneFile = ref("")

    const drop = (event) => {
      dropzoneFile.value = event.dataTransfer.files[0]
      console.log(dropzoneFile.value = event.dataTransfer.files[0])
    }

    const sendFile = () => {
      dropzoneFile.value = document.querySelector('.dropzoneFile').files[0]
      console.log(dropzoneFile.value = document.querySelector('.dropzoneFile').files[0])
    }

    return { drop, dropzoneFile, sendFile }
  }
}*/
</script>

<style scoped>
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
}

h1 {
  font-size: 40px;
  margin-bottom: 32px;
}

.file-info {
  margin-top: 32px;
}
</style>

