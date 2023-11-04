-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Nov 04. 18:55
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `bomberman`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `player`
--

CREATE TABLE `player` (
  `PlayerName` varchar(20) NOT NULL,
  `SkinID` varchar(20) NOT NULL,
  `Points` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `player`
--

INSERT INTO `player` (`PlayerName`, `SkinID`, `Points`) VALUES
('asd', 'SKIN_Cyberpunk', 2),
('asd1', 'SKIN_Cyberpunk', 1),
('asd10', 'SKIN_Cyberpunk', 3),
('asd11', 'SKIN_Cyberpunk', 4),
('asd12', 'SKIN_Cyberpunk', 5),
('asd13', 'SKIN_Cyberpunk', 6),
('asd2', 'SKIN_Zombie', 7),
('asd3', 'SKIN_Cyberpunk', 8),
('asd4', 'SKIN_Cyberpunk', 9),
('asd5', 'SKIN_Cyberpunk', 10),
('asd6', 'SKIN_Cyberpunk', 11),
('asd7', 'SKIN_Cyberpunk', 12),
('asd8', 'SKIN_Cyberpunk', 13),
('asd9', 'SKIN_Cyberpunk', 14);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`PlayerName`),
  ADD KEY `FK_Player_ResourceID` (`SkinID`);

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `player`
--
ALTER TABLE `player`
  ADD CONSTRAINT `FK_Player_ResourceID` FOREIGN KEY (`SkinID`) REFERENCES `resource` (`ResourceID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
