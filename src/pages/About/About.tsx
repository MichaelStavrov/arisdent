import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import HelmetedPage from '../../components/HelmetedPage';
import license1 from '../../assets/images/license1-large.jpg';
import license2 from '../../assets/images/license2-large.jpg';
import license3 from '../../assets/images/license3-large.jpg';
import classes from './About.module.css';

const About: FC = () => {
  const [showLicenses, setShowLicenses] = useState({
    license1: false,
    license2: false,
    license3: false,
  });

  useEffect(() => {
    const setState = (e: MouseEvent) => {
      const elem = e.target as HTMLElement;

      if (!elem?.ariaLabel) {
        setShowLicenses({
          license1: false,
          license2: false,
          license3: false,
        });
      }
    };

    document.addEventListener('click', setState);

    return () => document.removeEventListener('click', setState);
  }, []);

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
        {
          id: 1,
          name: 'description',
          content: 'Стоматологическая клиника Арисдент',
        },
        {
          id: 2,
          name: 'keywords',
          content: 'Арисдент, стоматологическая клиника, стоматолог недорого',
        },
      ]}
      title='Опытные врачи, с индивидуальным подходом к пациенту '
    >
      <h1 className={classes.titlePage}>Стоматологическая клиника Арисдент</h1>
      <h2 className={classes.title}>
        Семейная клиника, которая ориентирована на индивидуальный подход к
        пациенту
      </h2>
      <div className={classes.companyDescription}>
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
        <b className={classes.licensesTitle}>Лицензия:</b>
        <div className={classes.licenses}>
          <img
            className={cn(classes.license, {
              [classes.licenseScalable]: showLicenses.license1,
            })}
            id='license'
            aria-label='license'
            src={license1}
            alt='Лицензия'
            onClick={() =>
              setShowLicenses((prev) => ({
                license1: !prev.license1,
                license2: false,
                license3: false,
              }))
            }
          />
          <img
            className={cn(classes.license, {
              [classes.licenseScalable]: showLicenses.license2,
            })}
            id='license'
            aria-label='license'
            src={license2}
            alt='Лицензия'
            onClick={() =>
              setShowLicenses((prev) => ({
                license1: false,
                license2: !prev.license2,
                license3: false,
              }))
            }
          />
          <img
            className={cn(classes.license, {
              [classes.licenseScalable]: showLicenses.license3,
            })}
            id='license'
            aria-label='license'
            src={license3}
            alt='Лицензия'
            onClick={() =>
              setShowLicenses((prev) => ({
                license1: false,
                license2: false,
                license3: !prev.license3,
              }))
            }
          />
        </div>
      </div>
    </HelmetedPage>
  );
};

export default About;
