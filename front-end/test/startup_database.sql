-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versione server:              5.7.9 - MySQL Community Server (GPL)
-- S.O. server:                  Win64
-- HeidiSQL Versione:            9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dump della struttura di tabella ngcms.items
DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `lang` varchar(2) NOT NULL DEFAULT '',
  `slug` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- Dump dei dati della tabella ngcms.items: 18 rows
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
REPLACE INTO `items` (`id`, `lang`, `slug`) VALUES
	(1, 'it', 'vestiti-donna'),
	(2, 'it', 'intimo'),
	(3, 'it', 'abbigliamento-uomo'),
	(4, 'it', 'bimbi'),
	(5, 'it', 'scarpe-e-accessori'),
	(6, 'it', 'moda-mare'),
	(7, 'it', 'casa'),
	(8, 'it', 'sconti'),
	(9, 'it', 'stories'),
	(10, 'en', 'women'),
	(11, 'en', 'lingerie'),
	(12, 'en', 'men'),
	(13, 'en', 'kids'),
	(14, 'en', 'shoes-accessories'),
	(15, 'en', 'summer'),
	(16, 'en', 'house'),
	(17, 'en', 'sales'),
	(18, 'en', 'stories');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
