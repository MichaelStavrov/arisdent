import React, { FC } from 'react';
import {
  Map,
  Placemark,
  Polyline,
  GeolocationControl,
  FullscreenControl,
  ZoomControl,
} from '@pbe/react-yandex-maps';

import HelmetedPage from '../../components/HelmetedPage';
import classes from './Contacts.module.css';

const Contacts: FC = () => {
  return (
    <HelmetedPage
      meta={[
        {
          id: 1,
          name: 'description',
          content: 'Маршрут до стоматологической клиники Арисдент',
        },
        {
          id: 2,
          name: 'keywords',
          content:
            'как добраться до Арисдент, маршрут до Арисдент, ближайшая стоматология',
        },
      ]}
      title='Контакты стоматологии Арисдент'
    >
      <h1 className={classes.titlePage}>
        Адрес, телефон, подробная карта, как добраться до стоматологии Арисдент
      </h1>
      <div className={classes.contactsContainer}>
        <span className={classes.tempText}>
          Внимание! До 01.12.2022 клиника не работает.
          <br /> Для записи пишите в WhatsApp по телефону
          +7&nbsp;(903)&nbsp;724&#8209;05&#8209;81.
        </span>
        <p>
          <span>Адрес:</span> г. Москва, станция метро Верхние Лихоборы,
          Бескудниковский бульвар, д. 2, корп. 1
        </p>
        <a className={classes.phoneNumber} href='tel:+79037240581'>
          <span>Телефон:</span>{' '}
          <span className={classes.tel}>+7 (903) 724-05-81</span>
        </a>
        <a className={classes.email} href='mailto:info@arisdent.com'>
          <span>E-mail: </span>{' '}
          <span className={classes.mail}>info@arisdent.com</span>
        </a>
        <p>
          <span>График работы:</span> Ежедневно с 10:00 до 20:00 по
          предварительной записи
        </p>
        <p>
          <span>Проезд общественным транспортом:</span>
          <br />
          <span className={classes.route}>
            От станции метро Верхние Лихоборы 5 минут, первый вагон из центра,
            выход к Бескудниковскому бульвару, выход номер 3, пройти мимо
            церкви, перейти дорогу по пешеходному переходу и пройти 50 метров
            прямо вдоль жилого дома, отдельный вход между 3 и 4 жилыми
            подъездами, вывеска Стоматология.
          </span>
        </p>
      </div>
      <div className={classes.mapWrapper}>
        <Map
          width='100%'
          height='100%'
          defaultState={{
            center: [55.857533, 37.562157],
            zoom: 18,
          }}
        >
          <Placemark geometry={[55.857291, 37.563326]} />
          <Polyline
            geometry={[
              [55.857515, 37.560704],
              [55.857651, 37.561955],
              [55.857533, 37.562157],
              [55.857525, 37.562428],
              [55.857645, 37.562628],
              [55.857586, 37.563385],
              [55.857291, 37.563326],
            ]}
            options={{
              strokeColor: '#9564ea',
              strokeWidth: 3,
              strokeStyle: 'shortdash',
              strokeOpacity: 0.9,
            }}
          />
          <GeolocationControl />
          <FullscreenControl />
          <ZoomControl />
        </Map>
      </div>
    </HelmetedPage>
  );
};

export default Contacts;
