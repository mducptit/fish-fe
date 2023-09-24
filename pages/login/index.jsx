import React from 'react';
import dynamic from 'next/dynamic';
import '../../app/globals.css';
import { isMobile } from 'react-device-detect';
const LoginForm = dynamic(
  () => true ? import('@/components/login/mobile-login-form') : import('../../components/login/browser-login-form'),
  { ssr: false }
);
export default function Login() {
  return <LoginForm/>
}
