import '../../assets/scss/get-started.scss';
import logo from '../../assets/images/logo.svg';
import logo2 from '../../assets/images/forum1.jpeg';
import { useEffect, useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { LiaTimesSolid } from 'react-icons/lia';
import { FaEye } from 'react-icons/fa';
import Button from '../components/molecules/Button';
import InputGroup from '../components/molecules/InputGroup';
import SeedPhrase from '../components/molecules/SeedPhrase';
function GetStarted() {
  const [step, setStep] = useState('3');

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordSubText, setPasswordSubText] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const [stage, setStage] = useState('2');
  const [showSecretKeyTab, setShowSecretKeyTab] = useState(true);
  const [showSeedPhrase, setShowSeedPhrase] = useState(true);

  const [foxStyle, setFoxStyle] = useState({ transform: 'rotate(0deg)' });

  const handleMouseMove = (e: any) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const fox = document.getElementById('fox');
    if (fox) {
      const foxX = fox!.getBoundingClientRect().left + fox!.offsetWidth / 2;
      const foxY = fox!.getBoundingClientRect().top + fox!.offsetHeight / 2;

      const angle = Math.atan2(mouseY - foxY, mouseX - foxX);
      const angleDeg = angle * (180 / Math.PI);
      setFoxStyle({ transform: `rotate(${angleDeg}deg)` });
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  console.log('password', password);
  console.log('confirm password', confirmPassword);

  return (
    <div className='get-started-wrapper'>
      <div className='container'>
        <div className='get-started-header'>
          <div className='logo-con'>
            <img src={logo} />
            <p>Petamask</p>
          </div>
          <select>
            <option value='English'>English</option>
            <option value='French'>French</option>
            <option value='Polish'>Polish</option>
            <option value='Afrikaan'>Afrikaans</option>
          </select>
        </div>
        <div className='get-started-flow-wrapper-box'>
          {step === '1' && (
            <div className='flow-contents-wrapper'>
              <div className='content content-1'>
                <h1>Lets get started</h1>
                <p>
                  Trusted by millions, Petamask is a secure wallet making the
                  world of web3 accessible to all.
                </p>
                <div className='get-started-mascot'>
                  <img
                    src={logo}
                    alt='Petamask Fox'
                    style={foxStyle}
                    id='fox'
                  />
                </div>
              </div>
              <div className='get-started-terms-wrapper'>
                <input type='checkbox' />
                <p>
                  I agree to Petamask's <span>Terms of use</span>
                </p>
              </div>
              <div className='get-started-buttons'>
                <Button
                  text='Create a new wallet'
                  onClick={() => setStep('2')}
                />
                <Button
                  text='Import an existing wallet'
                  onClick={() => setStep('2')}
                  variant='secondary'
                />
              </div>
            </div>
          )}
          {step === '2' && (
            <div className='get-started-metametrics'>
              <div className=' desc'>
                <h1>Help us improve Petamask</h1>
                <div className='info'>
                  <p>
                    Petamask would like to gather usage data to better
                    understand how our users interact with Petamask. This data
                    will be used to provide the service, which includes
                    improving the service based on your use.
                  </p>
                  <p>Petamask will...</p>
                </div>
                <ul className='get-started-desc'>
                  <li>
                    <div className='icon-1'>
                      <IoMdCheckmark />
                    </div>
                    Always allow you to opt-out via Settings
                  </li>
                  <li>
                    <div className='icon-1'>
                      <IoMdCheckmark />
                    </div>
                    Send anonymized click and pageview events
                  </li>
                  <li>
                    <div className='icon-2'>
                      <LiaTimesSolid />
                    </div>
                    <span>
                      <span className='bold'>Never </span> collect information
                      we don’t need to provide the service (such as keys,
                      addresses, transaction hashes, or balances)
                    </span>
                  </li>
                  <li>
                    <div className='icon-2'>
                      <LiaTimesSolid />
                    </div>
                    <span>
                      <span className='bold'>Never </span>collect your full IP
                      address*
                    </span>
                  </li>
                  <li>
                    <div className='icon-2'>
                      <LiaTimesSolid />
                    </div>
                    <span>
                      <span className='bold'>Never </span>sell data. Ever!
                    </span>
                  </li>
                </ul>
                <div className='privacy-policy'>
                  <p>
                    This data is aggregated and is therefore anonymous for the
                    purposes of General Data Protection Regulation (EU)
                    2016/679.
                  </p>
                  <p>
                    * When you use Infura as your default RPC provider in
                    Petamask, Infura will collect your IP address and your
                    Ethereum wallet address when you send a transaction. We
                    don’t store this information in a way that allows our
                    systems to associate those two pieces of data. For more
                    information on how Petamask and Infura interact from a data
                    collection perspective, see our update here. For more
                    information on our privacy practices in general, see our
                    Privacy Policy here.
                  </p>
                </div>
              </div>

              <div className='get-started-confirm'>
                <Button text='I agree' onClick={() => setStep('3')} />
                <Button
                  text=' No thanks'
                  onClick={() => setStep('1')}
                  variant='secondary'
                />
              </div>
            </div>
          )}
          {step === '3' && (
            <div className='step-3'>
              <div className='progress-bars'>
                <div className='progress-bar-wrapper'>
                  <div className='progress-bar-con'>
                    <div className='line-2'></div>
                    <div
                      className={`progress-bar ${
                        (stage === '1' || stage === '2' || stage === '3') &&
                        'active'
                      }`}
                    >
                      1
                    </div>
                    <div
                      className={`line-1 ${
                        (stage === '2' || stage === '3') && 'active'
                      }`}
                    ></div>
                  </div>
                  <p
                    className={`${
                      (stage === '1' || stage === '2' || stage === '3') &&
                      'active'
                    }`}
                  >
                    Create password
                  </p>
                </div>
                <div className='progress-bar-wrapper'>
                  <div className='progress-bar-con'>
                    <div
                      className={`line-1 ${
                        (stage === '2' || stage === '3') && 'active'
                      }`}
                    ></div>
                    <div
                      className={`progress-bar ${
                        (stage === '2' || stage === '3') && 'active'
                      }`}
                    >
                      2
                    </div>
                    <div
                      className={`line-1 ${stage === '3' && 'active'}`}
                    ></div>
                  </div>
                  <p
                    className={`${
                      (stage === '2' || stage === '3') && 'active'
                    }`}
                  >
                    Secure wallet
                  </p>
                </div>
                <div className='progress-bar-wrapper'>
                  <div className='progress-bar-con'>
                    <div
                      className={`line-1 ${stage === '3' && 'active'}`}
                    ></div>
                    <div
                      className={`progress-bar ${stage === '3' && 'active'}`}
                    >
                      3
                    </div>
                    <div className='line-2'></div>
                  </div>
                  <p className={`${stage === '3' && 'active'}`}>
                    Confirm secret recovery phrase
                  </p>
                </div>
              </div>
              <div className='stages'>
                {stage === '1' && (
                  <div className='stage-1'>
                    <h3 className='title'>Create password</h3>
                    <p className='info'>
                      This password will unlock your MetaMask wallet only on
                      this device. MetaMask can not recover this password.
                    </p>
                    <div className='con'>
                      <div className='input-groups'>
                        <InputGroup
                          onToggleHideShow={() =>
                            setShowPassword(!showPassword)
                          }
                          showPassword={showPassword}
                          label='New password (8 characters min)'
                          password={password}
                          onChange={(e) => {
                            if (e.target.value === '') {
                              setPasswordSubText('Weak');
                            } else {
                              setPasswordSubText('Strong');
                            }
                            setPassword(e.target.value);
                          }}
                          passwordSubText={passwordSubText}
                        />
                        <InputGroup
                          showPassword={showPassword}
                          label='Confirm Password'
                          password={password}
                          confirmPassword={confirmPassword}
                          onChangeConfirmPassword={(e) =>
                            setConfirmPassword(e.target.value)
                          }
                        />
                      </div>
                      <div className='confirm'>
                        <div className='checkbox-wrapper'>
                          <input type='checkbox' />
                        </div>
                        <p>
                          I understand that MetaMask cannot recover this
                          password for me. Learn more
                        </p>
                      </div>
                      <div className='btn'>
                        <Button
                          text='Create a new wallet'
                          onClick={() => {
                            setStage('2');
                          }}
                          // disabled
                        />
                      </div>
                    </div>
                  </div>
                )}
                {stage === '2' && !showSecretKeyTab && (
                  <div className='stage-2'>
                    <h3 className='title'>Secure your wallet</h3>
                    <h5 className='info'>
                      Before getting started, watch this short video to learn
                      about your Secret Recovery Phrase and how to keep your
                      wallet safe.
                    </h5>
                    <div className='video-wrapper'></div>
                    <div className='btns'>
                      <Button
                        text='Remind me later (not recommended)'
                        variant='secondary'
                        // onClick={() => setStep('2')}
                      />
                      <Button
                        text='Secure my wallet (recommended)'
                        onClick={() => setShowSecretKeyTab(true)}
                      />
                    </div>
                    <div className='qstions-wrapper'>
                      <div className='qstion-wrapper'>
                        <h5>What is a Secret Recovery Phrase?</h5>
                        <p>
                          Your Secret Recovery Phrase is a 12-word phrase that
                          is the “master key” to your wallet and your funds
                        </p>
                      </div>
                      <div className='qstion-wrapper'>
                        <h5>How do I save my Secret Recovery Phrase?</h5>
                        <ul>
                          <li>Save in a password manager</li>
                          <li>Store in a safe deposit box</li>
                          <li>
                            Write down and store in multiple secret places
                          </li>
                        </ul>
                      </div>
                      <div className='qstion-wrapper'>
                        <h5>Should I share my Secret Recovery Phrase?</h5>
                        <p>
                          Never, ever share your Secret Recovery Phrase, not
                          even with MetaMask!
                        </p>
                      </div>
                    </div>
                    <div className='warning'>
                      <h5>
                        If someone asks for your recovery phrase they are likely
                        trying to scam you and steal your wallet funds.
                      </h5>
                    </div>
                  </div>
                )}
                {stage === '2' && showSecretKeyTab && (
                  <div className='stage-2 secret-key'>
                    <h3 className='title'>
                      Write down your Secret Recovery Phrase
                    </h3>
                    <p className='info'>
                      Write down this 12-word Secret Recovery Phrase and save it
                      in a place that you trust and only you can access.
                    </p>
                    <div className='tips'>
                      <h5>Tips:</h5>
                      <ul>
                        <li>Save in a password manager</li>
                        <li>Store in a safe deposit box</li>
                        <li>Write down and store in multiple secret places</li>
                      </ul>
                    </div>
                    <div className='password-box'>
                      {!showSeedPhrase && (
                        <>
                          <div className='overlay'></div>
                          <div className='overlay-2'>
                            <FaEye className='icon' />
                            <p>Make sure nobody's looking</p>
                          </div>
                        </>
                      )}
                      <div className='content'>
                        <SeedPhrase phrase='Hello' number={1} />
                        <SeedPhrase phrase='Hello' number={1} />
                        <SeedPhrase phrase='Hello' number={1} />
                        <SeedPhrase phrase='Hello' number={1} />
                        <SeedPhrase phrase='Hello' number={1} />
                        <SeedPhrase phrase='Hello' number={1} />
                        <SeedPhrase phrase='Hello' number={1} />
                        <SeedPhrase phrase='Hello' number={1} />
                        <SeedPhrase phrase='Hello' number={1} />
                        <SeedPhrase phrase='Hello' number={1} />
                        <SeedPhrase phrase='Hello' number={1} />
                        <SeedPhrase phrase='Hello' number={1} />
                      </div>
                    </div>
                    <Button
                      text='Reveal Secret Recovery Phrase'
                      onClick={() => setShowSecretKeyTab(true)}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
