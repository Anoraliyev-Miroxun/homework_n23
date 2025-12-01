
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import App from './App.tsx'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import { Toaster } from "@/components/ui/sonner"




const client=new QueryClient();
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
  <BrowserRouter>
    <App />
     <Toaster />
  </BrowserRouter>,
  </QueryClientProvider>
  
)
