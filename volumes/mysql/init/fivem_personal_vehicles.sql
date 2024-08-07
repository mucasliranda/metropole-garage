-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fivem
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `personal_vehicles`
--

DROP TABLE IF EXISTS `personal_vehicles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_vehicles` (
  `id` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `primary_color` varchar(255) NOT NULL,
  `secondary_color` varchar(255) NOT NULL,
  `plate` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `player_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_vehicles`
--

LOCK TABLES `personal_vehicles` WRITE;
/*!40000 ALTER TABLE `personal_vehicles` DISABLE KEYS */;
INSERT INTO `personal_vehicles` VALUES ('lzhtd6tp','autarch','#ff0000','#fa0000','LUCAS','2024-08-06 02:41:17','fivem:14755671'),('lzhtdk1m','adder','#0032fa','#000000','','2024-08-06 02:41:34','fivem:14755671'),('lziy1hat','akuma','#000000','#000000','','2024-08-06 21:39:54','fivem:14755671'),('lziy2oc3','cheetah','#ff00f7','#000000','','2024-08-06 21:40:50','fivem:14755671'),('lziy54e8','furoregt','#ffffff','#000000','','2024-08-06 21:42:44','fivem:14755671'),('lziy5fbc','bestiagts','#000000','#000000','','2024-08-06 21:42:59','fivem:14755671'),('lziy6dt5','le7b','#ffffff','#ffffff','','2024-08-06 21:43:43','fivem:14755671'),('lziy8t5a','sanchez','#ff0000','#ffffff','','2024-08-06 21:45:36','fivem:14755671'),('lziyf0m3','burrito2','#000000','#000000','','2024-08-06 21:50:26','fivem:14755671');
/*!40000 ALTER TABLE `personal_vehicles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-06 18:54:01
