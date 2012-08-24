var Gifts = function()
{
	var exports = {};
	var google_url = 'https://www.googleapis.com/shopping/search/v1/public/products?key=AIzaSyDCUFzKWkifF4EjySmXdtmSt6Q_fjum3yA&country=US&q='

	function search(interest)
	{
		$.get(google_url+encodeURIComponent(interest), function(response)
		{
			if (typeof response.items === 'undefined')
				return;

			var items = response.items;

			var count = 0;
			for (var i = 0; i < items.length; i++)
			{
				if (count++ > 2)
					break;

				var item = items[i].product;

				if (typeof item.images === 'undefined')
					continue;

				var product = {
					name: item.title,
					link: item.link,
					image: item.images[0].link
				};

				$('#suggestions').append('<li class="span3"><div class="thumbnail"><img src="'+product.image+'" /><h4>'+product.name+'</h4><a class="btn btn-primary" href="'+product.link+' target="_new">Buy</a></div>');
			}
		});
	}
	exports.search = search;

	return exports;
}