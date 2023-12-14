export default function Perguntas({ perguntas }) {
  return (
    <>
      <h3>Perguntas</h3>
      { perguntas.map(perg => (
        <div>
          <p>{perg.nome}</p>
          <p>{perg.dataPublicacao}</p>
          <p>{perg.pergunta}</p>        
          <p>{perg.resposta ?? "Sem resposta."}</p>
        </div>
      ))}
    </>
  )
}