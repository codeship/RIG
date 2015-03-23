class Rig.Menu

  constructor: ->
    # Oh,.... we removed the toggle script :D

    $('.menuToggleButton').on 'click', (e) ->
      $('.menu').toggleClass 'is-open'
