//! QLAS.debug.js
//

(function($) {

Type.registerNamespace('QLAS');

////////////////////////////////////////////////////////////////////////////////
// QLAS.BlogPage

QLAS.BlogPage = function QLAS_BlogPage() {
    QLAS.BlogPage.initializeBase(this);
}
QLAS.BlogPage.prototype = {
    
    get_defaultClass: function QLAS_BlogPage$get_defaultClass() {
        return 'container-fluid';
    }
}


////////////////////////////////////////////////////////////////////////////////
// QLAS.ToolsPage

QLAS.ToolsPage = function QLAS_ToolsPage() {
    QLAS.ToolsPage.initializeBase(this);
}
QLAS.ToolsPage.prototype = {
    
    get_defaultClass: function QLAS_ToolsPage$get_defaultClass() {
        return 'container-fluid';
    }
}


////////////////////////////////////////////////////////////////////////////////
// QLAS.CustomersPage

QLAS.CustomersPage = function QLAS_CustomersPage() {
    QLAS.CustomersPage.initializeBase(this);
}
QLAS.CustomersPage.prototype = {
    
    get_defaultClass: function QLAS_CustomersPage$get_defaultClass() {
        return 'container-fluid';
    }
}


////////////////////////////////////////////////////////////////////////////////
// QLAS.ToolsPageBody

QLAS.ToolsPageBody = function QLAS_ToolsPageBody() {
    QLAS.ToolsPageBody.initializeBase(this);
}
QLAS.ToolsPageBody.prototype = {
    e_checklistIcon: null,
    
    get_defaultClass: function QLAS_ToolsPageBody$get_defaultClass() {
        return 'row';
    },
    
    onApplyTemplate: function QLAS_ToolsPageBody$onApplyTemplate() {
        QLAS.ToolsPageBody.callBaseMethod(this, 'onApplyTemplate');
        BL.UI.ElementUtilities.setText(this.e_checklistIcon, '\ue008');
    },
    
    v_onSurveysClick: function QLAS_ToolsPageBody$v_onSurveysClick(e) {
        window.navigate('https://qualla.com/surveys');
    },
    
    v_onChecklistsClick: function QLAS_ToolsPageBody$v_onChecklistsClick(e) {
        window.navigate('https://qualla.com/checklists');
    },
    
    v_onSignupsClick: function QLAS_ToolsPageBody$v_onSignupsClick(e) {
        window.navigate('https://qualla.com/signups');
    }
}


////////////////////////////////////////////////////////////////////////////////
// QLAS.PricingPage

QLAS.PricingPage = function QLAS_PricingPage() {
    QLAS.PricingPage.initializeBase(this);
}
QLAS.PricingPage.prototype = {
    
    get_defaultClass: function QLAS_PricingPage$get_defaultClass() {
        return 'container-fluid';
    }
}


////////////////////////////////////////////////////////////////////////////////
// QLAS.FeaturesPage

QLAS.FeaturesPage = function QLAS_FeaturesPage() {
    QLAS.FeaturesPage.initializeBase(this);
}
QLAS.FeaturesPage.prototype = {
    
    get_defaultClass: function QLAS_FeaturesPage$get_defaultClass() {
        return 'container-fluid';
    }
}


////////////////////////////////////////////////////////////////////////////////
// QLAS.CustomersPageBody

QLAS.CustomersPageBody = function QLAS_CustomersPageBody() {
    QLAS.CustomersPageBody.initializeBase(this);
}
QLAS.CustomersPageBody.prototype = {
    
    get_defaultClass: function QLAS_CustomersPageBody$get_defaultClass() {
        return 'row';
    },
    
    onApplyTemplate: function QLAS_CustomersPageBody$onApplyTemplate() {
        QLAS.CustomersPageBody.callBaseMethod(this, 'onApplyTemplate');
    },
    
    v_onParentsClick: function QLAS_CustomersPageBody$v_onParentsClick(e) {
        window.navigate('https://qualla.com/parents');
    }
}


////////////////////////////////////////////////////////////////////////////////
// QLAS.PricingPageBody

QLAS.PricingPageBody = function QLAS_PricingPageBody() {
    QLAS.PricingPageBody.initializeBase(this);
}
QLAS.PricingPageBody.prototype = {
    
    get_defaultClass: function QLAS_PricingPageBody$get_defaultClass() {
        return 'row';
    },
    
    onApplyTemplate: function QLAS_PricingPageBody$onApplyTemplate() {
        QLAS.PricingPageBody.callBaseMethod(this, 'onApplyTemplate');
    },
    
    v_onHighFiveClick: function QLAS_PricingPageBody$v_onHighFiveClick(e) {
        alert('High five!  Thanks for using Qualla!');
    }
}


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
// QLAS.BlogPageBody

QLAS.BlogPageBody = function QLAS_BlogPageBody() {
    QLAS.BlogPageBody.initializeBase(this);
}
QLAS.BlogPageBody.prototype = {
    e_scriptLink: null,
    e_iframeHolder: null,
    
    get_defaultClass: function QLAS_BlogPageBody$get_defaultClass() {
        return 'row';
    },
    
    onApplyTemplate: function QLAS_BlogPageBody$onApplyTemplate() {
        QLAS.BlogPageBody.callBaseMethod(this, 'onApplyTemplate');
        if (this.e_iframeHolder != null) {
            var ifr = document.createElement('IFRAME');
            ifr.style.width = '95vh';
            ifr.style.maxWidth = '700px';
            ifr.style.overflowX = 'hidden';
            ifr.style.overflowY = 'hidden';
            ifr.style.height = '440px';
            ifr.style.border = '0px';
            ifr.frameBorder = '0';
            ifr.src = 'https://qualla.com/qseafawaa/embed';
            this.e_iframeHolder.appendChild(ifr);
        }
    }
}


////////////////////////////////////////////////////////////////////////////////
// QLAS.FeaturesPageBody

QLAS.FeaturesPageBody = function QLAS_FeaturesPageBody() {
    QLAS.FeaturesPageBody.initializeBase(this);
}
QLAS.FeaturesPageBody.prototype = {
    
    get_defaultClass: function QLAS_FeaturesPageBody$get_defaultClass() {
        return 'row';
    },
    
    onApplyTemplate: function QLAS_FeaturesPageBody$onApplyTemplate() {
        QLAS.FeaturesPageBody.callBaseMethod(this, 'onApplyTemplate');
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
            ifr.style.height = '640px';
            ifr.style.border = '0px';
            ifr.frameBorder = '0';
            ifr.src = 'https://qualla.com/qalaeaeah/embed';
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


QLAS.BlogPage.registerClass('QLAS.BlogPage', BL.UI.Control);
QLAS.ToolsPage.registerClass('QLAS.ToolsPage', BL.UI.Control);
QLAS.CustomersPage.registerClass('QLAS.CustomersPage', BL.UI.Control);
QLAS.ToolsPageBody.registerClass('QLAS.ToolsPageBody', BL.UI.Control);
QLAS.PricingPage.registerClass('QLAS.PricingPage', BL.UI.Control);
QLAS.FeaturesPage.registerClass('QLAS.FeaturesPage', BL.UI.Control);
QLAS.CustomersPageBody.registerClass('QLAS.CustomersPageBody', BL.UI.Control);
QLAS.PricingPageBody.registerClass('QLAS.PricingPageBody', BL.UI.Control);
QLAS.SupportPage.registerClass('QLAS.SupportPage', BL.UI.Control);
QLAS.BlogPageBody.registerClass('QLAS.BlogPageBody', BL.UI.Control);
QLAS.FeaturesPageBody.registerClass('QLAS.FeaturesPageBody', BL.UI.Control);
QLAS.SupportPageBody.registerClass('QLAS.SupportPageBody', BL.UI.Control);
QLAS.AboutPageBody.registerClass('QLAS.AboutPageBody', BL.UI.Control);
QLAS.Footer.registerClass('QLAS.Footer', BL.UI.Control);
QLAS.TopNav.registerClass('QLAS.TopNav', BL.UI.Control);
QLAS.Header.registerClass('QLAS.Header', BL.UI.Control);
QLAS.AboutPage.registerClass('QLAS.AboutPage', BL.UI.Control);
})(jQuery);

//! This script was generated using Script# v0.7.4.0
