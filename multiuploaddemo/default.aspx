﻿<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
    <title>SWFUpload Revision 4 Demo</title>

	<link href="default.aspx.css" rel="stylesheet" type="text/css" />
	<script type="text/javascript" src="../swfuploadr4.js"></script>
	<script type="text/javascript" src="default.aspx.handlers.js"></script>
	<script type="text/javascript">
		var upload1;
		var upload2;
		var da_onload = window.onload;
		window.onload = function() {
			if (typeof(da_onload) == "function") {
				da_onload();
			}
				upload1 = new SWFUpload({
					// Backend Settings
					upload_backend: "upload.aspx",	// Relative to the SWF file

					// File Upload Settings
					allowed_filesize : "1048576",	// 1 GB
					allowed_filetypes : "*.*",
					upload_limit : "10",

					// Event Handler Settings
					upload_ready_callback : 'upload1.flashReady',	// Note: this needs to refer to your variable name
					upload_start_callback : 'uploadStart1',
					upload_progress_callback : 'uploadProgress1',
					upload_complete_callback : 'uploadComplete1',
					upload_error_callback : 'uploadError1',
					upload_cancel_callback : 'uploadCancel1',
					upload_queue_complete_callback : 'uploadQueueComplete1',

					// Flash Settings
					flash_path : "../swfupload.swf",	// Relative to this file

					// UI Settings
					ui_target : "flashUI1",
					degraded_target : "degradedUI1",

					// Debug Settings
					debug: false
				});
	
				upload2 = new SWFUpload({
					// Backend Settings
					upload_backend : "upload.aspx",
					
					// File Upload Settings
					allowed_filesize : "100",	// 100 KB
					allowed_filetypes : "*.jpg,*.gif,*.png,*.bmp",
					upload_limit : "5",

					// Event Handler Settings
					upload_ready_callback : 'upload2.flashReady',	// Note: this refers to my other variable name
					upload_start_callback : 'uploadStart2',
					upload_progress_callback : 'uploadProgress2',
					upload_complete_callback : 'uploadComplete2',
					upload_error_callback : 'uploadError2',
					upload_cancel_callback : 'uploadCancel2',
					upload_queue_complete_callback : 'uploadQueueComplete2',

					// Flash Settings
					flash_path : "../swfupload.swf",

					// UI Settings
					ui_target : "flashUI2",
					degraded_target : "degradedUI2"
				});

	     }
	</script>

</head>
<body>
	<div class="title">SWFUpload (Revision 4) Flash Uploader Test</div>
	<form id="form1" action="Default.aspx" method="post" enctype="multipart/form-data">
		<div class="content">
			<table>
				<tr valign="top">
					<td>
						<div id="flashUI1" style="display: none;">
							<fieldset class="flash" id="fsUploadProgress1">
								<legend>Large File Upload Site</legend>
							</fieldset>
							<div>
								<input type="button" value="Upload file (Max 1 GB)" onclick="upload1.callSWF()" style="font-size: 8pt;" />
								<input id="btnCancel1" type="button" value="Cancel Uploads" onclick="upload1.cancelQueue();" disabled="disabled" style="font-size: 8pt;" /><br />
							</div>
						</div>
						<div id="degradedUI1">
							<fieldset>
								<legend>Large File Upload Site</legend>
								<input type="file" name="anyfile" /> (Any file, Max 1 GB)<br/>
							</fieldset>
							<div>
								<input type="submit" value="Submit Files" />
							</div>
						</div>
					</td>
					<td>
						<div id="flashUI2" style="display: none;">
							<fieldset class="flash" id="fsUploadProgress2">
								<legend>Small File Upload Site</legend>
							</fieldset>
							<div>
								<input type="button" value="Upload file (Max 100KB)" onclick="upload2.callSWF()" style="font-size: 8pt;" />
								<input id="btnCancel2" type="button" value="Cancel Uploads" onclick="upload2.cancelQueue();" disabled="disabled" style="font-size: 8pt;" /><br />
							</div>
						</div>
						<div id="degradedUI2">
							<fieldset>
								<legend>Small File Upload Site</legend>
								<input type="file" name="anyfile" /> (Any file, Max 100KB)<br/>
							</fieldset>
							<div>
								<input type="submit" value="Submit Files" />
							</div>
						</div>
					</td>
				</tr>
			</table>
		</div>
	</form>
</body>
</html>