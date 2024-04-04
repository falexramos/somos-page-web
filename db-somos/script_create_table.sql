-- MySQL Script generated by MySQL Workbench
-- Fri Jan  5 15:39:58 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema u479185799_somos_i
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `category_video`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `category_video` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `roles` (
  `rol` INT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`rol`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_somos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user_somos` (
  `user` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `date_birth` DATE NOT NULL,
  `phone` VARCHAR(45) NULL,
  `rol` INT NOT NULL,
  PRIMARY KEY (`user`),
  INDEX `fk_user_somos_roles1_idx` (`rol` ASC) VISIBLE,
  CONSTRAINT `fk_user_somos_roles1`
    FOREIGN KEY (`rol`)
    REFERENCES `roles` (`rol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `videos_youtube`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `videos_youtube` (
  `code` VARCHAR(50) NOT NULL,
  `description` VARCHAR(3000) NULL,
  `title` VARCHAR(200) NULL,
  `date_register` DATE NOT NULL,
  `category` INT NOT NULL,
  `user` INT NOT NULL,
  PRIMARY KEY (`code`),
  INDEX `fk_videos_youtube_category_video_idx` (`category` ASC) VISIBLE,
  INDEX `fk_videos_youtube_user_somos1_idx` (`user` ASC) VISIBLE,
  CONSTRAINT `fk_videos_youtube_category_video`
    FOREIGN KEY (`category`)
    REFERENCES `category_video` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_videos_youtube_user_somos1`
    FOREIGN KEY (`user`)
    REFERENCES `user_somos` (`user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
