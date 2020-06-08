let compiler = require('vue-template-compiler')
let t = `<template v-if='true'><p>hello</p><p>hh</p></template>
<div v-else>world</div>`
console.log(compiler.compile(t).render)