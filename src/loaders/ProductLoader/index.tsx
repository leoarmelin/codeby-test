import {
  Container,
  InfoContainer,
  ProductImg,
  ProductName,
  ProductPrice,
  ProductPriceDiscounted,
} from "./styles";

export default function ProductLoader(): JSX.Element {
  return (
    <Container>
      <ProductImg />

      <InfoContainer>
        <ProductName />
        <ProductPrice />
        <ProductPriceDiscounted />
      </InfoContainer>
    </Container>
  );
}
