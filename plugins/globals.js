import Vue from 'vue'
import VueMarkdown from 'vue-markdown'
import DateFilter from '@/comman/date.filter'
if (process.client) {
    const ElementUI = require('element-ui')
    const locale = require('element-ui/lib/locale/lang/ru-RU')
    Vue.use(ElementUI, { locale })
    Vue.component('vue-markdown',VueMarkdown)
    Vue.filter('date',DateFilter)
}


