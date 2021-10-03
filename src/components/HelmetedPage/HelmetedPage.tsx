import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import Container from '../layouts/Container';
import { HelmetedPageProps } from './types';

const HelmetedPage: FC<HelmetedPageProps> = ({ children, meta, title }) => {
  return (
    <>
      <Helmet>
        {meta.map(({ id, name, content }) => (
          <meta key={id} name={name} content={content} />
        ))}
        <title>{title}</title>
      </Helmet>
      <section>
        <Container>{children}</Container>
      </section>
    </>
  );
};

export default HelmetedPage;
