const user = {
    nome : 'Carlos',
    email : 'kadubelber1@gmail.com',
    nascimento : '1997/06/30',
    role : 'admin',
    ativo : true,
    exibirinfos: function(){
        console.log(this.nome, this.email)
    }
}