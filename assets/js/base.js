/**
 * Write all your event listeners in the 
 * document.ready function or else they
 * may not bind correctly. As a side note, I like
 * to just call a public function in a class
 * to handle all your bindings here.
 */

// Gives your classes a global scope
var friends;
var frontpage;
var user;

$(document).ready(function() {
    frontpage = new Frontpage();
    friends = new Friends();
    user = new User();

	window.fbAsyncInit = function() {
    	FB.init({
      		appId      : '402923146436440',
      		channelUrl : 'channel.html',
      		status     : true,
      		cookie     : true,
      		xfbml      : true
    	});

		// frontpage.login();
        FB.Event.subscribe('auth.login', function(response) { frontpage.login_callback(); }); 
        FB.getLoginStatus(function(response) { if (response.status === 'connected') frontpage.login_callback(); });
	};

	(function(d){
 		var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
 		if (d.getElementById(id)) {return;}
 		js = d.createElement('script'); js.id = id; js.async = true;
 		js.src = "//connect.facebook.net/en_US/all.js";
 		ref.parentNode.insertBefore(js, ref);
	}(document));
});