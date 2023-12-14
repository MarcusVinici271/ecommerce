export default function Vendedor ({ vendedor }) {

  const nome = vendedor.nome;  
  const nota = vendedor.nota;
  const email = vendedor.email;
  const telefone = vendedor.telefone;

  return (
    <>
      <h3>Informações do Vendedor</h3>
      <h4>{nome}</h4>
      <span>{nota}</span>
      <p>{email}</p>
      <p>{telefone}</p>
    </>
  );
}