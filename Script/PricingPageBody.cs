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
    public class PricingPageBody : Control
    {

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

        }
       
        [ScriptName("v_onHighFiveClick")]
        private void HandleHighFiveClick(ElementEvent e)
        {
            Script.Alert("High five!  Thanks for using Qualla!");
        }
    }
}
