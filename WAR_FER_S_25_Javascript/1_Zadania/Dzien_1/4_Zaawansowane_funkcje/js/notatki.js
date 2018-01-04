function scene(role1, role2, play) {

        return "Postacie to " + role1 + " i " + role2 + "Scena: " + play(role1, role2);

}
undefined
scene("Pablo Escobar", "Javier Pena", function(a1, a2) {


});
"Postacie to Pablo Escobar i Javier PenaScena: undefined"
scene("Pablo Escobar", "Javier Pena", function(a1, a2) {

        return a1 + "ZAbija" + a2;


});
"Postacie to Pablo Escobar i Javier PenaScena: Pablo EscobarZAbijaJavier Pena"
scene("Pablo Escobar", "Lucy Moncada", function(a1, a2) {

        return a1 + "ZAbija" + a2;


});
"Postacie to Pablo Escobar i Lucy MoncadaScena: Pablo EscobarZAbijaLucy Moncada"
