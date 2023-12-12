import tkinter as tk
from tkinter import filedialog
import fitz  # PyMuPDF
from docx import Document

class PDFToDocxConverter:
    def __init__(self, root):
        self.root = root
        self.root.title("PDF to DOCX Converter")
        
        self.select_pdf_button = tk.Button(root, text="Select PDF", command=self.select_pdf)
        self.select_pdf_button.pack()
        
        self.convert_button = tk.Button(root, text="Convert", command=self.convert_pdf_to_docx)
        self.convert_button.pack()
        
    def select_pdf(self):
        self.pdf_file_path = filedialog.askopenfilename(filetypes=[("PDF files", "*.pdf")])
        
    def convert_pdf_to_docx(self):
        if hasattr(self, 'pdf_file_path'):
            doc = fitz.open(self.pdf_file_path)
            docx_file_path = self.pdf_file_path[:-4] + ".docx"
            
            docx = Document()
            for page in doc:
                text = page.get_text("text")
                docx.add_paragraph(text)
                
            docx.save(docx_file_path)
            
            tk.messagebox.showinfo("Success", "PDF converted to DOCX successfully!")
        else:
            tk.messagebox.showerror("Error", "Please select a PDF file.")

if __name__ == "__main__":
    root = tk.Tk()
    app = PDFToDocxConverter(root)
    root.mainloop()