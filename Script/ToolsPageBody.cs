// Class1.cs
//

using System;
using System.Collections.Generic;
using System.Html;
using jQueryApi;
using BL.UI;
using System.Runtime.CompilerServices;
using BL.BS;

namespace QLAS
{
    public class ToolsPageBody : Control
    {
        [ScriptName("e_checklistIcon")]
        private Element checklistIcon;

        public override string DefaultClass
        {
            get
            {
                return "row";
            }
        }

        protected override void OnApplyTemplate()
        {
            base.OnApplyTemplate();

            ElementUtilities.SetText(this.checklistIcon, "");
        }

        [ScriptName("v_onSurveysClick")]
        private void HandleSurveysClick(ElementEvent e)
        {
            Window.Navigate("https://qualla.com/surveys");
        }

        [ScriptName("v_onChecklistsClick")]
        private void HandleChecklistsClick(ElementEvent e)
        {
            Window.Navigate("https://qualla.com/checklists");
        }

        [ScriptName("v_onSignupsClick")]
        private void HandleSignupsClick(ElementEvent e)
        {
            Window.Navigate("https://qualla.com/signups");
        }

    }
}
