import { useState, useEffect } from "react";
import Product from "../components/Product";
import AbovePriceService from "../services/AbovePriceService";
import {
  Container,
  Content,
  Title,
  ProductsContainer,
  PriceContainer,
  PriceRow,
  PriceText,
  PriceValue,
  ShippingText,
  Button,
} from "../styles/Cart";

import { ProductResponse } from "../interfaces/ProductResponse";
import numberToMoney from "../utils/numberToMoney";
import BelowPriceService from "../services/BelowPriceService";

export default function Cart(): JSX.Element {
  const [data, setData] = useState({} as ProductResponse);
  const [isAbovePrice, setIsAbovePrice] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setIsAbovePrice(!isAbovePrice);
  };

  useEffect(() => {
    if (isAbovePrice) {
      AbovePriceService().then(({ data: responseData }) => {
        setData(responseData);
      });
    } else {
      BelowPriceService().then(({ data: responseData }) => {
        setData(responseData);
      });
    }
    setIsLoading(false);
  }, [isAbovePrice]);

  if (!data) {
    return <h1>Loading</h1>;
  }

  if (!data.items) {
    return <h1>Loading</h1>;
  }

  return (
    <Container>
      <Content>
        <Title>Meu carrinho</Title>

        <ProductsContainer>
          {data.items.map((product) => (
            <Product item={product} key={product.uniqueId} />
          ))}
        </ProductsContainer>

        <PriceContainer>
          <PriceRow>
            <PriceText>Total</PriceText>
            <PriceValue>{numberToMoney(data.value / 100)}</PriceValue>
          </PriceRow>

          {data.value > 1000 && (
            <ShippingText>Parabéns, sua compra tem frete grátis !</ShippingText>
          )}
        </PriceContainer>

        <Button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "..." : "Finalizar compra"}
        </Button>
      </Content>
    </Container>
  );
}
