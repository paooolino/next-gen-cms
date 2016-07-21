<?php

  include("config.php");
  include("src/DB.php");
  include("src/DataEngine.php");
  
  class DataEngineTest extends PHPUnit_Framework_TestCase {
    private $db;
    private $de;
    
    function __construct() {
      $this->db = new \NGCMS\DB(\NGCMS\DB_HOST, \NGCMS\DB_NAME, \NGCMS\DB_USER, \NGCMS\DB_PASS);
      $this->de = new \NGCMS\DataEngine($this->db);
    }
    
		public function setUp() {
			$this->de->db->exec(file_get_contents("test/startup_database.sql"));	
		}
    
    public function testGetItem() {
      
      $item = $this->de->getItem("it", "vestiti-donna");
      $this->assertEquals($item["id"], 1);
      
      $item = $this->de->getItem("en", "vestiti-donna");
      $this->assertFalse($item);
      
    }
    
    public function tearDown() {
      //
    }
    
  }
  