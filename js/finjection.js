var FooterInjection = function (url){

	this.init(url);
}

FooterInjection.prototype = {

	init: function(url){
		this.el = document.createElement('div')

		this.p = document.createElement("p")

		// this.footer = document.getElementById('injection_footer')

		this.p.innerText = "You're browsing " + url + " if you feel like going elsewhere try a link at the top"

		this.el.appendChild(this.p)

		
	},
	






}