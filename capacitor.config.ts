import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.CapacitorGoogleAuth.app',
  appName: 'CapacitorGoogleAuth-demo',
  webDir: 'dist/CapacitorGoogleAuth-demo',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    // Google 登入設定
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '324292475892-9590a3ubjoi5h1l2ggtoost5v8emluem.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
