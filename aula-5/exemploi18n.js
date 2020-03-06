var i18n = require('i18n')

i18n.configure({
    defaultLocale: 'en',
    locales: ['pt-BR', 'pt', 'en'],
    extension: '.json'
})


i18n.init()

console.log(i18n.__({phrase: "bus", locale: 'en'}))
console.log(i18n.__({phrase: "bus", locale: 'pt'}))
console.log(i18n.__({phrase: "bus", locale: 'pt-BR'}))

console.log(i18n.__n({singular: "%s student", plural: "%s students", locale: 'en'}))
console.log(i18n.__n({singular: "%s student", plural: "%s students", locale: 'pt-BR'}))
console.log(i18n.__n({singular: "%s student", plural: "%s students", locale: 'pt-BR'}))


console.log(i18n.__l('bus'));
console.log(i18n.__h('bus'));
