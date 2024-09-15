import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider,redirect } from 'react-router-dom';
import store from './store/index';
import App from './App.jsx';
import Tabs from './components/Tabs.jsx';
import PostList from './components/PostList.jsx';
import LoginPage from './components/LoginPage.jsx';
import SignUp from './components/SignUp.jsx';
import Post from './components/Post.jsx';


const handle_login_router = async () => {
  try {
    const res = await fetch('http://localhost:3000/verify/validate', {
      credentials: 'include',
    });
    const result = await res.json();
    
    if (!result.status) {
      return redirect('/login'); 
    }

    return null; 
  } catch (err) {
    return redirect('/login'); 
  }
};




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        path: 'home',
        element: (
          <>
            <Tabs />
            <PostList />
          </>
        ),
        loader: handle_login_router,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'post',
        element: <Post />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
