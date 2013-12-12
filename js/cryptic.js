$win = $(window)
$picContainer = $(".picture-container")
$anims = $(".anim")

$(document).scroll(
  function(){
    //$picContainer.css("top",$win.scrollTop())
    updateParts();
  })

function updateParts(){

  $(".anim").each(function(i, animSlice){
    var scrollPos = $win.scrollTop()

    if ($(animSlice).attr("data-anim-rel") !== undefined){
      scrollPos -= $($(animSlice).attr("data-anim-rel")).offset().top
    }
    switch ($(animSlice).attr("data-anim").split("|").length){
      case 4:
        updateAnim4(animSlice, scrollPos); break;
      case 5:
        updateAnim5(animSlice, scrollPos); break;
    }
  })
}

function updateAnim4(animSlice, scrollPos){

  var animData = $(animSlice).attr("data-anim").split("|")
  var start   = parseFloat(animData[0])
  var end     = parseFloat(animData[1])
  var size    = parseFloat(animData[2])
  var attr    = animData[3]
  var diff    = end-start
  var percent = (scrollPos - start)/diff  
  percent = percent > 1 ? 1 : percent
  percent = percent < 0 ? 0 : percent
  $(animSlice).css(attr,percent*size)
}

function updateAnim5(animSlice, scrollPos){
  var animData = $(animSlice).attr("data-anim").split("|")
  var start   = parseFloat(animData[0])
  var end     = parseFloat(animData[1])
  var sizeStart  = parseFloat(animData[2])
  var sizeEnd    = parseFloat(animData[3])
  var attr    = animData[4]
  var diff    = end-start
  var percent = (scrollPos - start)/diff  
  percent = percent > 1 ? 1 : percent
  percent = percent < 0 ? 0 : percent
  $(animSlice).css(attr,sizeStart+percent*(sizeEnd - sizeStart))
}
