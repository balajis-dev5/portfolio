from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "Balaji_S_Full_Stack_Developer.pdf"
INK, TEXT, MUTED, ACCENT, RULE = (colors.HexColor(value) for value in ("#14213D", "#27364F", "#52647C", "#2563EB", "#CBD5E1"))


def para(text, style):
    return Paragraph(text, style)


def section(title, content, styles):
    return KeepTogether([
        Spacer(1, 3.5 * mm),
        para(title.upper(), styles["section"]),
        HRFlowable(width="100%", thickness=0.7, color=RULE, spaceBefore=1.3 * mm, spaceAfter=1.8 * mm),
        *content,
    ])


def main():
    doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, leftMargin=16 * mm, rightMargin=16 * mm, topMargin=13 * mm, bottomMargin=12 * mm, title="Balaji S - Full Stack Developer Resume", author="Balaji S")
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name="name", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=23, leading=26, textColor=INK, spaceAfter=1.2 * mm))
    styles.add(ParagraphStyle(name="role", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10.4, leading=13, textColor=ACCENT, spaceAfter=1.2 * mm))
    styles.add(ParagraphStyle(name="contact", parent=styles["Normal"], fontName="Helvetica", fontSize=8.6, leading=11.5, textColor=MUTED, spaceAfter=2.8 * mm))
    styles.add(ParagraphStyle(name="section", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9.5, leading=11, textColor=INK, tracking=0.6))
    styles.add(ParagraphStyle(name="body", parent=styles["Normal"], fontName="Helvetica", fontSize=8.75, leading=12, textColor=TEXT, alignment=TA_LEFT))
    styles.add(ParagraphStyle(name="small", parent=styles["Normal"], fontName="Helvetica", fontSize=8.4, leading=11.1, textColor=TEXT))
    styles.add(ParagraphStyle(name="job", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9.6, leading=12.3, textColor=INK, spaceAfter=0.3 * mm))
    styles.add(ParagraphStyle(name="sub", parent=styles["Normal"], fontName="Helvetica", fontSize=8.5, leading=11.1, textColor=MUTED, spaceAfter=1.1 * mm))
    styles.add(ParagraphStyle(name="bullet", parent=styles["Normal"], fontName="Helvetica", fontSize=8.6, leading=11.35, textColor=TEXT, leftIndent=3.8 * mm, firstLineIndent=-3.8 * mm, spaceAfter=0.9 * mm))
    bullet = lambda text: para(f"&bull; {text}", styles["bullet"])
    story = [
        para("BALAJI S", styles["name"]),
        para("Full Stack Developer | Laravel, React, TypeScript, PostgreSQL", styles["role"]),
        para("Madurai, Tamil Nadu, India | +91 88381 87342 | barath19231@gmail.com<br/>github.com/balajis-dev5 | balajis-dev.vercel.app | linkedin.com/in/balaji-s-72245b244", styles["contact"]),
        section("Professional Summary", [para("Full stack developer with 2+ years of hands-on experience on a real-estate CRM. At RSoft Technologies, I work on reporting and everyday CRM workflows used by sales and marketing teams. My work spans Laravel and SQL on the backend, and React with TypeScript on the frontend. I am most comfortable taking a feature from the business requirement through implementation, testing, and release.", styles["body"])], styles),
        section("Technical Skills", [
            para("<b>Backend:</b> PHP 8, Laravel 10-12, REST APIs, JWT authentication, Eloquent ORM, Livewire, queues, scheduler, cron jobs", styles["small"]), Spacer(1, 0.8 * mm),
            para("<b>Frontend:</b> React 19, TypeScript, JavaScript, Vite, Tailwind CSS, TanStack Query, React Hook Form, Zod, Chart.js", styles["small"]), Spacer(1, 0.8 * mm),
            para("<b>Data and tools:</b> MySQL, PostgreSQL, schema design, indexing, query optimization, EXPLAIN, Git, GitHub, Postman, Docker, Playwright, ESLint, Prettier", styles["small"]),
        ], styles),
        section("Professional Experience", [
            para("Software Developer (Full Stack) | RSoft Technologies Pvt Ltd | Jun 2024 - Present", styles["job"]), para("Enterprise CRM product for the real-estate domain", styles["sub"]),
            bullet("Develop and maintain the Advanced Reports module, including detail, summary, and matrix reports with grouping, aggregates, filters, saved views, and relative date ranges."),
            bullet("Added charts, drill-down views, and dashboard widgets so sales teams can review report data without exporting it first."),
            bullet("Built scheduled report delivery by email and WhatsApp, plus Excel, CSV, and PDF exports. Used chunked and streamed queries to keep large exports stable."),
            bullet("Improved slow reporting queries by reviewing execution plans, adding composite indexes, and reducing unnecessary relationship loading."),
            bullet("Implemented Call Block permissions across profile settings, module privileges, and leads, so call actions follow each user's access level."),
            bullet("Created Playwright end-to-end checks for login, privilege setup, and permission-based Lead actions; also contributed to Google Maps, unit inventory, and the React/Laravel CRM rebuild."),
        ], styles),
        section("Selected Projects", [
            para("<b>Advanced Report Builder</b> | Laravel 12, React 19, TypeScript, PostgreSQL", styles["small"]), para("Personal reporting-engine project. I am building a report definition to SQL workflow with live previews, charts, report sharing, scheduled delivery, and CSV, Excel, and PDF exports.", styles["small"]), Spacer(1, 1.1 * mm),
            para("<b>Modern CRM</b> | React 19, TypeScript, Laravel, JWT", styles["small"]), para("Personal CRM project with a kanban lead pipeline, customer records, follow-up queues, analytics, role-based access, and automated feature tests.", styles["small"]),
        ], styles),
        section("Education", [para("<b>MCA, Distinction</b> | Kongu Arts and Science College, Bharathiar University | 2024", styles["small"]), Spacer(1, 0.7 * mm), para("<b>B.Sc. Computer Science</b> | Vivekananda College, Madurai Kamaraj University | 2022", styles["small"])], styles),
        section("Certifications and Achievements", [para("JavaScript - Great Learning | Software Testing - NPTEL | Certificate Course - IGNOU | First Prize, National and Inter-College Technical Paper Presentations | Department Rank Holder", styles["small"])], styles),
    ]
    doc.build(story)
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    main()
