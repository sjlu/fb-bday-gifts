var Friend = function()
{
	var exports = {};

	function callback(response)
	{
		console.log(response);
	}

	function lookup(uid)
	{
		FB.api(uid+'/likes', callback);
	}
	exports.lookup = lookup;

	return exports;
}