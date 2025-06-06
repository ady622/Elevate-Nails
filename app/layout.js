// app/layout.jsx
import './globals.css';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export const metadata = {
  title: 'Elevate Nails Studio',
  description: 'Manicuras de vanguardia en Ica, Peru',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* Navbar fijo */}
        <Navbar />

        {/* El margin-top evita que el contenido se oculte bajo el navbar */}
        <main style={{ marginTop: '70px' }}>
          {children}
        </main>

        {/* Botón flotante de WhatsApp */}
        <FloatingWhatsApp />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
