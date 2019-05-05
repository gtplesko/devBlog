function sortDivs(parent) {
  $(".card-columns").html($(parent).sort((a,b)=>{return a.dataset.sort < b.dataset.sort ? 1 : -1;}));
}
sortDivs('.all-posts');
