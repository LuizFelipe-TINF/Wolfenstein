// objeto que armazena os personagens e suas informações
const personagens = {
    bj: {
        nome: "B.J. Blazkowicz",
        descricao: "O protagonista da franquia Wolfenstein. Um soldado implacável que luta contra o regime nazista usando coragem e armas pesadas.",
        imagem: "Wolfenstein/imgGrandes/BJ.jpg"
    },
    anya: {
        nome: "Anya Oliwa",
        descricao: "Parceira e aliada de B.J., Anya é uma personagem forte e inteligente, essencial na resistência contra os nazistas.",
        imagem: "Wolfenstein/imgGrandes/brandt.jpg"
    },
};


function iniciarSelecaoPersonagens() {

    // seleciona todas as imagens dentro da lista de personagens
    const imagens = document.querySelectorAll(".lista-personagens img");

     // seleciona a div onde as informações do personagem serão exibidas
    const infoDiv = document.getElementById("infopersonagem");

    // função para atualizar as informações do personagem
    function mostrarPersonagem(persona) {
        // obtém os dados do personagem selecionado
        const personagem = personagens[persona];

        // substitui todo o conteúdo existente dentro da div
        // faz com que cada clique em uma imagem substitui todo o conteúdo da coluna da direita pelo personagem escolhido
        infoDiv.innerHTML = `

            <h2>${personagem.nome}</h2>
            <p>${personagem.descricao}</p>
            <img src="${personagem.imagem}" alt="${personagem.nome}">

        `;
    }

    // adiciona um evento de clique a cada imagem
    imagens.forEach(img => {
        img.addEventListener("click", () => {

            // obtém o valor do atributo personalizado "nomepersonagem"
            const persona = img.getAttribute("nomepersonagem");
            // chama a função para mostrar as informações do personagem
            mostrarPersonagem(persona);
        });
    });
}

iniciarSelecaoPersonagens()