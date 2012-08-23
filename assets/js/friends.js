var Friends = function()
{
	var exports = {};

	function lookup()
	{
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
            query: 'SELECT name, birthday_date FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1 = me()) AND strlen(birthday_date) != 0 AND ((substr(birthday_date, 0, 2) = '+current_timestamp.month+' AND substr(birthday_date, 3, 5) >= '+current_timestamp.day+') OR (substr(birthday_date, 0, 2) = '+future_timestamp.month+' AND substr(birthday_date, 3, 5) < '+future_timestamp.day+')) ORDER BY birthday_date'
        }, function(response)
        {
            exports.friends = response;
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