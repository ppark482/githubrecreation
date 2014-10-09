var url = 'https://api.github.com/users/ppark482';

// var userName = '<%= login %>';
//
// var userNameR = _.template(userName);
//
// var userNameF = userNameR({ login: 'ppark482'});
//
$.getJSON(url).done( function (user_data) {
  console.log(user_data);
});
//
// $('.nameBox span').html(userNameF);
// this works and replaces both name and username on the page

var user_template = $('#user_header').html(),
    user_render = _.template(user_template);

$.getJSON(url).done( function (user_data) {
  $('.smallUser img').html(user_render(user_data));
  $('.smallUser span').html(user_render(user_data));
});

var sidebar_template = $('#sidebar_user').html(),
    sidebar_render = _.template(sidebar_template),
    sidestat_template = $('#sidebar_stats').html(),
    sidestat_render = _.template(sidestat_template)
    sidefoll_template = $('#side_followers').html(),
    sidefoll_render = _.template(sidefoll_template);

$.getJSON(url).done( function (user_data) {
  $('.nameBox').append(sidebar_render(user_data));
  $('.userStats ul').append(sidestat_render(user_data));   $('.followerCounter').append(sidefoll_render(user_data));
});
