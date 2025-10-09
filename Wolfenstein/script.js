// objeto que armazena os personagens e suas informações
const personagens = {
    bj: {
        nome: "B.J. Blazkowicz",
        descricao: "William Joseph “B.J.” Blazkowicz é o protagonista da saga Wolfenstein. Um soldado americano implacável, conhecido por sua coragem e brutal eficiência em combate. Após anos lutando contra o regime nazista, ele se torna o símbolo da resistência mundial. Mesmo ferido e traumatizado, B.J. nunca abandona sua missão: libertar o mundo da tirania e proteger aqueles que ama.",
        imagem: "Wolfenstein/imgGrandes/BJ.jpg"
    },
    anya: {
        nome: "Anya Oliwa",
        descricao: "Enfermeira polonesa que cuida de B.J. durante seu coma, Anya se torna sua parceira amorosa e companheira de luta. Inteligente e empática, evolui de cuidadora a uma das líderes da resistência. Representa a humanidade e a esperança no meio da guerra, sempre apoiando B.J. emocionalmente e estrategicamente.",
        imagem: "Wolfenstein/imgGrandes/anya.jpg"
    },

    deathhead: {
        nome: "Deathshead (Wilhelm Strasse)",
        descricao: "Principal vilão e arqui-inimigo de B.J. Blazkowicz na série Wolfenstein, um general nazista genial e cruel responsável por desenvolver as armas de guerra mais avançadas e desumanas do Terceiro Reich, é obcecado por experimentos com humanos e robótica. Ele é um cientista que chefia a Divisão de Projetos Especiais da SS e se tornou famoso por criar supersoldados e outras abominações tecnológicas para a Alemanha nazista vencer a Segunda Guerra Mundial. ",
        imagem: "Wolfenstein/imgGrandes/deathshead.jpg"
    },
    caroline: {
        nome: "Caroline Becker",
        descricao: "Líder do grupo de resistência Kreisau Circle. Mesmo paraplégica, é uma mulher firme, estratégica e idealista. Caroline inspira todos ao seu redor com sua liderança moral e coragem. Sua morte em The New Colossus marca profundamente B.J. e motiva a continuidade da luta.",
        imagem: "Wolfenstein/imgGrandes/caroline.jpg"
    },
  
    frauengel: {
        nome: "Frau Engel",
        descricao: "Vilã de The New Colossus, é uma oficial nazista sádica, fanática e cruel. Após a morte de Deathshead, ela se torna o principal rosto do regime. Manipuladora e implacável, busca destruir B.J. e a resistência. Sua relação abusiva com a filha, Sigrun, mostra seu lado mais desumano.",
        imagem: "Wolfenstein/imgGrandes/frauengel.jpeg"
    },

        maxhass: {
        nome: "Max Hass",
        descricao: "Homem com deficiência intelectual e enorme força física, Max é um membro gentil e leal da resistência. Apesar de não falar muito, demonstra grande empatia e coragem. É protegido por Caroline e querido por todos os membros do grupo.",
        imagem: "Wolfenstein/imgGrandes/maxhass.png"
    },

        gracewalker: {
        nome: "Grace Walker",
        descricao: "Líder da resistência americana em The New Colossus. Forte, ousada e carismática, comanda sua equipe com inteligência e paixão. É um símbolo da luta contra o racismo e o autoritarismo, unindo diferentes grupos sob a causa da liberdade.",
        imagem: "Wolfenstein/imgGrandes/grace.jpg"
    },

    setroth: {
        nome: "Set Roth",
        descricao: "Cientista judeu e ex-membro dos projetos nazistas. Depois de perceber o horror do regime, junta-se à resistência e usa seu conhecimento tecnológico para combatê-los. É o cérebro por trás de várias invenções que ajudam B.J. em suas missões.",
        imagem: "Wolfenstein/imgGrandes/seth.jpg"
    },

    sigrun: {
        nome: "Sigrun Engel",
        descricao: "Filha de Frau Engel, inicialmente submissa e oprimida, mas depois se rebela contra a mãe e se junta à resistência. Doce, inteligente e corajosa, busca redenção ajudando a destruir o regime que a mãe representa.",
        imagem: "Wolfenstein/imgGrandes/sirgrun.jpg"
    },

    wyatt: {
        nome: "Wyatt III",
        descricao: "Jovem soldado idealista que B.J. pode salvar em The New Order. É leal, mas emocionalmente frágil devido às pressões da guerra. Representa a inocência e o trauma da juventude em meio ao conflito.",
        imagem: "Wolfenstein/imgGrandes/wyatt.webp"
    },

    bubi: {
        nome: 'Hans "Bubi" Winkle',
        descricao: "Assistente e amante de Frau Engel. Arrogante, cruel e sádico, participa das torturas e execuções no campo de concentração. Acaba sendo morto por B.J., tornando-se um símbolo da decadência moral do regime nazista.",
        imagem: "Wolfenstein/imgGrandes/bubi.jpg"
    },

    rudi: {
        nome: 'Rudi Jäger',
        descricao: "Oficial nazista brutal e comandante da prisão onde B.J. é mantido em The Old Blood. É conhecido por seu sadismo e por tratar seus cães de ataque como extensões de si mesmo. Encarna o fanatismo e a violência cega do regime.",
        imagem: "Wolfenstein/imgGrandes/rudi.jpg"
    },

    brandt: {
        nome: 'Lothar Brandt',
        descricao: "Soldado nazista e subordinado menor no regime, aparece em The Old Blood. Representa o típico membro fiel do Reich, obediente e implacável, mas sem grandes motivações pessoais.",
        imagem: "Wolfenstein/imgGrandes/brandt.jpg"
    },

    hitler: {
        nome: 'Hitler (Adolf Hitler)',
        descricao: "O ditador e líder máximo do Terceiro Reich. Em The New Colossus, é mostrado como um velho doente, paranoico e decadente, mas ainda idolatrado pelos seguidores. Mesmo debilitado, continua sendo o símbolo do mal e da ideologia que a resistência luta para destruir.",
        imagem: "Wolfenstein/imgGrandes/hitler.jpg"
    },

    friedrich: {
        nome: 'Friedrich Keller',
        descricao: "Outro oficial nazista secundário presente em Wolfenstein: The Old Blood. Participa de experimentos e missões sob as ordens de superiores como Rudi e Deathshead, ajudando a manter a dominação do regime.",
        imagem: "Wolfenstein/imgGrandes/keller.jpg"
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