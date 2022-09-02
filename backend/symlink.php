<?php
    $target = $_SERVER['DOCUMENT_ROOT']."/../aces-backend/storage/app/public";
    $link = $_SERVER['DOCUMENT_ROOT']."/backend/storage";
    if(symlink( $target, $link )){
        echo "OK.";
    } else {
        echo $target;
		echo $link;
    }
?>