const posts = [
  {
    id: 1,
    titulo: "A importância da atividade física",
    conteudo:
      "Praticar atividade física regularmente traz diversos benefícios para a saúde, como a redução do risco de doenças cardiovasculares e o controle do peso corporal. Além disso, exercitar-se também melhora o humor e ajuda a combater o estresse.",
    data_criacao: "2022-01-15",
    category: "health",
    autor: "Mateus Ramos",
    tag: "health",
    image:
      "https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    comments: [
      {
        autor: "João",
        mensagem: "Ótimo artigo!",
        data: "2022-10-15",
        hora: "14:30",
      },
      {
        autor: "Maria",
        mensagem: "Obrigado por compartilhar suas ideias!",
        data: "2022-10-16",
        hora: "10:15",
      },
      {
        autor: "José",
        mensagem: "Gostei muito do conteúdo, parabéns!",
        data: "2022-10-17",
        hora: "18:22",
      },
    ],
  },
  {
    id: 2,
    titulo: "Os benefícios da leitura",
    conteudo:
      "Ler regularmente ajuda a desenvolver a criatividade, aprimora o vocabulário e a escrita, além de ser uma forma de relaxar e se desligar das preocupações do dia a dia. A leitura também pode contribuir para a melhoria da saúde mental e emocional.",
    data_criacao: "2022-02-01",
    category: "reading",
    autor: "Mateus Ramos",
    tag: "learning",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/Books_HD_%288314929977%29.jpg",
    comments: [
      {
        autor: "João",
        mensagem: "Ótimo artigo!",
        data: "2022-10-15",
        hora: "14:30",
      },
      {
        autor: "Maria",
        mensagem: "Obrigado por compartilhar suas ideias!",
        data: "2022-10-16",
        hora: "10:15",
      },
      {
        autor: "José",
        mensagem: "Gostei muito do conteúdo, parabéns!",
        data: "2022-10-17",
        hora: "18:22",
      },
    ],
  },
];

export default posts;