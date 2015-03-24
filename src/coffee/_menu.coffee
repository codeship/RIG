class Rig.Menu

  constructor: ->
    # Oh,.... we removed the toggle script :D

    $('.flexmenuToggleButton').on 'click', (e) ->
      $('.flexmenu').toggleClass 'is-open'

    $('[data-dropdown-element="toggle"]').on 'click', (e) ->
      $(this).toggleClass 'is-open'
