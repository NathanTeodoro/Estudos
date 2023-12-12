import fitz  # PyMuPDF
from docx import Document

def convert_pdf_to_docx(pdf_file_path, docx_file_path):
    doc = fitz.open(pdf_file_path)
    
    docx = Document()
    for page in doc:
        text = page.get_text("text")
        docx.add_paragraph(text)
        
    docx.save(docx_file_path)

if __name__ == "__main__":
    import sys
    input_file = sys.argv[1]
    output_file = sys.argv[2]

    convert_pdf_to_docx(input_file, output_file)
    print("PDF converted to DOCX successfully!")
