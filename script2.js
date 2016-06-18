try{
var id = document.location.search.match(/codepenid=([0-9a-z]+)/i)[1];
var div = document.location.search.match(/locationid=([0-9a-z\-\_]+)/i)[1];
//Added "\-\_" to the regex in div declaration above so that a greater range of ids can be used
 
$.get('http://codepen.io/team/bwswebdev/pen/'+id+'.html', function(d){
  //if statement to handle ViaSpiga sitewide banners
  if(div === "tippyTopBanner") {
    $('.headerDrawer').css("display","none"); //hides details popup that is added by stg.admin
    $('.'+div).html(d); //finds class instead of id
  }else if(div === 'fixed-header') { //if statement is to correct how Dr.Scholl's banners are displayed
    //var brandBar = document.getElementById('brand-bar');
    $('#'+div).prepend(d);
    //console.log(brandBar);
    //$('#'+div).append(brandBar);
  } else if(div === 'home') { //if statement is to correct how Dr.Scholl's banners are displayed
    //var brandBar = document.getElementById('brand-bar');
    $('#'+div).prepend(d);
    //console.log(brandBar);
    //$('#'+div).append(brandBar);
  } else {
    $('#'+div).html(d);
  }
  //needed to reload page once so that the page shows what is in codepen and not what is in the shop record on stage
  if (!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.removedByCodePen();
  } 
});

}catch(e){
document.write("I'm sorry. Something went wrong. Please contact us for help.");
}