<?php

  namespace NGCMS;

  /**
   *  Exposes public methods to manage the database elements.   
   */  
  class DataEngine {
    
    const QUERY_ITEM_BY_SLUG = "SELECT * FROM items WHERE lang = ? AND slug = ?";
    const QUERY_ITEM_BY_ID = "SELECT * FROM items WHERE id = ?";
    
    public $db;
    
    function __construct($db) {
      $this->db = $db;
    }
    
    /**
     * Retrieve an element given the request.
     *
     * @param string $request The request as written in the URL after the domain (e.g. en/women)
     *
     * @return array The item.
     */  
    public function getItemFromRequest($request) {
      $request_arr = explode("/", $request);
      $lang = array_shift($request_arr);
      $slug = array_pop($request_arr);
      
      $item = $this->getItemBySlug($lang, $slug);
      
      if($item == false)
        return false;
      
      // check for the correct parent path
      $parents = $this->getParents($item["id"]);
      $parents_slugs = array_map(function($item){ return $item["slug"]; }, $parents);
      if($request_arr != $parents_slugs) {
        return false;
      }
      
      return $item;
    }
    
    
    
    private function getItemBySlug($lang, $slug) {
      $rs = $this->db->select(self::QUERY_ITEM_BY_SLUG, array($lang, $slug));
      return $rs->fetch(\PDO::FETCH_ASSOC);
    }

    private function getItemById($id) {
      $rs = $this->db->select(self::QUERY_ITEM_BY_ID, array($id));
      return $rs->fetch(\PDO::FETCH_ASSOC);
    }
    
    private function getParents($id) {
      $items = array();
      
      $item = $this->getItemById($id);
      while($item["parent_id"] > 0) {
        $item = $this->getItemById($item["parent_id"]);
        array_unshift($items, $item);
      }
      
      return $items;
    }
    
  }
  