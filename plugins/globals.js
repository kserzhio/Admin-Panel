import Vue from 'vue'
if (process.browser) {
    const ElementUI = require('element-ui')
    const locale = require('element-ui/lib/locale/lang/ru-RU')

    Vue.use(ElementUI, { locale })
}
