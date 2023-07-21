// const user = {
//     nome : 'Carlos',
//     email : 'carlos@gmail.com',
//     nascimento : '1994/08/25',
//     role : 'admin',
//     ativo : true,
//     exibirinfos: function(){
//         console.log(this.nome, this.email)
//     }
// }

//user.exibirinfos()
// isso não vai funcionar ---> const exibir = user.exibirinfos()

// const exibir = function(){
//     console.log(this.nome)
// }

//const exibirNome = exibir.bind(user)
// bind é usado para prender um objeto a um contexto
//exibirNome()
//exibir()

//-------------------------------------------------//

// function exibeInfos(){
//     console.log(this.nome, this.email)
// }

// const user = {
//     nome : 'Carlos',
//     email: "carlos@carlos"
// }

// exibeInfos.call(user)

//----------------------------------------------//

function user(nome, email){
    this.nome = nome
    this.email = email

    this.exibeInfos = function(){
        console.log(this.nome, this.email)
    }
}

const newUser = new user("Carlos", "carlos2@carlos")



const outroUser = {
    nome : 'Rodrigo',
    email : 'rodrigo@rodrigo'
}

newUser.exibeInfos()
newUser.exibeInfos.call(outroUser)

