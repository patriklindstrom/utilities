/*jslint browser: true */
/*global $, jQuery*/
/*global alert: true, confirm: true, console: true, Debug: true, opera: true, prompt: true, WSH: true */
function logMock() {
    "use strict";
    return "Verbose; 2014-01-21 14:12:30.454; Added Parameters ;rErrorCode = 0 ;oExtErrorPosReference = NULL ;ioAccountId = 1000120880 ;ioCurrencyId = SEK ;ioCurrencySpread = NULL ;ioTradeDay = 20140121 ;ioExtChannelId = EPC ;ioExtUser = S43253 ;ioExtId = DX0021T ;ioRegUser = standard ;ioRegToken = 0 ;ioRegInterface = ONL ;ioClientRowVersion = NULL ;iLanguageId = 41D ;iExtPosReference = NULL ;oCreatedDate = NULL ;oRegDate = 2014-01-21 14:12:29";
}
function soapMockResult() {
    "use strict";

    var sMock =  "<pre>" +
            "&lt;soapenv:Envelope xmlns:soapenv=&quot;http://schemas.xmlsoap.org/soap/envelope/&quot;" +
            "xmlns:seb=&quot;http://www.tieto.com/cmw/tcm/sebaccount&quot;" +
            " xmlns:tcm=&quot;http://www.tieto.com/cmw/tcm/&quot;&gt;  </br>" +
            "&lt;soapenv:Header/&gt;  </br>" +
            "&lt;soapenv:Body&gt;  </br>" +
            "&lt;seb:OverviewAccountGet&gt;" +
            "&lt;seb:inputDTO&gt;" +
            "&lt;seb:SEBOverviewAccountSet&gt;</br>" +
            "&lt;seb:AccountId&gt;1000120880&lt;/seb:AccountId&gt;</br>" +
            "&lt;seb:CurrencyId&gt;SEK&lt;/seb:CurrencyId&gt;</br>" +
            "&lt;seb:TradeDay&gt;20140121&lt;/seb:TradeDay&gt;</br>" +
            "&lt;/seb:SEBOverviewAccountSet&gt;</br>" +
            "&lt;seb:InputContext&gt;</br>" +
            "&lt;tcm:ExtChannelId&gt;EPC&lt;/tcm:ExtChannelId&gt;</br>" +
            "&lt;tcm:ExtId&gt;DX0021T&lt;/tcm:ExtId&gt;</br>" +
            "&lt;tcm:ExtUser&gt;s47368&lt;/tcm:ExtUser&gt;</br>" +
            "&lt;tcm:LanguageId&gt;41D&lt;/tcm:LanguageId&gt;</br>" +
            "&lt;/seb:InputContext&gt;</br>" +
            "&lt;/seb:inputDTO&gt;</br>" +
            "&lt;/seb:OverviewAccountGet&gt; </br>" +
            "&lt;/soapenv:Body&gt; </br>" +
            "&lt;/soapenv:Envelope&gt;" +
            "</pre>";
    return sMock;
}