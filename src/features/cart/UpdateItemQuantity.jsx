/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "../../ui/Button"
import {useDispatch} from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({pizzaId, currentQuantity}) {
    const dispatch = useDispatch()
    return (
        <div className="flex gap-2 items-center">
            <Button 
                type='round'
                onClick={() =>dispatch(decreaseItemQuantity(pizzaId))}
                >
                    -
                </Button>
                <span className="text-sm font-medium">
                    {currentQuantity}
                </span>
            <Button 
                type='round'
                onClick={() =>dispatch(increaseItemQuantity(pizzaId))}
                >
                    +
                </Button>

        </div>
    )
}

export default UpdateItemQuantity
