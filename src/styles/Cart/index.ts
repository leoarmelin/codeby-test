import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;

  height: 85%;
  width: ${({ theme }) => theme.constants.maxWidth};

  border-radius: ${({ theme }) => theme.constants.borderRadiusMain};

  background-color: ${({ theme }) => theme.colors.primary};

  box-shadow: 1px 10px 26px 4px rgba(0, 0, 0, 0.26);
  -webkit-box-shadow: 1px 10px 26px 4px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 1px 10px 26px 4px rgba(0, 0, 0, 0.26);

  @media (max-width: 480px) {
    height: 100%;
    width: 100%;

    border-radius: none;
  }
`;

export const Title = styled.h1`
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  padding: 1rem 0;

  font-size: 1.375rem;
  text-align: center;
`;

export const ProductsContainer = styled.section`
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  width: 100%;

  gap: 1rem;
  padding: 1.25rem;

  overflow-y: auto;

  &::-webkit-scrollbar-track {
    border-radius: 8px;

    background-color: #f5f5f5;

    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.textGrey};

    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;

export const PriceContainer = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;

  border-top: 2px solid ${({ theme }) => theme.colors.grey};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  gap: 1.5rem;
  padding: 1.5rem 1.25rem;
`;

export const PriceRow = styled.div`
  display: flex;

  justify-content: space-between;

  width: 100%;
`;

export const PriceText = styled.h2`
  font-size: 1.25rem;
`;

export const PriceValue = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const ShippingText = styled.p`
  border-radius: ${({ theme }) => theme.constants.borderRadiusAccept};
  padding: 0.25rem 1rem;

  font-size: 1.1rem;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.bgAccept};
  color: ${({ theme }) => theme.colors.textAccept};

  @media (max-width: 360px) {
    width: 100%;

    padding: 0.25rem 0;

    font-size: 0.95rem;
  }
`;

export const Button = styled.button`
  display: flex;

  align-items: center;
  justify-content: center;

  min-height: 4rem;
  height: fit-content;
  width: auto;

  border: none;
  border-radius: ${({ theme }) => theme.constants.borderRadiusBtn};
  margin: 1.25rem;

  font-size: 1.25rem;
  font-weight: bold;

  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;

  &:hover {
    filter: brightness(0.95);
  }
`;
