(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.Rig = (function() {
    function Rig(settings) {
      if (settings == null) {
        settings = {};
      }
      this.initComponents = bind(this.initComponents, this);
      $.extend(true, Rig.config, settings);
      this.initComponents();
    }

    Rig.config = {
      'version': '0.2',
      'debug': false,
      'components': {
        'flexMenu': true,
        'forms': true,
        'dropdowns': true
      }
    };

    Rig.getVersion = function() {
      return Rig.config.version;
    };

    Rig.log = function(output) {
      if (Rig.config.debug) {
        return console.log(output);
      }
    };

    Rig.refresh = function() {
      return Rig.initComponents();
    };

    Rig.prototype.initComponents = function() {
      if (Rig.config.components.flexMenu) {
        this.instantiateMenu();
      }
      if (Rig.config.components.dropdowns) {
        this.instantiateDropdowns();
      }
      if (Rig.config.components.forms) {
        return this.instantiateForms();
      }
    };

    Rig.prototype.instantiateMenu = function() {
      return new Rig.Menu;
    };

    Rig.prototype.instantiateForms = function() {
      return new Rig.Forms;
    };

    Rig.prototype.instantiateDropdowns = function() {
      return new Rig.Dropdowns;
    };

    return Rig;

  })();

  Rig.Menu = (function() {
    function Menu() {
      Rig.log('RIG Flexmenu Instantiated');
      this.toggleFlexMenu();
    }

    Menu.prototype.toggleFlexMenu = function() {
      return $('[data-rig-flexmenu-element=toggle]').on('click', function(e) {
        return $('[data-rig-flexmenu-element=menu]').toggleClass('is-open');
      });
    };

    return Menu;

  })();

  Rig.Forms = (function() {
    function Forms() {
      Rig.log('RIG Forms Instantiated');
      if ($('[data-rig-ui-textarea="autogrow"]').length > 0) {
        this.setAutogrow();
      }
    }

    Forms.prototype.setAutogrow = function() {
      return $('[data-rig-ui-textarea="autogrow"]').autoGrow();
    };

    return Forms;

  })();

  Rig.Dropdowns = (function() {
    function Dropdowns() {
      Rig.log('RIG Dropdowns Instantiated');
      this.handleDropdowns();
    }

    Dropdowns.prototype.handleDropdowns = function() {
      return $('[data-dropdown-element=toggle]').on('click', function(e) {
        $(this).toggleClass('is-open');
        e.stopPropagation();
        return $('body').bind('click.dropdown', function() {
          $('[data-dropdown-element=toggle].is-open').removeClass('is-open');
          return $('body').unbind('click.dropdown');
        });
      });
    };

    return Dropdowns;

  })();

}).call(this);

//# sourceMappingURL=rig.js.map