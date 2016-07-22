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
    
    public function testGetItemFromRequest() {
      $item = $this->de->getItemFromRequest("it/donna");
      $this->assertEquals($item["id"], 1, "a level-1 item");
      
      $item = $this->de->getItemFromRequest("en/donna");
      $this->assertFalse($item, "an unexistent item");
      
      $item = $this->de->getItemFromrequest("it/donna/abbigliamento-sportivo");
      $this->assertEquals($item["id"], 19, "a level-2 item");
      
      $item = $this->de->getItemFromrequest("it/abbigliamento-sportivo");
      $this->assertFalse($item, "a level-2 item slug called at level 1");
      
      $item = $this->de->getItemFromrequest("it/intimo/abbigliamento-sportivo");
      $this->assertFalse($item, "a level-2 item slug called on a wrong parent");
      
      $item = $this->de->getItemFromrequest("it/donna/abbigliamento-sportivo/pinocchietto");
      $this->assertEquals($item["id"], 20, "a level-3 item");
      
      $item = $this->de->getItemFromrequest("it/abbigliamento-sportivo/donna/pinocchietto");
      $this->assertFalse($item, "a wrong level-3 item");
    }
    
    public function testGetTemplateForItem() {
      $template = $this->de->getTemplateForItem();
      
      $this->assertEquals(1,2);
    }
    
    public function tearDown() {
      //
    }
  }
  