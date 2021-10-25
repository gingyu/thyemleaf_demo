import SHA256 from '/js/utils/a.js'


export default function main() {
    $("#signInBtn").click(function() {
       var encoded = SHA256($("#userPw").val());
       $("#encodedPw").val(encoded);
       $("#signForm").attr("action", "/signIn").attr("method", "post").submit();
    });
}
/**
 * form 구성하여 전송
 * @param sPath     : action url
 * @param oParams   : input objects
 * @param sMethod(optional)  : 기본은 post
 */
function sendForm(sPath, oParams, sMethod, sTarget) {
    sMethod = sMethod || "post";  //method 부분은 입력안하면 자동으로 post가 된다.
    sTarget = sTarget || "_self"; //target 부분 입력안하면 자동으로 _self가 된다.
    var eForm = document.createElement("form");
    eForm.setAttribute("method", sMethod);
    eForm.setAttribute("action", _contextPath + sPath);
    eForm.setAttribute("target", sTarget);

    var eCsrfField = document.createElement("input");
    eCsrfField.setAttribute("type", "hidden");
    eCsrfField.setAttribute("name", _parameterName);
    eCsrfField.setAttribute("value", _token);
    eForm.appendChild(eCsrfField);

    //input type hidden name(key) value(params[key]);
    for(var oKey in oParams) {
        var eHiddenField = document.createElement("input");
        eHiddenField.setAttribute("type", "hidden");
        eHiddenField.setAttribute("name", oKey);
        eHiddenField.setAttribute("value", oParams[oKey]);
        eForm.appendChild(eHiddenField);
    }
    document.body.appendChild(eForm);
    eForm.submit();
}