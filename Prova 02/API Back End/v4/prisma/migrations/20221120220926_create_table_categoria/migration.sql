-- CreateTable
CREATE TABLE `categorias` (
    `idCategoria` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeCategoria` VARCHAR(191) NOT NULL,
    `criacao_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `alteracao_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `categorias_idCategoria_key`(`idCategoria`),
    PRIMARY KEY (`idCategoria`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
