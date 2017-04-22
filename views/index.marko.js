function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      escapeScript = __helpers.xs;

  return function render(data, out) {
    out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"robots\" content=\"INDEX,FOLLOW\"> <title>Seats Reservation App</title><link href=\"/stylesheets/app.css\" media=\"screen\" rel=\"stylesheet\"> </head><body class=\"reserve\"><h3>Seats Reservation App</h3><div id=\"reserve__comp\">" +
      str(data.serverside_rendered_html) +
      "</div><script async defer src=\"/javascripts/bundle.min.js\"></script><script type=\"text/javascript\">\n\t\t\tvar seats_data = " +
      escapeScript(JSON.stringify(data.seats_data)) +
      ";\n\t\t</script></body></html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
