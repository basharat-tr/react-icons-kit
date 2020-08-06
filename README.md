
# react-icons-kit

Note: Please visit https://reactsvgicons.com/
has svg icons directly as react components can you can import to your project without
to need to use a library

[![Generic badge](https://img.shields.io/badge/<SUBJECT>-<STATUS>-<COLOR>.svg)](https://shields.io/)

## Installation

```
npm install --save react-icons-kit
```

## Documentation / Demo

Please visit [react-icons-kit](https://react-icons-kit.now.sh/)

## Bundled Icon Sets

* [`IcoMoon`](https://github.com/Keyamoon/IcoMoon-Free) vmaster
* [`FontAwesome`](http://fortawesome.github.io/Font-Awesome/icons/) v4.7
* [`MaterialIcons`](https://www.google.com/design/icons/) v3.0.1
* [`Open Iconic`](https://github.com/iconic/open-iconic) v1.1.1
* [`Entypo`](http://entypo.com) latest
* [`Ikons`](http://ikons.piotrkwiatkowski.co.uk/) latest
* [`Metrize`](http://www.alessioatzeni.com/metrize-icons/) latest
* [`Octicons`](https://octicons.github.com/) v5.0.1
* [`Ionicons`](http://ionicons.com/) v2.0.1
* [`Linea`](http://linea.io/) latest
* [`Typicons`](http://typicons.com/) v2.0.8
* [`Noto Emoji Regular`](https://www.google.com/get/noto/#emoji-zsye/) latest
* [`Feather Icons`](https://feathericons.com/)latest

Plus more to come.

## Browse Icon Sets

Browse all available icons here: [react-icons-kit](https://react-icons-kit.now.sh/)

## Changes

1.3.0

  * `[Merged PR #42 by @nbcnc`](https://github.com/wmira/react-icons-kit/pull/42)

## Quick Start Guide

```javascript

    import Icon from 'react-icons-kit';
    import { ic_add_a_photo } from 'react-icons-kit/md/ic_add_a_photo';
    import { lock } from 'react-icons-kit/fa/lock';

    export const ShowIcons = () => {

        return (
            <div>
                <div><Icon icon={ic_add_a_photo}/><div>
                <div><Icon icon={lock}/><div>
            </div>
        )
    }
```

## Tree Shaking

Use the eslint config from this: https://github.com/wmira/react-icons-kit/issues/38

## Development

### React Icons Kit Site

To update the react-icons-kit site deployed at [react-icons-kit](http://wmira.github.io/react-icons-kit/index.html), you need to first
do the following. Assuming you are at the root folder:

1. npm install
2. npm run dist
3. cd site
4. npm install
5. cd node_modules
6. ln -sf ../../dist react-icons-kit
7. cd ..
8. npm start

You should now be able to live edit the website to do some changes, submit pull request.

