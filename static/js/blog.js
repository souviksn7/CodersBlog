
document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
    console.log("This is blog.js")

    let sc = document.createElement("script")
    sc.setAttribute('src', "https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js");

    document.head.appendChild(sc);
    sc.onload = ()=>{
      // tinymce.init({
      //   selector: '#id_content'
      // });
      
      var useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

      tinymce.init({
        selector: '#id_content',
        paste_data_images: true,
        
        menubar: 'file edit view insert format tools table tc help',
        toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
       
        /*
        The following settings require more configuration than shown here.
        For information on configuring the mentions plugin, see:
        https://www.tiny.cloud/docs/plugins/premium/mentions/.
        */
        
      });


 
    }
    
});