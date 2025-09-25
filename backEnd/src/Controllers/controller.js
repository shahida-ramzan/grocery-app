import {addItemService,  getItemService, removeItemService, updateItemQtyService,  } from "../Models/model.js";

 const handleResponse = (res, status, message, data = null)=>{
res.status(status).json({status, message,data});
 };
//ADD ITEM...
export const addItem = async (req, res)=>{
const newItem = await addItemService(req.body);
handleResponse(res, 201, "User Created Successfully", newItem);
};

export const getItem = async (req, res) =>{
    const item = await getItemService(req.params.id);
    if (item) {
        handleResponse(res, 200, "Item Fetched Successfully", item);
    }else{
        handleResponse(res,404, "Item not found...", null);
    }
};

export const removeItem = async (req, res) => {
    const item = await removeItemService(req.params.id);
    if(item){
handleResponse(res, 200, "Item Removed Successfully ", item);
    } else {
        handleResponse(res, 404, "Item Not Found", item);
    }
};

export const updateItemQty = async (req, res) => {
    const updatedItem = await updateItemQtyService(req.params.id, req.body);
    if (updatedItem) {
        handleResponse(res, 200, "Item Updated Successfully", updatedItem);
    } else {
        handleResponse(res, 404, "Item Not Found", null);
    }
};