import image from '../../assets/images/public.avif';
import { Container, PictureContainer, TextContainer } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <TextContainer>
        <h2 className='nt-home__title'>Welcome to Northwind Traders</h2>
        <p className='nt-home__desc--grey'>Running on Cloudflare's D1</p>
        <p className='nt-home__desc--dark'>
          This is a demo of the Northwind dataset, running on <a href='https://workers.cloudflare.com' target='_blank' className='nt-home__link'>Cloudflare Workers</a>, and D1 - Cloudflare's newest SQL database, running on SQLite.
        </p>
        <p className='nt-home__desc--dark'>
          Read our <a href='https://northwind.d1sql.com' target='_blank' className='nt-home__link'>most recent D1 announcement</a> to learn more about D1.
        </p>
        <p className='nt-home__desc--dark'>
          This dataset was sourced from <a href='https://github.com/jpwhite3/northwind-SQLite3' target='_blank' className='nt-home__link'>northwind-SQLite3</a>.
        </p>
        <p className='nt-home__desc--dark'>
          You can use the UI to explore Supplies, Orders, Customers, Employees and Products, or you can use search if you know what you're looking for.
        </p>
      </TextContainer>
      <PictureContainer>
        <img src={image} alt='image' />
      </PictureContainer>
    </Container>
  )
}

export default Home;
