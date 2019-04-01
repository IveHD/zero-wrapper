// Compiled using marko@4.16.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "$/app/view/marko.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_escapeScript = marko_helpers.xs;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div>The current count is " +
    marko_escapeXml(data.name) +
    "</div><script>\n    console.log(" +
    marko_escapeScript(data) +
    ");\n</script>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "$/app/view/marko.marko"
  };
