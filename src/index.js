import CreateAPI from 'vue-create-api'
import VueMobileCropper from './js/vue-mobile-cropper'
import {version} from '../package.json'

VueMobileCropper.version = version
VueMobileCropper.install = function(Vue) {
  Vue.component(VueMobileCropper.name, VueMobileCropper)
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use(CreateAPI, {
    componentPrefix: 'vue-mobile-',
    apiPrefix: '$create-'
  })
  Vue.createAPI(VueMobileCropper, true)
}
