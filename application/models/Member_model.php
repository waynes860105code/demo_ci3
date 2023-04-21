<?php
class Member_model extends CI_Model
{
    public $member_table = 'account_info';

    public function __construct()
    {
        parent::__construct();
    }

    public function data($offset = 0, $quantity = 10, $order = 'ASC')
    {
        $total = $this->db->select('id,account,name,gender,birthday,email,remark')
            ->from($this->member_table)
            ->where(array('is_deleted' => 0))
            ->get()
            ->num_rows();

        $data =  $this->db->select('id,account,name,gender,birthday,email,remark')
            ->from($this->member_table)
            ->where(array('is_deleted' => 0))
            ->order_by('id', 'ASC')
            ->limit($quantity, $offset*$quantity)
            ->get()
            ->result_array();

        $total_page = ($total / $quantity > 0) ? ceil($total / $quantity) : 1;
       
        return array(
            'total' => $total,
            'data'  => $data,
            'total_page' => $total_page,
        );
    }
}
