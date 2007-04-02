﻿var upload1_target = "fsUploadProgress1";
var upload2_target = "fsUploadProgress2";

function uploadStart1(fileObj) {
	try {
		// You might include code here that prevents the form from being submitted while the upload is in
		// progress.  Then you'll want to put code in the Queue Complete handler to "unblock" the form
		var progress = new FileProgress(fileObj, upload1_target);
		progress.SetStatus("Pending...");
		progress.ToggleCancel(true, upload1);
		
		document.getElementById("btnCancel1").disabled = false;
		
	} catch (e) { /*Console.Writeln("Upload started");*/ }
		
}

function uploadProgress1(fileObj, bytesLoaded) {

	try {
		var percent = Math.ceil((bytesLoaded / fileObj.size) * 100)

		var progress = new FileProgress(fileObj, upload1_target);
		progress.SetProgress(percent);
		progress.SetStatus("Uploading...");
	} catch (e) { /*Console.Writeln("Upload Progress: " + fileObj.name + " " + percent);*/ }
}

function uploadComplete1(fileObj) {
	try {
		

		var progress = new FileProgress(fileObj, upload1_target);
		progress.SetComplete();
		progress.SetStatus("Complete.");
		progress.ToggleCancel(false);

	} catch (e) { /*Console.Writeln("Upload Complete: " + fileObj.name);*/ }
}

function uploadQueueComplete1(fileObj) {
	try {
		document.getElementById("btnCancel1").disabled = true;
	} catch (e) { /* Console.Writeln("Queue Done"); */ }
}

function uploadDialogCancel1() {
/*	try {
		Console.Writeln("Pressed Cancel");
	} catch (e) { Console.Writeln("Error displaying file cancel information"); }
*/
}

function uploadCancel1(fileObj) {
	try {
		var progress = new FileProgress(fileObj, upload1_target);
		progress.SetCancelled();
		progress.SetStatus("Cancelled");
		progress.ToggleCancel(false);

	}
	catch (e) {}
}

function uploadError1(error_code, fileObj, message) {
	try {
		var progress = new FileProgress(fileObj, upload1_target);
		progress.SetError();
		progress.ToggleCancel(false);

		switch(error_code) {
			case -10:	// HTTP error
				progress.SetStatus("Upload Error");
				//Console.Writeln("Error Code: HTTP Error, File name: " + file.name + ", Message: " + message);
				break;
			case -20:	// No backend file specified
				progress.SetStatus("Configuration Error");
				//Console.Writeln("Error Code: No backend file, File name: " + file.name + ", Message: " + message);
				break;
			case -30:	// IOError
				// You might want to put code here that uses Javascript to fall back to a regular HTML upload.
				// When the SWFUpload has an IOError it seems to take a page refresh to get it to try again.
				progress.SetStatus("Server (IO) Error");
				
				//Console.Writeln("Error Code: IO Error, File name: " + file.name + ", Message: " + message);
				break;
			case -40:	// Security error
				progress.SetStatus("Security Error");
				Console.Writeln("Error Code: Security Error, File name: " + file.name + ", Message: " + message);
				break;
			case -50:	// Filesize too big
				progress.SetStatus("File is too big.");
				//Console.Writeln("Error Code: File too big, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
				break;
			case -60:	// File upload limit reached
				progress.SetStatus("Upload limit exceeded.");
				//Console.Writeln("Error Code: File too big, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
				break;
			default:
				progress.SetStatus("Unhandled Error");
				// EEK!
				break;
		}
	} catch (e) {}

}

function uploadStart2(fileObj) {
	try {
		// You might include code here that prevents the form from being submitted while the upload is in
		// progress.  Then you'll want to put code in the Queue Complete handler to "unblock" the form
		var progress = new FileProgress(fileObj, upload2_target);
		progress.SetStatus("Pending...");
		progress.ToggleCancel(true, upload2);

		document.getElementById("btnCancel2").disabled = false;
	} catch (e) { /*Console.Writeln("Upload started");*/ }
		
}

function uploadProgress2(fileObj, bytesLoaded) {

	try {
		var percent = Math.ceil((bytesLoaded / fileObj.size) * 100)

		var progress = new FileProgress(fileObj, upload2_target);
		progress.SetProgress(percent);
		progress.SetStatus("Uploading...");
	} catch (e) { /*Console.Writeln("Upload Progress: " + fileObj.name + " " + percent);*/ }
}

function uploadComplete2(fileObj) {
	try {
		

		var progress = new FileProgress(fileObj, upload2_target);
		progress.SetComplete();
		progress.SetStatus("Complete.");
		progress.ToggleCancel(false);

	} catch (e) { /*Console.Writeln("Upload Complete: " + fileObj.name);*/ }
}

function uploadQueueComplete2(fileObj) {
	try {
		document.getElementById("btnCancel2").disabled = true;
	} catch (e) { /* Console.Writeln("Queue Done"); */ }
}

function uploadDialogCancel2() {
/*	try {
		Console.Writeln("Pressed Cancel");
	} catch (e) { Console.Writeln("Error displaying file cancel information"); }
*/
}

function uploadCancel2(fileObj) {
	try {
		var progress = new FileProgress(fileObj, upload2_target);
		progress.SetCancelled();
		progress.SetStatus("Cancelled");
		progress.ToggleCancel(false);
	}
	catch (e) {}
}

function uploadError2(error_code, fileObj, message) {

	try {
		var progress = new FileProgress(fileObj, upload2_target);
		progress.SetError();
		progress.ToggleCancel(false);

		switch(error_code) {
			case -10:	// HTTP error
				progress.SetStatus("Upload Error");
				//Console.Writeln("Error Code: HTTP Error, File name: " + file.name + ", Message: " + message);
				break;
			case -20:	// No backend file specified
				progress.SetStatus("Configuration Error");
				//Console.Writeln("Error Code: No backend file, File name: " + file.name + ", Message: " + message);
				break;
			case -30:	// IOError
				// You might want to put code here that uses Javascript to fall back to a regular HTML upload.
				// When the SWFUpload has an IOError it seems to take a page refresh to get it to try again.
				progress.SetStatus("Server (IO) Error");
				
				//Console.Writeln("Error Code: IO Error, File name: " + file.name + ", Message: " + message);
				break;
			case -40:	// Security error
				progress.SetStatus("Security Error");
				Console.Writeln("Error Code: Security Error, File name: " + file.name + ", Message: " + message);
				break;
			case -50:	// Filesize too big
				progress.SetStatus("File is too big.");
				//Console.Writeln("Error Code: File too big, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
				break;
			case -60:	// File upload limit reached
				progress.SetStatus("Upload limit exceeded.");
				//Console.Writeln("Error Code: File too big, File name: " + file.name + ", File size: " + file.size + ", Message: " + message);
				break;
			default:
				progress.SetStatus("Unhandled Error");
				// EEK!
				break;
		}
	} catch(e) { }
}


function FileProgress(fileObj, target_id) {
	this.file_progress_id = fileObj.id;
	
	this.opacity = 100;
	this.height = 0;
	
	this.fileProgressWrapper = document.getElementById(this.file_progress_id);
	if (!this.fileProgressWrapper) {
		this.fileProgressWrapper = document.createElement("div");
		this.fileProgressWrapper.className = "progressWrapper";
		this.fileProgressWrapper.id = this.file_progress_id;
		
		this.fileProgressElement = document.createElement("div");
		this.fileProgressElement.className = "progressContainer";
		
		var progressCancel = document.createElement("a");
		progressCancel.className = "progressCancel";
		progressCancel.href = "#";
		progressCancel.style.visibility = "hidden";
		progressCancel.appendChild(document.createTextNode(" "));
		
		var progressText = document.createElement("div");
		progressText.className = "progressName";
		progressText.appendChild(document.createTextNode(fileObj.name));
		
		var progressBar = document.createElement("div");
		progressBar.className = "progressBarInProgress";
		
		var progressStatus = document.createElement("div");
		progressStatus.className = "progressBarStatus";
		progressStatus.innerHTML = "&nbsp;";
		
		this.fileProgressElement.appendChild(progressCancel);
		this.fileProgressElement.appendChild(progressText);
		this.fileProgressElement.appendChild(progressStatus);
		this.fileProgressElement.appendChild(progressBar);
		
		this.fileProgressWrapper.appendChild(this.fileProgressElement);
		
		document.getElementById(target_id).appendChild(this.fileProgressWrapper);
	} else {
		this.fileProgressElement = this.fileProgressWrapper.firstChild;
	}

	this.height = this.fileProgressWrapper.offsetHeight;

}
FileProgress.prototype.SetProgress = function(percentage) {
	this.fileProgressElement.className = "progressContainer green";
	this.fileProgressElement.childNodes[3].className = "progressBarInProgress";
	this.fileProgressElement.childNodes[3].style.width = percentage + "%";
}
FileProgress.prototype.SetComplete = function() {
	this.fileProgressElement.className = "progressContainer blue";
	this.fileProgressElement.childNodes[3].className = "progressBarComplete";
	this.fileProgressElement.childNodes[3].style.width = "";

	var oSelf = this;
	setTimeout(function() { oSelf.Disappear(); }, 10000);
}
FileProgress.prototype.SetError = function() {
	this.fileProgressElement.className = "progressContainer red";
	this.fileProgressElement.childNodes[3].className = "progressBarError";
	this.fileProgressElement.childNodes[3].style.width = "";

	var oSelf = this;
	setTimeout(function() { oSelf.Disappear(); }, 5000);
}
FileProgress.prototype.SetCancelled = function() {
	this.fileProgressElement.className = "progressContainer";
	this.fileProgressElement.childNodes[3].className = "progressBarError";
	this.fileProgressElement.childNodes[3].style.width = "";

	var oSelf = this;
	setTimeout(function() { oSelf.Disappear(); }, 2000);
}
FileProgress.prototype.SetStatus = function(status) {
	this.fileProgressElement.childNodes[2].innerHTML = status;
}

FileProgress.prototype.ToggleCancel = function(show, upload_obj) {
	this.fileProgressElement.childNodes[0].style.visibility = show ? "visible" : "hidden";
	if (upload_obj) {
		var file_id = this.file_progress_id;
		this.fileProgressElement.childNodes[0].onclick = function() { upload_obj.cancelUpload(file_id); return false; };
	}
}

FileProgress.prototype.Disappear = function() {
	
	var reduce_opacity_by = 15;
	var reduce_height_by = 4;
	var rate = 30;	// 15 fps
	
	if (this.opacity > 0) {
		this.opacity -= reduce_opacity_by;
		if (this.opacity < 0) this.opacity = 0;
		
		if (this.fileProgressWrapper.filters) {
			try {
				this.fileProgressWrapper.filters.item("DXImageTransform.Microsoft.Alpha").opacity = this.opacity;
			} catch (e) { 
				// If it is not set initially, the browser will throw an error.  This will set it if it is not set yet.
				this.fileProgressWrapper.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + this.opacity + ')';
			}
		} else {
			this.fileProgressWrapper.style.opacity = this.opacity / 100;
		}
	}
	
	if (this.height > 0) {
		this.height -= reduce_height_by;
		if (this.height < 0) this.height = 0;
	
		this.fileProgressWrapper.style.height = this.height + "px";
	}
	
	if (this.height > 0 || this.opacity > 0) {
		var oSelf = this;
		setTimeout(function() { oSelf.Disappear(); }, rate);
	} else {
		this.fileProgressWrapper.style.display = "none";
	}
}