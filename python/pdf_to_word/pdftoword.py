from pdf2docx import parse
from typing import Tuple

def convertpdf2docx(input_file : str, output_file : str, pages: Tuple = None):
    if pages:
        pages = [int(i) for i in list(pages) if i.isnumeric()]
    result = parse(pdf_file=input_file, 
                   docx_with_path=output_file, pages=pages)

    sumary = {
        "File": input_file, "Pages" :str(pages), "Output File" : output_file
    }

    print("SUMARY")
    print("\n".join("{}:{}".format(i,j) for i,j in sumary.itens()))
    return result

if __name__ == "__main__":
    import sys
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    convertpdf2docx(input_file, output_file)