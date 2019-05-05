// var pageNum = 1;
// function getFollowers(user, callback) {
//   if(callback) callback(user);
// }
// function callbackDriver(user){
//     $.ajax({
//     url: 'https://api.github.com/users/' + user + '/followers?page=' + pageNum + '&per_page=100',
//     method: 'GET',
//     headers: {
//         'User-Agent': 'shipt-test'
//     },
//     timeout: 2000,
//     success: function(data) {
//           pageNum++;
//           console.log(data);
//           displayFollowers(data);
//     },
//     error: function(jqXHR, textStatus, err) {
//         //show error message
//         console.log('text status '+textStatus+', err '+err);
//
//     }
//   });
// }
//
//
// function displayFollowers(data){
//   var rmv = document.getElementById('buttonLocator');
//   if(rmv)
//     rmv.parentNode.removeChild(rmv);
//
//   var htmlString = "";
//   for(i in data){
//     htmlString += "<li><a title='" + data[i].login + "' href='" + data[i].html_url + "'><img class='avaimg' src='" + data[i].avatar_url + "' /></a></li>";
//   }
//   if(data.length===100){
//     var htmlString2='<button onclick="start();" id="buttonLocator" class="btn">Load More</button>'
//     document.getElementById('theButton').innerHTML= htmlString2;
//   }
//   document.getElementById('theList').innerHTML+= htmlString;
// }
// $(document).ready(start());
// function start(){
//   var user = window.location.pathname.split('/user/').pop();
//   console.log(user);
//   getFollowers(user, callbackDriver);
// }
