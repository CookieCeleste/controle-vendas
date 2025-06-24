import prompt from "prompt-sync";
let input = prompt();

let jogos = [];

function callInput() {
    let x = input();
    return x;
}

export function runProgram() {
    
    introduceProgram();
    while(true) {
        let x = showMenu();
        if (x == '0') {
            console.log('\nSaindo...\n')
            break;
        }
        else if (x == '1') {
            registrarVendas();
        }
        else if (x == '2') {
            listarVendas();
        }
        else if (x == '3') {
            cancelarVendas();
        }
        else if (x == '4') {
            diaListarVendas();
        }
        else if (x == '5') {
            periodoListarVendas();
        }
        else if (x == 'help') {
            console.log(`
            - Pressione Enter para prosseguir com o programa
            - Recomendado aumentar o tamanho do terminal arrastando a borda acima
            - Quando um menu de escolhas aparecer, insira o número da opção desejada e dê enter para ser direcionado(a)`)
            callInput();
        }
    }
}

export function introduceProgram() {
    console.log(`\n
========= LOJA DE VIDEOGAMES EM MÍDIA FÍSICA ============================================================

        [Pressione Enter para prosseguir com o programa]
        [Recomendado aumentar o tamanho do terminal arrastando a borda acima]`);
    console.log(`
        Quando um menu de escolhas aparecer, insira o número da opção desejada e dê enter para ser direcionado(a)
        `);
    callInput();
}

function showMenu() {
    console.log(`
        1. Registrar uma venda
        2. Listar Vendas
        3. Cancelar uma venda
        4. Listar vendas do dia
        5. Listar vendas de um ano
        0. Sair do programa

        digite "help" para rever as instruções
    `);

    process.stdout.write('Insira sua escolha: ')
    let x = callInput();
    return x;
}

function registrarVendas() {
    console.log('========= REGISTRAR VENDA ============================================================')
    console.log('\nSiga os passos inserindo as informações pedidas que serão armazenadas, digite "cancelar" para cancelar');
    process.stdout.write('[Enter]');
    let x = callInput();
    // esse if retorna zero pro x, que na função principal cai no break MAS NÃO FECHA O PROGRAMA só sai dessa função e volta
    if (x == 'cancelar') {console.log('\nVoltando...'); return 0;}

    console.log(`O pedido é presencial ou entrega?
        1. presencial
        2. entrega`);
    let tipo = callInput();
    let endereco;
    if (tipo == 'cancelar') {console.log('\nVoltando...'); return 0;}
    else if (tipo == '2') {
        tipo = 'Entrega';
        console.log('Qual o endereço da entrega?')
        endereco = callInput();
        if (endereco == 'cancelar') {console.log('\nVoltando...'); return 0;}
    } else if (tipo == '1') {
        tipo = 'Presencial'
        endereco = 'Loja';
    }

    console.log('Nome do jogo a ser vendido:')
    let nome = callInput();
    if (nome == 'cancelar') {console.log('\nVoltando...'); return 0;}

    console.log('Dia e mês do registro (Formato: "dd/mm"):')
    let data = callInput();
    if (data == 'cancelar') {console.log('\nVoltando...'); return 0;}

    console.log('Ano do registro:')
    let ano = callInput();
    if (ano == 'cancelar') {console.log('\nVoltando...'); return 0;}

    console.log('Preço do produto (apenas número e ponto final no lugar de vírgula):')
    let preco = Number(callInput());

    let novaVenda = {
        Tipo: tipo,
        Endereço: endereco,
        Nome: nome,
        Data: data,
        Ano : ano,
        Preço: preco
    };

    // coloca as informações inseridas em forma de objeto como elemento do array, mesmo que o objeto seja reutilizado com outras informações o elemento não muda dentro do array e pode ser adicionado como novo
    jogos.push(novaVenda);
    console.log('\n========= VENDA REGISTRADA! ============================================================');
}

function listarVendas() {
    console.log('========= LISTAR VENDAS ============================================================')
    console.log();
    for (let i = 0; i < jogos.length; i++) {
        console.log(`${i+1}. ${jogos[i].Nome} - ${jogos[i].Data}/${jogos[i].Ano} R$${jogos[i].Preço}`);
    }
    console.log('\nDigite o número da venda que deseja detalhar.');
    let x = callInput();
    if (jogos[x-1]) {
        console.log('\n',jogos[x-1]);
    } else {console.log('Registro inválido, voltando...'); return 0;}
    process.stdout.write('\n[Enter]');
    callInput();
}

function cancelarVendas() {
    console.log('========= APAGAR INSTRUMENTO ============================================================')
    console.log();
    for (let i = 0; i < jogos.length; i++) {
        console.log(`${i+1}. ${jogos[i].Nome} - ${jogos[i].Data}/${jogos[i].Ano} R$${jogos[i].Preço}`);
    }
    console.log('\nDigite o número da venda que deseja cancelar.');
    let x = callInput();
    if (jogos[x-1]) {
        console.log(`Tem certeza que deseja cancelar esta venda (${x}.)?
Digite "sim" e dê enter para confirmar:`)
        let y = callInput();
        if (y == 'sim') {
            jogos.splice(x-1, 1);
            console.log('\n========= VENDA CANCELADA! ============================================================');
        } else { console.log('\nCancelando...'); return 0; }
    }
}

function diaListarVendas() {
    console.log('========= LISTAR VENDAS POR DIA E MÊS ============================================================')
    console.log();
    for (let i = 0; i < jogos.length; i++) {
        console.log(`${i+1}. ${jogos[i].Nome} - ${jogos[i].Data}/${jogos[i].Ano} R$${jogos[i].Preço}`);
    }
    console.log('Digite o dia e mês dos registros que deseja consultar (dd/mm):')
    let dia = callInput();
    for (let y = 0; y < jogos.length; y++) {
        if (jogos[y].Data == dia)
        console.log(`${y+1}. ${jogos[y].Nome} - ${jogos[y].Data}/${jogos[y].Ano} R$${jogos[y].Preço}`);
    }
    console.log('\nDigite o número da venda que deseja detalhar.');
    let x = callInput();
    if (jogos[x-1]) {
        console.log('\n',jogos[x-1]);
    } else {console.log('Registro inválido, voltando...'); return 0;}
    process.stdout.write('\n[Enter]');
    callInput();
    
}

function periodoListarVendas() {
    console.log('========= LISTAR VENDAS POR ANO ============================================================')
    console.log();
    for (let i = 0; i < jogos.length; i++) {
        console.log(`${i+1}. ${jogos[i].Nome} - ${jogos[i].Data}/${jogos[i].Ano} R$${jogos[i].Preço}`);
    }
    console.log('Digite o ano dos registros que deseja consultar:')
    let ano = callInput();
    for (let y = 0; y < jogos.length; y++) {
        if (jogos[y].Ano == ano)
        console.log(`${y+1}. ${jogos[y].Nome} - ${jogos[y].Data}/${jogos[y].Ano} R$${jogos[y].Preço}`);
    }
    console.log('\nDigite o número da venda que deseja detalhar.');
    let x = callInput();
    if (jogos[x-1]) {
        console.log('\n',jogos[x-1]);
    } else {console.log('Registro inválido, voltando...'); return 0;}
    process.stdout.write('\n[Enter]');
    callInput();
}