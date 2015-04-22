class Rig.Menu

  constructor: ->
    console.log 'RIG Flexmenu Instantiated'
    @toggleFlexMenu()
    @handleDropdowns()

  toggleFlexMenu: ->
    $('[data-rig-flexmenu-element=toggle]').on 'click', (e) ->
      $('[data-rig-flexmenu-element=menu]').toggleClass 'is-open'

  handleDropdowns: ->
    $('[data-dropdown-element=toggle]').on 'click', (e) ->
      $(this).toggleClass 'is-open'

