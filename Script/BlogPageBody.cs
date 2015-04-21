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
    public class BlogPageBody : Control
    {
        [ScriptName("e_scriptLink")]
        private Element scriptLink;

        [ScriptName("e_iframeHolder")]
        private Element iframeHolder;

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
            if (this.iframeHolder != null)
            {
                IFrameElement ifr = (IFrameElement)Document.CreateElement("IFRAME");
                ifr.Style.Width = "95vh";
                ifr.Style.MaxWidth = "700px";
                ifr.Style.OverflowX = "hidden";
                ifr.Style.OverflowY = "hidden";
                ifr.Style.Height = "440px";
                ifr.Style.Border = "0px";
                ifr.FrameBorder = "0";

                ifr.Src = "https://qualla.com/qseafawaa/embed";


                iframeHolder.AppendChild(ifr);
            }
        }
    }
}
