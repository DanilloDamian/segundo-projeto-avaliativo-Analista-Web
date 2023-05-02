# LabReceitas

## Sobre
Criar um sistema de lista de receitas.

## Requisitos

- [X] Um título na aba do navegador, para que o usuário encontre a sua aplicação no meio das várias abas que constantemente mantém abertas.
- [X] Um cabeçalho dentro da página, para que o usuário saiba facilmente em que página se encontra e do que se trata o conteúdo.
- [X] Três campos de seleção no para que o usuário escolha filtrar receitas por “Sem derivados de leite”, “Sem Glúten” e “Todas”
- [X] Um botão para filtrar as receitas.
- [X] Um botão para adicionar uma nova receita. Quando pressionado o + a aplicação deve apresentar um pop-up para cadastro de uma nova receita, com os seguintes campos: Nome; Ingredientes; Modo de Preparo; Restrições (Lactose ou Glúten).
- [X] O usuário poderá editar as informações da receita ou excluí-la. Quando o usuário pressionar a ! a aplicação deve apresentar um pop-up contendo as informações da receita e dois botões: Alterar ou Excluir.
- [X] A lista deve ser salva no localStorage do navegador (incluindo as receitas que já foram excluídas), e deve ser carregada sempre que a página for reaberta.

## Tecnologias

- JavaScript
- HTML e CSS
- React

## Abrindo projeto

1. Clone este repositório na sua máquina com o comando `git clone https://github.com/DanilloDamian/segundo-projeto-avaliativo-Analista-Web.git`.
2. Importe o projeto para a IDE de sua preferência (VSCode).
3. Abra um terminal e navege até a pasta raiz do projeto.
4. Execute o comando `npm install` e depois o comando `npm start`.
5. Após a inicialização deverá abrir automaticamente uma pagina em seu navegador padrão com a seguinte imagem:
<img height="360em" src="https://github.com/DanilloDamian/segundo-projeto-avaliativo-Analista-Web/blob/main/public/imgs/Screenshot_1.png"/>

## Utilização

Ao clicar no botão de "+" aparecerá um pop-up de formulário para preencher todos os campos são obrigatórios (menos as restrições).
<img height="360em" src="https://github.com/DanilloDamian/segundo-projeto-avaliativo-Analista-Web/blob/main/public/imgs/Screenshot_2.png"/>

Depois de clicar em **Adicionar** o pop-up irá fechar e voltará para tela inicial com a lista atualizada de receitas.
<img height="360em" src="https://github.com/DanilloDamian/segundo-projeto-avaliativo-Analista-Web/blob/main/public/imgs/Screenshot_3.png"/>

Se desejar alterar alguma informação de receita cadastrada ou excluir, basta clicar no icone de informação que contem ao lado do nome da receita.
<img height="360em" src="https://github.com/DanilloDamian/segundo-projeto-avaliativo-Analista-Web/blob/main/public/imgs/Screenshot_4.png"/>

Ao clicar em excluir, um alerta irá confirmar sua escolha.
<img height="360em" src="https://github.com/DanilloDamian/segundo-projeto-avaliativo-Analista-Web/blob/main/public/imgs/Screenshot_5.png"/>

Para utilizar o filtro basta escolher a opção desejada no campo de filtro e clicar no botão **Filtrar**.
<img height="360em" src="https://github.com/DanilloDamian/segundo-projeto-avaliativo-Analista-Web/blob/main/public/imgs/Screenshot_6.png"/>

Para reexibir todas, basta selecionar a opção **Todas** e clicar novamente em filtrar
<img height="360em" src="https://github.com/DanilloDamian/segundo-projeto-avaliativo-Analista-Web/blob/main/public/imgs/Screenshot_7.png"/>
