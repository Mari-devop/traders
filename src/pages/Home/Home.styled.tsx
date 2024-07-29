import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 50px;
`;

export const PictureContainer = styled.div`
    width: 50%;
    align-items: flex-end;
    img {
    padding-top: 150px;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;

    .nt-home__title {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
        color: var(--primary-text-color);
    }
    .nt-home__desc--grey {
        font-size: 18px;
        color: var(--secondary-text-color);
        font-weight: 600;
    }
    .nt-home__desc--dark {
        font-size: 16px;
        color: var(--primary-text-color);
        margin-top: 10px;
        font-weight: 500;
    }
    .nt-home__link {
        color: var(--link-color);
        text-decoration: none;
    }
`;