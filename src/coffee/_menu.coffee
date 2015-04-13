class Rig.Menu

  constructor: ->
    console.log 'RIG Flexmenu Instantiated'
    @toggleFlexMenu()
    @handleDropdowns()


  toggleFlexMenu: ->
    $('.flexmenuToggleButton').on 'click', (e) ->
      $('.flexmenu').toggleClass 'is-open'

  handleDropdowns: ->
    $('[data-dropdown-element="toggle"]').on 'click', (e) ->
      $(this).toggleClass 'is-open'

