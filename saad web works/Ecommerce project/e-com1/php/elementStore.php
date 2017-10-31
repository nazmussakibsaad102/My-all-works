<?php
header('Content-type: text/xml');
echo "<?xml version='1.0' encoding='UTF-8', standalone='yes'?>";
echo "<response>";
	$element=$_GET['element'];
	$element_array=(laptop,mobile,charger,mac,toshiba);
	if(in_array($element, $element_array))
		echo "We do have " .$element." in our stock!";
	elseif ($element=="") {
		echo "please enter a string!";
		# code...
	}
	else
		echo "sorry, we don't have ".$element." in our stock!";
echo "</response>";
  ?>