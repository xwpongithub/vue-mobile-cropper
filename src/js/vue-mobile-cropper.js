import Cropper from 'cropperjs'

export default {
  name: 'vue-mobile-cropper',
  props: {
    aspectRatio: {
      type: Number,
      default: 1
    },
    autoCropArea: {
      type: Number,
      default: 0.8
    },
    viewMode : {
      type: Number,
      default: 1
    }
  },
  computed: {
    cropperOptions() {
      return {
        aspectRatio: this.aspectRatio,
        autoCropArea: this.autoCropArea,
        viewMode: this.viewMode,
        guides : true ,
        cropBoxResizable: true ,
        cropBoxMovable: true ,
        dragCrop: true ,
        background: false,
        checkOrientation: true ,
        checkCrossOrigin: true ,
        zoomable: false,
        zoomOnWheel: false ,
        center: false ,
        toggleDragModeOnDblclick: false ,
      }
    }
  },
  render(h) {
    return h('div', 'cropper component')
  },
  mounted() {

  }
}
