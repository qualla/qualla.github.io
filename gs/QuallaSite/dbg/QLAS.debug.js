//! QLAS.debug.js
//

(function($) {

Type.registerNamespace('QLAS');

////////////////////////////////////////////////////////////////////////////////
// QLAS.SupportPage

QLAS.SupportPage = function QLAS_SupportPage() {
    QLAS.SupportPage.initializeBase(this);
}
QLAS.SupportPage.prototype = {
    
    get_defaultClass: function QLAS_SupportPage$get_defaultClass() {
        return 'container-fluid';
    }
}


////////////////////////////////////////////////////////////////////////////////
// QLAS.SupportPageBody

QLAS.SupportPageBody = function QLAS_SupportPageBody() {
    QLAS.SupportPageBody.initializeBase(this);
}
QLAS.SupportPageBody.prototype = {
    e_scriptLink: null,
    e_iframeHolder: null,
    
    get_defaultClass: function QLAS_SupportPageBody$get_defaultClass() {
        return 'row';
    },
    
    onApplyTemplate: function QLAS_SupportPageBody$onApplyTemplate() {
        QLAS.SupportPageBody.callBaseMethod(this, 'onApplyTemplate');
        if (this.e_iframeHolder != null) {
            var ifr = document.createElement('IFRAME');
            ifr.style.width = '95vh';
            ifr.style.maxWidth = '700px';
            ifr.style.overflowX = 'hidden';
            ifr.style.overflowY = 'hidden';
            ifr.style.height = '200px';
            ifr.style.border = '0px';
            ifr.frameBorder = '0';
            ifr.src = 'https://qualla.com';
            this.e_iframeHolder.appendChild(ifr);
        }
    },
    
    v_onSupportLinkClick: function QLAS_SupportPageBody$v_onSupportLinkClick(e) {
        window.location.assign('mailto:support@qualla.co');
    }
}


////////////////////////////////////////////////////////////////////////////////
// QLAS.AboutPageBody

QLAS.AboutPageBody = function QLAS_AboutPageBody() {
    QLAS.AboutPageBody.initializeBase(this);
}
QLAS.AboutPageBody.prototype = {
    
    get_defaultClass: function QLAS_AboutPageBody$get_defaultClass() {
        return 'row';
    }
}


////////////////////////////////////////////////////////////////////////////////
// QLAS.Footer

QLAS.Footer = function QLAS_Footer() {
    QLAS.Footer.initializeBase(this);
}
QLAS.Footer.prototype = {
    
    get_defaultClass: function QLAS_Footer$get_defaultClass() {
        return 'row';
    }
}


////////////////////////////////////////////////////////////////////////////////
// QLAS.TopNav

QLAS.TopNav = function QLAS_TopNav() {
    QLAS.TopNav.initializeBase(this);
}
QLAS.TopNav.prototype = {
    
    get_defaultClass: function QLAS_TopNav$get_defaultClass() {
        return 'row';
    }
}


////////////////////////////////////////////////////////////////////////////////
// QLAS.Header

QLAS.Header = function QLAS_Header() {
    QLAS.Header.initializeBase(this);
}
QLAS.Header.prototype = {
    
    get_defaultClass: function QLAS_Header$get_defaultClass() {
        return 'row';
    }
}


////////////////////////////////////////////////////////////////////////////////
// QLAS.AboutPage

QLAS.AboutPage = function QLAS_AboutPage() {
    QLAS.AboutPage.initializeBase(this);
}
QLAS.AboutPage.prototype = {
    
    get_defaultClass: function QLAS_AboutPage$get_defaultClass() {
        return 'container-fluid';
    }
}


QLAS.SupportPage.registerClass('QLAS.SupportPage', BL.UI.Control);
QLAS.SupportPageBody.registerClass('QLAS.SupportPageBody', BL.UI.Control);
QLAS.AboutPageBody.registerClass('QLAS.AboutPageBody', BL.UI.Control);
QLAS.Footer.registerClass('QLAS.Footer', BL.UI.Control);
QLAS.TopNav.registerClass('QLAS.TopNav', BL.UI.Control);
QLAS.Header.registerClass('QLAS.Header', BL.UI.Control);
QLAS.AboutPage.registerClass('QLAS.AboutPage', BL.UI.Control);
})(jQuery);

//! This script was generated using Script# v0.7.4.0
