import sys
try:
    from pypdf import PdfReader
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
    from pypdf import PdfReader

def extract_text_from_pdf(pdf_path):
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    return text

if __name__ == "__main__":
    pdf_path = r"f:\Portphlio\sudeep_resumeOffcampus.pdf"
    output_path = r"f:\Portphlio\portfolio\resume_text.txt"
    text = extract_text_from_pdf(pdf_path)
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(text)
    print("Done")
