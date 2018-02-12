# Sloth

Sloth is a dead simple Chron cli tool for Node.

Install Sloth as a dependency:
`npm install --save sloth-cli`

Then pass Sloth the length of time it should wait until running your command, and what command to run:
`sloth 5 "npm start"`

That's it! By default you pass a number of minutes. Support for other stuff is TODO.

# TODO

1. For timing, support ms, s, m, h, or a chron string
2. Add command line options for these things:
    1. Run X number of times.
    2. Run until X length of time (supported as above: ms, s, m, h, or a chron string)
