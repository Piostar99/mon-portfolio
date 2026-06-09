import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY

def generate_pdf():
    pdf_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "cv.pdf")
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=40,
        bottomMargin=40
    )
    
    styles = getSampleStyleSheet()
    
    # Custom colors
    c_primary = colors.HexColor("#0F1117")   # Dark background style for text
    c_accent = colors.HexColor("#1E8C8C")    # Deep Teal for PDF text
    c_accent_light = colors.HexColor("#3ECFCF") # Bright Teal
    c_grey = colors.HexColor("#4B5563")      # Slate grey
    c_light_bg = colors.HexColor("#F3F4F6")  # Light gray for table background
    
    # Custom styles
    style_name = ParagraphStyle(
        'CV_Name',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=c_primary,
        alignment=TA_LEFT
    )
    
    style_title = ParagraphStyle(
        'CV_Title',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=15,
        textColor=c_accent,
        alignment=TA_LEFT
    )
    
    style_contact = ParagraphStyle(
        'CV_Contact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=c_grey,
        alignment=TA_RIGHT
    )
    
    style_section_h = ParagraphStyle(
        'CV_Section_H',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=14,
        textColor=c_accent,
        spaceBefore=10,
        spaceAfter=4,
        keepWithNext=True
    )
    
    style_body = ParagraphStyle(
        'CV_Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=c_primary,
        alignment=TA_LEFT
    )
    
    style_body_bold = ParagraphStyle(
        'CV_Body_Bold',
        parent=style_body,
        fontName='Helvetica-Bold'
    )
    
    style_bullet = ParagraphStyle(
        'CV_Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=c_primary,
        leftIndent=15,
        firstLineIndent=-10,
        spaceAfter=2
    )

    story = []
    
    # Header block (Name & Contact details using a Table)
    header_data = [
        [
            Paragraph("<b>PIO FRANCOIS ACAKPOVI</b>", style_name),
            Paragraph("Abomey-Calavi Cotonou, Bénin<br/>pioacakpovi@gmail.com | +229 0197575034<br/>linkedin.com/in/pio-acakpovi", style_contact)
        ],
        [
            Paragraph("<b>Développeur Full Stack | DevSecOps | Architecte SOAR & IA (RAG)</b>", style_title),
            Paragraph("", style_contact)
        ]
    ]
    
    header_table = Table(header_data, colWidths=[330, 200])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 10))
    story.append(HRFlowable(width="100%", thickness=1.5, color=c_accent, spaceAfter=8, spaceBefore=4))
    
    # 1. Objectif Professionnel
    story.append(Paragraph("OBJECTIF PROFESSIONNEL", style_section_h))
    obj_text = (
        "Tech Lead spécialisé en cybersécurité et développement sécurisé. Objectif : piloter des équipes "
        "techniques dans la conception d'architectures backend Django résilientes, intégrant SecOps, "
        "l'automatisation SOAR et des architectures d'IA générative (RAG). Promouvoir une approche "
        "<b>Security by Design</b> systématique pour réduire les risques dès la conception."
    )
    story.append(Paragraph(obj_text, style_body))
    story.append(Spacer(1, 6))
    
    # 2. Compétences (2-column layout using table)
    story.append(Paragraph("COMPÉTENCES TECHNIQUES", style_section_h))
    
    comp_left = (
        "<b>Développement :</b> Python (Django & DRF), JavaScript/TypeScript, React.js, Node.js, Next.js, SQL/PostgreSQL, SQLite, Celery, Redis<br/>"
        "<b>DevSecOps & Cloud :</b> Docker, Kubernetes, AWS, CI/CD (GitHub Actions), gestion des secrets, SonarQube (SAST), OWASP ZAP (DAST)<br/>"
        "<b>Méthodologies :</b> TDD (Test-Driven Development), Agile/Scrum, Veille CVE/CERT, Mentorat tech"
    )
    comp_right = (
        "<b>Sécurité & SecOps :</b> OWASP Top 10, SIEM/SOC, Wazuh, TheHive, OpenVAS, Active Directory, Kali Linux, Wireshark, Metasploit, Nmap<br/>"
        "<b>Ingénierie de l'IA :</b> Architectures RAG, Intégration LLMs (OpenAI, Groq, Llama), Ollama, HuggingFace, NLP extraction<br/>"
        "<b>Langues :</b> Français (Langue maternelle), Anglais (Intermédiaire), Fon (Courant)"
    )
    
    comp_data = [
        [Paragraph(comp_left, style_body), Paragraph(comp_right, style_body)]
    ]
    comp_table = Table(comp_data, colWidths=[260, 260])
    comp_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BACKGROUND', (0,0), (-1,-1), c_light_bg),
        ('PADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(comp_table)
    story.append(Spacer(1, 8))
    
    # 3. Expériences Professionnelles
    story.append(Paragraph("EXPÉRIENCES PROFESSIONNELLES", style_section_h))
    
    # Job 1
    job1_header = [
        [Paragraph("<b>Développeur & Analyste Sécurité Junior</b> — MEWAN LOGIA", style_body_bold), Paragraph("Cotonou, Bénin | Avril 2024 – Présent", style_contact)]
    ]
    job1_table = Table(job1_header, colWidths=[360, 170])
    job1_table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(job1_table)
    story.append(Spacer(1, 2))
    story.append(Paragraph("&bull; <b>Supervision & DevSecOps :</b> Management d'équipe, automatisation des tests SAST (SonarQube) et DAST (OWASP ZAP) dans les pipelines CI/CD.", style_bullet))
    story.append(Paragraph("&bull; <b>Surveillance SOC :</b> Analyse SIEM, investigation d'incidents et remédiation orchestrée via Wazuh, OpenVAS et TheHive.", style_bullet))
    story.append(Paragraph("&bull; <b>Développement Sécurisé :</b> Conception d'applications React/Django/PostgreSQL robustes avec implémentation des contrôles OWASP.", style_bullet))
    story.append(Paragraph("&bull; <b>Audits :</b> Tests d'intrusion boîte noire/grise/blanche et rédaction de rapports de vulnérabilités (scores CVSS).", style_bullet))
    story.append(Spacer(1, 4))
    
    # Job 2
    job2_header = [
        [Paragraph("<b>Stagiaire Professionnel en Sécurité Informatique</b> — PADME", style_body_bold), Paragraph("Cotonou, Bénin | Juin 2023 – Sept. 2023", style_contact)]
    ]
    job2_table = Table(job2_header, colWidths=[360, 170])
    job2_table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(job2_table)
    story.append(Spacer(1, 2))
    story.append(Paragraph("&bull; <b>Gouvernance Cyber :</b> Participation active à la révision de la PSSI et élaboration de plans de contrôle et plans de continuité (PCA/PRA).", style_bullet))
    story.append(Paragraph("&bull; <b>Gestion de Parc :</b> Déploiement de solutions libres d'inventaire informatique (ITAM) et d'assistance technique.", style_bullet))
    story.append(Paragraph("&bull; <b>Sensibilisation :</b> Collaboration à la mise en place d'une plateforme d'apprentissage numérique sur l'hygiène informatique.", style_bullet))
    story.append(Spacer(1, 4))
    
    # Job 3
    job3_header = [
        [Paragraph("<b>Développeur Full Stack</b> — JCIT", style_body_bold), Paragraph("Cotonou, Bénin | Août 2021 – Mai 2023", style_contact)]
    ]
    job3_table = Table(job3_header, colWidths=[360, 170])
    job3_table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(job3_table)
    story.append(Spacer(1, 2))
    story.append(Paragraph("&bull; <b>SaaS RH & Sécurité :</b> Développement d'une plateforme RH sous React/Django REST/PostgreSQL avec chiffrement AES-256 et JWT/2FA.", style_bullet))
    story.append(Paragraph("&bull; <b>Fintech :</b> Intégration conforme PCI-DSS de passerelles de paiement (Stripe, MTN MoMo, CinetPay).", style_bullet))
    story.append(Paragraph("&bull; <b>Déploiement :</b> Gestion et monitoring d'applications sur serveurs AWS EC2 avec pipelines GitHub Actions.", style_bullet))
    story.append(Spacer(1, 4))
    
    # Job 4
    job4_header = [
        [Paragraph("<b>Stagiaire en Développement d'Applications</b> — MAOUCO GROUP", style_body_bold), Paragraph("Cotonou, Bénin | Juin 2020 – Mai 2021", style_contact)]
    ]
    job4_table = Table(job4_header, colWidths=[360, 170])
    job4_table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(job4_table)
    story.append(Spacer(1, 2))
    story.append(Paragraph("&bull; <b>Cycle en V :</b> Analyse fonctionnelle, rédaction des spécifications, développement de modules complexes et tests unitaires.", style_bullet))
    story.append(Paragraph("&bull; <b>Interface :</b> Conception d'écrans responsives centrés UX et optimisation des requêtes de base de données.", style_bullet))
    story.append(Spacer(1, 6))
    
    # 4. Projets Notables
    story.append(Paragraph("PROJETS CYBER & IA NOTABLES", style_section_h))
    
    p1 = "<b>GRC, Cybersécurité & ITAM (NDA, 2023) :</b> Tech Lead. Plateforme de gestion des actifs et d'automatisation SOAR reliant Wazuh, TheHive, OpenVAS. Assistant RAG d'aide à la remédiation basé sur un LLM local via Ollama. Stack: Django, Debian, Celery, Redis."
    p2 = "<b>Moteur RBAC de Contrôle d'Habilitations (NDA, 2025) :</b> Solution d'audit de droits d'accès pour contrer la dérive des privilèges. Modélisation et tableau de bord de criticité. Stack: Python, Django, PostgreSQL."
    p3 = "<b>SaaS Simulation d'Entretiens IA (Projet Personnel, 2025) :</b> Plateforme de simulation avec matching CV-Offre en temps réel. Extraction de documents par NLP (PyPDF/DOCX2txt) et agent conversationnel sous Groq API/OpenAI. Stack: Next.js, Django, Celery, Redis."
    
    story.append(Paragraph("&bull; " + p1, style_bullet))
    story.append(Paragraph("&bull; " + p2, style_bullet))
    story.append(Paragraph("&bull; " + p3, style_bullet))
    story.append(Spacer(1, 6))
    
    # 5. Formations
    story.append(Paragraph("FORMATIONS & PARCOURS", style_section_h))
    edu_header = [
        [Paragraph("<b>Licence en Informatique</b> — Spécialisation Systèmes, Réseaux et Sécurité", style_body_bold), Paragraph("2017 – 2020", style_contact)]
    ]
    edu_table = Table(edu_header, colWidths=[380, 150])
    edu_table.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('PADDING', (0,0), (-1,-1), 0)]))
    story.append(edu_table)
    story.append(Paragraph("Université Polytechnique Internationale du Bénin (UPIB) — <i>Mention Très Bien</i>", style_body))
    
    doc.build(story)
    print(f"CV PDF generated successfully at {pdf_path}")

if __name__ == "__main__":
    generate_pdf()
