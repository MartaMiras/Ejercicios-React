import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Ejercicios/06-Components-app/src/Welcome';
import GithubUser from './GithubUser';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome name="YourName" />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </BrowserRouter>
  );
};

