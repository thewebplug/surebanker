import "../styles/index.scss";
import ReduxProvider from "./store/ReduxProvider";
import { Toast } from "./toast";
import { Nunito, Gabarito, Raleway } from 'next/font/google'

// Configure the font
const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito', // Add this to use as CSS variable if needed
})

const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gabarito',
})

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})

// Metadata configuration for App Router
export const metadata = {
  title: "Surebanker",
  description: "Collect payments, access loans and manage operations with a business banking solution that meets all your needs.",
  // Add your meta tags here instead of using Head
  // metadataBase: new URL('https://yourdomain.com'), // Replace with your domain
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" 
    className={`${nunito.variable} ${gabarito.variable} ${raleway.variable}`}
    >
      <body className={nunito.className}>
        <ReduxProvider>
          {children}
          <Toast />
        </ReduxProvider>
      </body>
    </html>
  );
}