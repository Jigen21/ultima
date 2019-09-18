-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-09-2019 a las 04:47:16
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nodejs_login1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `descripcion` text NOT NULL,
  `precio` int(11) NOT NULL,
  `stock` text NOT NULL,
  `num_reposicion` int(11) NOT NULL,
  `fecha_ingreso` text NOT NULL,
  `imagen` text NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `id_marca` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre`, `descripcion`, `precio`, `stock`, `num_reposicion`, `fecha_ingreso`, `imagen`, `id_categoria`, `id_marca`) VALUES
(1, 'Correa', 'La correa del perro', 50, '30', 0, '12', 'https://www.collares-perros.es/2276-thickbox_default/correa-para-perro-biothane-violeta.jpg', 1, 1),
(2, 'sombrero', 'sombrero de perro', 20, '23', 32, '34', 'https://previews.123rf.com/images/purplequeue/purplequeue1411/purplequeue141100173/34028755-peque%C3%B1o-perro-chihuahua-marr%C3%B3n-con-sombrero-para-el-sol-de-paja-fondo-blanco.jpg', 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` text,
  `last_name` text,
  `email` text,
  `password` text,
  `created` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `created`) VALUES
(1, 'test', 'test', 'test@test.com', '$2b$10$JbdYCEjmowCRBYSQPJmTweBv9iCMw8Ev/HYxiecNoeuFcAz9y86jy', '2019-09-14 20:47:31'),
(7, NULL, 'doss', 'testdos@test.com', '$2b$10$yLu4cGvlS8Z3d336naE8BOnbkSNdbDH/mhtFUIeOnCnd9c1ZwB9fu', '2019-09-15 02:00:39'),
(8, NULL, 'doss', 'testdos@test.com', '$2b$10$RtaqwGq9tOjq//OL9aceFOf4l1La5xCuPVZgXrGSh9/LsM3llpula', '2019-09-15 02:00:39'),
(9, NULL, 'sdfsdfsdf', 'testtres@test.com', '$2b$10$2k6YmWib/VkXqkj43NccpuUSFZB8JG60Qe2akMA88Wo1YGHE6uA9u', '2019-09-15 02:00:52'),
(10, NULL, 'sdfsdfsdfhdg', 'testcuatro@test', '$2b$10$l9LDiBnhOZZjh7bm/CuWnOoyIYMQKqF58cVhEfLCkAN4QaactFdaq', '2019-09-15 02:01:09');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
