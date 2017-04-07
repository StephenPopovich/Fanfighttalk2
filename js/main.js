
$(document).ready(function(){

			$("section > label:even").css("border-bottom", "3px groove red");
			$("section > label:odd").css("opacity", ".7");

			$("img.article").css("height", "415px");

			$("input#tab2").click(function() {
			 	$("this").css("border-bottom", "none");
			 	$("section > label:even").css("border-bottom", "none");
			 	$("section > label:even").css("opacity", ".6");
			    $("section > label:odd").css("border-bottom", "3px groove red");
			    $("section > label:odd").css("opacity", "1");
			    $("article#content1").css("display", "none");
			     
			});
			$("input#tab1").click(function() {
			 	$("this").css("border-bottom", "none");
			 	$("section > label:even").css("border-bottom", "3px groove red");
			 	$("section > label:even").css("opacity", "1");
			    $("section > label:odd").css("border-bottom", "none");
			    $("section > label:odd").css("opacity", ".6");
			    $("article#content1").css("display", "");
			     
			});
			$("input#tab22").click(function() {
			 	$("this").css("border-bottom", "none");
			 	$("section > label:even").css("border-bottom", "none");
			 	$("section > label:even").css("opacity", ".6");
			    $("section > label:odd").css("border-bottom", "3px groove red");
			    $("section > label:odd").css("opacity", "1");
			    $("article#content11").css("display", "none");
			     
			});
			$("input#tab11").click(function() {
			 	$("this").css("border-bottom", "none");
			 	$("section > label:even").css("border-bottom", "3px groove red");
			 	$("section > label:even").css("opacity", "1");
			    $("section > label:odd").css("border-bottom", "none");
			    $("section > label:odd").css("opacity", ".6");
			    $("article#content11").css("display", "");
			     
			});
			$("input#tab222").click(function() {
			 	$("this").css("border-bottom", "none");
			 	$("section > label:even").css("border-bottom", "none");
			 	$("section > label:even").css("opacity", ".6");
			    $("section > label:odd").css("border-bottom", "3px groove red");
			    $("section > label:odd").css("opacity", "1");
			    $("article#content111").css("display", "none");
			     
			});
			$("input#tab111").click(function() {
			 	$("this").css("border-bottom", "none");
			 	$("section > label:even").css("border-bottom", "3px groove red");
			 	$("section > label:even").css("opacity", "1");
			    $("section > label:odd").css("border-bottom", "none");
			    $("section > label:odd").css("opacity", ".6");
			    $("article#content111").css("display", "");
			     
			});
			$("input#tab2222").click(function() {
			 	$("this").css("border-bottom", "none");
			 	$("section > label:even").css("border-bottom", "none");
			 	$("section > label:even").css("opacity", ".6");
			    $("section > label:odd").css("border-bottom", "3px groove red");
			    $("section > label:odd").css("opacity", "1");
			    $("article#content1111").css("display", "none");
			     
			});
			$("input#tab1111").click(function() {
			 	$("this").css("border-bottom", "none");
			 	$("section > label:even").css("border-bottom", "3px groove red");
			 	$("section > label:even").css("opacity", "1");
			    $("section > label:odd").css("border-bottom", "none");
			    $("section > label:odd").css("opacity", ".6");
			    $("article#content1111").css("display", "");
			     
			});

			var TxtRotate = function(el, toRotate, period) {
				this.toRotate = toRotate;
				this.el = el;
				this.loopNum = 0;
				this.period = parseInt(period, 10) || 2000;
				this.txt = '';
				this.tick();
				this.isDeleting = false;
			};

			TxtRotate.prototype.tick = function() {
				var i = this.loopNum % this.toRotate.length;
				var fullTxt = this.toRotate[i];

			if (this.isDeleting) {
				this.txt = fullTxt.substring(0, this.txt.length - 1);
			} else {
				this.txt = fullTxt.substring(0, this.txt.length + 1);
			}

			this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

			var that = this;
			var delta = 200 - Math.random() * 100;

			if (this.isDeleting) { delta /= 2; }

			if (!this.isDeleting && this.txt === fullTxt) {
				delta = this.period;
				this.isDeleting = true;
			} else if (this.isDeleting && this.txt === '') {
				this.isDeleting = false;
				this.loopNum++;
				delta = 500;
			}

			setTimeout(function() {
				that.tick();
			}, delta);
			};


			window.onload = function() {
				var elements = document.getElementsByClassName('txt-rotate');
				for (var i=0; i<elements.length; i++) {
					var toRotate = elements[i].getAttribute('data-rotate');
					var period = elements[i].getAttribute('data-period');
					if (toRotate) {
						new TxtRotate(elements[i], JSON.parse(toRotate), period);
					}
			}
			// INJECT CSS
			var css = document.createElement("style");
				css.type = "text/css";
				css.innerHTML = ".txt-rotate > .wrap { 10px; border-right: 0.08em solid red }";
				document.body.appendChild(css);
			};

	 
  
  });