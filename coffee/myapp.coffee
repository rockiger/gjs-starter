Gtk = imports.gi.Gtk
Lang = imports.lang
Gio = imports.gi.Gio
Glib = imports.gi.GLib


Application = new Lang.Class({
  Name: 'Application'

  #create the application
  _init: ->
    @application = new Gtk.Application({
      application_id: 'org.example.myapp'
      })

    newAction = new Gio.SimpleAction ({ name: 'new-window' })
    newAction.connect('activate', Lang.bind(@, ->
      print ('new Window')
      ))
    @application.add_action(newAction)

    @application.connect('activate', Lang.bind(@, @_onActivate))
    @application.connect('open', Lang.bind(@, @_onOpen))

  _onOpen: ->
    print('_onOpen')

  #callback for 'activate' signal
  _onActivate: ->
    print ('_onActivate')
    window = new Gtk.Window({type: Gtk.WindowType.TOPLEVEL})
    window.title = "Welcome"
    window.set_default_size(200,200)
    window.set_default_size(200,200)

    buttonBox = new Gtk.ButtonBox()
    window.add(buttonBox)

    button = new Gtk.Button({label: "Hello World"})
    button.connect('clicked', Lang.bind(@, ->
      print "Hello"))
    buttonBox.add(button)

    window.show_all()
    @application.add_window(window)
  })

app = new Application()
app.application.run(ARGV)
