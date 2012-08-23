var Friends = function()
{
	var exports = {};

	function write()
	{
		$('#loading').remove();
		$('html, body').animate({scrollTop:$('#friends').offset().top}, 'slow');
		$('#friends-header').fadeIn();

		for (var i = 0; i < exports.friends.length; i++)
		{
			var person = exports.friends[i];
			var html = '<li class="span3" style="display: none;"><div class="thumbnail"><img src="'+person.pic_big+'" /><h4>'+person.name+'</h4><p><img src="assets/img/gift.png" /> '+person.birthday_date+'</p><a class="btn btn-primary" data-fbid="'+person.uid+'">Find Gifts</a></div></li>';

			$('#friends').append(html);
		}

		$('#friends li').fadeIn();
		$('#friends a').click(function()
		{
			friend.lookup($(this).attr('data-fbid'));
			$('#suggestions-header').fadeIn();
			$('#suggestions').empty();

			$('#suggestions').css('height', '800px');
			$('html, body').animate({scrollTop:$('#suggestions-header').offset().top}, 'slow');
		});
	}

	function lookup()
	{
		$('#header').after('<h1 id="loading">Looking up your friends :)</h1>');

		var timestamp = new Date();

	    var current_timestamp = {
	        day: timestamp.getDay(),
	        month: timestamp.getMonth()
	    };
        timestamp.setDate(timestamp.getDate() + 90); // 90 days from now.
        var future_timestamp = {
            day: timestamp.getDay(),
            month: timestamp.getMonth()
        };

        FB.api({
            method: 'fql.query',
            query: 'SELECT uid, name, birthday_date, pic_big FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) AND strlen(birthday_date) != 0 AND ((substr(birthday_date, 0, 2) = '+current_timestamp.month+' AND substr(birthday_date, 3, 5) >= '+current_timestamp.day+') OR (substr(birthday_date, 0, 2) = '+future_timestamp.month+' AND substr(birthday_date, 3, 5) < '+future_timestamp.day+')) ORDER BY birthday_date'
        }, 
        function(response)
        {
            exports.friends = response;
	        write();
        });
	}
	exports.lookup = lookup;

	function get()
	{
		return exports.friends;
	}
	exports.get = get;

	return exports;
}