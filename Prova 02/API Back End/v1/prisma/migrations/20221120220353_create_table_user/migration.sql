-- CreateTable
CREATE TABLE `users` (
    `idUser` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeUser` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `perfilUser` INTEGER NOT NULL,
    `criacao_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `alteracao_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `users_idUser_key`(`idUser`),
    PRIMARY KEY (`idUser`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
