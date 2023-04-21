<?php
class Api extends CI_Controller
{
    public function __construct()
    {
        parent::__construct(); 
        $this->load->model('Member_model');
    }

    public function getMemberData()
    {
        $page = $this->input->get('page');

        if(is_numeric($page))$page -=1 ;
        if($page<0)$page = 0 ;
        $quantity_per_page = $this->input->get('quantity_per_page');
       
        $user_info  = $this->Member_model->data($page,$quantity_per_page);
        $this->output(200,'success',array('user_info'=>$user_info));
    }

    public function getMemberDataField()
    {
        $field = ['account'=>'帳號','name' =>'名字','gender'=> '性別','birthday'=> '生日','email'=>'電子郵件','remark'=>'註記'];
        $this->output(200, 'success', array(
            'field' => $field
        ));
    }

    protected function output($code, $msg, $data = FALSE)
    {
        if ($data === FALSE) {
            echo json_encode(array("status" => $code, "msg" => $msg));
        } else {
            $data['status'] = $code;
            $data['msg'] = $msg;
            echo json_encode($data);
        }
        exit();
    }
}
