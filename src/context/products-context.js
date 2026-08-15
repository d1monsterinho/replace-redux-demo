import {createContext, useState} from "react";

export const ProductsContext = createContext({
    products: [],
    toggleFavorite: id => {},
});

export default props => {
    const [productsList, setProductsList] = useState([
        {
            id: 'p1',
            title: 'Red Scarf',
            description: 'A pretty red scarf.',
            isFavorite: false
        },
        {
            id: 'p2',
            title: 'Blue T-Shirt',
            description: 'A pretty blue t-shirt.',
            isFavorite: false
        },
        {
            id: 'p3',
            title: 'Green Trousers',
            description: 'A pair of lightly green trousers.',
            isFavorite: false
        },
        {
            id: 'p4',
            title: 'Orange Hat',
            description: 'Street style! An orange hat.',
            isFavorite: false
        }
    ]);

    const toggleFavorite = id => {
        setProductsList(prev => {
            const prodIndex = prev.findIndex(
                p => p.id === id
            );

            const newFavStatus = !prev[prodIndex].isFavorite;
            const updatedProducts = [...prev];
            updatedProducts[prodIndex] = {
                ...prev[prodIndex],
                isFavorite: newFavStatus
            };

            return updatedProducts;
        });
    }

    const productsContextValue = {
        products: productsList,
        toggleFavorite,
    }

    return (
        <ProductsContext.Provider value={productsContextValue}>
            {props.children}
        </ProductsContext.Provider>
    );
}