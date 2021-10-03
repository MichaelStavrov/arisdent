import React, { FC } from 'react';
import HelmetedPage from '../../components/HelmetedPage';
import cn from 'classnames';

import classes from './Prices.module.css';
import { services } from './services';

const Prices: FC = () => {
  return (
    <HelmetedPage
      meta={[
        { id: 1, name: 'description', content: 'Недорогое лечение зубов' },
        {
          id: 2,
          name: 'keywords',
          content: 'стоматолог недорого, вылечить зубы недорого',
        },
      ]}
      title='Цены на услуги стоматологии Арисдент'
      contentStyle={{ marginBottom: 0 }}
    >
      <h1 className={classes.titlePage}>
        Стоимость услуг стоматологии Арисдент
      </h1>
      <div className={classes.titleContainer}>
        <h2 className={classes.title}>
          Краткий прейскурант на стоматологические услуги
        </h2>
        <p>
          Данный прайс содержит краткий перечень самых востребованных видов
          лечения. Окончательный расчет стоимости Вашего лечения возможен только
          после консультации врача.
        </p>
      </div>
      <table className={classes.pricesTable}>
        <thead>
          <tr>
            <th className={classes.th}>Услуга</th>
            <th className={classes.th}>Цена, руб</th>
          </tr>
        </thead>
        <tbody className={classes.tableBody}>
          {services.map(
            ({ id, title, service, subTitle, price, smallTitle }) => (
              <tr className={classes.row} key={id}>
                {subTitle || smallTitle ? (
                  <td
                    className={cn(
                      classes.cell,
                      classes.leftColumn,
                      classes.cellTitle,
                      {
                        [classes.smallTitle]: smallTitle,
                      }
                    )}
                  >
                    {title || smallTitle}
                    <p className={classes.subTitle}>{subTitle}</p>
                  </td>
                ) : (
                  <td
                    className={cn(classes.cell, classes.leftColumn, {
                      [classes.service]: service,
                      [classes.cellTitle]: title,
                      [classes.smallTitle]: smallTitle,
                    })}
                  >
                    {service || title || smallTitle}
                  </td>
                )}
                <td className={cn(classes.cell, classes.price)}>{price}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </HelmetedPage>
  );
};

export default Prices;
