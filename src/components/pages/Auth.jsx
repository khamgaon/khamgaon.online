// src/components/pages/Auth.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../common/PageWrapper';
import Card from '../common/Card';
import Input from '../common/Input';
import Button from '../common/Button';
import { ReactComponent as SvgPattern1 } from 'assets/svgs/svg-bottom-left.svg';

const Auth = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState('phone'); // 'phone' or 'otp'
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let interval;
    if (step === 'otp' && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const validatePhone = (phoneNumber) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneNumber) return 'Phone number is required';
    if (!phoneRegex.test(phoneNumber)) return 'Please enter a valid Indian phone number';
    return '';
  };

  const validateOtp = (otpValue) => {
    const otpRegex = /^\d{6}$/;
    if (!otpValue) return 'OTP is required';
    if (!otpRegex.test(otpValue)) return 'Please enter a valid 6-digit OTP';
    return '';
  };

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    const phoneError = validatePhone(phone);
    if (phoneError) {
      setErrors({ phone: phoneError });
      return;
    }

    setLoading(true);
    try {
      // TODO: Implement API call to send OTP
      // const response = await sendOTP(phone);
      setStep('otp');
      setErrors({});
    } catch (error) {
      setErrors({ phone: 'Failed to send OTP. Please try again.' });
    }
    setLoading(false);
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const otpError = validateOtp(otp);
    if (otpError) {
      setErrors({ otp: otpError });
      return;
    }

    setLoading(true);
    try {
      // TODO: Implement API call to verify OTP
      // const response = await verifyOTP(phone, otp);
      navigate('/'); // Redirect to home page after successful auth
    } catch (error) {
      setErrors({ otp: 'Invalid OTP. Please try again.' });
    }
    setLoading(false);
  };

  const handleResendOtp = async () => {
    if (!canResend) return;
    setLoading(true);
    try {
      // TODO: Implement API call to resend OTP
      // const response = await sendOTP(phone);
      setTimer(30);
      setCanResend(false);
      setErrors({});
    } catch (error) {
      setErrors({ otp: 'Failed to resend OTP. Please try again.' });
    }
    setLoading(false);
  };

  return (
    <PageWrapper
      className="bg-gradient-to-br from-blue-50 via-purple-50/80 to-pink-50"
      topSvg={SvgPattern1}
      bottomSvg={SvgPattern1}
    >
      <div className="max-w-md mx-auto py-12 px-4">        
        <Card
          title={step === 'phone' ? 'Login / Sign Up' : 'Enter OTP'}
          description={
            step === 'phone'
              ? 'Enter your mobile number to continue'
              : `We've sent an OTP to +91 ${phone}`
          }
          gradientClass="gradient-icon-1" 
        >
          <form onSubmit={step === 'phone' ? handlePhoneSubmit : handleOtpSubmit} 
                className="mt-6">
            {step === 'phone' ? (
              <Input
                label="Phone Number"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter 10-digit mobile number" 
                maxLength={10}
                required
                error={errors.phone}
                prefix="+91"
                className="text-lg"
              />
            ) : (
              <>
                <Input
                  label="OTP"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  required
                  error={errors.otp}
                  className="text-xl tracking-wider"
                />
                <div className="mt-2 text-sm text-left">
                  <span className="text-gray-600">Didn't receive OTP? </span>
                  {timer > 0 ? (
                    <span className="text-blue-600 font-medium">Wait {timer}s</span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                      disabled={!canResend || loading}
                    >
                      Resend OTP
                    </button>
                  )}
                </div>
                {step === 'otp' && (
                  <div className="text-right">
                    <button
                      type="button"
                      onClick={() => {
                        setStep('phone');
                        setOtp('');
                        setTimer(30);
                        setErrors({});
                      }}
                      className="text-right text-sm text-gray-400 hover:text-blue-800 mb-0"
                    >
                      Change Phone Number?
                    </button>
                  </div>
                )}

              </>
            )}
            
            <Button
              type="submit"
              className="w-full mt-4"
              disabled={loading}
            >
              {loading
                ? 'Please wait...'
                : step === 'phone'
                ? 'Get OTP'
                : 'Verify & Continue'}
            </Button>
          </form>
        </Card>
      </div>
    </PageWrapper>
  );
};

export default Auth;