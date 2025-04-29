
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <iframe
        src="/lesly.html"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '320px',
          height: '420px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          zIndex: 9999,
          background: '#fff'
        }}
      ></iframe>
    </>
  )
}
