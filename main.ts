const fs = require('node:fs');
fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', "At 3 a.m. your 'urgent' transfers are just confessions with gas fees; " + "I'm a wallet, not a priest.");
