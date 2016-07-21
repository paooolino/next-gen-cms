<?php

  namespace NGCMS;

  /**
   *  Exposes public methods to manage the database elements.   
   */  
  class DataEngine {
    
    public $db;
    
    function __construct($db) {
      $this->db = $db;
    }
    
    /**
     * Retrieve an element given lang and slug.
     *
     * @param string $lang The two-characters language code of the item.
     * @param string $slug The slug to search for.
     *
     * @return array The item.
     */  
    public function getItem($lang, $slug) {
      
    }
    
  }
  