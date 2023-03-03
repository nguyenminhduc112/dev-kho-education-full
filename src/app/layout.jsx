'use client';
import './globals.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { SessionProvider } from 'next-auth/react';
import { store } from 'Redux/store';
import { Provider } from 'react-redux';
export default function RootLayout({ children, session }) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session}>
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              {children}
            </Provider>
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
