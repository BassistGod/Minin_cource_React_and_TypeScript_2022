import React from 'react'
import { ErrorMassage } from '../components/ErrorMassage';
import { Loader } from '../components/Loader';
import { Modal } from '../components/Modal';
import { CreateProduct } from '../components/CreateProduct';
import { Product } from '../components/Product'
import { useProducts } from '../hooks/products';
import { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';

export function ProductsPage() {
    const {products, error, loading} = useProducts()
    const {modal, open, close} = useContext(ModalContext) 
    // const [modal, setModal] = useState(true)
    
    return (
      <div className="container mx-auto max-w-2xl pt-5">
        {loading && <Loader />}
        {error && <ErrorMassage error={error} />}
        {products.map(product => <Product product={product} key={product.id} />) }

        {modal && <Modal title='Create new product' onClose={close}>
          <CreateProduct onCreate={close}/>
        </Modal>}

        <button
          className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
          onClick={open}
        >+</button>
        
      </div>
  )
}