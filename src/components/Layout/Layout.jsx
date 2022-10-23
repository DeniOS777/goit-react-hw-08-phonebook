import { Suspense } from 'react';
import { BsGithub } from 'react-icons/bs';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import { Wrapper, Footer, Text, Link } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />

      <main style={{ flexGrow: '1' }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>

      <Footer>
        <Text>
          Copyright &copy; 2022.
          <Link
            href="https://github.com/DeniOS777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size="20" />
          </Link>
          Developed by Denis Moskalenko
        </Text>
      </Footer>
    </Wrapper>
  );
};
