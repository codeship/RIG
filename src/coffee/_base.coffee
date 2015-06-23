class @Rig

  constructor: (settings = {}) ->

    # Extend the main config with the users settings
    $.extend true, Rig.config, settings

    @initComponents()

  # RIG Public Functions and Options
  @config: {
    'version': '0.2'
    'debug': false
    'components':
      'flexMenu': true
      'forms': true
      'dropdowns': true
  }

  @getVersion: =>
    return Rig.config.version

  @log: (output) =>
    console.log output if Rig.config.debug

  @refresh: () =>
    @initComponents()

  # Rig Private Functions
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
