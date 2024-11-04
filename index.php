<?php
    include "conect.php";

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $nome_evento = $_POST['txtnome'];
        $descricao = $_POST['txtdescricao'];
        $data_evento = $_POST['txtdata'];

        $checarData = "SELECT * FROM eventos WHERE data_evento = '$data_evento'";
        $consulta = mysqli_query($conn,$checarData);

        if(mysqli_num_rows($consulta) > 0){
            echo "<script> alert('Já existe um evento cadastrado para esta data') </script>";
        }else{
            $sql = "INSERT INTO eventos (nome_evento,descricao_evento,data_evento) VALUES('$nome_evento','$descricao','$data_evento')";
            if(mysqli_query($conn,$sql)){
                echo "<script> alert('Evento cadastrado com sucesso') </script>";
            }else{
                echo "<script> alert('Algo deu errado ao cadastrar o evento')</script>";
            }
        }
        
    }
?> 
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Calendario</title>
</head>

<body>

    <div class="menu">
        <button class="hamburguer">
            <div id="barra1" class="barra"></div>
            <div id="barra2" class="barra"></div>
            <div id="barra3" class="barra"></div>
        </button>
        

        <nav>
            <ul>
                <li>
                    <button id="TrocarTema">Trocar Tema</button>
                </li>
                <li>
                    <button id="Mensal">Ver Mensal</button>
                </li>
                <li>
                    <button id="Semanal">Ver Semanal</button>
                </li>
            </ul>
        </nav>
    </div>
    
    <div class="navegacao">
        <button id="anterior"><i class="fa-solid fa-caret-left"></i></button>
        <span id="atual">Janeiro</span>
        <button id="proximo"><i class="fa-solid fa-caret-right"></i></button>
    </div>

    <section class="calendario">
        <div class="semana">
            <div class="div_semana">
                <p>D</p>
            </div>
            <div  class="div_semana">
                <p>S</p>
            </div>
            <div  class="div_semana">
                <p>T</p>
            </div>
            <div  class="div_semana">
                <p>Q</p>
            </div>
            <div  class="div_semana">
                <p>Q</p>
            </div>
            <div  class="div_semana">
                <p>S</p>
            </div>
            <div  class="div_semana">
                <p>S</p>
            </div>
        </div>
        <div id="dias">
            <div class="fim_semana outro_mes dia">
                <p>29</p>
            </div>
            <div class="outro_mes dia">
                <p>30</p>
            </div>
            <div class="dia">
                <p>1</p>
            </div>
            <div class="dia">
                <p>2</p>
            </div>
            <div class="dia">
                <p>3</p>
            </div>
            <div class="dia">
                <p>4</p>
            </div>
            <div class="fim_semana dia">
                <p>5</p>
            </div>
            <div class="fim_semana dia">
                <p>6</p>
            </div>
            <div class="dia">
                <p>7</p>
            </div>
            <div class="dia">
                <p>8</p>
            </div>
            <div class="dia">
                <p>9</p>
            </div>
            <div class="dia">
                <p>10</p>
            </div>
            <div class="dia">
                <p>11</p>
            </div>
            <div class="fim_semana dia">
                <p>12</p>
            </div>
            <div class="fim_semana dia">
                <p>13</p>
            </div>
            <div class="dia">
                <p>14</p>
            </div>
            <div class="dia">
                <p>15</p>
            </div>
            <div class="dia">
                <p>16</p>
            </div>
            <div class="dia">
                <p>17</p>
            </div>
            <div class="dia">
                <p>18</p>
            </div>
            <div class="fim_semana dia">
                <p>19</p>
            </div>
            <div class="fim_semana dia">
                <p>20</p>
            </div>
            <div class="dia">
                <p>21</p>
            </div>
            <div class="dia">
                <p>22</p>
            </div>
            <div class="dia">
                <p>23</p>
            </div>
            <div class="dia">
                <p>24</p>
            </div>
            <div class="dia">
                <p>25</p>
            </div>
            <div class="fim_semana dia">
                <p>26</p>
            </div>
            <div class="fim_semana dia">
                <p>27</p>
            </div>
            <div class="dia">
                <p>28</p>
            </div>
            <div class="dia">
                <p>29</p>
            </div>
            <div class="dia">
                <p>30</p>
            </div>
            <div class="dia">
                <p>31</p>
            </div>
            <div class="outro_mes dia">
                <p>1</p>
            </div>
            <div class="fim_semana outro_mes dia">
                <p>2</p>
            </div>
        </div>
    </section>
    <div id="data"></div>

    <dialog id="modal">
        <button id="fechar-modal">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <div id="titulo-dialog">
            <span id="atual-dialog">Dia 1 de novembro de 2024</span>
        </div>
        
        <form action="" method="POST">
            <div class="input-form">
                <label for="txtnome">Nome do evento:</label>
                <input type="text" name="txtnome" id="txtnome" required>
            </div>

            <div class="input-form">
                <label for="txtdescricao">Descrição:</label>
                <textarea name="txtdescricao" id="txtdescricao" type="text"></textarea>
            </div>

            <input type="hidden" name="txtdata" id="txtdata" required>
            <button type="submit" id="salvar-form">Salvar</button>
        </form>
    </dialog>
    <script src="./js/script.js"></script>

</body>

</html>