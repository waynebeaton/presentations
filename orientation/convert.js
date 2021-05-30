/*
 * Copyright (C) Eclipse Foundation, Inc. and others. 
 * 
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 * 
 * SPDX-License-Identifier: EPL-2.0
 */
// Load Asciidoctor.js and the reveal.js converter
var asciidoctor = require('@asciidoctor/core')()
var kroki = require('asciidoctor-kroki')
kroki.register(asciidoctor.Extensions)
var asciidoctorRevealjs = require('@asciidoctor/reveal.js')
asciidoctorRevealjs.register()
var registry = asciidoctor.Extensions.create()
kroki.register(registry)
// Convert the document 'presentation.adoc' using the reveal.js converter
var options = { safe: 'safe', backend: 'revealjs', base_dir: '/gitroot/presentations/orientation/' }
asciidoctor.convertFile('orientation.adoc', options)
