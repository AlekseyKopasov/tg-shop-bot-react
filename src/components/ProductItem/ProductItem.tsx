import React from 'react'
import './ProductItem.css'
import Button from '../Button/Button'
import { ProductType } from '../../types'

type PropsType = {
  product: ProductType
  className: string
  onAdd: (product: ProductType) => void
}

const ProductItem: React.FC<PropsType> = ({ product, className, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product)
  }

  return (
    <div className={ 'product' + className }>
      <div className={'img'} />
      <div className={'title'}>{ product.title }</div>
      <div className={'description'}>{ product.description }</div>
      <div className={'price'}>{ product.price }</div>

      <Button className={'add-btn'} onClick={onAddHandler}>Добавить в корзину</Button>
    </div>
  )
}

export default ProductItem