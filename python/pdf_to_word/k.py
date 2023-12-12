from pdf2docx import Converter

def convert_pdf_to_docx(input_file, output_file):
    cv = Converter(input_file)
    cv.convert(output_file, start=0, end=None)
    cv.close()

if __name__ == "__main__":
    
    import sys
    input_file = sys.argv[1]
    output_file = str(sys.argv[2]+'.docx')

    convert_pdf_to_docx(input_file, output_file)
    print("PDF converted to DOCX successfully!")