class Rig.Menu

  constructor: ->

    $('.flexmenuToggleButton').on 'click', (e) ->
      $('.flexmenu').toggleClass 'is-open'

    $('[data-dropdown-element="toggle"]').on 'click', (e) ->
      $(this).toggleClass 'is-open'
