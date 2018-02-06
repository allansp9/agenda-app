export default (contatos, { text }) => contatos.filter((contato) => {
  const textMatch =
      typeof text !== 'string' ||
      contato.nome.toLowerCase().includes(text.toLowerCase()) ||
      contato.sobrenome.toLowerCase().includes(text.toLowerCase()) ||
      contato.email.includes(text);

  return textMatch;
});
