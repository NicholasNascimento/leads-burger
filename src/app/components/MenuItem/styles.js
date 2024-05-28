import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 128px;
  position: relative;

  border-bottom: 1px solid var(--red);

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    width: 128px;

    font-size: 64px;
    background-color: var(--background);
    border-radius: 16px;
  }

  .info {
    width: 70%;
    padding: 4px 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
      color: var(--text-primary);
    }

    p {
      color: var(--text-secondary);
    }
  }

  .updateCart {
    display: flex;
    position: absolute;
    top: 24px;
    right: 24px;

    div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: var(--background);
      font-size: 18px;
      color: var(--red);
      border: 1px solid var(--disability);
      border-radius: 4px;
    }

    strong {
      width: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
      background-color: var(--background);
      border-radius: 0 8px 8px 0;
    }
  }

  .price {
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
`
