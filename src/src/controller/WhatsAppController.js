class WhatsAppController {
    constructor() {
        this.whatsapp = new WhatsApp();
        this.loadElements();
        this.elementsPrototype();
        this.initEvents();
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

    initEvents() {
        this.el.myPhoto.on('click', () => {

            this.closeAllLeftPanel();
            this.el.panelEditProfile.show();
            setTimeout(() => {
                this.el.panelEditProfile.addClass('open');
            }, 300);
        });

        this.el.btnNewContact.on('click', () => {

            this.closeAllLeftPanel();
            this.el.panelAddContact.show();
            setTimeout(() => {
                this.el.panelAddConßtact.addClass('open');
            }, 300);
        });

        this.el.btnClosePanelEditProfile.on('click', () => {
            this.el.panelEditProfile.removeClass('open');
        });

        this.el.btnClosePanelAddContact.on('click', () => {
            this.el.panelAddContact.removeClass('open');
        });

        this.el.btnClosePanelAddContact.on('click', () => {
            this.el.panelAddContact.removeClass('open');
        });

        this.el.photoContainerEditProfile.on('click', () => {
            this.el.photoEditProfile.click();
        });

        this.el.photoEditProfile.on('change', () => {
            this.el.photoEditProfile.click();
        });

        this.el.inputNameEditProfile.on('keypress', (e) => {

            if (e.key === 'Enter') {

                e.preventDefault();
                this.el.btnSaveEditProfile.click();
            }
        });

        this.el.btnSavePanelEditProfile.on('click', () => {

            console.log(this.el.inputNameEditProfile.innerHTML);
        });
        
        this.el.formPanelAddContact.on('submit', (e) => {

            e.preventDefault();
            let formData = new FormData(this.el.formPanelAddContact);
        });
        
        HTMLFormElement.prototype.getForm = () => {

            return new FormData(this);
        }

        HTMLFormElement.prototype.toJSON = function() {

            let json = {};
            this.getForm().forEach((value, key) => {
                json[key] = value;
            });
            return json;
        }

        this.el.contactsMessagesList.querySelectorAll('.contact-item').forEach(contact => {

            contact.on('click', () => {

                this.el.homePanel.hide();
                this.el.contactsMessagesListSelected.innerHTML = contact.querySelector('.contact-name').innerHTML;
            });
        });

        this.el.btnAttach.on('click', () => {

            e.stopPropagation();
            this.el.inputAttach.addClass('open');
            document.addEventListener('click', this.closeMenuAttach.bind(this));
        });

        this.el.btnAttachPhoto.on('click', () => {

            this.el.inputAttachPhoto.click();
        });

        this.el.inputAttachCamera.on('change', () => {

            this.el.inputAttachCamera.click();
        });

        this.el.inputAttachDocument.on('change', () => {

            this.el.inputAttachDocument.click();
        });

        this.el.inputAttachContact.on('change', () => {

            this.el.inputAttachContact.click();
        });
        
        

            
    }

    closeMenuAttach(e) {

        document.removeEventListener('click', this.closeMenuAttach.bind(this));
        this.el.menuAttach.removeClass('open');
        console.log('remove menu');
    }

    closeAllLeftPanel() {

        this.el.panelEditProfile.hide();
        this.el.panelAddContact.hide();
    }
}

export default WhatsAppController;