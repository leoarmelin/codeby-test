import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  height: fit-content;
  width: 100%;

  gap: 1rem;
`;

export const ProductImg = styled.div`
  min-height: 7rem;
  min-width: 7rem;
  height: 7rem;
  width: 7rem;

  border: 2px solid ${({ theme }) => theme.colors.grey};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.875rem 0;
`;

export const ProductName = styled.div`
  height: 0.75rem;
  width: 10rem;

  border-radius: 1rem;
  margin-bottom: 0.5rem;

  background-color: #000;
`;

export const ProductPrice = styled.div`
  height: 0.625rem;
  width: 2.5rem;

  border-radius: 1rem;
  margin: 0.425rem 0;

  background-color: ${({ theme }) => theme.colors.textGrey};
`;

export const ProductPriceDiscounted = styled.div`
  height: 0.75rem;
  width: 3rem;

  border-radius: 1rem;

  background-color: #000;
`;
