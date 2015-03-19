(function() {
  var Rig;

  Rig = (function() {
    function Rig() {
      console.log('RIG instantiated');
      this.instantiateMenu();
    }

    Rig.prototype.instantiateMenu = function() {
      return new Rig.Menu;
    };

    return Rig;

  })();

  Rig.Menu = (function() {
    function Menu() {
      console.log('menu initiated');
    }

    return Menu;

  })();

  window.Rig = new Rig();

}).call(this);
