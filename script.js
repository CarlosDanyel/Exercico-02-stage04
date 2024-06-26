const listaEstudante = [
  { nome: "Carlos", primeiraNota: 10, segundaNota: 10, teceiraNota: 10 },
  { nome: "Joao", primeiraNota: 5, segundaNota: 9, teceiraNota: 4 },
  { nome: "Me", primeiraNota: 10, segundaNota: 9, teceiraNota: 4 },
];

let result;

for (let i = 0; i < listaEstudante.length; i++) {
  result =
    (listaEstudante[i].primeiraNota +
      listaEstudante[i].segundaNota +
      listaEstudante[i].teceiraNota) /
    3;

  if (result > 7) {
    alert(`O Aluno ${listaEstudante[i].nome}\nFoi aprovado ${result}`);
  } else {
    alert(
      `O Aluno ${listaEstudante[i].nome}\nFoi reprovado com nota ${result}`
    );
  }
}
