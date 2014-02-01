/*jslint browser: true */
/*global $, jQuery*/
/*global alert: true, confirm: true, console: true, Debug: true, opera: true, prompt: true, WSH: true */
function logMock() {
    "use strict";
    return "Verbose; 2014-01-21 14:12:30.454; Added Parameters ;rErrorCode = 0 ;oExtErrorPosReference = NULL ;ioAccountId = 1000120880 ;ioCurrencyId = SEK ;ioCurrencySpread = NULL ;ioTradeDay = 20140121 ;ioExtChannelId = EPC ;ioExtUser = S43253 ;ioExtId = DX0021T ;ioRegUser = standard ;ioRegToken = 0 ;ioRegInterface = ONL ;ioClientRowVersion = NULL ;iLanguageId = 41D ;iExtPosReference = NULL ;oCreatedDate = NULL ;oRegDate = 2014-01-21 14:12:29";
}

function soapMockResult() {
    "use strict";

    var sMock =  "&lt;soapenv:Envelope xmlns:soapenv=&quot;http://schemas.xmlsoap.org/soap/envelope/&quot;"+
            "xmlns:seb=&quot;http://www.tieto.com/cmw/tcm/sebaccount&quot;" +
            " xmlns:tcm=&quot;http://www.tieto.com/cmw/tcm/&quot;&gt;" +
            "&lt;soapenv:Header/&gt;" +
            "&lt;soapenv:Body&gt;" +
            "&lt;seb:OverviewAccountGet&gt;" +
            "&lt;seb:inputDTO&gt;" +
            "&lt;seb:SEBOverviewAccountSet&gt;" +
            "&lt;seb:AccountId&gt;1000120880&lt;/seb:AccountId&gt;" +
            "&lt;seb:CurrencyId&gt;SEK&lt;/seb:CurrencyId&gt;" +
            "&lt;seb:TradeDay&gt;20140121&lt;/seb:TradeDay&gt;" +
            "&lt;/seb:SEBOverviewAccountSet&gt;" +
            "&lt;seb:InputContext&gt;" +
            "&lt;tcm:ExtChannelId&gt;EPC&lt;/tcm:ExtChannelId&gt;" +
            "&lt;tcm:ExtId&gt;DX0021T&lt;/tcm:ExtId&gt;" +
            "&lt;tcm:ExtUser&gt;s47368&lt;/tcm:ExtUser&gt;" +
            "&lt;tcm:LanguageId&gt;41D&lt;/tcm:LanguageId&gt;" +
            "&lt;/seb:InputContext&gt;" +
            "&lt;/seb:inputDTO&gt;" +
            "&lt;/seb:OverviewAccountGet&gt;" +
            "&lt;/soapenv:Body&gt;" +
            "&lt;/soapenv:Envelope&gt;";
    return sMock;
}
function log2Soap(logtxt) {
    "use strict";
/* return logtxt.toLowerCase(); */
    return soapMockResult(logtxt);
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
