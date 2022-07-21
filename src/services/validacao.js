export const validAll = (nome_completo, cpf, telefone, senha, email) => {
  if (nome_completo && cpf && telefone && senha && email) {
    return true;
  } else {
    throw new Error("Alguma informação do body está em falta.");
  }
};
