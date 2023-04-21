<?php
    class My_Service extends My_Service{
        public function __construct()
        {
            log_message("debug","Service Class Iniatialized");
        }

        function __get($key)
        {
            $CI = &get_instance();
            return $CI->$key;
        }
    }

    
?>