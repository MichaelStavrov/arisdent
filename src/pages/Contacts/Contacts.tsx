import React, { FC } from 'react';

import HelmetedPage from '../../components/HelmetedPage';
import map from '../../assets/images/map.png';
import classes from './Contacts.module.css';

const Contacts: FC = () => {
  return (
    <HelmetedPage
      meta={[
        { id: 1, name: 'description', content: '' },
        { id: 2, name: 'keywords', content: '' },
      ]}
      title='Контакты стоматологии Арисдент'
    >
      <h1 className={classes.titlePage}>
        Адрес, телефон, подробная карта, как добраться до стоматологии Арисдент
      </h1>
      <div className={classes.contactsContainer}>
        <p>
          <span>Адрес:</span> г. Москва, станция метро Верхние Лихоборы,
          Бескудниковский бульвар, д. 2, корп. 1
        </p>
        <a className={classes.phoneNumber} href='tel:+79037240581'>
          <span>Телефон:</span> +7 (903) 724-05-81
        </a>
        <a className={classes.email} href='mailto:info@arisdent.com'>
          <span>E-mail: </span>info@arisdent.com
        </a>
        <p>
          <span>Проезд общественным транспортом:</span>
          <br />
          <p>
            От станции метро Верхние Лихоборы 5 минут, первый вагон из центра,
            выход к Бескудниковскому бульвару, выход номер 3, пройти мимо
            церкви, перейти дорогу по пешеходному переходу и пройти 50 метров
            прямо вдоль жилого дома, отдельный вход между 3 и 4 жилыми
            подъездами, вывеска Стоматология.
          </p>
        </p>
      </div>
      <div className={classes.mapWrapper}>
        <img className={classes.map} src={map} alt='карта' />
      </div>
    </HelmetedPage>
  );
};

export default Contacts;
