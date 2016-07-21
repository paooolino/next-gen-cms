<?php
  
  include("config.php");
  include("src/DB.php");
  include("src/DataEngine.php");
  
  $db = new \NGCMS\DB(\NGCMS\DB_HOST, \NGCMS\DB_NAME, \NGCMS\DB_USER, \NGCMS\DB_PASS);
  $de = new \NGCMS\DataEngine($db);
  
  $base = str_replace("index.php", "", $_SERVER["SCRIPT_NAME"]);
  $request = str_replace($base, "", $_SERVER["REQUEST_URI"]);
  $request = str_replace("?" . $_SERVER["QUERY_STRING"], "", $request);
  
  $item = $de->getItemFromRequest($request);
    
  print_r($item);
  