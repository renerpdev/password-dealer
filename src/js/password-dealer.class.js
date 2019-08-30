import PasswordGenerator from './password-generator'

export default class PasswordDealer {
    constructor(options) {
        this.toolboxes = [];
        this.inputs = [];
        this.generator = new PasswordGenerator();
        this.options = this.addProperties(options) // fill with all properties even the avoid ones
    }

    addProperties(opts) {
        const props = {
            buttons: [
                {
                    tooltip: 'Show/Hide password',
                    innerHTML: `<svg class="pwd-toolbox__icon">
                    <use xlink:href="images/sprite.svg#icon-eye"></use>
                    <use xlink:href="images/sprite.svg#icon-eye-blocked" display="none"></use>
                    </svg>`,
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
                    <use xlink:href="images/sprite.svg#icon-key"></use></svg>`,
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
            passGenerator: null, // we set this as null and PasswordGenerator class will be used by default
        };
        const buttonProps = {
            tooltip: '',
            callback: () => false,
            innerHTML: `<button>&nbsp;</button>`
        };
        if (!this.hasProperties(opts)) {
            return props;
        }
        // define main properties
        Object.getOwnPropertyNames(props).forEach(name => {
            if (!opts.hasOwnProperty(name)) {
                opts[name] = props[name];
            }
        });
        // add buttons property if it doesn't exist
        if (!opts.hasOwnProperty('buttons')) {
            opts['buttons'] = [];
        }
        // define buttons properties
        opts.buttons = opts.buttons.map(b => {
            if (Object.getOwnPropertyNames(b).length > 0) {
               return Object.getOwnPropertyNames(buttonProps).forEach(name => {
                    if (!b.hasOwnProperty(name)) {
                        return b[name] = buttonProps[name];
                    }
                })
            } else {
                return props.buttons[0];
            }
        });
        return opts;
    }

    hasProperties(options) {
        return options !== null && options !== undefined && Object.getOwnPropertyNames(options).length > 0
    }

    init() {
        this.setContainerTo(this.getPwdInputs());
        ((p) => {
            document.addEventListener('click', function (ev) {
                const elem = ev.target;
                if (!elem.classList.contains('pwd-toggle') && !elem.classList.contains('pwd-toolbox__button')) {
                    p.hideAllToolBox();
                }
            })
        })(this);
    }

    getPwdInputs() {
        const inputs = document.getElementsByClassName('pwd');
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            if (input.type.toLowerCase() === "password" && !input.classList.contains('pwd-none')) {
                input.classList.add('pwd-item__input');
                input.classList.remove('pwd-input');
                this.inputs.push(input);
            }
        }
        return this.inputs.length > 0 ? this.inputs : null;
    }

    setContainerTo(arr) {
        arr = arr || [];
        for (let i = 0; i < arr.length; i++) {
            const input = arr[i];
            input.addEventListener('focus', function (ev) {
                const next = ev.target.nextSibling;
                if (next.classList.contains('pwd-toggle')) {
                    next.style.opacity = 1;
                }
            });
            input.addEventListener('blur', function (ev) {
                const next = ev.target.nextSibling;
                if (next.classList.contains('pwd-toggle')) {
                    next.style.opacity = 0.3;
                }
            });
            const parent = input.parentNode;
            const box = document.createElement('span');
            box.classList.add('pwd-item');
            box.appendChild(input);
            box.setAttribute('id', 'pwd-item-' + i);
            // const computedStyles = (document.defaultView.getComputedStyle(input, null).cssText.split(';'));
            ['marginTop', 'marginBottom', 'marginRight', 'marginLeft', 'position', 'left', 'right', 'top', 'bottom'].forEach(prop => {
                box.style[prop] = input.style[prop];
                input.style[prop] = "";
            });
            this.addTolBoxTo(box);
            parent.prepend(box);
        }
    }

    addTolBoxTo(item) {
        const toolBox = document.createElement('ul');
        toolBox.classList.add('pwd-toolbox');

        //-------LIST BUTTONS----

        const buttons = this.options.buttons;
        buttons.forEach(b => {
            if (b !== null && b !== undefined) {
                const toolBoxItem = document.createElement('li');
                toolBoxItem.classList.add('pwd-toolbox__button');
                toolBoxItem.title = b.tooltip;
                toolBoxItem.innerHTML = b.innerHTML;
                toolBoxItem.addEventListener('click', function (ev) {
                    b.callback(ev);
                });
                toolBox.appendChild(toolBoxItem);
            }
        });

        //--------------

        // add TOGGLE button
        const toolBoxToggle = document.createElement('span');
        toolBoxToggle.classList.add('pwd-toggle');
        toolBoxToggle.innerHTML = `<svg class="pwd-toolbox__icon">
            <use xlink:href="images/sprite.svg#icon-equalizer"></use></svg>`;
        toolBoxToggle.addEventListener('click', function () {
            const sibbling = this.nextSibling;
            // if the sibbling is the toolbox
            if (sibbling.classList.contains('pwd-toolbox')) {
                sibbling.classList.contains('show') ?
                    sibbling.classList.remove('show') :
                    sibbling.classList.add('show');
            }
        });
        item.appendChild(toolBoxToggle);
        item.appendChild(toolBox);
        this.toolboxes.push(toolBox)
    }

    hideAllToolBox() {
        this.toolboxes.forEach(e => {
            e.classList.remove('show');
        })
    }

    changeType(input) {
        if (input.type.toLowerCase() === 'password') {
            input.type = 'text';
        } else {
            input.type = 'password';
        }
    }

    getGeneratedPass() {
        const generator = this.options.passGenerator;
        if (generator !== null && generator != undefined) {
            if (typeof generator === 'function') {
                return generator();
            } else if (typeof generator === 'object') {
                return new PasswordGenerator(generator).getPassword()
            }
        }
        return this.generator.getPassword();
    }
}
