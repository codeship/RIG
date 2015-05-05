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
      e.stopPropagation()
      $('body').bind 'click.dropdown', ->
        $('[data-dropdown-element=toggle].is-open').removeClass 'is-open'
        $('body').unbind 'click.dropdown'

