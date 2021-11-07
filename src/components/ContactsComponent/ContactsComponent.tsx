import React, { FC } from 'react';

import classes from './ContactsComponent.module.css';
import { ContactsComponentProps } from './types';
import { BiPhoneCall, BiMailSend } from 'react-icons/bi';

// <a href="tel:+74951234567">+7 (495) 123-45-67</a>

const ContactsComponent: FC<ContactsComponentProps> = ({ dir }) => {
  return (
    <div
      className={classes.contacts}
      style={{ flexDirection: dir === 'vertical' ? 'column' : 'row' }}
    >
      <div
        className={classes.phoneNumber}
        style={{ margin: dir === 'horizontal' ? '0 10px 0 0' : '' }}
      >
        <BiPhoneCall className={classes.linkIcon} />
        <a href='tel:+79037240581'>+7 (903) 724-05-81</a>
      </div>
      <div className={classes.mail}>
        <BiMailSend className={classes.linkIcon} />
        <a href='mailto:info@arisdent.com'>info@arisdent.com</a>
      </div>
    </div>
  );
};

export default ContactsComponent;
