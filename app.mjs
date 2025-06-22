import prompt from "prompt-sync";
let input = prompt();


function callInput() {
    let x = input();
    return x;
}

export function runProgram() {

    while(true) {
        let x = showMenu();
        if (x == '0') {
        break;
        }
        else if (x == '1') {
        }
        else if (x == '2') {
        }
        else if (x == '3') {
        }
        else if (x == '4') {
        }
        else if (x == '5') {
        }
        else if (x == '6') {
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
========= PROGRAMA DE CONTROLE DE VENDAS ============================================================

        [Pressione Enter para prosseguir com o programa]
        [Recomendado aumentar o tamanho do terminal arrastando a borda acima]`);
    callInput();
    console.log(`
        Quando um menu de escolhas aparecer, insira o número da opção desejada e dê enter para ser direcionado(a)
        `);
    callInput();
}

function showMenu() {
    console.log(`
        1. 
        2. 
        4. 
        6. 
        5. 
        0. Sair do programa

        digite "help" para rever as instruções
    `);
    
    process.stdout.write('Insira sua escolha: ')
    let x = callInput();
    return x;
}
