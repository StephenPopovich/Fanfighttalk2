
$(document).ready(function(){


			$("h4").fadeIn(1000);
			$("section > label:even").css("border-bottom", "3px groove red");
			$("section > label:odd").css("opacity", ".7");

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
	 
  
  });