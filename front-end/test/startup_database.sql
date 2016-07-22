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
  `name` varchar(255) NOT NULL DEFAULT '',
  `visible_for_all_languages` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Dump dei dati della tabella ngcms.items: 7 rows
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
REPLACE INTO `items` (`id`, `parent_id`, `name`, `visible_for_all_languages`) VALUES
	(1, 0, 'prodotti', 1),
	(2, 1, 'donna', 1),
	(3, 1, 'uomo', 1),
	(4, 2, 'gonna', 1),
	(5, 2, 'pinocchietto', 1),
	(6, 3, 'jeans', 1),
	(7, 3, 'kilt', 0);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;


-- Dump della struttura di tabella ngcms.items_languages
DROP TABLE IF EXISTS `items_languages`;
CREATE TABLE IF NOT EXISTS `items_languages` (
  `idil` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `item_id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `lang` varchar(2) NOT NULL DEFAULT '',
  `slug` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`idil`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dump dei dati della tabella ngcms.items_languages: 1 rows
/*!40000 ALTER TABLE `items_languages` DISABLE KEYS */;
REPLACE INTO `items_languages` (`idil`, `item_id`, `lang`, `slug`) VALUES
	(1, 7, 'en', ''),
	(2, 7, 'de', ''),
	(3, 1, 'it', 'donna'),
	(4, 1, 'en', 'woman'),
	(5, 1, 'de', 'frau');
/*!40000 ALTER TABLE `items_languages` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
