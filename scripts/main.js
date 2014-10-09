var userName = '<%= login %>';

var userNameR = _.template(userName);

var userNameF = userNameR({ login: 'ppark482'});

$('.nameBox span').html(userNameF);
// this works and replaces both name and username on the page
