'use client'

import { OrderItem } from "../../../../types";
import useCartStore from "@/hooks/use-cart-store";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";

interface AddToCartProps {
    item: OrderItem;
    minimal?: boolean;
}

export default function AddToCart({ item, minimal = false }: AddToCartProps) {
    const router = useRouter();
    const { addItem } = useCartStore();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = async () => {
            const itemId = await addItem(item, quantity);
    
            <Button onClick={() => router.push('/cart')}>
                Go to Cart
            </Button>
            router.push(`/cart/${itemId}`);
    };

    const handleBuyNow = async () => {
        await addItem(item, quantity);
        router.push(`/checkout`);
    }

    return minimal ? (
        <Button className='rounded-full w-auto' onClick={handleAddToCart}>
            Add to Cart
        </Button>
    ) : (
        <div className='w-full space-y-2'>
            <Select value={quantity.toString()} onValueChange={(value) => setQuantity(Number(value))}>
                <SelectTrigger>
                    <SelectValue>Quantity: {quantity}</SelectValue>
                </SelectTrigger>
                <SelectContent position='popper'>
                    {Array.from({ length: item.countInStock }).map((_, index) => (
                        <SelectItem key={index + 1} value={`${index + 1}`}>
                            {index + 1}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Button className='rounded-full w-full' type='button' onClick={handleAddToCart}>
                Add to Cart
            </Button>
            <Button variant='secondary' className='w-full rounded-full' onClick={handleBuyNow}>
                Buy Now
            </Button>
        </div>
    );
}