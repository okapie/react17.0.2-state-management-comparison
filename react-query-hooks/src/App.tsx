import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css';

import Todo from './components/todo'

function App() {
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 3000,
          retry: false,
          refetchOnWindowFocus: false,
          refetchOnReconnect: false
        }
      }
    })
  })
 
  return (
    <QueryClientProvider client={queryClient}>
      <Todo />
    </QueryClientProvider>
  );
}

export default App;
