define(['jquery'], function($){
  function Window(){}
  Window.prototype = {
    alert: function(content, handler){
      var boundingBox = $('<div class="window_boundingBox"></div>')
      boundingBox.html(content)
      boundingBox.appendTo('body')
      var btn = $('<input type="button" value="确定">')
      btn.appendTo(boundingBox)
      btn.click(function(){
        handler&&handler()
        boundingBox.remove()
      })

    },
    confirm: function(){},
    prompt: function(){}
  }

  return {
    Window
  }
})