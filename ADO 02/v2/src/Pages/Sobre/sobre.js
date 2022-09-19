import './sobre.css'

function Sobre(){
    return (
        <div>
            <div class="tituloSobre">
                <h1>Sobre Nos</h1>
            </div>
            <hr/>
            <div>
                <p>ADO 02 da máteria Programação WEB do curso Análise e desenvolvimento de Sistemas do campos SENAC - St Amaro</p>
                <p>Atividade desenvolvida para estudar sobre JSX e o uso do useState em aplicações web</p>
                <hr/>
                <h3 class="subtituloSobre">Créditos:</h3>
                <p>Alunos: <a  href="https://github.com/Matheus-FSantos" target="_blank" rel="noreferrer">Matheus Ferreira Santos</a> e <a  href="https://github.com/LucasRyuMuraoka" target="_blank" rel="noreferrer">Lucas Ryu Muraoka</a><br></br></p>
                <p>Professor: <a href="https://github.com/ProfCarlosVerissimo" target="_blank" rel="noreferrer">Carlos Henrique Veríssimo Pereira</a></p>
                <div align="center">
                    <img alt="senac-sp" height="auto" width="85" src="https://seeklogo.com/images/S/Senac-logo-7627EC15FE-seeklogo.com.png"/>
                </div>
            </div>
        </div>
    );
}

export default Sobre;