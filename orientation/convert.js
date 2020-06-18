// Load Asciidoctor.js and the reveal.js converter
var asciidoctor = require('@asciidoctor/core')()
var kroki = require('asciidoctor-kroki')
kroki.register(asciidoctor.Extensions)
var asciidoctorRevealjs = require('@asciidoctor/reveal.js')
asciidoctorRevealjs.register()
var registry = asciidoctor.Extensions.create()
kroki.register(registry)
// Convert the document 'presentation.adoc' using the reveal.js converter
var options = { safe: 'safe', backend: 'revealjs' }
asciidoctor.convertFile('orientation.adoc', options)
