export default (contatos, text) =>
  contatos.filter(contato => contato.nome.toLowerCase().includes(text) || contato.email.includes(text)) || {};
