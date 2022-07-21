import Cliente from "../models/Cliente.js";
import ClienteDAO from "../DAO/cliente-DAO.js";

const clienteController = (app, bd) => {
  const clienteDAO = new ClienteDAO(bd);

  app.get("/cliente", async (req, res) => {
    try {
      res.json(await clienteDAO.pegaTodosClientes());
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        error: true
      });
    }
  });

  app.get("/cliente/id/:id", async (req, res) => {
    const id = req.params.id;
    try {
      await clienteDAO._verificaId(id);
      const client = await clienteDAO.pegaUmCliente(id);
      res.status(201).json(client);
    } catch (error) {
      res.status(404).json({
        msg: error.message,
        error: true
      });
    }
  });

  app.get("/cliente/email/:email", async (req, res) => {
    const email = req.params.email;
    try {
      await clienteDAO._verificaEmail(email);
      const client = await clienteDAO.pegaUmClienteporEmail(email);
      res.status(201).json(client);
    } catch (error) {
      res.status(404).json({
        msg: error.message,
        error: true
      });
    }
  });

  app.post("/cliente/login", async (req, res) => {
    const { EMAIL, SENHA } = req.body;
    try {
      const login = await clienteDAO.pegaUmClienteporEmail(EMAIL);
      if (EMAIL !== login.usuario.EMAIL || SENHA !== login.usuario.SENHA) {
        return res.status(400).json({
          message: "Email ou senha inválidas!",
          error: true,
        });
      }
      res.status(200).json({
        usuario: login.usuario,
        msg: `Usuario ${login.usuario.NOME_COMPLETO} logado!`,
      });
    } catch (error) {
      res.status(400).json({
        message: "Email ou senha inválidas!",
        error: true,
      });
    }
  });

  app.post("/cliente", async (req, res) => {
    const body = req.body;
    try {
      const novoCliente = new Cliente(
        body.ID,
        body.NOME_COMPLETO,
        body.CPF,
        body.TELEFONE,
        body.SENHA,
        body.EMAIL
      );

      res.status(201).json(await clienteDAO.insereCliente(novoCliente));
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        error: true
      });
    }
  });

  app.delete("/cliente/id/:id", async (req, res) => {
    const id = req.params.id;
    try {
      await clienteDAO._verificaId(id);
      const delUsuario = await clienteDAO.deletaCliente(id);
      res.status(201).json(delUsuario);
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        error: true
      });
    }
  });

  app.put("/cliente/id/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
      const clienteAtualizado = new Cliente(
        body.ID,
        body.NOME_COMPLETO,
        body.CPF,
        body.TELEFONE,
        body.SENHA,
        body.EMAIL
      );

      await clienteDAO._verificaId(id);
      const attCliente = await clienteDAO.atualizaCliente(
        id,
        clienteAtualizado
      );
      res.status(200).json(attCliente);
    } catch (error) {
      res.status(404).json({
        msg: error.message,
        error: true
      });
    }
  });
};

export default clienteController;
