-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-04-21 19:14:54
-- 伺服器版本： 10.4.27-MariaDB
-- PHP 版本： 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `demo_ci3`
--

-- --------------------------------------------------------

--
-- 資料表結構 `account_info`
--

CREATE TABLE `account_info` (
  `id` int(11) NOT NULL,
  `account` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `birthday` date NOT NULL,
  `email` varchar(20) NOT NULL,
  `remark` text NOT NULL,
  `is_deleted` tinyint(4) NOT NULL DEFAULT 0 COMMENT '是否被刪除'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `account_info`
--

INSERT INTO `account_info` (`id`, `account`, `name`, `gender`, `birthday`, `email`, `remark`, `is_deleted`) VALUES
(1, 'asdasd', 'aaaa', 'male', '2023-04-06', 'asdasd@gmail.com', 'asdasdasdas', 0),
(2, 'ddddd', 'gggggg', 'male', '2023-04-15', 'asdasddsadasd@gmail.', 'asdzxzxzzxcczxzc', 0),
(3, 'zxcczxcz', 'ccxzcz', 'male', '2023-04-15', 'asxxxxxxsd@gmail.com', 'zxcz', 0),
(4, 'ddddddcccc', 'dcdcdc', 'female', '2023-04-16', 'sssssssd@gmail.com', 'asdaaaaa', 0);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `account_info`
--
ALTER TABLE `account_info`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `account_info`
--
ALTER TABLE `account_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
