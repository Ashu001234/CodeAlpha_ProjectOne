import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./Resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const pdfUrl = "./src/assets/Ashishs CV.pdf";

  return (
    <>
    <div className="pdf-container">
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
      
    </div>
    
   
     </>
  );
};

export default Resume;
