/*jslint browser: true */
/*global $, jQuery, logMock, soapMockResult*/
/*global alert: true, confirm: true, console: true, Debug: true, opera: true, prompt: true, WSH: true */

function logMock() {
    "use strict";
    return "Verbose; 2014-01-21 14:12:30.454; Added Parameters ;rErrorCode = 0 ;oExtErrorPosReference = NULL ;ioAccountId = 1000120880 ;ioCurrencyId = SEK ;ioCurrencySpread = NULL ;ioTradeDay = 20140121 ;ioExtChannelId = EPC ;ioExtUser = S43253 ;ioExtId = DX0021T ;ioRegUser = standard ;ioRegToken = 0 ;ioRegInterface = ONL ;ioClientRowVersion = NULL ;iLanguageId = 41D ;iExtPosReference = NULL ;oCreatedDate = NULL ;oRegDate = 2014-01-21 14:12:29";
}


function getTopSoap() {
    "use strict";
    var rStr = "<pre>" +
            "&lt;soapenv:Envelope xmlns:soapenv=&quot;http://schemas.xmlsoap.org/soap/envelope/&quot;" +
            "xmlns:seb=&quot;http://www.tieto.com/cmw/tcm/sebaccount&quot;" +
            " xmlns:tcm=&quot;http://www.tieto.com/cmw/tcm/&quot;&gt;  </br>" +
            "&lt;soapenv:Header/&gt;  </br>" +
            "&lt;soapenv:Body&gt;  </br>";
    return rStr;
}
function getBottomSoap() {
    "use strict";
    var rStr = "&lt;/soapenv:Body&gt; </br>" +
            "&lt;/soapenv:Envelope&gt;" +
            "</pre>";
    return rStr;
}
function getXmlPart(item, myregexp, nr) {
    "use strict";
    var retXmlP,
        match;
    match = myregexp.exec(item);
    if (match !== null) {
        retXmlP = match[nr];
    } else {
        retXmlP = "";
    }
    return retXmlP;
}
function getNs(item) {
    "use strict";
    var rNs;
    switch (item) {
    case "io":
        rNs = "seb:";
        break;
    case "o":
        rNs = "tcm:";
        break;
    default:
        rNs = "";
    }
    return rNs;
}
function getXmlTag(item, myregexp) {
    "use strict";
    var tag = getXmlPart(item, myregexp, 3),
        value = getXmlPart(item, myregexp, 4),
        ns = getNs(getXmlPart(item, myregexp, 2)),
        rXmlTag = "&lt;" + ns + tag + "&gt" + value + "&lt;/" + tag + "&gt";
    return rXmlTag;
}

function getTokenanValueArr(txt) {
    "use strict";
    return txt.match(/io??(\w+)\W=\W(\w+)/g);
}

function log2Soap(logtxt) {
    "use strict";
/* return logtxt.toLowerCase(); */
  /*  return soapMockResult(logtxt);*/
    var retArr = getTokenanValueArr(logtxt),
    /* myregexp must have 4 matchgroups 1 all 2 namespace hint 3 tag 4 value*/
        myregexp = /(io?)(\w+)\W=\W(\w+)/,
        log2SRet,
        len = retArr.length,
        i;

    for (i = len - 1; i >= 0; i -= 1) {
        log2SRet = log2SRet + retArr[i] + " -- Turkey -- ";
    }
    return log2SRet;

}
$(document).ready(function() {
    "use strict";
    console.log("ready!");
    $("#LogTxt").val(logMock());
    $("#SoapMsg").val("Could I be dead?");
    $("#do-transform").click(function() {
        console.log("Commence Transform was clicked");
        $("#SoapMsg").append(log2Soap($("#LogTxt").val()));
    });
});
