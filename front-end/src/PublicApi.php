<?php

  namespace NGCMS;
  
  class PublicAPI {
    
    private $db;
    
    function __construct($db) {
      $this->db = $db;
    }
    
    public function getItem($id) {
    }
    
    public function getChilds($parent_id) {
    }
    
    public function addItem($parent_id) {
    }
    
    public function deleteItem($id) {
    }
    
    public function updateField($id, $field_name, $field_value) {
    }
    
  }
  