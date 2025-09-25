let basket = [];
let countId = 1;

export const addItemService = (item) =>{
   try{
     const newItem =  {id:countId++,  name: item.name, qty:1};
basket.push(newItem);
    return newItem;
   } catch (error){
    console.error("Error in FECTHING Item", error);
    throw error;
   }
};

export const getItemService = () => basket;


export const updateItemQtyService = (id, qty) => {
  try {
    const item = basket.find(i => i.id == id);
    if (!item) throw new Error("Item not found");
    item.qty = qty;
    return item;
  } catch (error) {
    console.error(`Error updating item (id: ${id}):`, error);
    return null;
  }
};

export const removeItemService = (id) => {
  try {
    const index = basket.findIndex(i => i.id == id);
    if (index === -1) throw new Error("Item not found");
    const removed = basket[index];
    basket.splice(index, 1);
    return removed;
  } catch (error) {
    console.error(`Error removing item (id: ${id}):`, error);
    return null;
  }
};