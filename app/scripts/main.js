var url = 'https://api.github.com/users/ppark482';
var repoURL = 'https://api.github.com/users/ppark482/repos';
var starURL =
'https://api.github.com/users/ppark482/starred';
//
// $.getJSON(url).done( function (user_data) {
//   console.log(user_data);
// });

var user_template = $('#user_header').html(),
    user_render = _.template(user_template);

$.getJSON(url).done( function (user_data) {
  $('.smallUser img').html(user_render(user_data));
  $('.smallUser span').html(user_render(user_data));
});

var sidebar_template = $('#sidebar_user').html(),
    sidebar_render = _.template(sidebar_template),
    sidestat_template = $('#sidebar_stats').html(),
    sidestat_render = _.template(sidestat_template),
    sidefoll_template = $('#side_followers').html(),
    sidefoll_render = _.template(sidefoll_template);

$.getJSON(url).done( function (user_data) {
  $('.nameBox').append(sidebar_render(user_data));
  $('.userStats ul').append(sidestat_render(user_data));
  $('.followerCounter').html(sidefoll_render(user_data));
});

var star_template = $('#stargaze_count').html(),
    star_render = _.template(star_template);

$.getJSON(starURL).done( function (user_data) {
    var starCount = user_data.length;
    $('.counterTwo').html(starCount);
});

$.getJSON(starURL).done( function (user_data) {
    var starCount = user_data.length;
    $('.counterTwo').html(starCount);
});

var repo_template = $('#allRepositories').html(),
    repo_render = _.template(repo_template);

$.getJSON(repoURL).done( function(user_data) {
  user_data.forEach( function(repo_data) {
    $('.repoTitle ul').append(repo_render(repo_data));
  });
});
