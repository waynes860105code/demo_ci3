<?php

class Member extends CI_Controller
{
  public function __construct()
  {
    parent::__construct();
  }


  public function index()
  {
    $this->load->view('member_list.html');
  }

  public function regist_member()
  {
    if($_POST){
     var_dump($_POST);
    }
    else{
      $this->load->view('member_list.html');
    }
    
  }
}
