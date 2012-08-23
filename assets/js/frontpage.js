var Frontpage = function()
{
    var exports = {};

    function login_callback(response)
    {
        if (response.authResponse) 
        {   
            user.lookup();
            friends.lookup();
        }
        else
            console.log('Authorization failure.');
    }

    function login()
    {
        var that = this;
        //FB.login(login_callback, { scope: 'friends_birthday,friends_likes,friends_interests' });
    }
    exports.login = login;

    function logout()
    {
        FB.logout();
    }
    exports.logout = logout;

    return exports;
};