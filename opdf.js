if (document.getElementById('resourceobject').data) 
	if (confirm('PDF Found. Do you want to open it?')) 
		window.open(document.getElementById('resourceobject').data, '', 'width=620,height=450,toolbar=no,location=no,menubar=no,copyhistory=no,status=no,directories=no,scrollbars=yes,resizable=yes');