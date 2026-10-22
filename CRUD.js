import { input, number } from '@inquirer/prompts';

const remedios = [];

while (true) {
    console.log(`
    CONTROLE DE ESTOQUE - FARMÁCIA X

    1 - CADASTRAR NOVO MEDICAMENTO
    2 - ATUALIZAR CADASTRO
    3 - REMOVER CADASTRO
    4 - EXIBIR TODO O ESTOQUE

    0 - SAIR
    `)

    let opcao = await input({ message: 'Digite o número de uma opção' });

    if (opcao === '1') {
        const remedioNovo = await input({ message: 'Informe o nome do medicamento:' });
        const idRemedio = await input({ message: 'Informe o ID do medicamento:' });
        const estoqueRemedio = await input({ message: 'informe o estoque:' });
        const precoRemedio = await input({ message: 'Informe o preço do medicamento:' });
        const descricaoRemedio = await input({ message: 'Informe uma descrição para o medicamento: ' });

        const remedioObj = { id: idRemedio, nome: remedioNovo, estoque: estoqueRemedio, preco: precoRemedio, descricao: descricaoRemedio };

        remedios.push(remedioObj);
        await input({ message: 'Tecle ENTER para continuar' })
        continue;
    } else if (opcao === '2') {
        const idChecagem = await input({ message: 'Informe o id do medicamento desejado:' });
        for (let i = 0; i < remedios.length; i++) {
            if (remedios[i]['id'] === idChecagem) {
                console.log('Atualize a informação desejada.')
                const remedioNovo = await input({ message: 'Informe o nome do medicamento:' });
                const idRemedio = await input({ message: 'Informe o ID do medicamento:' });
                const estoqueRemedio = await input({ message: 'informe o estoque:' });
                const precoRemedio = await input({ message: 'Informe o preço do medicamento:' });
                const descricaoRemedio = await input({ message: 'Informe uma descrição para o medicamento: ' });

                const remedioObj = { id: idRemedio, nome: remedioNovo, estoque: estoqueRemedio, preco: precoRemedio, descricao: descricaoRemedio };

                remedios[i] = remedioObj
                console.log(remedios)
                await input({ message: 'Tecle ENTER para continuar' })
                continue;
            }
        }
    } else if (opcao === '3') {
        const idChecagem = await input({ message: 'Informe o id do medicamento que deseja remover:' });
        for (let i = 0; i < remedios)
    } else if (opcao === '0') {
        break;
    }
}

console.log(remedios)

