import PasswordGenerator from './password-generator'

const keyIcon = '<path d="M22 0c-5.523 0-10 4.477-10 10 0 0.626 0.058 1.238 0.168 1.832l-12.168 12.168v6c0 1.105 0.895 2 2 2h2v-2h4v-4h4v-4h4l2.595-2.595c1.063 0.385 2.209 0.595 3.405 0.595 5.523 0 10-4.477 10-10s-4.477-10-10-10zM24.996 10.004c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>';
const eyeIcon = `<path d="M16 6c-6.979 0-13.028 4.064-16 10 2.972 5.936 9.021 10 16 10s13.027-4.064 16-10c-2.972-5.936-9.021-10-16-10zM23.889 11.303c1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303s-5.527-0.796-7.889-2.303c-1.88-1.199-3.473-2.805-4.67-4.697 1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 4.418 3.582 8 8 8s8-3.582 8-8c0-0.962-0.17-1.883-0.482-2.737 0.124 0.074 0.248 0.15 0.371 0.228v0zM16 13c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"></path>`;
const eyeBlockedIcon = `<path d="M29.561 0.439c-0.586-0.586-1.535-0.586-2.121 0l-6.318 6.318c-1.623-0.492-3.342-0.757-5.122-0.757-6.979 0-13.028 4.064-16 10 1.285 2.566 3.145 4.782 5.407 6.472l-4.968 4.968c-0.586 0.586-0.586 1.535 0 2.121 0.293 0.293 0.677 0.439 1.061 0.439s0.768-0.146 1.061-0.439l27-27c0.586-0.586 0.586-1.536 0-2.121zM13 10c1.32 0 2.44 0.853 2.841 2.037l-3.804 3.804c-1.184-0.401-2.037-1.521-2.037-2.841 0-1.657 1.343-3 3-3zM3.441 16c1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 1.715 0.54 3.304 1.459 4.607l-1.904 1.904c-1.639-1.151-3.038-2.621-4.114-4.323z"></path>
                        <path d="M24 13.813c0-0.849-0.133-1.667-0.378-2.434l-10.056 10.056c0.768 0.245 1.586 0.378 2.435 0.378 4.418 0 8-3.582 8-8z"></path>
                        <path d="M25.938 9.062l-2.168 2.168c0.040 0.025 0.079 0.049 0.118 0.074 1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303-1.208 0-2.403-0.149-3.561-0.439l-2.403 2.403c1.866 0.671 3.873 1.036 5.964 1.036 6.978 0 13.027-4.064 16-10-1.407-2.81-3.504-5.2-6.062-6.938z"></path>`;
const settingsIcon = `<path d="M30.391 12.68l-3.064-0.614c-0.154-0.443-0.336-0.873-0.537-1.289l1.736-2.604c0.529-0.793 0.424-1.85-0.25-2.523l-1.924-1.924c-0.387-0.387-0.898-0.586-1.416-0.586-0.383 0-0.77 0.11-1.107 0.336l-2.604 1.735c-0.418-0.202-0.848-0.382-1.291-0.536l-0.614-3.065c-0.186-0.936-1.008-1.608-1.961-1.608h-2.72c-0.953 0-1.774 0.673-1.961 1.608l-0.614 3.065c-0.443 0.154-0.873 0.335-1.289 0.536l-2.603-1.735c-0.339-0.226-0.725-0.336-1.109-0.336-0.517 0-1.028 0.199-1.415 0.586l-1.923 1.924c-0.674 0.674-0.779 1.73-0.25 2.523l1.735 2.604c-0.202 0.417-0.382 0.847-0.536 1.29l-3.066 0.613c-0.935 0.187-1.608 1.008-1.608 1.961v2.72c0 0.953 0.673 1.775 1.608 1.961l3.065 0.615c0.154 0.443 0.335 0.873 0.536 1.289l-1.734 2.604c-0.529 0.793-0.424 1.85 0.25 2.523l1.924 1.924c0.387 0.387 0.898 0.586 1.415 0.586 0.384 0 0.771-0.111 1.108-0.336l2.604-1.736c0.417 0.203 0.847 0.383 1.29 0.537l0.613 3.064c0.187 0.936 1.008 1.609 1.961 1.609h2.72c0.953 0 1.775-0.674 1.961-1.609l0.615-3.064c0.443-0.154 0.873-0.336 1.289-0.537l2.604 1.736c0.338 0.225 0.725 0.336 1.107 0.336 0.518 0 1.029-0.199 1.416-0.586l1.924-1.924c0.674-0.674 0.779-1.73 0.25-2.523l-1.736-2.604c0.203-0.418 0.383-0.848 0.537-1.291l3.064-0.613c0.935-0.185 1.609-1.008 1.609-1.961v-2.72c0-0.953-0.674-1.774-1.609-1.961zM26.934 17.975c-0.695 0.139-1.264 0.635-1.496 1.305-0.129 0.369-0.279 0.727-0.447 1.074-0.311 0.639-0.258 1.393 0.135 1.982l1.736 2.604-1.924 1.924-2.604-1.736c-0.334-0.223-0.721-0.336-1.109-0.336-0.297 0-0.596 0.066-0.871 0.199-0.348 0.168-0.705 0.32-1.076 0.449-0.668 0.232-1.164 0.801-1.303 1.496l-0.615 3.066h-2.72l-0.613-3.066c-0.139-0.695-0.635-1.264-1.304-1.496-0.369-0.129-0.728-0.279-1.075-0.447-0.276-0.135-0.574-0.201-0.872-0.201-0.389 0-0.775 0.113-1.109 0.336l-2.604 1.736-1.924-1.924 1.735-2.604c0.393-0.59 0.444-1.344 0.137-1.98-0.168-0.348-0.319-0.705-0.448-1.076-0.232-0.668-0.802-1.164-1.496-1.303l-3.065-0.615-0.002-2.721 3.066-0.613c0.694-0.139 1.264-0.635 1.496-1.304 0.129-0.369 0.278-0.728 0.447-1.075 0.31-0.638 0.258-1.392-0.136-1.981l-1.734-2.604 1.923-1.924 2.604 1.735c0.334 0.223 0.721 0.336 1.109 0.336 0.297 0 0.595-0.066 0.871-0.199 0.347-0.168 0.705-0.319 1.075-0.448 0.669-0.232 1.165-0.802 1.304-1.496l0.614-3.065 2.72-0.001 0.613 3.066c0.139 0.694 0.635 1.264 1.305 1.496 0.369 0.129 0.727 0.278 1.074 0.447 0.277 0.134 0.574 0.2 0.873 0.2 0.389 0 0.775-0.113 1.109-0.336l2.604-1.735 1.924 1.924-1.736 2.604c-0.393 0.59-0.443 1.343-0.137 1.98 0.168 0.347 0.32 0.705 0.449 1.075 0.232 0.669 0.801 1.165 1.496 1.304l3.064 0.614 0.003 2.72-3.066 0.614zM16 9.001c-3.865 0-7 3.135-7 7 0 3.866 3.135 7 7 7s7-3.135 7-7c0-3.865-3.135-7-7-7zM16 22.127c-3.382 0-6.125-2.744-6.125-6.125s2.743-6.125 6.125-6.125c3.381 0 6.125 2.743 6.125 6.125 0 3.381-2.744 6.125-6.125 6.125zM16 12.001c-2.21 0-4 1.79-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zM16 19.002c-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3c0 1.656-1.344 3-3 3z"></path>`;

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
                    innerHTML: `${this.getFormattedIcon(eyeIcon, 'eye') + this.getFormattedIcon(eyeBlockedIcon, 'eye-blocked', 'display:none;')}`,
                    callback: (event) => {
                        ((p) => {
                            const $this = event.target;
                            const useChildren = $this.childNodes;
                            if (!$this.classList.contains('reveal')) {
                                $this.classList.add('reveal');
                                useChildren[1].style.display = 'block';
                                useChildren[0].style.display = 'none';
                            } else {
                                $this.classList.remove('reveal');
                                useChildren[0].style.display = 'block';
                                useChildren[1].style.display = 'none';
                            }
                            const nodes = $this.parentNode.parentNode.childNodes;
                            for (let i = 0; i < nodes.length; i++) {
                                const e = nodes[i];
                                if (e.classList.contains('pwd-item__input')) {
                                    p.changeType(e);
                                }
                            }
                        })(this);
                    }
                },
                {
                    tooltip: 'Generate password',
                    innerHTML: this.getFormattedIcon(keyIcon, 'key'),
                    callback: (event) => {
                        ((p) => {
                            const nodes = event.target.parentNode.parentNode.childNodes;
                            for (let i = 0; i < nodes.length; i++) {
                                const e = nodes[i];
                                if (e.classList.contains('pwd-item__input')) {
                                    e.value = p.getGeneratedPass()
                                }
                            }
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

    getFormattedIcon(icon, title, style) {
        return `<svg version="1.1" class="pwd-toolbox__icon" style="${style || ''}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <title>${title}</title>
                    ${icon}
                    </svg>`
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
            if (input.type.toLowerCase() === "password") {
                input.classList.add('pwd-item__input');
                input.setAttribute('data-id', 'pwd-input-' + i);
                input.classList.remove('pwd-input');
                input.addEventListener('resize', function () {
                    console.log(cambio)
                });
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
                    next.style.opacity = 0.15;
                }
            });
            const parent = input.parentNode;
            const parentNodes = parent.children;
            let position = -1;
            for (let i = 0; i < parentNodes.length; i++) {
                let attr = parentNodes[i].getAttributeNode('data-id');
                attr = (attr !== null) ? attr.value : attr;
                if (attr === input.getAttribute('data-id')) {
                    position = i;
                }
            }
            const box = document.createElement('div');
            box.classList.add('pwd-item');
            box.appendChild(input);
            box.setAttribute('id', 'pwd-item-' + i);
            // let computedStyles = (document.defaultView.getComputedStyle(input, null).cssText.split(';'));
            ['marginTop', 'marginBottom', 'marginRight', 'marginLeft', 'margin', 'position', 'left', 'right',
                'top', 'bottom'].forEach(prop => {
                box.style[prop] = input.style[prop];
                input.style[prop] = "";
            });
            if (window.ResizeObserver !== undefined) {
                new ResizeObserver(() => {
                    box.style.height = input.offsetHeight+'px';
                }).observe(input)
            } else {
                console.log('Your Browser does not support ResizeObserver api!')
            }
            box.style.width = input.style.width;
            input.style.width = '100%';
            this.addTolBoxTo(box);
            parent.insertBefore(box, parent.children[position]);// insert the wrapper in the exact input's position
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
        toolBoxToggle.innerHTML = this.getFormattedIcon(settingsIcon, 'settings');
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
