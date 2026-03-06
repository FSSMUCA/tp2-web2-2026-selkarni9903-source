let compteur = 0;

console.log(0 == "" , "|", 0 === "");
if (0 == "" && !(0 === "")) compteur++;


console.log(0 == "0" , "|", 0 === "0");
if (0 == "0" && !(0 === "0")) compteur++;


console.log(0 == false , "|", 0 === false);
if (0 == false && !(0 === false)) compteur++;


console.log("" == false , "|", "" === false);
if ("" == false && !("" === false)) compteur++;


console.log(null == undefined , "|", null === undefined);
if (null == undefined && !(null === undefined)) compteur++;


console.log(null == false , "|", null === false);
if (null == false && !(null === false)) compteur++;


console.log(NaN == NaN , "|", NaN === NaN);
if (NaN == NaN && !(NaN === NaN)) compteur++;


console.log(1 == "1" , "|", 1 === "1");
if (1 == "1" && !(1 === "1")) compteur++;


console.log(" \t\n " == 0 , "|", " \t\n " === 0);
if (" \t\n " == 0 && !(" \t\n " === 0)) compteur++;

console.log("---");
console.log(compteur + " paire(s) où == et === donnent des résultats différents");