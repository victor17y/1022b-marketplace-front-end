import { useEffect, useState } from 'react'
import './App.css'
type ProdutoType={
  id:number
  nome:string
  descricao:string
  preco:string
  imagem:string
}
function App() {
  const[produtos,setprodutos]=useState<ProdutoType[]>([])
useEffect(()=>{
  fetch("https://one022b-marketplace-qybh.onrender.com/produtos")
  .then(resposta=>resposta.json())
  .then(dados=>setprodutos(dados))
  
},[])
  return (//jsx
    <>
      <div className="container-produtos">
      {produtos.map(prod=>{
        return(
          <div className='produto-item'>
            <h1>{prod.nome}</h1>
            <p>{prod.imagem}</p>
            <p>{prod.preco}</p>
            <p>{prod.descricao}</p>
          </div>

        )

      })}
      </div>
    </>
  )
}
export default App
