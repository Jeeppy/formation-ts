var _a;
var inputNb1 = document.querySelector("#nb1");
var inputNb2 = document.querySelector("#nb2");
var divResultat = document.querySelector(".resultat");
(_a = document.querySelector("#calcul")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var resultat = addition(+inputNb1.value, +inputNb2.value);
    divResultat.textContent = resultat.toString();
    ;
});
function addition(nb1, nb2) {
    return nb1 + nb2;
}
