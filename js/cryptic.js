$win = $(window)
$picContainer = $(".picture-container")
$anims = $(".anim")

$(document).scroll(
  function(){
    //$picContainer.css("top",$win.scrollTop())
    updateParts();
  })


function updateParts(){
  var scrollPosition = $win.scrollTop()
  $anims.each(function(i, picSlice){
    var animData = $(picSlice).attr("data-anim").split("|")
    var start   = parseFloat(animData[0])
    var end     = parseFloat(animData[1])
    var size    = parseFloat(animData[2])
    var attr    = animData[3]
    var diff    = end-start
    var scrollPos = $win.scrollTop()
    var percent = (scrollPos - start)/diff  
    percent = percent > 1 ? 1 : percent
    percent = percent < 0 ? 0 : percent
    $(picSlice).css(attr,percent*size)
    //$picSlice.
  })

}
