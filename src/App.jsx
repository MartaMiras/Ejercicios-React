import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Ejercicios/06-Components-app/src/Welcome';
import GithubUser from './GithubUser';
import React from 'react';
import ShowGithubUser from './Ejercicios/ShowGithubUser'; 
import LoginForm from './Ejercicios/LoginForm'; 
import TodoList from './Ejercicios/TodoList';
import GithubUserList from './Ejercicios/GithubUserList';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users/someUsername">Show Github User</Link>
            </li>
            <li>
              <Link to="/login">Login Form</Link>
            </li>
            <li>
              <Link to="/todo">Todo List</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Welcome name="YourName" />} />
          <Route path="users/:username" element={<ShowGithubUser />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="todo" element={<TodoList />} />
          <Route path="users" element={<GithubUserList />} />
          <Route index element={<UserListIndex />} />

          {/* "Not Found" route */}
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const NotFound = () => {
  return <h2>Not Found - 404 Error</h2>;
};
