import React, { useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

// Set worker path
pdfjsLib.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;


const PDFTextExtractor = () => {
  const [pdfText, setPdfText] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const extractTextFromPDF = async (file) => {
    setLoading(true);
    setError('');
    try {
      const fileReader = new FileReader();
      
      fileReader.onload = async function() {
        try {
          const typedArray = new Uint8Array(this.result);
          const loadingTask = pdfjsLib.getDocument(typedArray);
          const pdf = await loadingTask.promise;
          let fullText = '';

          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map(item => item.str).join(' ');
            fullText += pageText + '\n';
          }

          setPdfText(fullText);
          setLoading(false);
        } catch (err) {
          console.error('PDF parsing error:', err);
          setError('Error reading PDF file: ' + err.message);
          setLoading(false);
        }
      };

      fileReader.onerror = () => {
        setError('Error reading file');
        setLoading(false);
      };

      fileReader.readAsArrayBuffer(file);
    } catch (err) {
      setError('Failed to extract text: ' + err.message);
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      extractTextFromPDF(file);
    } else {
      setError('Please upload a valid PDF file');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">PDF Text Extractor</h1>
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4 block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
      />
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <textarea
        rows="10"
        className="w-full p-2 border border-gray-300 rounded"
        value={pdfText}
        readOnly
        placeholder="Extracted text will appear here..."
      />
    </div>
  );
};

export default PDFTextExtractor;