import { View, Text } from "react-native";
import React from "react";

const PdfHelper = ({ pdfValue }) => {
  return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>PDF Viewer</title>
        <style>
          html, body { margin: 0; padding: 0; height: 100%; background-color: #fff; }
          #canvas_container { width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; }
          canvas { max-width: 100%; height: auto; }
        </style>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.min.js"></script>
      </head>
      <body>
        <div id="canvas_container">
          <canvas id="pdf_renderer"></canvas>
        </div>
        <script>
          const base64PDF = "${pdfValue}";
          function base64ToUint8Array(base64) {
            var raw = atob(base64);
            var uint8Array = new Uint8Array(raw.length);
            for (var i = 0; i < raw.length; i++) {
              uint8Array[i] = raw.charCodeAt(i);
            }
            return uint8Array;
          }
          const pdfData = base64ToUint8Array(base64PDF);
          pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js';
          pdfjsLib.getDocument({ data: pdfData }).promise.then(pdf => {
            pdf.getPage(1).then(page => {
              var scale = 1.5;
              var viewport = page.getViewport({ scale: scale });
              var canvas = document.getElementById('pdf_renderer');
              var context = canvas.getContext('2d');
              canvas.height = viewport.height;
              canvas.width = viewport.width;
              var renderContext = { canvasContext: context, viewport: viewport };
              page.render(renderContext);
            });
          });
        </script>
      </body>
    </html>
  `;
};

export default PdfHelper;
