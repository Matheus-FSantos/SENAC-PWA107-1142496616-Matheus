import './sobre.css'

function Sobre(){
    return (
        <div class='principalSobre'>
            <div class='tituloSobre'>
                <h1 class='titulo'>Sobre Nos</h1>
            </div>
            
            <br/>
            <hr/>
            <br/>

            <div>
                <p class='mensagem'>Prova 01 da máteria Programação WEB do curso TADS, SENAC - St Amaro</p>
                <br/>
            
                <p class='mensagem'>Atividade desenvolvida para avaliar os conhecimentos sobre o que foi desenvolvido ao longo dessa primeira etapa do semestre</p>
                <br/>
            
                <hr/>
                <br/>
            
                <h3 align='center' class='subtitulo'>Créditos:</h3>
                <p class='mensagem'>Alunos: <a  href="https://github.com/Matheus-FSantos" target="_blank" rel="noreferrer">Matheus Ferreira Santos</a> e <a  href="https://github.com/LucasRyuMuraoka" target="_blank" rel="noreferrer">Lucas Ryu Muraoka</a><br></br></p>
                <p class='mensagem'>Professor: <a href="https://github.com/ProfCarlosVerissimo" target="_blank" rel="noreferrer">Carlos Henrique Veríssimo Pereira</a></p>
                <div align='center'>
                    <img class='imagemLogoSobre' alt="senac-sp" height="auto" width="85" src="https://seeklogo.com/images/S/Senac-logo-7627EC15FE-seeklogo.com.png"/>
                </div>
            </div>
        </div>
    );
}

export default Sobre;