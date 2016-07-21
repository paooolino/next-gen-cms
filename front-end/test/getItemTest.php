<?php

  include("src/DataEngine.php");
  
  class DataEngineTest extends PHPUnit_Framework_TestCase {
    private $de;
    
    function __construct() {
      $this->de = new \NGCMS\DataEngine();
    }
    
    public function testGetItem() {
      
      $this->assertEquals(1,1);
      
    }
    
  }
  