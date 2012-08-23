var Friend = function()
{
	var exports = {};
	exports.likes = [];

	function callback(response)
	{
		for (var i = 0; i < response.data.length; i++)
			exports.likes.push(response.data[i].name);

		for (var i = 0; i < exports.likes.length; i++)
			gifts.search(exports.likes[i]);
	}

	function lookup(uid)
	{
		FB.api(uid+'/likes', callback);
	}
	exports.lookup = lookup;

	return exports;
}