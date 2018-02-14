export const selectContatos = (contatos, text) =>
  contatos.filter(contato => contato.nome.toLowerCase().includes(text) || contato.email.includes(text)) || {};

export const selectActiveUser = (id, contatos) => contatos.filter(contato => contato.id === id);
