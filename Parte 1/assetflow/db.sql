USE `Auth`

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) DEFAULT NULL,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


 INSERT INTO `users` (`username`,`password`,`firstName`,`lastName`)
 VALUES
     ('john_doe','12345', 'John', 'Doe'),
     ('jane_smith','12345', 'Jane', 'Smith'),
     ('mike_jones','12345', 'Mike', 'Jones'),
     ('david','12345', 'david', 'Jones');

