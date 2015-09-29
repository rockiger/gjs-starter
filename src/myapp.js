#!/usr/bin/env gjs

// Generated by CoffeeScript 1.10.0
(function() {
  var Application, Gio, Glib, Gtk, Lang, app;

  Gtk = imports.gi.Gtk;

  Lang = imports.lang;

  Gio = imports.gi.Gio;

  Glib = imports.gi.GLib;


  Application = new Lang.Class({
    Name: 'Application',
    _init: function() {
      this.application = new Gtk.Application({
        application_id: 'org.example.myapp'
      });

      let newAction = new Gio.SimpleAction ({ name: 'new-window' });
        newAction.connect('activate', Lang.bind(this,
            function() {
                print ('new Window');
            }));
      this.application.add_action(newAction)


      this.application.connect('activate', Lang.bind(this, this._onActivate));
      return this.application.connect('open', Lang.bind(this, this._onOpen));
    },
    _onOpen: function() {
      return print('_onOpen');
    },
    _onActivate: function() {
      var button, buttonBox, window;
      print('_onActivate');
      window = new Gtk.Window({
        type: Gtk.WindowType.TOPLEVEL
      });
      window.title = "Welcome";
      window.set_default_size(200, 200);
      window.set_default_size(200, 200);
      buttonBox = new Gtk.ButtonBox();
      window.add(buttonBox);
      button = new Gtk.Button({
        label: "Hello World"
      });
      button.connect('clicked', Lang.bind(this, function() {
        return print("Hello");
      }));
      buttonBox.add(button);
      window.show_all();
      return this.application.add_window(window);
    }
  });

  app = new Application();

  app.application.run(ARGV);

}).call(this);
