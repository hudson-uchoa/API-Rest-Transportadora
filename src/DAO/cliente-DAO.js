class ClienteDAO {
    constructor(db){
        this.db = db
    }

    pegaTodosClientes = ()=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM CLIENTES', (error, rows)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "clientes": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    pegaUmCliente = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.get('SELECT * FROM CLIENTES WHERE ID = ?', 
            id,
            (error, rows)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "usuario": rows,
                        "erro": false
                    })
                }
            }
            )
        })
    }

    insereCliente = (novoCliente)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('INSERT INTO CLIENTES VALUES (?, ?, ?, ?, ?, ?)',
            novoCliente.id ,novoCliente.nome_completo, novoCliente.cpf, novoCliente.telefone, novoCliente.email, novoCliente.pedidos_id,
            (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "mensagem": `Cliente ${novoCliente.nome_completo} inserido com sucesso!`,
                        "cliente": novoCliente,
                        "erro": false
                    })
                }
            }
            )
        })
    }

    deletaCliente = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('DELETE FROM CLIENTES WHERE ID = ?',
            id,
            (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "cliente": `Cliente de id ${id} deletado com sucesso!`,
                        "erro": false
                    })
                }
            }
            )
        })
    }

    atualizaCliente = (id, Cliente)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE CLIENTES SET NOME_COMPLETO = ?, CPF = ?, TELEFONE = ?, EMAIL = ?, PEDIDOS_ID = ? WHERE ID = ?',
            Cliente.nome_completo, Cliente.cpf, Cliente.telefone, Cliente.email, Cliente.pedidos_id,
            id,
            (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "mensagem": `Cliente de id ${id} atualizado com sucesso`,
                        "cliente": cliente,
                        "erro": false
                    })
                }
            }
            )
        })
    }

    _verificaId = async (id)=>{
        const usuario = await this.pegaUmCliente(id)
        if(usuario.usuario === undefined){
            throw new Error(`Usuario de ${id} não encontrado.`)
        }
        return usuario
    }
}

export default ClienteDAO