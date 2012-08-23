var Frontpage = function()
{
    var exports = {};

    function login_callback()
    {
        user.lookup();
        friends.lookup();
    }
    exports.login_callback = login_callback;

    function login()
    {
        var that = this;
        FB.login(login_callback, { scope: 'friends_birthday,friends_likes,friends_interests' });
    }
    exports.login = login;

    function logout()
    {
        FB.logout();
    }
    exports.logout = logout;

    return exports;
};