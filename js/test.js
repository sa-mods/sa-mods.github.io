/*
 * Primeiramente me desculpem pelos comentarios e
 * erros de degitação neste arquivo, eu não uso
 * muito o corretor e esses comentarios são desnecessarios.
 * Se alguem quiser me ajudar fiquem a vontade.
*/


/*
 * Todo o texto  com as informações de instalação e
 * como usar devem ser inseridas nesse objeto como
 * no exemplo do editor Nano
*/
const texts = {
    "select": {
        "name": "Escolha uma função",
        "text": "..."
    },
        "criar link de conversa": {   
        "name": "criar link de conversa",
        "text": "Essa função permite que o usuário digite um número e seja gerado um link de conversa direta para aquele contato o qual o usuário poderá compartilhar ou copiar. Para usá-la vá nos 3 pontinhos no canto superior direito na tela inicial e clique em criar link de conversa."
    },
        "new chat": {     
        "name": "new chat",
        "text": "Permite que o usuário possa conversar diretamente com o contato sem a necessidade de salvar o número. Para usá-la clique nos 3 pontinhos no canto superior direito e clique em new chat."
    },
        "clear cache": {     
        "name": "clear cache",
        "text": "A função clear cache foi desenvolvida para limpar arquivos desnecessários do whatsapp. Para usá-la você precisa ir em privacidade e entrar em clear cache!"
    },
        "contador de mensagens": {     
        "name": "contador de mensagens!",
        "text": "O contador de mensagens é uma função padrão adicionada nos chats em grupo do whatsapp que permite saber quantas mensagens cada usuário enviou. Para desfrutar dessa função, entre em algum grupo vá nos dados do grupo e veja na lista de participantes no canto direito de cada um a quantidade de mensagens enviadas por eles"
    },
        "modo avião": {     
        "name": "modo avião",
        "text": "O modo avião permite que você desabilite a internet apenas para o whatsapp,enquanto ativado você não receberá mensagens mesmo com a internet ligada e as mensagens que você tentar enviar ficarão em espera até que você desative o modo avião novamente!"
    },
        "backup e restore": {     
        "name": "backup e restore",
        "text": "A função backup e restore é uma das funções mais importante desse whatsapp, pois ela permite que você faça backup ou restauração de dados totalmente offline em questão de segundos sem nenhuma necessidade de conexão com google drive ou outra maneira qualquer. Para fazer backup ou restauração dos dados vá em privacidade, backup e restore e clique em backup ou em restore dependendo da situação!"
    },
        "bomb txt": {     
        "name": "bomb txt",
        "text": "O bomb txt é uma função de auto envio e repetição de texto o qual pode ser programado o texto e a quantidade de repetições pelo próprio usuário. Para usá-lo basta entrar em uma conversa e aperta no ícone da bombinha no canto superior esquerdo!"
    },
        "editor de texto": {     
        "name": "editor de texto",
        "text": "O editor de texto é um editor diferenciado onde você pode escrever seu texto e enviá-lo em vários estilos diferentes. Para usá-lo vá em privacidades, EDITOR DE TEXTOS."
    },
        "efeitos especiais na home": {     
        "name": "efeitos especiais na home",
        "text": "Nesse whatsapp existe algumas animações especiais para deixar o usuário mais confortado. Para abilitá-las basta clicar na imagem no canto central direito da tela ou arrastá-lo para a esquerda e abilitar o que você quiser."
    },
        "efeitos especiais nos chats": {     
        "name": "efeitos especiais nos chats",
        "text": "Assim como na home, também existem animações para os chats em grupo ou particular e essa animação também pode abranger a home. Para abilitá-la vá em privacidades, animações especiais!"
    },
        "listview personalizada": {     
        "name": "listview personalizada",
        "text": "Existe uma listview personalizada com 15 estilos diferentes que são percebidos quando o usuário desliza a lista de conversas. Ela já vem abilitada na função grow que é praticamente o padrão do whatsapp, para mudá-la vá em privacidade, Listview e escolha algum estilo!"
    },
        "Efeitos de transição de tela 3D": {     
        "name": "Efeitos de transição de tela 3D",
        "text": "A função efeitos de transição de tela 3D é uma função presente na transição ou troca de tela; como da tela de conversa para o status por exemplo basta rolar a tela de um lado para o outro e já irá perceber o efeito em ação. Essa função já vem ativada no estilo cubo para mudar basta ir em privacidade, Efeitos de tela 3D e escolher entre os 16 efeitos diferentes!"
    },
        "Fontes diferentes": {     
        "name": "Fontes diferentes",
        "text": "Este whatsapp possui ainda 68 fontes diferentes para deixar o seu whatsapp ainda mais estiloso. Para mudá-las vá em privacidade, Fontes"
    },
        "Bloqueio por pin": {     
        "name": "Bloqueio por pin",
        "text": "O SA Whatsapp possui uma espécie de \"Bloqueio por pin\" que é requerido toda vez que alguém entrar nele livrando assim de intrusos espiões. Para abilitá-lo vá em privacidade, Bloqueio por pin."
    },
        "Bloqueio por impressão digital": {     
        "name": "Bloqueio por impressão digital",
        "text": "O Bloqueio por impressão digital ou fingerprint é uma função já existente no whatsapp porém agora incorporado na aba de privacidade para facilitar a vida do usuário. O Bloqueio por impressão digital funciona assim como o Bloqueio por pin porém ao invés de um pin numérico ele requer a digital do usuário para autenticação. Para abilitá-lo vá em privacidade Bloqueio por impressão digital."
    },
    "check update": {   
        "name": "check update",
        "text": "A função checar atualização é uma função para informar o usuário sobre novas atualizações disponíveis. Basta o usuário ir em privacidade, opções de privaçidade, checar atualização!",
    },
    "congelar visto por último": {   
        "name": "congelar visto por último",
        "text": "A função congelar visto por último é uma função que quando abilitada, pausa a sua visualização em sua última visualização antes de ser ativada a função porém você também não poderá ver a última visualização dos seus contatos. Para abilitá-la vá em privacidade, opções de privacidade, congelar visto por último."
    },
    "desabilitar tag encaminhada": {   
        "name": "desabilitar tag encaminhada",
        "text": "A função desabilitar tag encaminhada permite que você possa encaminhar mensagens de outros grupos ou pessoas sem a tag encaminhada. Para abilitá-la vá em privacidade, opções de privacidade, desabilitar tag encaminhada."
    },
    "mostrar ticks azuis após a resposta": {   
        "name": "mostrar ticks azuis após a resposta",
        "text": "Essa função função permite que o usuário possa visualizar a mensagem sem que o remetente saiba e somente após a resposta do usuário que aparecerá os ticks azuis para o remetente. Para abilitá-la vá em privacidade, opções de privacidade, mostrar ticks azuis após a resposta."
    },
    "ocultar ticks azuis": {   
        "name": "ocultar ticks azuis",
        "text": "Permite ocultar totalmente o tick azul ainda que o usuário visualize e responda a mensagem, não aparecerá o tick azul para quem enviou. Para abilitála vá em privacidade, opções de privacidade, ocultar ticks azuis."
    },
    "ocultar segundo tick": {   
        "name": "ocultar segundo tick",
        "text": "Permite não dizer ao remetente da mensagem que você receu a mesma. Para abilitá-la vá em privacidade, opções de privacidade, ocultar segundo tick."
    },
    "anti-deletar de mensagens": {   
        "name": "anti-deletar de mensagens",
        "text": "Essa é uma função muito importante que permite que o usuário possa visualizar a mensagem ainda que ela seja apagada pelo próprio remetente. Para ativá-la vá em privacidade, opções de privacidade, anti-deletar mensagens."
    },
    "ocultar visualização de status": {   
        "name": "ocultar visualização de status",
        "text": "Essa função permite que o usuário visualize os status das pessoas sem que elas saibam. Para ativá-la vá em privacidade, opções de privacidade, ocultar visualização de status"
    },
    "fazer download de status": {   
        "name": "fazer download de status",
        "text": "Essa função permite o usuário fazer download de qualquer status de qualquer pessoa. Para usá-la basta clicar em um status, clicar no 3 pontinhos no canto superior direito, e clicar em download desse status."
    },
    "Resetar configurações": {   
        "name": "Resetar configurações",
        "text": "Permite resetar as configurações das opções de privacidade para padrão. Para usá-la vá em privacidade, opções de privacidade, Resetar configurações"
    }
};

/*
 * Essa parte do código tem o dever de organizar
 * toda a página com as informações acima
*/
window.onload = function(){
    /*
     * Obtem os elementos do DOM para poder
     * manipular da forma correta
    */
    let function_list = document.getElementById("function");
    let div_text = document.getElementById("text");
    let copyright = new Date();
    // Remove a opção "Carregando..." da lista
    function_list.innerHTML = "";
    // Adiciona cada elemento contido no objeto com as informações
    for (key in texts) {
        function_list.innerHTML += `<option value="${key}">${texts[key]["name"]}</option>`;
    }
    // Define as informações padrões, acho que isso
    // deveria ter sido melhor organizado de alguma forma
    div_text.innerHTML = texts.select.text;
    // Se alguem reclamar desse "T.S A.9" eu removo e coloco outro melhor
    document.getElementById("copyright").innerHTML = `© SA-MODS - ${copyright.getFullYear()}`;
    // Atualiza as informações de acordo com a opção selecionada
    function_list.onchange = function() {
        let info = texts[this.value];
        div_text.innerHTML = info.text;
    };
};