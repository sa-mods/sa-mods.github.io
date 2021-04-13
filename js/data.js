const texts = {
    "select": {
        "name": "Escolha uma função",
        "text": "..."
    },
        "criar link de conversa": {   
        "name": "criar link de conversa",
        "text": "Essa função permite que o usuário digite um número e seja gerado um link de conversa direta para aquele contato o qual o usuário poderá compartilhar ou copiar. Para usá-la vá nos 3 pontinhos no canto superior direito na tela inicial e clique em criar link de conversa."
    },
        "conversa direta": {     
        "name": "conversa direta",
        "text": "Permite que o usuário possa conversar diretamente com o contato sem a necessidade de salvar o número. Para usá-la clique nos 3 pontinhos no canto superior direito e clique em Conversa direta."
    },
        "limpar cache": {     
        "name": "limpar cache",
        "text": "A função limpar cache foi desenvolvida para limpar arquivos desnecessários do whatsapp. Para usá-la você precisa ir em privacidade e clicar em limpar cache!"
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
        "text": "Permite não dizer ao remetente da mensagem que você recebeu a mesma. Para abilitá-la vá em privacidade, opções de privacidade, ocultar segundo tick."
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
        "text": "Essa função permite o usuário fazer download de qualquer status de qualquer pessoa. Para usá-la basta clicar em um status, clicar no 3 pontinhos no canto superior direito, e clicar em Baixar este status 🤔."
    },
    "Resetar configurações": {   
        "name": "Resetar configurações",
        "text": "Permite resetar as configurações das opções de privacidade para padrão. Para usá-la vá em privacidade, opções de privacidade, Resetar configurações"
    }
};

const sawav2 = {
    "select": {
        "name": "Escolha uma função",
        "texto": "..."
    },
    "Clear cache avançado": {   
        "name": "Clear cache avancado",
        "texto": "O clear cache avancado é um novo clear cache que limpa diretamente as pastas criadas pelo whatsapp, tais como whatsapp documents, whatsapp videos, whatsapp status entre outras."
    },
    "Change background": {   
        "name": "Change background",
        "texto": "Esta função permite mudar o plano de fundo da tela inicial, você pode colocar imagens, cor unica, duas ou três cores gradientes, usar somente opacidade ou deixar transparente."
    },
    "hide mídia": {   
        "name": "hide mídia",
        "texto": "Esta função permite esconder novos arquivos baixados da galeria"
    },
    "media settings": {   
        "name": "media settings",
        "texto": "Função que permite configurações extras com relação ao envio de imagens e postagens de status"
    },
    "Bloqueio Pattern": {   
        "name": "Bloqueio Pattern",
        "texto": "Novo tipo de bloqueio adicionado que permite proteger o whatsapp por desenho padrão."
    },
    "Encriptador de mensagens": {   
        "name": "Encriptador de mensagens",
        "texto": "Pemite criptografar e descriptografar mensagens da categoria base64, sendo assim você pode conversar até coisas pessoais mesmo em grupos com uma pessoa específica que também usa o SA WhatsApp, que os demais participantes não saberão o seu recado."
    },
    "repetidor de texto": {   
        "name": "repetidor de texto",
        "texto": "Função que permite repetir certo texto até mais de 1000 vezes."
    },
    "text emoji": {   
        "name": "text emoji",
        "texto": "Permite transformar um texto escrito em letras em um escrito com emojis, basta escrever o texto, escolher o emoji e clicar em converter"
    },
    "Navegador web": {   
        "name": "Navegador web",
        "texto": "é um navegador web implementado dentro do whatsapp, sendo assim você pode navegar da maneira que quiser sem nem mesmo sair do whatsapp"
    },
    "Download status": {   
        "name": "Download status",
        "texto": "Nova  função para baixar status um pouco diferente da já existente pois ela carrega todos os status em um só lugar para fazer o download.Ao baixar o status ele ficará na galeria na pasta AZMODS Status."
    },
    "Vpn": {   
        "name": "Vpn",
        "texto": "Vpn integrada no whatsapp que permite proteger sua navegação através de proxy http"
    },
    "Restart WhatsApp": {   
        "name": "Restart WhatsApp",
        "texto": "Como o próprio nome já diz, essa função permite reiniciar o whatsapp como se você fechasse a janela do whatsapp e abrisse de novo."
    }
};
    
    

window.onload = function(){
    let function_list = document.getElementById("function");
    let function2_list = document.getElementById("data");
    let div_text = document.getElementById("text");
    let div_texto = document.getElementById("texto");
    let copyright = new Date();
    // Remove a opção "Carregando..." da lista
    function_list.innerHTML = "";
    function2_list.innerHTML = "";
    // Adiciona cada elemento contido no objeto com as informações
    for (key in texts) {
        function_list.innerHTML += `<option value="${key}">${texts[key]["name"]}</option>`;
    }
    
    for (key in sawav2) {
		  function2_list.innerHTML += `<option value="${key}">${sawav2[key]["name"]}</option>`;
	 }
    
    div_text.innerHTML = texts.select.text;
    div_texto.innerHTML = sawav2.select.texto;
    document.getElementById("copyright").innerHTML = `© SA-MODS - ${copyright.getFullYear()}`;
    function_list.onchange = function() {
        let info = texts[this.value];
        let info2 = sawav2[this.value];
        div_text.innerHTML = info.text;
    }
    
    function_list.onchange = function() {
        let info = texts[this.value];
        div_text.innerHTML = info.text;
    }
    
    function2_list.onchange = function() {
        let info2 = sawav2[this.value];
        div_texto.innerHTML = info2.texto;
    }
};


