class Rig.Menu

  constructor: ->
    # Oh,.... we removed the toggle script :D

    $('.menuToggleButton').on 'click', (e) ->
      $('.menu').toggleClass 'is-open'

    $('[data-dropdown-element="toggle"]').on 'click', (e) ->
      $(this).toggleClass 'is-open'
