import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  height: fit-content;
  width: 100%;

  gap: 1rem;
`;

export const ProductImg = styled.img`
  min-height: 7rem;
  min-width: 7rem;
  height: 7rem;
  width: 7rem;

  border: 2px solid ${({ theme }) => theme.colors.grey};

  object-fit: contain;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.875rem 0;
`;

export const ProductName = styled.span`
  display: block;

  margin-bottom: 0.5rem;

  font-size: 0.875rem;
  font-weight: bold;
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const ProductPrice = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 0.875rem;

  color: ${({ theme }) => theme.colors.textGrey};
`;

export const ProductPriceDiscounted = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
`;
