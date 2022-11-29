-- CreateTable
CREATE TABLE `produtos` (
    `idProduto` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeProduto` VARCHAR(191) NOT NULL,
    `precoProduto` DECIMAL(65, 30) NOT NULL,
    `descricaoProduto` VARCHAR(191) NULL,
    `idCategoria` INTEGER NOT NULL,
    `criacao_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `alteracao_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `produtos_idProduto_key`(`idProduto`),
    PRIMARY KEY (`idProduto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `produtos` ADD CONSTRAINT `produtos_idCategoria_fkey` FOREIGN KEY (`idCategoria`) REFERENCES `categorias`(`idCategoria`) ON DELETE RESTRICT ON UPDATE CASCADE;
