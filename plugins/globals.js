import Vue from 'vue'
import VueMarkdown from 'vue-markdown'
if (process.browser) {
    const ElementUI = require('element-ui')
    const locale = require('element-ui/lib/locale/lang/ru-RU')

    Vue.use(ElementUI, { locale })
    Vue.component('vue-markdown',VueMarkdown)
}
