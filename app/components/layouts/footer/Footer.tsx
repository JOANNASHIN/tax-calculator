'use client';

import Link from 'next/link';
import style from './Footer.style';
import { useRef } from 'react';
import { useModal } from '@/hooks/useModal';

interface IFooterProps {}

const Footer = (props: IFooterProps) => {
  const { openModal, closeModal } = useModal();
  const refNoticeFormModal = useRef(null);

  const activeKey = 'home';
  const handleSubmit = () => {
    closeModal(refNoticeFormModal);
  };

  return <footer css={style} className="footer"></footer>;
};

export default Footer;
