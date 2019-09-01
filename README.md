# **password-dealer**

![license](https://img.shields.io/github/license/2rhop/password-dealer.svg)
[![GitHub (pre-)release](https://img.shields.io/github/release/2rhop/password-dealer/all.svg)](https://github.com/2rhop/knex-seeder/releases)
<img alt="npm" src="https://img.shields.io/npm/dm/password-dealer">
====

## <img align="center" alt="password-dealer example" src="https://raw.githubusercontent.com/2rhop/password-dealer/master/src/images/example1.gif" height=180 title="password-dealer example"/>

### This is an standalone javascript tool that improves your password fields

## Table of topics
1. [Installation](#installation)
1. [How to use it?](#use)
    - [API](#api)
1. [Browser support](#bsupport)
1. [Changelog](#changelog)
1. [Further help](#help)

## Installation

### For development

```bash
git clone https://github.com/2rhop/password-dealer.git pwd
cd pwd
npm install
```
### For production

```bash
npm install password-dealer --save
```

<h2 id="use">How to use it?</h2>
The use is very simple first need to import the code and styles into your project and then add a css class to the password inputs, javascript will do the rest.

Import from HTML:
```html
<head>
    ...
    <link rel="stylesheet" href="<path-to-package>/dist/password-dealer.min.css">
</head>

<body>
    ...
    <script src="<path-to-package>/dist/password-dealer.min.js"></script>
    <script>
         PasswordDealer(<options>).init();
    </script>
</body>    
```

Import from javascript:
```js
import 'password-dealer/dist/password-dealer.min.css';
import 'password-dealer';

$(function () { // using jQuery with document.ready lifecycle
    PasswordDealer(<options>).init();
});
```
Adding css class to the input:
```html
<input type="password" class="pwd">
```
### **API**

- <h3> <b>PasswordDealer</b> Object options </h3>

<table style="width:100%;border:4px">
<thead>
<tr>
<th>Name</th>
<th>Properties</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td rowspan=3>buttons: <i>array</i></td>
    <td><i>tooltip</i>: <b>string</b></td>
    <td>Sets the tooltip for the button</td>
</tr>
<tr>
    <td><i>innerHTML</i>: <b>HTML</b></td>
    <td>Sets the HTML code inside the button. It is used for the image icon. Need to be an .svg file located in your PC or in an URL</td>
</tr>
<tr>
    <td><i>callback</i>: <b>function</b></td>
    <td>Calls the user function inside the eventListener body</td>
</tr>
<tr>
    <td>passGenerator: <i>null | function | object</i></td>
    <td></td>
    <td>Specifies the generator to be used. If it is null the default generator will be used otherwise you need to specify a new one. You can also set an object with <a href="#pass-generator-opts"><b>PasswordGenerator</b> options</a> </td>
</tr>
</tbody>
</table>

### *The default options are:*

```js
{
            buttons: [
                {
                    tooltip: 'Show/Hide password',
                    innerHTML: `<svg class="pwd-toolbox__icon">
                    <use xlink:href="images/sprite.svg#icon-eye"></use>
                    <use xlink:href="images/sprite.svg#icon-eye-blocked" display="none"></use>
                    </svg>`,// icon stored locally
                    callback: (event) => {
                        ((p) => {
                            const $this = event.target;
                            const useChildren = $this.childNodes[0].children;
                            if (!$this.classList.contains('reveal')) {
                                $this.classList.add('reveal');
                                useChildren[1].style.display = 'block';
                                useChildren[0].style.display = 'none';
                            } else {
                                $this.classList.remove('reveal');
                                useChildren[0].style.display = 'block';
                                useChildren[1].style.display = 'none';
                            }
                            $this.parentNode.parentNode.childNodes.forEach(e => {
                                if (e.classList.contains('pwd-item__input')) {
                                    p.changeType(e);
                                }
                            })
                        })(this);
                    }
                },
                {
                    tooltip: 'Generate password',
                    innerHTML: `<svg class="pwd-toolbox__icon">
                    <use xlink:href="images/sprite.svg#icon-key"></use></svg>`,// icon stored locally
                    callback: (event) => {
                        ((p) => {
                            event.target.parentNode.parentNode.childNodes.forEach(e => {
                                if (e.classList.contains('pwd-item__input')) {
                                    e.value = p.getGeneratedPass()
                                }
                            });
                        })(this)
                    }
                },
            ],
            passGenerator:  null, // we set this as null and PasswordGenerator class will be used by default
        };
```

- <h3 id="pass-generator-opts"> <b>PasswordGenerator</b> Object options </h3>

<table style="width:100%;border:4px">
<thead>
<tr>
<th>Property</th>
<th>Default value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
    <td>size: <b>number</b></td>
    <td><i>10</i></td>
    <td>Sets the length of the password </td>
</tr>
<tr>
    <td>alphabet: <b>boolean</b></td>
    <td><i>true</i></td>
    <td>Specifies whether the alphabet charset is gonna be used or not (If none charset is taken then this is the default one)</td>
</tr>
<tr>
    <td>uppercase: <b>boolean</b></td>
    <td><i>true</i></td>
    <td>Specifies whether the uppercase charset is gonna be used or not</td>
</tr>
<tr>
    <td>numbers: <b>boolean</b></td>
    <td><i>true</i></td>
    <td>Specifies whether the numbers charset is gonna be used or not</td>
</tr>
<tr>
    <td>symbols: <b>boolean</b></td>
    <td><i>true</i></td>
    <td>Specifies whether the symbols charset is gonna be used or not</td>
</tr>

</tbody>
</table>
 
> **note:** This tool is also flexible it means you can customize the options whatever you prefer

<h2 id="bsupport">Browser Support <i><small>(tested ones)</small></i></h2>

### These are the browsers that show up pretty well the styles:

    - Google Chrome **74+**
    - Opera **62+**
    - Microsoft Edge **41+**
    - Microsoft Internet Exporer **11+**
    - Mozilla Firefox **64+**

### This tools uses *ResizeObserver api* for correctly set the dimensions of the input wrapper. These are some browsers that support it:

    - Google Chrome **74+**
    - Opera **62+**

## Changelog

Get update with all new versions [here](https://github.com/2rhop/password-dealer/releases)

## Licence
Copyright (c) 2019 Rene Ricardo. Licensed under the [MIT](https://github.com/2rhop/password-dealer/blob/master/LICENSE) license.

## Help

Send me an [email](mailto:renerp2016@gmail.com) if you have some doubt or just add an [issue](https://github.com/2rhop/password-dealer/issues)