import { FC } from "react";
import { ProductCardProps } from "./types";

import "@style/components/cards/ProductCard.scss";

import CoinIcon from "@images/coin-icon.svg";
import Button from "@/components/buttons/Button";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const ProductCard: FC<ProductCardProps> = ({ 
  coins=100, 
  title="Наименование приза", 
  buttonText="Получить", 
  imageUrl,
  href="#" 
}) => {
    return (
        <div className="product-card">
            <div className="product-card__image">
                {imageUrl ? <img src={imageUrl} alt="Product" /> : <ImagePlaceholder />}
            </div>
            <div className="product-card__info">
                <div className="product-card__coin-tag">
                    <CoinIcon />
                    <div className="product-card__coins">{coins}</div>
                </div>
                <h4 className="product-card__title">{title}</h4>
            </div>
            <Button className="product-card__purchase-button" href={href}>{buttonText}</Button>
        </div>
    )
}

export default ProductCard;