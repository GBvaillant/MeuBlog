const gerador = {
    titulo: "Gerador",
    desc: "Um gerador de senhas aleatórias feito com HTML, CSS e JavaScript"
}
document.getElementById('titulo-gerador').innerHTML = gerador.titulo
document.getElementById('desc-gerador').innerHTML = gerador.desc

const relogio = {
    titulo: 'Relógio Digital',
    desc: 'Relógio digital é um projeto de FrontEnd, feito com HTML, CSS e JavaScript.'
}
document.getElementById('titulo-relogio').innerHTML = relogio.titulo
document.getElementById('desc-relogio').innerHTML = relogio.desc

// const sistemasol = {
//     titulo: 'Sistema Solar',
//     desc: 'Um projeto feito focado no frontend usando o JavaScript para criar sliders e listar os planetas do sistema solar com uma breve descrição.'
// }
// document.getElementById('titulo-sistemasol').innerHTML = sistemasol.titulo
// document.getElementById('desc-sistemasol').innerHTML = sistemasol.desc

// const tellogin = {
//     titulo: 'Tela de login/registro',
//     desc: 'Um projeto de tela de login e registro, feito com HTML, CSS e JavaScript.'
// }
// document.getElementById('titulo-tellogin').innerHTML = tellogin.titulo
// document.getElementById('desc-tellogin').innerHTML = tellogin.desc

const listaTarefas = {
    titulo: 'Lista de tarefas',
    desc: 'Lista de tarefas desenvolvida em React, consumindo uma api própria feita em NodeJs, com funcionaliades de listar tarefas, adicionar, excluir, completar, desfazer tarefa, ordenar por completas e incompletas e pesquisar tarefas. '
}
document.getElementById('titulo-tarefas').innerHTML = listaTarefas.titulo
document.getElementById('desc-tarefas').innerHTML = listaTarefas.desc

const projetos = {
    titulo: 'Gerenciador de projetos',
    desc: 'Gerenciador de projetos desenvolvido em react, com backend feito em json server e funcionalidades como: criação do projeto com título, descrição e categoria, editar projeto, gerenciar o custo, adicionar serviços, editar serviços e validações para não ultrapassar o limite financeiro do projeto.'
}
document.getElementById('titulo-projetos').innerHTML = projetos.titulo
document.getElementById('desc-projetos').innerHTML = projetos.desc


const jumbtxt = {
    titulo: 'Gabriel Vaillant',
    desc: 'Olá, fiz esse site para contar um pouco sobre mim, e mostrar alguns dos meus projetos, espero que gostem.',
    pub: 'Meu nome é Gabriel Vaillant, tenho 22 anos e sou um entusiasta da tecnologia, estudante de Sistemas da Informação e apaixonado pelo desenvolvimento web. Com projetos tanto no FrontEnd quanto no BackEnd, estou sempre buscando aprender e me aprimorar mais nas tecnologias e melhores práticas do setor. No frontend, domino as linguagens HTML, CSS e JavaScript, e tenho habilidades no uso de frameworks populares, como Bootstrap e ReactJs. No backend, tenho conhecimentos em linguagens como NodeJs e Typescript. Também estou familiarizado com bancos de dados relacionais e não relacionais, como MySQL, MongoDB e PostgreSQL, o que me permite construir soluções robustas e eficientes. Além do conhecimento técnico, sou um comunicador eficaz e um bom solucionador de problemas. Tenho uma mentalidade orientada para resultados e gosto de trabalhar em equipe. Estou atualmente em busca de uma oportunidade empolgante na área de tecnologia, onde possa aplicar e expandir meus conhecimentos, contribuindo para o crescimento de uma empresa. Estou aberto a desafios e pronto para enfrentar novas experiências profissionais.'
}
document.getElementById('titulo-jumb').innerHTML = jumbtxt.titulo
document.getElementById('desc-jumb').innerHTML = jumbtxt.desc
document.getElementById('pub-jumb').innerHTML = jumbtxt.pub

const apiNaruto = {
    titulo: 'Api Naruto',
    desc: 'Quem nunca ouviu falar de Naruto não é mesmo? Essa API feita com NodeJs mostra frases marcantes do anime Naruto.'
}
document.getElementById('naruto-titulo').innerHTML = apiNaruto.titulo
document.getElementById('naruto-desc').innerHTML = apiNaruto.desc

const apiCrud = {
    titulo: 'API com  NodeJs',
    desc: 'Api feita em NodeJs, com express, jwt, mongoose, bcrypt e etc... para cadastro, listagem, edição, deleção, busca de usuários e autenticação, com validações e banco de dados online no mongodb atlas.'
}

document.getElementById('titulo-crud').innerHTML = apiCrud.titulo
document.getElementById('desc-crud').innerHTML = apiCrud.desc

const apiTarefas = {
    titulo: 'API lista de tarefas',
    desc: 'Api feita em NodeJs com banco de dados MongoDb atlas, para lista de tarefas com funcionalidades de adicionar tarefas, listar tarefas, excluir tarefas e completar/descompletar tarefas'
}

document.getElementById('titulo-apiTarefas').innerHTML = apiTarefas.titulo
document.getElementById('desc-apiTarefas').innerHTML = apiTarefas.desc
