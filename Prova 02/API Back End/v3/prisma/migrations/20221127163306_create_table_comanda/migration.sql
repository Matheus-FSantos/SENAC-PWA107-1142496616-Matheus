-- CreateTable
CREATE TABLE `comandas` (
    `idComanda` INTEGER NOT NULL AUTO_INCREMENT,
    `numeroMesa` INTEGER NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `rascunho` VARCHAR(191) NULL,
    `idUser` INTEGER NOT NULL,
    `criacao_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `alteracao_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `comandas_idComanda_key`(`idComanda`),
    PRIMARY KEY (`idComanda`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `comandas` ADD CONSTRAINT `comandas_idUser_fkey` FOREIGN KEY (`idUser`) REFERENCES `users`(`idUser`) ON DELETE RESTRICT ON UPDATE CASCADE;
