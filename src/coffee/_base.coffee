class @Rig

  @log: (output) =>
    console.log output if Rig.config.debug

  @refresh: () =>
    @initComponents()

  constructor: (settings = {}) ->

    config = {
      'debug': false
      'components':
        'flexMenu': false
        'forms': false
        'dropdowns': false
    }

    # Extend the main config with the users settings
    $.extend true, config, settings

    # Make the options globally available
    Rig.config = config

    @initComponents()

  initComponents: =>
    @instantiateMenu()        if Rig.config.components.flexMenu
    @instantiateDropdowns()   if Rig.config.components.dropdowns
    @instantiateForms()       if Rig.config.components.forms

  instantiateMenu: ->
    return new Rig.Menu

  instantiateForms: ->
    return new Rig.Forms

  instantiateDropdowns: ->
    return new Rig.Dropdowns
