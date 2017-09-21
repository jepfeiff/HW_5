
//first we want to make sure the page only loads after everything else
// then probably the next thing would be to target the "form" since that's the whole whatever it is.
//and we want to call it something that we can use below.

$(document).ready(function() {
	$("form").submit(updateImage);
});

// I think that's right - looks right to me.
// oh and we also want to make sure we prevent default.  
//so now we're going here's the updateimage function and we want a variable of city type so that we can work with that.
//something like get a value for different cities?  

function updateImage(e) {
	e.preventDefault();
	var city = $("#city-type").val();

//if city is new york and nyc, etc. etc. then make body background pictures of NYC. arributes of picture.	

	if (city == "NYC" || city == "New York" || city == "New York City") {
		$("body").attr("class", "nyc");
	}
//that actually worked! Put in else to make it a chain?  

	else if (city == "San Francisco" || city == "SF" || city == "Bay Area" || city == "San Fran") {
		$("body").attr("class", "sf");
	}	

	else if (city == "Los Angeles" || city == "LA" || city == "LAX") {
		$("body").attr("class", "la");
	}

	else if (city == "Austin" || city == "ATX" || city == "AUSTIN") {
		$("body").attr("class", "austin");
	}

	else if (city == "Sydney" || city == "Koala-town" || city == "SYD" || city == "Aussieworld") {
		$("body").attr("class", "sydney");
	}

	else {
$("body").attr("class","")  
	}

}


