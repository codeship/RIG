class Rig.Dropdowns

  constructor: ->
    Rig.log 'RIG Dropdowns Instantiated'
    @handleDropdowns()

  handleDropdowns: ->
    $('[data-dropdown-element=toggle]').on 'click', (e) ->
      $(this).toggleClass 'is-open'
      e.stopPropagation()
      $('body').bind 'click.dropdown', ->
        $('[data-dropdown-element=toggle].is-open').removeClass 'is-open'
        $('body').unbind 'click.dropdown'
