const filmesMarcantes = [
  {
    id: 1001,
    nome: "Velozes e Furiosos",
    genero: "Ação",
    emCartaz: false,
  },
  {
    id: 1002,
    nome: "É assim que acaba",
    genero: "Romance",
    emCartaz: true,
  },
  {
    id: 1003,
    nome: "Meu Malvado Favorito 4",
    genero: "Animação",
    emCartaz: true,
  },
];
app.get("/filmes", (req, res) => {
  return res.status(200).send(filmesMarcantes);
});
