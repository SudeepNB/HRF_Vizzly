$(function () {
    $('#primary_param_div').hide();
});
$('#plotType').on('change', function () {

       selected_type=$(this).val();
       alert($(this).val());
       options="";
       if(selected_type=="bar_plot" || selected_type=="line_plot")
       {
            options+= '   <option value="MLG">MLG</option>';
             options+= '   <option value="RPR_DT">RPR DT</option>';
               $('#x_prim_param')
          .append(options);
          $('#primary_param_div').show();

       }


    });