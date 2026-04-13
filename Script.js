function LOGIN() {
  let texto = "configurações salvas"
  const gma = document.getElementById("gm").value;
  const pas = document.getElementById("pss").value;
  if (gma == "" && (pas) == "") {
    window.alert("Preencha os campos obrigatorios");
  }
  else if (gma === "") {
    window.alert("Preencha o campo de gmail")
  }
  else if (pas === "") {
    window.alert("informe sua senha")
  }
  else if (!gma.includes("@")) {
    window.alert("seu gmail esta invalido ou com erro de digitação")
  }
  else{
    let resp = window.confirm(texto);
  }
}
function search() {
  let text2 = document.getElementById("ss").value;
  if (text2 === "") {
    console.log("Area de __pesquisa__ = void")
  }
  else {
  window.alert(text2);
}
}
//lista header  
const sobre = "Lorem"
/*variaveis*/
function fnum() {
  let num = "+55 (85) 9 0000-0000"
  window.prompt("numero: "+num);
}
function fdress() {
  let dress = "******* n° ##"
  window.prompt(dress);
}
function fkey() {
  window.alert("seus dados:");
  window.alert(gma);
  window.alert(pas);
}
function fabolt() {
  window.alert("SOBRE: "+sobre)
}
function mostrarAlerta(msg) {
    let alerta = document.getElementById("alerta");
    let texto = document.getElementById("textoAlerta");

    texto.innerText = msg;
    alerta.style.display = "block";
}

function fecharAlerta() {
    document.getElementById("alerta").style.display = "none";
}