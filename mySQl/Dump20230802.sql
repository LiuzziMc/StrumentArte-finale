CREATE DATABASE  IF NOT EXISTS `ecommerce` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ecommerce`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `ID_CATEGORIA` int NOT NULL AUTO_INCREMENT,
  `TIPO_CATEGORIA` char(100) DEFAULT NULL,
  PRIMARY KEY (`ID_CATEGORIA`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'tastiere');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credenziali`
--

DROP TABLE IF EXISTS `credenziali`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `credenziali` (
  `ID_CREDENZIALI` int NOT NULL AUTO_INCREMENT,
  `NUMERO_TELEFONO` int NOT NULL,
  `USERNAME` char(100) DEFAULT NULL,
  `LOCALITA` char(100) DEFAULT NULL,
  `ANNO_NASCITA` int DEFAULT NULL,
  `METODO_PAGAMENTO` char(100) DEFAULT NULL,
  `FK_UTENTE` int NOT NULL,
  PRIMARY KEY (`ID_CREDENZIALI`),
  KEY `FK_UTENTE` (`FK_UTENTE`),
  CONSTRAINT `credenziali_ibfk_1` FOREIGN KEY (`FK_UTENTE`) REFERENCES `utente` (`ID_UTENTE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credenziali`
--

LOCK TABLES `credenziali` WRITE;
/*!40000 ALTER TABLE `credenziali` DISABLE KEYS */;
/*!40000 ALTER TABLE `credenziali` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inserimento`
--

DROP TABLE IF EXISTS `inserimento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inserimento` (
  `ID_INSERIMENTO` int NOT NULL AUTO_INCREMENT,
  `QUANTITA` int NOT NULL,
  `FK_PRODOTTO` int NOT NULL,
  `FK_ORDINE` int NOT NULL,
  PRIMARY KEY (`ID_INSERIMENTO`),
  KEY `FK_PRODOTTO` (`FK_PRODOTTO`),
  KEY `FK_ORDINE` (`FK_ORDINE`),
  CONSTRAINT `inserimento_ibfk_1` FOREIGN KEY (`FK_PRODOTTO`) REFERENCES `prodotto` (`ID_PRODOTTO`),
  CONSTRAINT `inserimento_ibfk_2` FOREIGN KEY (`FK_ORDINE`) REFERENCES `ordine` (`ID_ORDINE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inserimento`
--

LOCK TABLES `inserimento` WRITE;
/*!40000 ALTER TABLE `inserimento` DISABLE KEYS */;
/*!40000 ALTER TABLE `inserimento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordine`
--

DROP TABLE IF EXISTS `ordine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordine` (
  `ID_ORDINE` int NOT NULL AUTO_INCREMENT,
  `DATA_ACQUISTO` datetime DEFAULT NULL,
  `NUMERO_PRODOTTI` int DEFAULT NULL,
  `COSTO` float DEFAULT NULL,
  `INDIRIZZO_SPEDIZIONE` char(100) NOT NULL,
  `FK_UTENTE` int NOT NULL,
  `FK_PAGAMENTO` int NOT NULL,
  PRIMARY KEY (`ID_ORDINE`),
  KEY `FK_UTENTE` (`FK_UTENTE`),
  KEY `FK_PAGAMENTO` (`FK_PAGAMENTO`),
  CONSTRAINT `ordine_ibfk_1` FOREIGN KEY (`FK_UTENTE`) REFERENCES `utente` (`ID_UTENTE`),
  CONSTRAINT `ordine_ibfk_2` FOREIGN KEY (`FK_PAGAMENTO`) REFERENCES `pagamento` (`ID_PAGAMENTO`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordine`
--

LOCK TABLES `ordine` WRITE;
/*!40000 ALTER TABLE `ordine` DISABLE KEYS */;
INSERT INTO `ordine` VALUES (1,'2023-05-12 00:00:00',1,200.5,'Via CarloV 21  Lecce',1,1),(2,'2023-04-01 00:00:00',3,300,'Via Mito 10  Lecce',6,2),(3,'2023-01-24 00:00:00',4,409,'Via Ennio 40 Taranto',3,3),(4,'2023-02-23 00:00:00',1,55.6,'Via Girolamo 2  Lecce',2,4),(5,'2023-02-03 00:00:00',1,168.9,'Via Kennedy 11  Taranto',4,5),(6,'2023-03-10 00:00:00',2,205,'Via Mazzini 5  Lecce',5,1),(7,'2022-12-23 00:00:00',2,550,'Via Molinelle 50  Lecce',7,6),(8,'2023-05-25 00:00:00',2,601.8,'Via Oronzo 16  Lecce',10,7),(9,'2023-02-06 00:00:00',1,98,'Via Pascoli 1  Lecce',9,8),(10,'2023-03-15 00:00:00',3,345,'Via Bitti 16  Lecce',1,9);
/*!40000 ALTER TABLE `ordine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagamento`
--

DROP TABLE IF EXISTS `pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagamento` (
  `ID_PAGAMENTO` int NOT NULL AUTO_INCREMENT,
  `SCONTO` char(3) DEFAULT NULL,
  `NOTE` char(100) DEFAULT NULL,
  `IMPORTO_TOTALE` float NOT NULL,
  `TIPO_PAGAMENTO` char(20) NOT NULL,
  PRIMARY KEY (`ID_PAGAMENTO`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamento`
--

LOCK TABLES `pagamento` WRITE;
/*!40000 ALTER TABLE `pagamento` DISABLE KEYS */;
INSERT INTO `pagamento` VALUES (1,'40','benvenuto',200.5,'paypal'),(2,'40','tastiere',400,'paypal'),(3,'40','chitarre',300,'paypal'),(4,'25','ttt',409,'postepay'),(5,'','yyyy',95,'paypal'),(6,'20','g',700,'carta_credito'),(7,'','ggg',541,'paypal'),(8,'','ggggg',220,'paypal'),(9,'','ggggggg',86,'carta_credito'),(10,'','gggggggg',44,'carta_credito');
/*!40000 ALTER TABLE `pagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preferiti`
--

DROP TABLE IF EXISTS `preferiti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preferiti` (
  `ID_PREFERITI` int NOT NULL AUTO_INCREMENT,
  `FK_UTENTE` int NOT NULL,
  `FK_PRODOTTO` int NOT NULL,
  PRIMARY KEY (`ID_PREFERITI`),
  KEY `FK_UTENTE` (`FK_UTENTE`),
  KEY `FK_PRODOTTO` (`FK_PRODOTTO`),
  CONSTRAINT `preferiti_ibfk_1` FOREIGN KEY (`FK_UTENTE`) REFERENCES `utente` (`ID_UTENTE`),
  CONSTRAINT `preferiti_ibfk_2` FOREIGN KEY (`FK_PRODOTTO`) REFERENCES `prodotto` (`ID_PRODOTTO`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preferiti`
--

LOCK TABLES `preferiti` WRITE;
/*!40000 ALTER TABLE `preferiti` DISABLE KEYS */;
INSERT INTO `preferiti` VALUES (1,1,1),(2,2,2),(3,3,3),(4,4,4),(5,5,5),(6,6,6);
/*!40000 ALTER TABLE `preferiti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prodotto`
--

DROP TABLE IF EXISTS `prodotto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prodotto` (
  `ID_PRODOTTO` int NOT NULL AUTO_INCREMENT,
  `NOME` char(100) DEFAULT NULL,
  `DESCRIZIONE` char(100) DEFAULT NULL,
  `FK_CATEGORIA` int NOT NULL,
  `PREZZO` double NOT NULL,
  PRIMARY KEY (`ID_PRODOTTO`),
  KEY `FK_CATEGORIA` (`FK_CATEGORIA`),
  CONSTRAINT `prodotto_ibfk_1` FOREIGN KEY (`FK_CATEGORIA`) REFERENCES `categoria` (`ID_CATEGORIA`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prodotto`
--

LOCK TABLES `prodotto` WRITE;
/*!40000 ALTER TABLE `prodotto` DISABLE KEYS */;
INSERT INTO `prodotto` VALUES (1,'yamaha-p45','tastiera professionale',1,409),(2,'kurweil-pc4-1','tastiera professionale',1,612),(3,'korg-pa600','tastiera professionale',1,50.99),(4,'korg-lp-380','tastiera professionale',1,693.54),(5,'casio-sa77','tastiera professionale',1,320.6),(6,'roland-v60','tastiera professionale',1,440.5);
/*!40000 ALTER TABLE `prodotto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recensione`
--

DROP TABLE IF EXISTS `recensione`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recensione` (
  `ID_RECENSIONE` int NOT NULL AUTO_INCREMENT,
  `COMMENTO` char(200) DEFAULT NULL,
  `VALUTAZIONE` char(50) DEFAULT NULL,
  `FK_UTENTE` int NOT NULL,
  `FK_PRODOTTO` int NOT NULL,
  PRIMARY KEY (`ID_RECENSIONE`),
  KEY `FK_UTENTE` (`FK_UTENTE`),
  KEY `FK_PRODOTTO` (`FK_PRODOTTO`),
  CONSTRAINT `recensione_ibfk_1` FOREIGN KEY (`FK_UTENTE`) REFERENCES `utente` (`ID_UTENTE`),
  CONSTRAINT `recensione_ibfk_2` FOREIGN KEY (`FK_PRODOTTO`) REFERENCES `prodotto` (`ID_PRODOTTO`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recensione`
--

LOCK TABLES `recensione` WRITE;
/*!40000 ALTER TABLE `recensione` DISABLE KEYS */;
INSERT INTO `recensione` VALUES (1,'bello','****',1,5),(2,'buono','***',2,4),(3,'ottimo','****',3,3),(4,'discreto','**',4,2),(5,'professionale','*****',5,1);
/*!40000 ALTER TABLE `recensione` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spedizione`
--

DROP TABLE IF EXISTS `spedizione`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `spedizione` (
  `ID_SPEDIZIONE` int NOT NULL AUTO_INCREMENT,
  `TIPOLOGIA_SPEDIZIONE` char(100) DEFAULT NULL,
  `DATA_SPEDIZIONE` datetime DEFAULT NULL,
  `FK_ORDINE` int NOT NULL,
  PRIMARY KEY (`ID_SPEDIZIONE`),
  KEY `FK_ORDINE` (`FK_ORDINE`),
  CONSTRAINT `spedizione_ibfk_1` FOREIGN KEY (`FK_ORDINE`) REFERENCES `ordine` (`ID_ORDINE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spedizione`
--

LOCK TABLES `spedizione` WRITE;
/*!40000 ALTER TABLE `spedizione` DISABLE KEYS */;
/*!40000 ALTER TABLE `spedizione` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utente`
--

DROP TABLE IF EXISTS `utente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utente` (
  `ID_UTENTE` int NOT NULL AUTO_INCREMENT,
  `INDIRIZZO` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'null',
  `EMAIL` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `PASSWORD_UTENTE` char(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `NUMERO_TELEFONO` int DEFAULT NULL,
  `DATA_NASCITA` int DEFAULT NULL,
  `NOME` char(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `COGNOME` varchar(45) COLLATE utf8mb3_bin DEFAULT NULL,
  PRIMARY KEY (`ID_UTENTE`),
  UNIQUE KEY `EMAIL` (`EMAIL`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utente`
--

LOCK TABLES `utente` WRITE;
/*!40000 ALTER TABLE `utente` DISABLE KEYS */;
INSERT INTO `utente` VALUES (1,'Via V.Gigante n5, Lecce, 73100','carmela.liuzzi20@gmail.com','pippo',NULL,NULL,NULL,NULL),(2,'Via Pluto n3, Lecce, 73100','info@gmail.com','info',NULL,NULL,NULL,NULL),(3,'Via V.Gigante n5, Lecce, 73100','barto@gmail.com','pluto',NULL,NULL,NULL,NULL),(4,'Via G.Vergine n3, Lecce, 73100','sergiodel@gmail.com','barto',NULL,NULL,NULL,NULL),(5,'Via Roma n1, Lecce, 73100','katiagiann@gmail.com','ale',NULL,NULL,NULL,NULL),(6,'Via Montegiordano n10, Montemesola, 74020','cirachirico50@gmail.com','scerra',NULL,NULL,NULL,NULL),(7,'Via Ennio n19, Lecce, 73100','rosyro@gmail.com','roro90',NULL,NULL,NULL,NULL),(8,'Via Senna n30, Lecce, 73100','maissica@gmail.com','mare',NULL,NULL,NULL,NULL),(9,'Via Mazzini n48, Lecce, 73100','rosari@gmail.com','fuori',NULL,NULL,NULL,NULL),(10,'Via Elsa n9, Lecce, 73100','caput@gmail.com','caput',NULL,NULL,NULL,NULL),(11,'null','jghgi@hkhi.it','jyiyuth',NULL,NULL,NULL,NULL),(12,'null','','ddddddd',NULL,NULL,NULL,NULL),(14,'null','pippo@pippo.it','plutopippo',NULL,NULL,NULL,NULL),(16,'null','pippo@pipipo.it','plutopippo',NULL,NULL,NULL,NULL),(17,'null','pippo@piipipo.it','plutopippo',NULL,NULL,NULL,NULL),(18,'null','huguf@gmail.com','fsfsdf',NULL,NULL,NULL,NULL),(20,'null','hugu3fff@gmail.com','fsfsdf',NULL,NULL,NULL,NULL),(21,'null','cvcxvxcv@fsdfsd.it','fsfsd',NULL,NULL,NULL,NULL),(23,'null','cvcxvxcv@fsdfdfsd.it','fsfsd',NULL,NULL,NULL,NULL),(24,'null','carm@gmail.com','carm',NULL,NULL,NULL,NULL),(25,'null','FrancescoCorvino@gmail.com','francescoinfo',NULL,NULL,NULL,NULL),(26,'null','jacopo@gmail.com','giacomo',NULL,NULL,NULL,NULL),(27,'null','devolp@pier.it','developier',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `utente` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-02 12:59:27
