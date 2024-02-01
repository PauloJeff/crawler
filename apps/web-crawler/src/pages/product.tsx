import React from "react"
import getProduct from '../utils/getProduct'
import { ResponseAPI } from "../api"
import NoContent from "../components/no-content"

const Product = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const url = queryParams.get("url")
  
  if(!url) return null

  const [product, setProduct] = React.useState<ResponseAPI>()
  const [error, setError] = React.useState<any>(null);
  
  React.useEffect(() => {
    getProduct(url)
      .then(data => setProduct(data))
      .catch(err => {
        setError(err.message)
      })
  }, [])

  if(error){
    return (<NoContent error={error} />)
  }

  if(!product) return null

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} width="100%"/>
        </div>
        <div className="col-md-6">
          <div className="col-md-12">
            <h3>{product.name}</h3>
          </div>
          <div className="col-md-12">
            <p><span>Barcode: </span>{product.barcode}</p>
            <p><span>Marca: </span>{product.brand}</p>
          </div>
          <div className="col-md-12">
            <p className="text-end"><span>Preço: </span>R$ ${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product