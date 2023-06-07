-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2023 at 01:43 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `abc_hospital`
--
CREATE DATABASE IF NOT EXISTS `abc_hospital` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `abc_hospital`;

-- --------------------------------------------------------

--
-- Table structure for table `stroke_patient`
--

CREATE TABLE `stroke_patient` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `blood_sugar_level` float NOT NULL,
  `bmi` int(11) NOT NULL,
  `cholesterol_level` float NOT NULL,
  `gender` varchar(255) NOT NULL,
  `is_smoke` varchar(3) NOT NULL,
  `stroke` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stroke_patient`
--

INSERT INTO `stroke_patient` (`id`, `name`, `age`, `blood_sugar_level`, `bmi`, `cholesterol_level`, `gender`, `is_smoke`, `stroke`) VALUES
(1, 'John Smith', 45, 120, 25, 180, 'Male', 'No', 'No'),
(2, 'Sarah Johnson', 62, 150, 29, 220, 'Female', 'Yes', 'Yes'),
(3, 'Michael Brown', 58, 135, 32, 190, 'Male', 'Yes', 'No'),
(4, 'Emily Davis', 70, 130, 27, 200, 'Female', 'No', 'Yes'),
(5, 'David Wilson', 52, 115, 26, 160, 'Male', 'No', 'No'),
(6, 'Jennifer Thompson', 68, 145, 31, 240, 'Female', 'No', 'Yes'),
(7, 'Alice Johnson', 57, 125, 28, 185, 'Female', 'No', 'No'),
(8, 'Robert Anderson', 49, 122, 30, 170, 'Male', 'Yes', 'No'),
(9, 'Mary Adams', 55, 130, 26, 165, 'Female', 'No', 'No'),
(10, 'Daniel Harris', 61, 140, 25, 200, 'Male', 'Yes', 'Yes'),
(11, 'Emma Thompson', 48, 120, 27, 175, 'Female', 'No', 'No'),
(12, 'Olivia Wilson', 43, 115, 24, 155, 'Female', 'No', 'No'),
(13, 'James Johnson', 71, 160, 32, 230, 'Male', 'No', 'Yes'),
(14, 'Sophia Miller', 52, 125, 28, 180, 'Female', 'No', 'No'),
(15, 'Benjamin Anderson', 66, 135, 30, 195, 'Male', 'No', 'Yes'),
(16, 'Ava Thompson', 54, 125, 27, 170, 'Female', 'No', 'No'),
(17, 'Alexander Wilson', 63, 145, 31, 205, 'Male', 'Yes', 'Yes'),
(18, 'Olivia Johnson', 42, 68, 26, 168, 'Female', 'No', 'No'),
(19, 'William Davis', 55, 82, 43, 180, 'Male', 'Yes', 'Yes'),
(20, 'Sophia Martinez', 38, 60, 28, 175, 'Female', 'No', 'No'),
(21, 'James Anderson', 47, 95, 35, 190, 'Male', 'No', 'No'),
(22, 'Charlotte Thomas', 51, 70, 41, 163, 'Female', 'Yes', 'Yes'),
(23, 'Benjamin Taylor', 29, 78, 24, 175, 'Male', 'No', 'No'),
(24, 'Amelia Hernandez', 64, 63, 29, 155, 'Female', 'No', 'No'),
(25, 'Daniel Johnson', 52, 85, 37, 178, 'Male', 'Yes', 'Yes'),
(26, 'Ava Martin', 41, 72, 34, 170, 'Female', 'Yes', 'No'),
(27, 'Emma Wilson', 34, 55, 28, 163, 'Female', 'No', 'No'),
(28, 'Liam Thompson', 49, 80, 32, 175, 'Male', 'Yes', 'Yes'),
(29, 'Mia White', 56, 68, 35, 158, 'Female', 'Yes', 'No'),
(30, 'Noah Rodriguez', 62, 90, 37, 182, 'Male', 'No', 'Yes'),
(31, 'Isabella Martinez', 45, 70, 26, 170, 'Female', 'No', 'No'),
(32, 'James Lee', 39, 75, 29, 175, 'Male', 'No', 'No'),
(33, 'Sophia Clark', 58, 63, 38, 165, 'Female', 'Yes', 'Yes'),
(34, 'Logan Young', 27, 80, 24, 180, 'Male', 'No', 'No'),
(35, 'Olivia Hernandez', 37, 58, 26, 160, 'Female', 'No', 'No'),
(36, 'Lucas Scott', 43, 78, 33, 175, 'Male', 'Yes', 'Yes'),
(37, 'Emily King', 31, 62, 27, 168, 'Female', 'No', 'No'),
(38, 'Mason Stewart', 55, 88, 39, 183, 'Male', 'Yes', 'Yes'),
(39, 'Avery Adams', 46, 67, 31, 162, 'Female', 'Yes', 'No'),
(40, 'Ethan Carter', 52, 85, 36, 178, 'Male', 'No', 'Yes'),
(41, 'Harper Wright', 40, 70, 30, 170, 'Female', 'No', 'No'),
(42, 'Michael Turner', 57, 92, 40, 185, 'Male', 'Yes', 'Yes'),
(43, 'Abigail Hill', 36, 63, 28, 165, 'Female', 'No', 'No'),
(44, 'Jackson Mitchell', 42, 80, 34, 180, 'Male', 'Yes', 'Yes'),
(45, 'Elizabeth Flores', 49, 68, 37, 168, 'Female', 'Yes', 'No'),
(46, 'Aiden Russell', 33, 78, 29, 175, 'Male', 'No', 'No'),
(47, 'Sofia Turner', 42, 65, 29, 160, 'Female', 'No', 'No'),
(48, 'Henry Murphy', 57, 80, 36, 175, 'Male', 'Yes', 'Yes'),
(49, 'Ava Peterson', 29, 55, 26, 163, 'Female', 'No', 'No'),
(50, 'Joseph Rivera', 48, 85, 33, 180, 'Male', 'Yes', 'No'),
(51, 'Scarlett Cooper', 36, 60, 28, 155, 'Female', 'No', 'No'),
(52, 'William Ross', 51, 82, 34, 178, 'Male', 'No', 'No'),
(53, 'Evelyn Morgan', 63, 70, 40, 165, 'Female', 'Yes', 'Yes'),
(54, 'James Wright', 32, 75, 27, 175, 'Male', 'No', 'No'),
(55, 'Chloe Rogers', 47, 68, 30, 168, 'Female', 'No', 'No'),
(56, 'Daniel Brooks', 55, 88, 36, 182, 'Male', 'Yes', 'Yes'),
(58, 'Benjamin Adams', 58, 92, 39, 185, 'Male', 'Yes', 'Yes'),
(59, 'Emily Stewart', 41, 67, 32, 162, 'Female', 'Yes', 'No'),
(60, 'Lucas Phillips', 53, 85, 37, 178, 'Male', 'No', 'Yes'),
(61, 'Luna Reed', 35, 63, 28, 165, 'Female', 'No', 'No'),
(62, 'Alexander Scott', 59, 90, 38, 180, 'Male', 'Yes', 'Yes'),
(63, 'Grace Hill', 38, 60, 29, 163, 'Female', 'No', 'No'),
(64, 'Jackson Turner', 44, 78, 34, 175, 'Male', 'Yes', 'Yes'),
(65, 'Ella Foster', 50, 70, 37, 170, 'Female', 'Yes', 'No');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `stroke_patient`
--
ALTER TABLE `stroke_patient`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `stroke_patient`
--
ALTER TABLE `stroke_patient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
