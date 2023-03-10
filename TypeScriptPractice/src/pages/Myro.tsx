import React from 'react';

import Header from '../components/myro/Header';
import SectionBottom from '../components/myro/SectionBottom';
import SectionMiddle from '../components/myro/SectionMiddle';
import SectionTop from '../components/myro/SectionTop';

export default function Myro() {
  return (
    <div>
      <Header />
      <SectionTop />
      <SectionMiddle />
      <SectionBottom />
    </div>
  );
}
