class Cliente {
    constructor(id, nome_completo, cpf, telefone, email, pedidos_id){
        this.id = id;
        this.nome_completo = nome_completo;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
        this.pedidos_id = pedidos_id;
    }
}

export default Cliente