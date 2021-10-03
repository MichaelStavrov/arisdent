import React, { FC } from 'react';
import {
  Map,
  Placemark,
  Polyline,
  GeolocationControl,
  RouteButton,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';

import HelmetedPage from '../../components/HelmetedPage';
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
          <Placemark geometry={[55.85726, 37.563323]} />
          <Polyline
            geometry={[
              [55.857515, 37.560704],
              [55.857651, 37.561955],
              [55.857533, 37.562157],
              [55.857438, 37.563512],
              [55.85726, 37.563323],
            ]}
            options={{
              balloonCloseButton: true,
              strokeColor: '#333333',
              strokeWidth: 5,
              strokeOpacity: 0.9,
              editorMaxPoints: 6,
            }}
          />
          <GeolocationControl />
          <RouteButton />
          <FullscreenControl />
          <ZoomControl />
        </Map>
      </div>
    </HelmetedPage>
  );
};

export default Contacts;
//   defaultState={{ center: [55.85726, 37.563323], zoom: 17 }}
