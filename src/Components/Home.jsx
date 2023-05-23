import React from 'react'
import ProductCard from './ProductCard'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {
    const img1 =
        "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
    const img2 =
        "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
    const productList = [
        {
            name: "Mac Book",
            price: 12000,
            imgSrc: img1,
            id: 'jdhfig64tngdugh48t4'
        },
        {
            name: "Black Shoes",
            price: 499,
            imgSrc: img2,
            id: 'jdhfigfkjnfbu6h48t4'
        },
    ]

    const dispatch = useDispatch()

    const addToCartHandler = (options) => {
        dispatch({
            type: 'addToCart',
            payload: options
        })
        dispatch({ type: 'calculatePrice' });
        toast.success('Added to Cart');
    }

    return (
        <div className='bg-black flex justify-center p-12 flex-wrap'>
            {productList.map((i) => (
                <ProductCard
                    key={i.id}
                    name={i.name}
                    imgSrc={i.imgSrc}
                    price={i.price}
                    id={i.id}
                    handler={addToCartHandler}
                />
            ))}
        </div>
    )
}

export default Home