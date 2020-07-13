<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card card-default">
              <div class="card-header">Home Component</div>

              <div class="card-body">
                  I'm the Home Component component.
              </div>
              <div>
                <a href v-on:click.stop.prevent="downloadPDF">Export PDF</a>
                <a href v-on:click.stop.prevent="downloadPDF2">Export PDF2</a>
                <a href v-on:click.stop.prevent="downloadPDF3">Export PDF3</a>
                <a href="http://localhost:8000/api/pdf/download">Export PDF4</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    var FileDownload = require('js-file-download');
    var download = require('downloadjs');
    export default {
      mounted() {
          console.log('Component mounted.')
      },
      methods: {
        downloadPDF() {
          axios({
            method: "post",
            url: "http://localhost:8000/api/pdf/download",
            responseType: 'blob',
          }).then((response) => {
            console.log(response);
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));
            var fileLink = document.createElement('a');

            fileLink.href = fileURL;
            fileLink.setAttribute('download', 'file.pdf');
            document.body.appendChild(fileLink);

            fileLink.click();
          });
        },
        downloadPDF2() {
          axios({
            method: "post",
            url: "http://localhost:8000/api/pdf/download"
          }).then((response) => {
            console.log(response);
            FileDownload(response.data, 'report.pdf');
          });
        },
        downloadPDF3() {
          axios({
            method: "post",
            url: "http://localhost:8000/api/pdf/download"
          }).then((response) => {
            console.log(response);
            const content = response.headers['content-type'];
            console.log(content);
            console.log(response.headers['content-disposition']);
            download(response.data, "pdf", content)
          }).catch(error => console.log(error));
        },
      }
    }
</script>
