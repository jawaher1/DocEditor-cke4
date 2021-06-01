    
import com.itextpdf.html2pdf.HtmlConverter;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;


public class htmltopdf {
    private static final String ORIG = "../demo.html";
    
    public static void main(String[] args) throws IOException {
        File htmlSource = new File(ORIG);
        File pdfDest = new File( "output.pdf");
        HtmlConverter.convertToPdf(new FileInputStream(htmlSource), new FileOutputStream(pdfDest));

    }

}

