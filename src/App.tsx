import { useEffect, useState } from 'react'
import './App.css'

type ProdutoType = {
  id: number,
  nome: string,
  descricao: string,
  preco: string,
  imagem: string
}

type UsuarioType = {
  id: number,
  nome: string,
  email: string
}

function App() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([])

  useEffect(() => {
    fetch("https://one022b-marketplace-qybh.onrender.com/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))
  }, [])

  useEffect(() => {
    fetch("https://one022b-marketplace-qybh.onrender.com/usuarios")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
  }, [])

  return (
    <>
      <div className="container-produtos">
        {produtos.map(prod => {
          return (
            <div key={prod.id} className="produto-item">
              <h1>{prod.nome}</h1>
              <img src={prod.imagem} alt="Imagem de produto" />
              <p>{prod.preco}</p>
              <p>{prod.descricao}</p>
            </div>
          )
        })}
      </div>
      <div className="container-usuarios">
        {usuarios.map(usuario => {
          return (
            <div key={usuario.id} className="usuario-item">
              <h1>{usuario.nome}</h1>
              <p>{usuario.email}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App