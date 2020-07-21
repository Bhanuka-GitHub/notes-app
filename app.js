const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

yargs.command ({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command ({
    command: 'remove',
    describe: 'note removing',
    builder: {
        title: {
            describe: 'note removing',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command ({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNote()
    }
})

yargs.command ({
    command: 'read',
    describe: 'Read your notes',
    builder: {
        title: {
            describe: 'Read your notes',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv) {
    notes.readNote(argv.title)
    }
})

yargs.parse()
