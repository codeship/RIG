class Rig

  constructor: ->
    console.log 'RIG Instantiated'
    @instantiateMenu()
    @instantiateForms()

  instantiateMenu: ->
    return new Rig.Menu

  instantiateForms: ->
    return new Rig.Forms
