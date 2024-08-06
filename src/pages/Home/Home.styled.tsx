import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 4rem 1.2rem;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PictureContainer = styled.div`
  width: 20%;
  align-items: flex-end;

  img {
    padding-top: 90px;
    padding-right: 0px;
    width: 384px;
    height: 216px;
    object-fit: cover;
  }
    @media (max-width: 1790px) {
        width: 40%; 
    }
  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      padding-top: 20px;
      padding-right: 0px;
      width: 100%;
      height: auto;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;

  .nt-home__title {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10px;
    color: var(--black-color);
  }
  .nt-home__desc--grey {
    font-size: 1.125rem;
    color: rgb(156 163 175);
    font-weight: 500;
    margin: 0px;
    padding-top: 0px;
    padding-bottom: 20px;
  }
  .nt-home__desc--dark {
    font-size: 1rem;
    color: var(--black-color);
    margin-top: 0px;
    font-weight: 500;
    padding-top: 0px;
  }
  .nt-home__link {
    color: var(--link-color);
    text-decoration: none;
  }
 @media (max-width: 1790px) {
        width: 60%; 
    }
  @media (max-width: 700px) {
    width: 100%;

    .nt-home__desc--grey {
      padding-top: 0px;
    }

    .nt-home__desc--grey + div {
      order: 1;
      margin-top: 20px;
    }

    .nt-home__desc--dark {
      order: 2;
    }

    img {
      margin-top: 20px;
      width: 100%;
      height: auto;
    }
  }
`;
