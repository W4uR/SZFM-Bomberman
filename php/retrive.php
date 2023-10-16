<?php 
// Include the database configuration file  
require_once 'dbConfig.php'; 
 
// Get image data from database 
$result = $db->query("SELECT * FROM resource"); 
?>

<!-- Display images with BLOB data from database -->
<?php if($result->num_rows > 0){ ?> 
    
        <?php while($row = $result->fetch_assoc()){ ?> 
            <img style="display:none;" src="data:image/jpg;charset=utf8;base64,<?php echo base64_encode($row['immage']); ?>" /> 
        <?php } ?> 
    
<?php }else{ ?> 
    <p class="status error">Image(s) not found...</p> 
<?php } ?>
