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

    let opcao = await input({ message: 'Digite o número de uma opção:' });

    if (opcao === '1') {
        // CADASTRA UM NOVO MEDICAMENTO
        const remedioNovo = await input({ message: 'Informe o nome do medicamento:' });
        const idRemedio = await input({ message: 'Informe o ID do medicamento:' });
        const estoqueRemedio = await input({ message: 'informe o estoque:' });
        const precoRemedio = await input({ message: 'Informe o preço do medicamento:' });
        const descricaoRemedio = await input({ message: 'Informe uma descrição para o medicamento: ' });

        const remedioObj = { id: idRemedio, nome: remedioNovo, estoque: estoqueRemedio, preco: precoRemedio, descricao: descricaoRemedio };

        remedios.push(remedioObj);
        await input({ message: 'Tecle ENTER para voltar ao menu' })
        continue;
    } else if (opcao === '2') {
        const idChecagem = await input({ message: 'Informe o id do medicamento desejado:' });
        for (let i = 0; i < remedios.length; i++) {
            if (remedios[i]['id'] === idChecagem) {
                // ATUALIZAÇÃO DE CADASTRO DO MEDICAMENTO
                console.log('Atualize a informação desejada.')
                const remedioNovo = await input({ message: 'Informe o nome do medicamento:' });
                const idRemedio = await input({ message: 'Informe o ID do medicamento:' });
                const estoqueRemedio = await input({ message: 'informe o estoque:' });
                const precoRemedio = await input({ message: 'Informe o preço do medicamento:' });
                const descricaoRemedio = await input({ message: 'Informe uma descrição para o medicamento: ' });

                const remedioObj = { id: idRemedio, nome: remedioNovo, estoque: estoqueRemedio, preco: precoRemedio, descricao: descricaoRemedio };

                remedios[i] = remedioObj
                await input({ message: 'Tecle ENTER para voltar ao menu.' });
            }
        }
    } else if (opcao === '3') {
        // REMOVE UM MEDICAMENTO JÁ CADASTRADO
        const idRevomer = await input({ message: 'Informe o id do medicamento que deseja remover:' });
        for (let i = 0; i < remedios.length; i++) {
            if (remedios[i]['id'] === idRevomer) {
                const confirma = await input({ message: `Deseja remover o remédio ${remedios[i]['nome']}? (S/N):` });
                if (confirma.toUpperCase() === 'S') {
                    remedios.splice(i, 1);
                    console.log('Medicamento removido com sucesso!');
                } else if (confirma.toUpperCase() === 'N') {
                    await input({ message: 'Tecle ENTER para voltar ao menu.' });
                    break;
                }
            }
        }

    } else if (opcao === '4') {
        if (remedios.length > 0) {
            console.log(`ESTOQUE COMPLETO`)
            for (let i = 0; i < remedios.length; i++) {
                console.log(`id: ${remedios[i]['id']} - nome: ${remedios[i]['nome']} - estoque: ${remedios[i]['estoque']} - preço: ${Number(remedios[i]['preco']).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} - descrição: ${remedios[i]['descricao']}`);
            }
            await input({ message: 'Tecle ENTER para voltar ao menu.' });
        } else if (remedios.length <= 0) {
            console.log('Nenhum medicamento cadastrado!')
            await input({ message: 'Tecle ENTER para voltar ao menu.' });
        }
    } else if (opcao === '0') {
        break;
    }
}

console.log(remedios)

