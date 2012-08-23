var Friend = function()
{
	var exports = {};

	function callback(response)
	{
		console.log(response);
	}

	function init(uid)
	{
		FB.api(uid+'/likes', callback);
	}
	exports.init = init;

	return exports;
}