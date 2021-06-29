import {
  Container,
  InfoContainer,
  ProductImg,
  ProductName,
  ProductPrice,
  ProductPriceDiscounted,
} from "./styles";

import { IProduct } from "../../interfaces/ProductResponse";
import numberToMoney from "../../utils/numberToMoney";

interface IProductItem {
  item: IProduct;
}

export default function Product({ item }: IProductItem): JSX.Element {
  return (
    <Container>
      <ProductImg src={item.imageUrl} alt={item.name} />

      <InfoContainer>
        <ProductName>{item.name}</ProductName>
        <ProductPrice>{numberToMoney(item.price / 100)}</ProductPrice>
        <ProductPriceDiscounted>
          {numberToMoney(item.sellingPrice / 100)}
        </ProductPriceDiscounted>
      </InfoContainer>
    </Container>
  );
}
