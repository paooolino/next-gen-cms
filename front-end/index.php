<?php
  
  include("config.php");
  include("src/DB.php");
  include("src/DataEngine.php");
  
  $db = new \NGCMS\DB(\NGCMS\DB_HOST, \NGCMS\DB_NAME, \NGCMS\DB_USER, \NGCMS\DB_PASS);
  $de = new \NGCMS\DataEngine($db);
  
  echo "<pre>";
  print_r($_SERVER);
  echo "</pre>";
  