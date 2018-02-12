# Sloth

Sloth is a dead simple Chron cli tool for Node.

Install Sloth as a dependency:
`npm install --save sloth-cli`

Then pass Sloth the length of time it should wait until running your command, and what command to run:
`sloth 5 "npm start"`

That's it! By default you pass a number of minutes. Support for other stuff is TODO.

Terminate the loop by pressing `ctrl + c`. You may have to press that twice. It's not graceful.

# Contributing

PRs are welcome, and you can always file an issue for features requests, as well as, uh, an issue.

If you clone source try running the following command to see how you can test out changes:
`npm run 5-second-test`

# TODO

1. For timing, support ms, s, m, h, or a chron string
2. Add command line options for these things:
    1. Run X number of times.
    2. Run until X length of time (supported as above: ms, s, m, h, or a chron string)
3. Gracefully end process two ways:
    1. ctrl + shift + t to immediately send a graceful termination signal.
    2. spacebar to invoke a prompt which can be confirmed by pressing y to send a graceful termination signal.
