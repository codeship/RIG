
class Rig

  constructor: ->
    console.log 'RIG instantiated'
    @instantiateMenu()

  instantiateMenu: ->
    return new Rig.Menu

#= require _menu.coffee

window.Rig = new Rig()
