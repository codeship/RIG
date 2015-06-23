class Rig.Forms

  constructor: ->
    Rig.log 'RIG Forms Instantiated'
    @setAutogrow() if $('[data-rig-ui-textarea="autogrow"]').length > 0

  setAutogrow: ->
    # Set Autogrow on all Textareas that have autogrow data binding
    $('[data-rig-ui-textarea="autogrow"]').autoGrow()
