var localidades_cc= ['Aliseda', 'Cáceres', 'Plasencia'];
var localidades_bdj=['Aceuchal', 'Badajoz', 'Zafra'];
		


$(document).ready(function(){
	
		/*$("#badajoz").on( "click", function() {
			$("#bdj").css("display", "block");
			$("#cc").css("display", "none");
		 });
		
		
		$("#caceres").on( "click", function() {
			$("#cc").css("display", "block");
			$("#bdj").css("display", "none");
		 });*/
		
	$('#reg #selectprovincia').on("change" ,function() {
		var valor = $(this).val();
		
		$('#selectlocalidad').empty();
		
		if (valor == 'cc') {
			for (var i=0;i<localidades_cc.length;i++) {
				$('#selectlocalidad').append('<option value="">'+localidades_cc[i]+'</option>');
			}			
		}
		else {
			$.each(localidades_bdj, function( i, valor ) {
				$('#selectlocalidad').append('<option value="">'+valor+'</option>');
			});
		}
	});


	$('.carta').on("click" ,function() {
			
		$(this).appendTo($(this).parent().next());
		
		
				
	});	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
});