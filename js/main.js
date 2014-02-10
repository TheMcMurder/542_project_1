console.log("running")
HeaderInjection = new HeaderInjection(document.URL);


var nav = document.getElementById('injection_header')
nav.appendChild(HeaderInjection.el)


FooterInjection = new FooterInjection(document.URL)
var footer = document.getElementById('injection_footer')
footer.appendChild(FooterInjection.el)

