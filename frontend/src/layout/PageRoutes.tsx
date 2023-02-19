import { FC, createElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '../config/routes';
import HomePage from '../pages/home/HomePage';

const PageRoutes: FC = (): JSX.Element => (
    <Routes>
        {routes.map(({ path, component }, index) => (
            <Route key={index} path={path} element={createElement(component)} />
        ))}
        <Route path="/" element={<HomePage />} />
    </Routes>
);

export default PageRoutes;
