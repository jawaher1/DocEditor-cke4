/**
* html: HTML string to convert to PDF
* savePdf: Callback for saving PDF
* Returns the binary PDF data
*/
  
function pdfRocket(savePdf) {
    var self = this;
    
    self.save = savePdf;
    self.req = new XMLHttpRequest();

    var url = "https://api.html2pdfrocket.com/pdf";
    var apiKey = "712c3b1f-5fc5-4737-a460-1c2f82124f9e";
    // Additional parameters can be added here
    var html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <style>
            @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:200,200i,400,400i,600,600i,700,700i');
    
            p {
                float: left;
                font-display: block;
                ;
            }
    
            body.document-editor {
                width: 20cm;
                min-height: 28cm;
                padding: 0.4cm 0.4cm 0.4cm;
                margin: 0.1cm auto;
                border: 1px #D3D3D3 solid;
                border-radius: 5px;
                background: white;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
                margin-top: 30px;
                margin-bottom: 30px;
                font-size: 11px;
                line-height: 24px;
                font-family: "Nunito Sans", Verdana, Helvetica, sans-serif, 'Calibri';
            }
    
            body.document-editor td,
            body.document-editor th {
                font-size: 0.9em;
            }
    
            body.document-editor h1 {
                margin-bottom: 1cm;
            }
    
            body.document-editor table {
                margin-top: 0.5cm;
                margin-bottom: 0.5cm;
            }
    
            body.document-editor table td {
                border-right: 1px solid #d0d0d0;
                border-bottom: 1px solid #d0d0d0;
            }
    
            body.document-editor table td:first-of-type {
                border-left: 1px solid #d0d0d0;
            }
    
            body.document-editor table tr:first-of-type td {
                border-top: 1px solid #d0d0d0;
            }
    
            body.document-editor table thead th {
                border-top: 1px solid #d0d0d0;
                border-right: 1px solid #d0d0d0;
            }
    
            body.document-editor table thead th:first-of-type {
                border-left: 1px solid #d0d0d0;
            }
    
            body {
    
                display: flex;
                align-items: center;
                text-align: center;
    
            }
    
            .container {
                margin: 0 auto;
    
            }
    
            * {
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
            }
    
            .btgrid {
                padding: 1px;
                margin: 2px auto;
                background: #fff;
                border-radius: 0px;
                border: 0px solid #ddd;
    
            }
    
            .content {
    
                border: 0px solid #cccccc;
                padding: 0 1px;
                border-radius: 0px;
                background: #fff;
                min-height: 5em;
            }
    
            .row {
                margin-right: -15px;
                margin-left: -15px;
                padding-bottom: 5px;
            }
    
            .row:last-child {
                padding-bottom: 0;
            }
    
            .row:after,
            .row:before,
            .btgrid:before,
            .btgrid:after {
                display: table;
                content: " ";
            }
    
            .row:after {
                clear: both;
            }
    
            :after,
            :before {
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
            }
    
            .col-md-1 {
                width: 8.33333333%;
            }
    
            .col-md-2 {
                width: 16.66666667%;
            }
    
            .col-md-3 {
                width: 25%;
            }
    
            .col-md-4 {
                width: 33.33333333%;
            }
    
            .col-md-5 {
                width: 41.66666667%;
            }
    
            .col-md-6 {
                width: 50%;
            }
    
            .col-md-7 {
                width: 58.33333333%;
            }
    
            .col-md-8 {
                width: 66.66666667%;
            }
    
            .col-md-9 {
                width: 75%;
            }
    
            .col-md-10 {
                width: 83.33333333%;
            }
    
            .col-md-11 {
                width: 91.66666667%;
            }
    
            .col-md-12 {
                width: 100%;
            }
    
            .col-md-1,
            .col-md-10,
            .col-md-11,
            .col-md-12,
            .col-md-2,
            .col-md-3,
            .col-md-4,
            .col-md-5,
            .col-md-6,
            .col-md-7,
            .col-md-8,
            .col-md-9 {
    
                position: relative;
                min-height: 1px;
                padding-right: 15px;
                padding-left: 15px;
            }
        </style>
        <!--xepOnline CSS-TO-PDF-->
        <script src="js/xepOnline.jqPlugin.js"></script>
    </head>
    <title>Document Editor</title>
    </head>
    
    <body>
        <div class="container" id="container" style="height: 400px;">
    
            <div id="editor1">
    
                <table cellpadding="1" cellspacing="0" class="schedule"
                    style="border-collapse:collapse; font-size:11px; height:50px; width:70%">
                    <tbody>
                        <tr>
                            <td style="background-color:#339999"><span style="color:#ffffff"><span
                                        style="font-size:14px"><strong>&nbsp; GROUPAMA AXIOM LEGACY 21
                                            P</strong></span></span></td>
                        </tr>
                    </tbody>
                </table>
    
                <p><span style="font-size:11px">RAPPORT MENSUEL AU 28/02/2019</span></p>
    
                <p><span style="font-size:11px">Code ISIN Part P : FR0013251881</span></p>
    
                <p><span style="font-size:11px">Indicateur de r&eacute;f&eacute;rence : Euribor 3 mois +3%&nbsp;</span></p>
    
                <div class="btgrid">
                    <div class="row row-1">
                        <div class="col-md-6" style="float:left;  width: 50%;">
                            <div class="content">
                                <p><span style="font-size:12px"><span style="color:#e67e22"><strong>CHIFFRES
                                                CLES</strong></span></span></p>
    
                                <table cellpadding="1" cellspacing="0" class="schedule"
                                    style="border-collapse:collapse; width:300px">
                                    <tbody>
                                        <tr>
                                            <td colspan="3" rowspan="1"><span style="font-size:10px">Actif net toutes parts
                                                    confondues :</span></td>
                                            <td><span style="font-size:10px">198M&euro;</span></td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" rowspan="1" style="background-color:#dddddd"><span
                                                    style="font-size:10px">Volatilit&eacute; 1 an (Part I) :</span></td>
                                            <td style="background-color:#dddddd"><span style="font-size:10px">1,97%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" rowspan="1"><span style="font-size:10px">Ratio de Sharpe 1 an
                                                    (Part I) :</span></td>
                                            <td><span style="font-size:10px">-1,99</span></td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" rowspan="1" style="background-color:#dddddd"><span
                                                    style="font-size:10px">Nombre de positions :</span></td>
                                            <td style="background-color:#dddddd"><span style="font-size:10px">82</span></td>
                                        </tr>
                                    </tbody>
                                </table>
    
                                <p><span style="font-size:12px"><span style="color:#e67e22"><strong>INFORMATIONS SUR LE
                                                FONDS</strong></span></span></p>
    
                                <p><span style="font-size:11px"><span
                                            style="color:#2980b9">Caract&eacute;ristiques</span></span></p>
    
                                <table cellpadding="1" cellspacing="0" class="schedule"
                                    style="border-collapse:collapse; width:300px">
                                    <tbody>
                                        <tr>
                                            <td colspan="3" rowspan="1"><span style="font-size:10px">Actif net toutes parts
                                                    confondues :</span></td>
                                            <td><span style="font-size:10px">198M&euro;</span></td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" rowspan="1" style="background-color:#dddddd"><span
                                                    style="font-size:10px">Volatilit&eacute; 1 an (Part I) :</span></td>
                                            <td style="background-color:#dddddd"><span style="font-size:10px">1,97%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" rowspan="1"><span style="font-size:10px">Ratio de Sharpe 1 an
                                                    (Part I) :</span></td>
                                            <td><span style="font-size:10px">-1,99</span></td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" rowspan="1" style="background-color:#dddddd"><span
                                                    style="font-size:10px">Nombre de positions :</span></td>
                                            <td style="background-color:#dddddd"><span style="font-size:10px">82</span></td>
                                        </tr>
                                    </tbody>
                                </table>
    
                                <p><span style="font-size:11px"><span style="color:#2980b9">Conditions de
                                            commercialisation</span></span></p>
    
                                <table cellpadding="1" cellspacing="0" class="schedule"
                                    style="border-collapse:collapse; width:300px">
                                    <tbody>
                                        <tr>
                                            <td colspan="3" rowspan="1"><span style="font-size:10px">Actif net toutes parts
                                                    confondues :</span></td>
                                            <td><span style="font-size:10px">198M&euro;</span></td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" rowspan="1" style="background-color:#dddddd"><span
                                                    style="font-size:10px">Volatilit&eacute; 1 an (Part I) :</span></td>
                                            <td style="background-color:#dddddd"><span style="font-size:10px">1,97%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" rowspan="1"><span style="font-size:10px">Ratio de Sharpe 1 an
                                                    (Part I) :</span></td>
                                            <td><span style="font-size:10px">-1,99</span></td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" rowspan="1" style="background-color:#dddddd"><span
                                                    style="font-size:10px">Nombre de positions :</span></td>
                                            <td style="background-color:#dddddd"><span style="font-size:10px">82</span></td>
                                        </tr>
                                    </tbody>
                                </table>
    
                                <p><span style="font-size:12px"><span
                                            style="color:#e67e22"><strong>Frais</strong></span></span></p>
    
                                <table cellpadding="1" cellspacing="0" class="schedule"
                                    style="border-collapse:collapse; width:300px">
                                    <tbody>
                                        <tr>
                                            <td colspan="3" rowspan="1"><span style="font-size:10px">Actif net toutes parts
                                                    confondues :</span></td>
                                            <td><span style="font-size:10px">198M&euro;</span></td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" rowspan="1" style="background-color:#dddddd"><span
                                                    style="font-size:10px">Volatilit&eacute; 1 an (Part I) :</span></td>
                                            <td style="background-color:#dddddd"><span style="font-size:10px">1,97%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" rowspan="1"><span style="font-size:10px">Ratio de Sharpe 1 an
                                                    (Part I) :</span></td>
                                            <td><span style="font-size:10px">-1,99</span></td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" rowspan="1" style="background-color:#dddddd"><span
                                                    style="font-size:10px">Nombre de positions :</span></td>
                                            <td style="background-color:#dddddd"><span style="font-size:10px">82</span></td>
                                        </tr>
                                    </tbody>
                                </table>
    
                                <p><span style="font-size:12px"><span style="color:#e67e22"><strong>FOURCHETTE DE
                                                SENSIBILITE</strong></span></span></p>
    
                                <p><span style="font-size:10px">L&rsquo;OPCVM peut investir sur des &eacute;metteurs qui ont
                                        une notation long terme au minimum d&rsquo;&laquo; Investment Grade &raquo; et
                                        jusqu&rsquo;&agrave; 20% sur des &eacute;metteurs &agrave; haut rendement (dits
                                        &laquo; sp&eacute;culatifs &raquo;) ou &eacute;metteurs non not&eacute;s. La part
                                        des investissements en produits de taux sera comprise entre 0 et 110% de
                                        l&rsquo;actif net. Il pourra investir, jusqu&rsquo;&agrave; 20% maximum de son actif
                                        net, dans des obligations &laquo; Additional Tier1 &raquo; ou &laquo; contingent
                                        convertible bonds &raquo; (Coco Bonds). L&rsquo;OPCVM pourra investir dans des
                                        &laquo; preferred shares &raquo; ou &laquo; actions de pr&eacute;f&eacute;rence
                                        &raquo; jusqu&rsquo;&agrave; 50% de son actif net et dans des actions classiques
                                        jusqu&rsquo;&agrave; 10% de son actif&nbsp;</span></p>
                            </div>
                        </div>
    
                        <div class="col-md-6" style="float:right; width: 50%;">
                            <div class="content">
                                <p><span style="font-size:12px"><span style="color:#e67e22"><strong>EVOLUTION DE LA
                                                PERFORMANCE *</strong></span></span></p>
    
                                <p><span style="font-size:11px"><span style="color:#2980b9">Performances 5 ans (base
                                            100)</span></span></p>
    
                                <p><img alt="" height="212"
                                        src="data:image/jpeg;base64,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"
                                        width="350" /></p>
    
                                <p><span style="font-size:12px"><span style="color:#e67e22"><strong>ANALYSE DU RISQUE (sur 1
                                                an)</strong></span></span></p>
    
                                <table cellpadding="1" cellspacing="0" class="schedule"
                                    style="border-collapse:collapse; width:300px">
                                    <tbody>
                                        <tr>
                                            <td colspan="3" rowspan="1"><span style="font-size:10px">Actif net toutes parts
                                                    confondues :</span></td>
                                            <td><span style="font-size:10px">198M&euro;</span></td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" rowspan="1" style="background-color:#dddddd"><span
                                                    style="font-size:10px">Volatilit&eacute; 1 an (Part I) :</span></td>
                                            <td style="background-color:#dddddd"><span style="font-size:10px">1,97%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" rowspan="1"><span style="font-size:10px">Ratio de Sharpe 1 an
                                                    (Part I) :</span></td>
                                            <td><span style="font-size:10px">-1,99</span></td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" rowspan="1" style="background-color:#dddddd"><span
                                                    style="font-size:10px">Nombre de positions :</span></td>
                                            <td style="background-color:#dddddd"><span style="font-size:10px">82</span></td>
                                        </tr>
                                    </tbody>
                                </table>
    
                                <p>&nbsp;</p>
    
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div style="page-break-after:always"><span style="display:none">&nbsp;</span></div>
    
                <p><span style="font-size:12px"><span style="color:#e67e22"><strong>COMMENTAIRE DE
                                GESTION</strong></span></span></p>
    
                <p><strong>Commentaire de march&eacute;</strong><br />
                    <span style="font-size:10px">Le mois de janvier a marqu&eacute; le retour des investisseurs dans un
                        march&eacute; o&ugrave; la liquidit&eacute; manquait fin 2018. Les valeurs financi&egrave;res ont
                        d&eacute;marr&eacute; l&rsquo;ann&eacute;e en hausse malgr&eacute; les quelques inqui&eacute;tudes
                        &eacute;conomiques qui persistent (Brexit, entr&eacute;e en r&eacute;cession en Italie, la guerre
                        commerciale entre la Chine et les Etats-Unis). Le maintien d&rsquo;une politique accommodante par
                        les banques centrales, confirm&eacute; par le ton dovish de la BCE a rassur&eacute; les
                        investisseurs. Ainsi, le march&eacute; primaire a commenc&eacute; l&rsquo;ann&eacute;e avec un
                        volume important d&rsquo;&eacute;missions &agrave; des niveaux de prime qui se sont progressivement
                        r&eacute;sorb&eacute;es. Dans les ebondissements du Brexit, malgr&eacute; le rejet massif de
                        l&#39;Accord de Sortie propos&eacute; au vote le 15 janvier, les motions du 29 janvier ont
                        redonn&eacute; &agrave; Theresa May la l&eacute;gitimit&eacute; pour ren&eacute;gocier avec
                        Bruxelles le &laquo; backstop &raquo; irlandais avant de nouveaux votes le 14 f&eacute;vrier. Les
                        r&eacute;sultats du T4 d&eacute;j&agrave; publi&eacute;s sont mitig&eacute;s ce qui ne remet pas en
                        cause la solidit&eacute; des fondamentaux. Plusieurs avertissements ont &eacute;t&eacute;
                        communiqu&eacute;s : apr&egrave;s Natixis, la Soci&eacute;t&eacute; G&eacute;n&eacute;rale attend
                        une baisse de 20% des r&eacute;sultats de ses activit&eacute;s de march&eacute;, et Metro Bank a
                        annonc&eacute; une sous-estimation de la pond&eacute;ration de ses risques dans ses ratios en
                        capital.</span></p>
    
                <p>&nbsp;</p>
    
                <p style="text-align:center">&nbsp;</p>
    
            </div>
        </div>
    </body>
    
    </html>`
    var data = "apikey=" + apiKey + "&value=" + encodeURIComponent(html);

    self.req.onload = function(event) {
           self.save(self.req.response);
    };

    self.req.open("POST", url, true);
    self.req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    self.req.responseType = "blob";

    self.req.send(data);
    fs.writeFile('out.pdf',  JSON.stringify(data), function() {
        console.log("PDF Saved.");
        console.log("PDF Url: " + body.mediaLink)
      })
}