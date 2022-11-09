import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import './ProductList.css'
import ProductItem from '../ProductItem/ProductItem'
import { ProductType } from '../../types'
import { useTelegram } from '../../hooks/useTelegram'

const products = [
  { id: 1, title: 'Товар 1', price: 5000, description: 'Описание товара 1' },
  { id: 2, title: 'Товар 2', price: 51000, description: 'Описание товара 2' },
  { id: 3, title: 'Товар 3', price: 500, description: 'Описание товара 3' },
  { id: 4, title: 'Товар 4', price: 100, description: 'Описание товара 4' },
  { id: 5, title: 'Товар 5', price: 500, description: 'Описание товара 5' },
  { id: 6, title: 'Товар 6', price: 52000, description: 'Описание товара 6' },
  { id: 7, title: 'Товар 7', price: 35000, description: 'Описание товара 7' },
  { id: 8, title: 'Товар 8', price: 15000, description: 'Описание товара 8' },
  { id: 9, title: 'Товар 9', price: 999, description: 'Описание товара 9' },
  { id: 10, title: 'Товар 10', price: 10, description: 'Описание товара 10' },
  { id: 11, title: 'Товар 11', price: 999000, description: 'Описание товара 11' },
] as Array<ProductType>

const getTotalPrice = (items = [] as Array<ProductType>) => {
  return items.reduce((acc, item) => {
    // @ts-ignore
    return acc += item.price
  }, 0)
}

const ProductList: React.FC = () => {
  const [ addedItems, setAddedItems ] = useState([] as Array<ProductType>)
  const { tg, queryId } = useTelegram()

  const onSendData = useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId
    }

    fetch('http://localhost:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  }, [tg])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData, tg])

  const onAdd = (product: { id: number, title: string, description: string, price: number }) => {
    const alreadyAdded = addedItems.find(item => {
      const { id } = item
      return id === product.id
    })
    let newItems = []

    if (alreadyAdded) {
      newItems = addedItems.filter(item => {
        const { id } = item
        return id !== product.id
      })
    } else {
      newItems = [ ...addedItems, product ]
    }

    setAddedItems(newItems)

    if (newItems.length === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Купить ${ getTotalPrice(newItems) }`,
      })
    }
  }

  return (
    <div className={ 'list' }>
      { products.map(item => {
        return <ProductItem
          className={ 'item' }
          product={ item }
          key={ item.id }
          onAdd={ onAdd }
        />
      }) as ReactNode }
    </div>
  )
}

export default ProductList