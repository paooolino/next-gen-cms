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
  `parent_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `lang` varchar(2) NOT NULL DEFAULT '',
  `slug` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- Dump dei dati della tabella ngcms.items: 19 rows
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
REPLACE INTO `items` (`id`, `parent_id`, `lang`, `slug`) VALUES
	(1, 0, 'it', 'donna'),
	(2, 0, 'it', 'intimo'),
	(3, 0, 'it', 'uomo'),
	(4, 0, 'it', 'bimbi'),
	(5, 0, 'it', 'scarpe-e-accessori'),
	(6, 0, 'it', 'moda-mare'),
	(7, 0, 'it', 'casa'),
	(8, 0, 'it', 'sconti'),
	(9, 0, 'it', 'stories'),
	(10, 0, 'en', 'women'),
	(11, 0, 'en', 'lingerie'),
	(12, 0, 'en', 'men'),
	(13, 0, 'en', 'kids'),
	(14, 0, 'en', 'shoes-accessories'),
	(15, 0, 'en', 'summer'),
	(16, 0, 'en', 'house'),
	(17, 0, 'en', 'sales'),
	(18, 0, 'en', 'stories'),
	(19, 1, 'it', 'abbigliamento-sportivo'),
	(20, 19, 'it', 'pinocchietto');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
