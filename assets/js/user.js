var User = function()
{
	var exports = {};

	function lookup()
	{
        FB.api('/me', function(response) 
        {
            exports.first_name = response.first_name;
        });
	}
	exports.lookup = lookup;

	function get()
	{
		return exports.first_name;
	}
	exports.get = get;

	return exports;
}