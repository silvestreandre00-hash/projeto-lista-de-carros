const produtos = [
    {
      nome: "onix",
      categoria: "hatch",
      quantidade: 2,
      preco: 75.000
    },
    {
        nome: "corolla",
      categoria: "sedan",
      quantidade: 1,
      preco: 150.000
    },
    {
        nome: "HB20",
      categoria: "hatch",
      quantidade: 2,
      preco: 80.000
    },
    {
        nome: "compass",
      categoria: "SUV",
      quantidade: 1,
      preco: 180.000
    },
    {
        nome: "civic",
      categoria: "sedan",
      quantidade: 1,
      preco: 140.000
    },
    {
        nome: "renegade",
      categoria: "SUV",
      quantidade: 1,
      preco: 130.000
    },
    {
        nome: "fiat Argo",
      categoria: "hatch",
      quantidade: 1,
      preco: 82.000
    },
    {
        nome: "jeep comander",
      categoria: "SUV",
      quantidade: 1,
      preco: 220.000
    }
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }
