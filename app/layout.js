
import './globals.css'

export const metadata={
  title:'nextjs course appp',
  descrition:'your first nextjs app'
};

export default function Rootlayout({children}){
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}