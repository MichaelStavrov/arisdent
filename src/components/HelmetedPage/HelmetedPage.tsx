import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import classes from './HelmetedPage.module.css';
import Container from '../layouts/Container';
import { HelmetedPageProps } from './types';

const HelmetedPage: FC<HelmetedPageProps> = ({
  children,
  meta,
  title,
  contentStyle,
}) => {
  return (
    <>
      <Helmet>
        {meta.map(({ id, name, content }) => (
          <meta key={id} name={name} content={content} />
        ))}
        <title>{title}</title>
      </Helmet>
      <section>
        <Container>
          <div className={classes.content} style={contentStyle}>
            {children}
          </div>
        </Container>
      </section>
    </>
  );
};

export default HelmetedPage;
