import { Inter } from 'next/font/google';
import './globals.css';
import '../styles/utils.css';
import Providers from '@/providers/Providers';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, theme } from 'antd';
import { antdThemeConfigs } from '@/themeConfig/antdthemeConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),

  title: {
    absolute: '',
    default: 'MTO APP',
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={antdThemeConfigs}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
