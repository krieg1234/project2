import React, { useEffect, useState } from 'react';

export default function ItemsList({getItems}:{getItems:()=>string[]}) {
  const [items,setItems]=useState<string[]>([]);
  
  useEffect(()=>{
    const newItems=getItems();
    setItems(newItems);
    console.log('render')
  },[getItems])

  return (
    <ul>
      {items.map(i=>(<li key={i}>{i}</li>))}
    </ul>
  )
};
