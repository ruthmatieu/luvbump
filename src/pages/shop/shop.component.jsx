import React from "react";

import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

class Shop extends React.Component {
    constructor(){
        super();

        this.state = {
            collection: SHOP_DATA
        }
    }
    render(){
        const { collections } = this.state;

        return (
            <div className='shop-page'>
              {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
              ))}
            </div>
        );
    }
}

export default Shop;