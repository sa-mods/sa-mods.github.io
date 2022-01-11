<?php

?>

<?DOCTYPE html>
<html lang="pt-br">
   <head>
      <meta charset="utf-8">
      <title>formulário php</title>
   </head>
   <body>
      <form method="POST" action="save.php">
         nome: <input type="text" name="nome" placeholder="nome" required></br></br>
         email: <input type="email" name="email" placeholder="email" required></br></br>
         password: <input type="password" name="password" placeholder="password" required></br></br>
         <input type="submit" value="salvar">
      </form>
   </body>
</html>
   