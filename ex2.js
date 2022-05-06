let num1 = (prompt("Numero 1:"));
let num2 = (prompt("Numero 2:"));

// alert(num1 + num2);
// document.write(num1+num2);
texto.innerHTML = num1+num2;
texto.style.border = "1px solid brown";

//Selecionando o elemento h1 com id "titulo"

// 1ª Forma
document.getElementById("titulo").innerHTML = "Exemplo Javascript";
//2ª Forma
document.querySelector("#titulo").style.backgroundColor = "darkBlue";
//3ª Forma
titulo.style.color="White";

if(confirm("Tudo bem com você?")){
    alert("Que bom!!!");
}else{
    alert("Que pena!!!")
}

let estado = prompt("Informe seu estado:");

switch(estado.toLowerCase()){
    case "rondônia":
        alert("legal");
        break;
    case "bahia":
        alert("muito legal");
        break;
    case "rio grande do sul":
        alert("que frio");
        break;
        default:
            alert("você é de outro estado") 
            
}