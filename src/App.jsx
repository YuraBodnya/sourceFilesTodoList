
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { store } from './store/store';
import { setScrollValue } from './store/todos/todos-reducer';

import style from './App.module.css';

import ContainerTodoList from './components/todos-component/ContainerTodoList';
import ContainerModalTodo from './components/todos-component/ContainerModalTodo';
import ContainerBtnToTop from './components/todos-component/ContainerBtnToTop';





function App() {
  
  const handleScroll = () => {
    store.dispatch(setScrollValue(window.scrollY));
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <Provider store={store}>
      <div className={style.appWrapper}>
        <div className={style.app}>
          <ContainerTodoList />
        </div>
        <ContainerModalTodo />
        <ContainerBtnToTop />
        <Toaster position="bottom-right" />
      </div>
    </Provider>
  );
}

export default App;
