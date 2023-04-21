<?php
class My_Loader extends CI_Loader
{
    protected $_ci_services = array();
    protected $_ci_service_paths = array();

    public function __construct()
    {
        parent::__construct();
        load_class('Service', 'core');
        $this->_ci_service_paths = array(APPPATH);
    }

    public function service($service = '', $params = NULL, $object_name = NULL)
    {
        if (is_array($service)) {
            foreach ($service as $class) $this->service($class, $params);
            return;
        }

        if ($service == '' or isset($this->_ci_services[$service])) return false;

        if (!is_null($params) && !is_array($params)) $param = NULL;

        $sub_dir = '';

        if (($last_slash = strrpos($service, '/')) !== FALSE) {
            $subdir = substr($service, 0, $last_slash + 1);
            $subdir = substr($service, $last_slash + 1);
        }


        foreach($this->_ci_service_paths as $path){
            $filepath = $path.'service/'.$subdir.$service.'.php';
            if(!file_exists($filepath))continue ;
            include_once($filepath);
            $service = strtolower($service);

            if(empty($object_name))$object_name = $service;
            $service = ucfirst($service);
            $CI = &get_instance();
            
            if($params !==NULL )$CI->$object_name = new $service($params);
            else $CI->$object_name = new $service();
            
            $this->_ci_services[] = $object_name;
            return ;
        }
    }
}
