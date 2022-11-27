-- CreateTable
CREATE TABLE `itens` (
    `idItem` INTEGER NOT NULL AUTO_INCREMENT,
    `idComanda` INTEGER NOT NULL,
    `idProduto` INTEGER NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `criacao_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `alteracao_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `itens_idItem_key`(`idItem`),
    PRIMARY KEY (`idItem`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `itens` ADD CONSTRAINT `itens_idComanda_fkey` FOREIGN KEY (`idComanda`) REFERENCES `comandas`(`idComanda`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `itens` ADD CONSTRAINT `itens_idProduto_fkey` FOREIGN KEY (`idProduto`) REFERENCES `produtos`(`idProduto`) ON DELETE RESTRICT ON UPDATE CASCADE;
