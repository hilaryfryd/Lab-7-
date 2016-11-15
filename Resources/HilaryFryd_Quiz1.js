
//create an ajax
$.ajax({
     type: "GET",
    //get XML files for labs and homeworks to populate
     url: 'resources/HilaryFryd_Quiz1.XML',
     dataType: 'XML',
     success: function(responseData, status) {
     	console.log("Success AJAX");

        var ldec='';
        var labname='';
        var homework='';
        var hwname='';
       
		var doc = $(responseData);
		
		//loop through resources to get files
     	$.each(doc.find("lab"), function(i, item) {
			ele = $(item);
			labname += '<li>' + ele.find("name").text() + '</li>';
			ldec += "<li><a href='" + ele.find("source").text() + "'>"
				+ ele.find("description").text() + "</a></li>";
		});
        $('#ldec').html(ldec);
        $('#labname').html(labname);

        $.each(doc.find("homework"), function(i, item) {
            ele = $(item);
            homework += '<li>' + ele.find("name").text() + '</li>';
            hwname += "<li><a href='" + ele.find("source").text() + "'>"
                + ele.find("description").text() + "</a></li>";
        });
        $('#homework').html(homework);
        $('#hwname').html(hwname);

//show an error message if does not work
     }, error: function(msg) {
       alert("There was an issue: " + msg.status + " " + msg.statusText);
     },
   });
;
