import React, { FC } from 'react';
import HelmetedPage from '../../components/HelmetedPage';
import PersonCard from '../../components/PersonCard';
import mainPerson from '../../assets/images/mainPerson-cutted.jpg';
import person from '../../assets/images/person.png';

import classes from './Staff.module.css';

const Staff: FC = () => {
  return (
    <HelmetedPage
      meta={[
        { id: 1, name: 'description', content: 'Хороший стоматолог Москва' },
        {
          id: 2,
          name: 'keywords',
          content:
            'качественный стоматолог, Сыренов Олег Сергеевич, Юскаев Денис Юрьевич',
        },
      ]}
      title='Сыренов Олег Сергеевич, Юскаев Денис Юрьевич'
    >
      <h1 className={classes.titlePage}>Врачи стоматологии Арисдент</h1>
      <div className={classes.mainPerson}>
        <PersonCard
          image={mainPerson}
          alt='Сыренов Олег Сергеевич - Главный врач'
        />
        <div className={classes.personInfo}>
          <h2>Сыренов Олег Сергеевич</h2>
          <p className={classes.profession}>Главный врач</p>
          <p className={classes.personDescription}>
            Сыренов О.С. закончил Иркутский государственный медицинский
            институт, клиническую ординатуру при Московском медицинском
            стоматологическом институте. Получил первичные специализации:
            хирургическая стоматология, ортопедическая стоматология,
            терапевтическая стоматология. Имплантология в полном объеме, все
            виды костных пластик, открытый и закрытый синуслифтинг, ортопедия в
            полном объеме, пародонтология, эндодонтия, терапевтическая
            стоматология.
          </p>
          {/* <p className={classes.specialization}>
            Специализация: [ имплантация ], [ хирургия ], [ ортопедия ], [
            эндодонтия ], [ терапевтическая стоматология ]
          </p> */}
        </div>
      </div>
      <p className={classes.personDescriptionSmallSize}>
        Сыренов О.С. закончил Иркутский государственный медицинский институт,
        клиническую ординатуру при Московском медицинском стоматологическом
        институте. Получил первичные специализации: хирургическая стоматология,
        ортопедическая стоматология, терапевтическая стоматология. Имплантология
        в полном объеме, все виды костных пластик, открытый и закрытый
        синуслифтинг, ортопедия в полном объеме, пародонтология, эндодонтия,
        терапевтическая стоматология.
      </p>
      {/* <p className={classes.specializationSmallSize}>
        Специализация: [ имплантация ], [ хирургия ], [ ортопедия ], [
        эндодонтия ], [ терапевтическая стоматология ]
      </p> */}
      <div className={classes.person}>
        <PersonCard
          image={person}
          alt='Юскаев Денис Юрьевич - Врач-стоматолог'
        />
        <div className={classes.personInfo}>
          <h2>Юскаев Денис Юрьевич</h2>
          <p className={classes.profession}>Врач-стоматолог</p>
          <p className={classes.personDescription}>
            Юскаев Д.Ю. закончил Московский государственный
            медико-стоматологический университет им. Семашко, клиническую
            ординатуру на кафедре Ортодонтия под руководством проф. Малыгина
            Ю.М. при Российской Медицинской Академии постдипломного образования
            г. Москвы.
          </p>
          <p className={classes.personDescription}>
            Имеет обширный опыт работы с самолигирующимися брекетсистемами:
            Clarity SL, martClip, Damond Clear, MX, Q, Inovation, Quicklear.
            Лингвальная ортодонтия: Forestodent 2D, STB, eBrace. Эластоэлайнеры:
            StarSmile, OrtoSnap и др. Сертифицированный специалист INCOGNITO.
            Лечение ретенированных зубов.
          </p>
          {/* <p className={classes.specialization}>
            Специализация: [ ортодонтия ]
          </p> */}
        </div>
      </div>
      <p className={classes.personDescriptionSmallSize}>
        Юскаев Д.Ю. закончил Московский государственный медико-стоматологический
        университет им. Семашко, клиническую ординатуру на кафедре Ортодонтия
        под руководством проф. Малыгина Ю.М. при Российской Медицинской Академии
        постдипломного образования г. Москвы.
      </p>
      <p className={classes.personDescriptionSmallSize}>
        Имеет обширный опыт работы с самолигирующимися брекетсистемами: Clarity
        SL, martClip, Damond Clear, MX, Q, Inovation, Quicklear. Лингвальная
        ортодонтия: Forestodent 2D, STB, eBrace. Эластоэлайнеры: StarSmile,
        OrtoSnap и др. Сертифицированный специалист INCOGNITO. Лечение
        ретенированных зубов.
      </p>
      {/* <p className={classes.specializationSmallSize}>
        Специализация: [ ортодонтия ]
      </p> */}
    </HelmetedPage>
  );
};

export default Staff;
