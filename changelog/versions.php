<?php
	$path = 'versions';

	header( 'Content-Type: application/json' );
	$versions = [];

	foreach( scandir( $path ) as $file ) {
		$filepath = $path . DIRECTORY_SEPARATOR . $file;
		if( is_file( $filepath ) ) {
			$fileinfo = pathinfo( $filepath );
			if( $fileinfo[ 'extension' ] ) {
				array_push( $versions, $fileinfo[ 'filename' ] );
			}
		}
	}

	echo json_encode( $versions );
?>