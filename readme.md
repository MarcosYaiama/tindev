Nodemon -> Recarregar aplicação automaticamente
Express -> Auxilia com as rotas
Mongose -> ODM, faz com que utilizemos a linguagem JS para interagir com o Banco
Cors -> Permite que a aplicação seja acessada por qualquer endereço, caso não instale o React não consegue acessar a aplicação
Yarn add extensão
    opção : -D 
        Significa apenas para desenvolvimento

Atualização automatica com nodemon, adicionando script no package.json:
      "scripts":{
          "dev": "nodemon src/server.js"
        },

Pegar parametros passados na URI:

    req.query.parametro

Métodos dentro do controler:
    SHOW, DELETE, INDEX, UPDATE, STORE

Conceitos Front

Componente, Estado, Propriedades



adb reverse tcp:3333 tcp:3333

    Faz com que o emulador consiga acessar o localhost da maquina

useEffect
    Dispara funcionalidades assim qunaod ele é exibido em tela ou qunado a informação muda


    useEffect(funcao, var que aciona a funcao)
    
    useEffect(()=> {}, []) // Executa só uma vez, quando a app é inicializada
    useEffect(()=> {}, [var,var2]) // Executa quando a app é inicializada e quando as vars mudam