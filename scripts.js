	var isLogged = false;
	alert("Jake");
	/**
	 * Method used to log into the application
	 */

	$(document).on("submit", "#form1", function(event) {

	    alert("submit happened");
	    event.preventDefault();
	    $.ajax({
	        type: "POST",
	        url: "http://www.karsv.com/login.php",
	        data: $(this).serialize(),
	        error: function(jqXHR, textStatus, errorThrown) {
	            alert(" server error " + textStatus + ":" + errorThrown)
	        },
	        success: function(data) {
	            alert(data);
	            if(data.match('successbully')) {
	                isLogged = true;
	                alert("SUCCESS");
	                $.mobile.changePage("#home");
	            }
	            else {
	                alert("You entered the wrong username or password. Please try again.");
	            }
	        }
	    });
	});