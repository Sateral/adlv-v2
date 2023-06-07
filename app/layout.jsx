import './globals.css'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export const metadata = {
  title: 'Aurore de la Vie',
  description: 'British Shorthair Cattery',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='h-screen'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
