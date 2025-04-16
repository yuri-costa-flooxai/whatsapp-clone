class WhatsAppController {
    constructor() {
        this.whatsapp = new WhatsApp();
        this.loadElements();
        this.elementsPrototype();
    }

    loadElements() {

        this.el = {};
        document.querySelectorAll('[id]').forEach(element => {
            this.el[Format.getCamelCase(element.id)] = element;
        });
    }
    
    elementsPrototype() {
        Element.prototype.hide = function() {
            this.style.display = 'none';
            return this;
        }

        Element.prototype.show = function() {
            this.style.display = 'block';
            return this;
        }

        Element.prototype.toggle = function() {
            this.style.display = this.style.display === 'none' ? 'block' : 'none';
            return this;
        }

        Element.prototype.on = function(event, callback) {
            this.addEventListener(event, callback);
            return this;
        }

        Element.prototype.off = function(event, fn) {
            EventSource.split(' ').forEach(e => {
                this.removeEventListener(e, fn);
            });
            return this;
        }

        Element.prototype.css = function(styles) {
            for (let name in styles) {
                this.style[name] = styles[name];
            }
            return this;
        }

        Element.prototype.addClass = function(className) {
            this.classList.add(className);
            return this;
        }

        Element.prototype.removeClass = function(className) {
            this.classList.remove(className);
            return this;
        }

        Element.prototype.toggleClass = function(className) {
            this.classList.toggle(className);
            return this;
        }

        Element.prototype.hasClass = function(className) {
            return this.classList.contains(className);
        }

        Element.prototype.html = function(html) {
            this.innerHTML = html;
            return this;
        }
    }
}

export default WhatsAppController;