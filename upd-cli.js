#!/usr/bin/env node

const child_process = require('child_process');
const fs = require('fs');
const path = require('path');

(function main() {
  let nextPath = process.cwd();
  let dirPath, updPath;
  do {
    dirPath = nextPath;
    updPath = path.resolve(dirPath, 'node_modules/@jeanlauliac/upd/dist/upd');
    exists = fs.existsSync(updPath);
    nextPath = path.dirname(dirPath)
  } while (!exists && nextPath != dirPath);
  if (!exists) {
    console.error('fatal: could not find the `upd\' package installed anywhere in the directory tree');
    console.error('  you need to install it first with one of the supported package managers');
    console.error('  for example: `npm install @jeanlauliac/upd\'');
    process.exitCode = 48;
    return;
  }
  const result = child_process.spawnSync(updPath, process.argv.slice(2), {
    stdio: 'inherit',
  });
  if (result.error) {
    console.error('fatal: failed to execute `upd\': %s', result.error.message);
    process.exitCode = 49;
    return;
  }
  if (result.signal) {
    process.exitCode = 50;
    return;
  }
  process.exitCode = result.status;
})();
