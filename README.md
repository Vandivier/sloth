# Sloth

Sloth is a dead simple Chron cli tool for Node.

Install Sloth as a dependency:

`npm install --save sloth-cli`

Then pass Sloth the length of time it should wait until running your command, and what command to run:

`sloth 5 "npm run my-script"`

or set it up in your `package.json` like:

`"start": "sloth .1 \"npm run my-script\""`

That's it! By default you pass a number of minutes. You can pass a decimal number.

By default the slothed script will only run after the specified length of time. If you want it to also run once immediately, pass `true` like this:

`"start": "sloth .1 \"npm run my-script\" true"`

Terminate the loop by pressing `ctrl + c`. You may have to press that twice. It's not graceful.

# Contributing

PRs are welcome, and you can always file an issue for features requests, as well as, uh, an issue.

# TODO

1. For timing, support ms, s, m, h, or a chron string
2. Add command line options for these things:
    1. Run X number of times.
    2. Run until X length of time (supported as above: ms, s, m, h, or a chron string)
3. Gracefully end process two ways:
    1. ctrl + shift + t to immediately send a graceful termination signal.
    2. spacebar to invoke a prompt which can be confirmed by pressing y to send a graceful termination signal.
