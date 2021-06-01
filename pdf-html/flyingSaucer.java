package flyingsaucerpdf;

import java.io.*;
import com.lowagie.text.DocumentException;
import org.xhtmlrenderer.pdf.ITextRenderer;

public class flyingSaucer {
    
    public static void main(String[] args) 
            throws IOException, DocumentException {
        String inputFile = "../demo.html";
        String url = new File(inputFile).toURI().toURL().toString();
        String outputFile = "flying-saucer.pdf";
        OutputStream os = new FileOutputStream(outputFile);
        
        ITextRenderer renderer = new ITextRenderer();
        renderer.setDocument(url);
        renderer.layout();
        renderer.createPDF(os);
        
        os.close();
    }
}