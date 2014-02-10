var HeaderInjection = function (url){

	this.init(url);
}

HeaderInjection.prototype = {

	init: function(url){
		this.el = document.createElement('nav')

		// this.footer = document.getElementById('injection_footer')

		this.ul = document.createElement("ul")

		this.li_1 = document.createElement("li")
		this.a_href_1 = document.createElement("a")

		this.a_href_1.setAttribute("href", "http://about.me/justinmcmurdie")
		this.a_href_1.innerText = "Who am I?"
		this.a_href_1.className = 'header link'

		var my_url = url.split('/')
		var title = my_url[(my_url.length) - 1]

		this.li_2 = document.createElement("li")
		this.a_href_2 = document.createElement("a")

		this.a_href_2.setAttribute("href", "justinmcmurdie.html")
		this.a_href_2.innerText = "Internal"
		this.a_href_2.className = 'header link'

		this.li_3 = document.createElement("li")
		this.a_href_3 = document.createElement("a")

		this.a_href_3.setAttribute("href", "index.html")
		this.a_href_3.innerText = 'What is D3js?'
		this.a_href_3.className = 'header link'
		
		if (title == 'index.html' || url == 'http://project1.mcmurdie.net/'){
			this.a_href_3.id = 'active'
		}else if(title == 'justinmcmurdie.html'){
			this.a_href_2.id = 'active'
		}


		this.el.appendChild(this.ul)
		this.ul.appendChild(this.li_1)
		this.ul.appendChild(this.li_2)
		this.ul.appendChild(this.li_3)

		this.li_1.appendChild(this.a_href_1)
		this.li_2.appendChild(this.a_href_2)
		this.li_3.appendChild(this.a_href_3)




		/*
		<nav>
			<ul>
				<li><a href = "http://about.me/justinmcmurdie" class='header link'>Who am I?</a></li>
				<li><a href = "justinmcmurdie.html" class='header link'>Internal</a></li>
				<li><a href = 'index.html' id='active' class = 'header link' >What is D3js</a></li>
			</ul>
		</nav>
		*/



		
	},
	






}