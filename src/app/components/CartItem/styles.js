import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 128px;
  position: relative;
  background-color: var(--white);
  border-bottom: 1px solid var(--red);
  border-radius: 4px;

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 128px;
    font-size: 64px;
    background-color: var(--background);
    border-radius: 16px;
  }

  .texts {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 16px;

    h2 {
      color: var(--text-primary);
      font-size: 22px;
    }

    strong {
      color: var(--text-secondary);
      font-size: 14px;
    }
  }

  .updateCartItems {
    display: flex;
    flex-direction: column;
    margin-left: auto;

    .trash {
      margin: 8px 16px;
      margin-left: auto;
      height: fit-content;
      width: fit-content;

      background-color: transparent;
      border: none;
      color: var(--text-primary);
      font-size: 20px;

      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        color: var(--red);
      }
    }

    .updateCart {
      display: flex;
      margin-right: 80px;

      div {
        display: flex;
        flex-direction: column;
      }

      button {
        padding: 2px;
        color: var(--red);
        border: 1px solid var(--disability);
        border-radius: 4px;
        font-size: 14px;
      }

      strong {
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--background);
        border-radius: 0 4px 4px 0;
      }
    }
  }
`
