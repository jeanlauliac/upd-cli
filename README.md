# upd-cli

Find and run the locally installed upd utility.

## Description

Different projects will want to use different versions of the `upd` utility
(package `@jeanlauliac/upd`), so it is preferable to not install it globally.
Instead, the utility should be installed locally, with the version specified in
your `package.json`. Then you can install this package globally, that will
find and run the locally installed version of `upd`.

## Installation

Example using `npm`:

    npm install -g @jeanlauliac/upd-cli
    npm install @jeanlauliac/upd
    upd

In practice you'll only have to install `upd-cli` once, and `upd` will be
installed as part of a project.
