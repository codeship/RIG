class Rig.Menu

  constructor: ->
    Rig.log 'RIG Flexmenu Instantiated'
    @toggleFlexMenu()

  toggleFlexMenu: ->
    $('[data-rig-flexmenu-element=toggle]').on 'click', (e) ->
      $('[data-rig-flexmenu-element=menu]').toggleClass 'is-open'
