import React, { FC } from 'react';
import HelmetedPage from '../../components/HelmetedPage';
import PersonCard from '../../components/PersonCard';
import mainPerson from '../../assets/images/mainPerson.png';
import license1 from '../../assets/images/license-1.png';
import license2 from '../../assets/images/license-2.png';
import license3 from '../../assets/images/license-3.png';

import classes from './About.module.css';

const About: FC = () => {
  const advantages = [
    {
      id: 1,
      title: 'Безопасность',
      description:
        'Здоровье пациентов и сотрудников является нашим приоритетом. В своей работе мы используем современные методы стерилизации инструментов, не экономим на дезинфицирующих средствах, индивидуальных расходных материалах и средствах защиты.',
    },
    {
      id: 2,
      title: 'Инновационность',
      description:
        'В нашей клинике только современные и безопасные материалы и оборудование. Мы постоянно совершенствуем свой профессиональный уровень – обучаемся не только в России, но и в других странах - лидерах стоматологических технологий',
    },
    {
      id: 3,
      title: 'Профессионализм',
      description:
        'Сотрудники нашей клиники не только врачи – профессионалы, которые получили великолепное образование, но и врачи, которые постоянно готовы к развитию, занимаются научной деятельностью, публикуют статьи, обучают молодых специалистов.',
    },
    {
      id: 4,
      title: 'Ответственность',
      description:
        'Мы лично несем ответственность за свою работу и стремимся к тому, чтобы стоматология в России развивалась по самым высоким стандартам в мире.',
    },
  ];
  return (
    <HelmetedPage
      meta={[
        { id: 1, name: 'description', content: '' },
        { id: 2, name: 'keywords', content: '' },
      ]}
      title='Опытные врачи, с индивидуальным подходом к пациенту '
    >
      <h1 className={classes.titlePage}>Стоматологическая клиника Арисдент</h1>
      <h2 className={classes.title}>
        Семейная клиника, которая ориентирована на индивидуальный подход к
        пациенту
      </h2>
      <div className={classes.personInfo}>
        <div className={classes.cardWrapper}>
          <PersonCard
            image={mainPerson}
            alt='Сыренов Олег Сергеевич - Главный врач'
          />
        </div>
        <div className={classes.personDescription}>
          <p>
            <b>Главный врач</b>
            <br />
            Сыренов Олег Сергеевич
          </p>
          <br />
          <p className={classes.mainPersonDescription}>
            Врач стоматолог широкого профиля, имеющий дополнительную подготовку
            по смежным специальностям и большой опыт работы в государственных
            учреждениях и в частных сетевых клиниках
          </p>
        </div>
      </div>
      <p className={classes.mainPersonDescriptionSmallSize}>
        Врач стоматолог широкого профиля, имеющий дополнительную подготовку по
        смежным специальностям и большой опыт работы в государственных
        учреждениях и в частных сетевых клиниках
      </p>
      <div className={classes.companyDescription}>
        <p className={classes.paragraphTitle}>
          В организации работы нашей клиники мы использовали мировой опыт
          лидеров в организации стоматологических услуг:
        </p>
        <div className={classes.summary}>
          <p>
            Наша основная задача – обеспечение непрерывного и всестороннего
            стоматологического обслуживания. Большое внимание мы уделяем
            профилактическим мероприятиям. Наши пациенты знают, что профилактика
            лучше и дешевле, чем лечение.
          </p>
          <p>
            Мы ориентированы на долгосрочные отношения с нашими пациентами, что
            дает нам возможность индивидуально подходить к здоровью каждого
            пациента. Только наблюдая пациентов длительное время, зная
            особенности конкретного человека, можно гарантировать высокое
            качество услуг.
          </p>
          <p>
            Наши пациенты посещают клинику всей семьей, такой подход к лечению и
            наблюдению является нормой в развитых странах, так как многие
            заболевания имеют наследственные корни.
          </p>
          <p>
            Мы не тратим средства на рекламу. Наши пациенты рекомендуют своим
            друзьям и близким врача, а не бренд. Высокая степень доверия наших
            пациентов – результат работы всего коллектива.
          </p>
        </div>
        <p className={classes.paragraphTitle}>
          Нам удалось собрать команду единомышленников, которые имеют единые
          принципы в работе:
        </p>
        <div className={classes.advantages}>
          {advantages.map(({ id, title, description }) => (
            <div className={classes.advantageContainer} key={id}>
              <b>{title}</b>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <b className={classes.licensesTitle}>Лицензии:</b>
        <div className={classes.licenses}>
          <img src={license1} alt='Лицензия' />
          <img src={license2} alt='Лицензия' />
          <img src={license3} alt='Лицензия' />
        </div>
      </div>
    </HelmetedPage>
  );
};

export default About;
