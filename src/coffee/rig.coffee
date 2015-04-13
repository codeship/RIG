class Rig

  constructor: ->
    console.log 'RIG Instantiated'
    @instantiateMenu()
    @instantiateForms()


  instantiateMenu: ->
    return new Rig.Menu

  instantiateForms: ->
    return new Rig.Forms

#= require _menu.coffee
#= require _forms.coffee

window.Rig = new Rig()
