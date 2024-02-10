import { useNavigate } from 'react-router-dom';

import { Wallet } from 'ethers';

import eth from '../../../assets/images/eth_logo.png';

import accountDefault from '../../../assets/images/account-default.png';
import { FaChevronDown, FaCopy, FaPlus } from 'react-icons/fa';
import { MdMoreVert, MdOutlineArrowOutward } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import Button from '../molecules/Button';
import { BiSolidCopy, BiSolidMessageDots } from 'react-icons/bi';
import { PiPlusMinusBold } from 'react-icons/pi';
import { GoArrowSwitch } from 'react-icons/go';
import { AiOutlineLineChart } from 'react-icons/ai';
import { SiDovecot } from 'react-icons/si';
import { FiRefreshCw } from 'react-icons/fi';
import '../../../assets/scss/dashboard-page-components.scss';
import Modal from '../molecules/Modal';

import PreSwapModal from '../modals/PreSwapModal';
function Swap() {
  const [showPreSwapModal, setShowPreSwapModal] = useState(true);
  return (
    <div className='swap-wrapper'>
      <div className='container'>
        <div className='dashboard-box'>
          <div className='box-content'>hdhd</div>
        </div>
      </div>
      {showPreSwapModal && (
        <Modal closeModal={() => setShowPreSwapModal(false)}>
          <PreSwapModal closeModal={() => setShowPreSwapModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default Swap;
