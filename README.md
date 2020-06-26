# Wayne's Eclipse Foundation Presentations

This repository contains some presentations and other related resources (some experimental) related to my work at the Eclipse Foundation. At some point, this repository may be contributed to an Eclipse projects (probably Eclipse Dash).

## Committer Orientation

The [Committer Orientation](orientation/) is a slide deck for an Eclipse Committer Orientation presentation. It describes the Eclipse Foundation Development Process, Eclipse Intellectual Property Due Diligence Process, and other important aspects of running an open source project at the Eclipse Foundation.

Abstract:
> Are you a new committer or project lead for an Eclipse open source project? Are you thinking about proposing a new open source project? In this session, Eclipse Foundation staff members will walk you through the information that you need to know to be an effective open source project committer. The discussion includes an overview of the Eclipse Development Process, the Intellectual Property Due Diligence Process, and the Tools and IT Infrastructure made available to open projects by the Eclipse Foundation.

The directory includes a build file, `convert.js`, that converts the Asciidoc source of into a self-contained HTML presentation using [reveal.js](https://asciidoctor.org/docs/asciidoctor-revealjs/) that can be run in any browser.

﻿To build, you must first initialize the environment by pulling the necessary dependencies using `npm`:

	> npm install

You only need to initialize once.

Invoke the build using `node`:

	> node convert.js
___
Copyright &copy; The Eclipse Foundation, Inc.
Made available under the [Eclipse Public License, v2.0](https://www.eclipse.org/legal/epl-2.0) (EPL-2.0)
