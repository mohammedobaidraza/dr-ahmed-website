export type Citation = {
  label: string; // display name, e.g. "AAOS OrthoInfo"
  url: string;
};

export type ContentSection = {
  heading: string;
  paragraphs: string[];
};

export type PostContent = {
  intro: string;
  sections: ContentSection[];
  citations: Citation[];
};

export const blogContent: Record<string, PostContent> = {
  "muscle-tendon-sparing-subvastus-total-knee-replacement": {
    intro:
      "If you're facing knee replacement, the surgical approach your surgeon uses matters as much as the implant itself. The muscle/tendon sparing subvastus approach is a technique that works below the quadriceps tendon instead of cutting through it — and that single difference changes how your knee feels in the first weeks after surgery.",
    sections: [
      {
        heading: "What makes the subvastus approach different",
        paragraphs: [
          "Traditional total knee replacement is typically performed through a medial parapatellar approach, which involves an incision through the quadriceps tendon to access the joint. The subvastus approach instead enters below (\"sub\") the vastus medialis muscle, leaving the tendon and the muscle-tendon junction undisturbed.",
          "Because the quadriceps mechanism is not cut, patients tend to retain more quad strength immediately after surgery. That's clinically meaningful: quad strength is what lets you straight-leg raise, get out of a chair, and climb stairs safely in the first days after surgery.",
        ],
      },
      {
        heading: "What this means for your recovery",
        paragraphs: [
          "In appropriately selected patients, the subvastus approach has been associated with less early postoperative pain, reduced analgesic requirements, and a shorter hospital stay compared with the standard approach.",
          "It's worth being direct about the tradeoffs: the subvastus approach requires more surgical experience to execute well, and it isn't the right fit for every knee. Patients with very limited pre-operative range of motion, significant obesity, or prior knee surgery may be better served by a different approach. Part of a good pre-surgical evaluation is determining which technique fits your anatomy — not applying one approach to every patient.",
        ],
      },
      {
        heading: "Is this approach right for you?",
        paragraphs: [
          "The best way to find out is a hands-on evaluation of your knee, your activity goals, and your imaging. If you're a candidate, this muscle-sparing technique can mean an easier first two weeks and a faster return to the activities that matter to you.",
        ],
      },
    ],
    citations: [
      { label: "AAOS OrthoInfo — Minimally Invasive Total Knee Replacement", url: "https://orthoinfo.aaos.org/en/treatment/minimally-invasive-total-knee-replacement/" },
      { label: "PMC — Subvastus approach in stiff knees, 110 cases", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4800959/" },
    ],
  },

  "partial-knee-replacement": {
    intro:
      "Not every arthritic knee needs a full replacement. When damage is limited to a single compartment, a partial (unicompartmental) knee replacement can resurface just that area — preserving the rest of your knee's natural bone, cartilage, and ligaments.",
    sections: [
      {
        heading: "Understanding your knee's three compartments",
        paragraphs: [
          "Your knee is divided into three functional compartments: medial (inside), lateral (outside), and patellofemoral (behind the kneecap). Osteoarthritis often starts in just one of these areas, especially the medial compartment. When damage is confined to a single compartment and the rest of the joint — along with your ACL and other supporting ligaments — remains healthy, a partial knee replacement becomes a reasonable option.",
        ],
      },
      {
        heading: "Why preserving healthy bone and ligaments matters",
        paragraphs: [
          "Because a partial knee replacement resurfaces only the damaged compartment, the healthy bone, cartilage, and ligaments elsewhere in the joint are left intact. Many patients describe the resulting knee as feeling more natural than a total knee replacement, since the joint continues to move the way it always has in the preserved areas.",
          "The procedure is done through a smaller incision than a total knee replacement, which typically translates to less blood loss, a shorter hospital stay, and a quicker return to normal activity.",
        ],
      },
      {
        heading: "The honest tradeoff",
        paragraphs: [
          "Partial knee replacement isn't for everyone, and it isn't necessarily permanent in the way a total knee replacement is. If arthritis later develops in one of the compartments that wasn't replaced, a conversion to total knee replacement may eventually be needed. That's a conversation worth having up front, not after the fact — and it's one reason candidacy for this procedure should be determined by imaging and a hands-on exam, not assumed.",
        ],
      },
    ],
    citations: [
      { label: "AAOS OrthoInfo — Unicompartmental (Partial) Knee Replacement", url: "https://orthoinfo.aaos.org/en/treatment/unicompartmental-knee-replacement/" },
      { label: "AAOS Ortho-pinion — Total vs. Partial Joint Replacement", url: "https://orthoinfo.aaos.org/en/treatment/ortho-pinion-total-vs-partial-joint-replacement/" },
    ],
  },

  "bikini-incision-anterior-approach-total-hip-replacement": {
    intro:
      "The direct anterior approach to total hip replacement has become popular for one core reason: it works between muscles instead of through them. The bikini incision variation takes that a step further, placing the incision along a natural skin crease for a less visible scar without changing the underlying muscle-sparing technique.",
    sections: [
      {
        heading: "Anterior vs. posterior: what actually changes",
        paragraphs: [
          "Traditional hip replacement is often performed through a posterior or lateral approach, which involves detaching and later repairing muscles around the hip. The anterior approach instead accesses the joint through a natural interval between muscles at the front of the hip, without detaching them.",
          "Because the surrounding muscles aren't cut, patients typically face fewer post-operative movement restrictions and a lower reported risk of dislocation — a meaningful advantage for patients who want to return to bending, sitting, and daily activity without the usual hip precautions.",
        ],
      },
      {
        heading: "Why \"bikini incision\" specifically",
        paragraphs: [
          "The standard anterior approach uses a vertical incision. The bikini-style variation instead places a shorter incision along the natural crease at the front of the hip, running parallel to the skin's natural tension lines rather than across them.",
          "Beyond the cosmetic benefit, incisions placed along natural tension lines tend to heal with less scar tension, which some studies have linked to better wound healing outcomes.",
        ],
      },
      {
        heading: "A note on candidacy",
        paragraphs: [
          "The bikini anterior approach isn't universally used for every hip replacement. Certain anatomy, prior surgeries, or complex deformities may make a different approach more appropriate. This is a decision made case by case, based on your imaging and hip anatomy — not a one-size-fits-all technique.",
        ],
      },
    ],
    citations: [
      { label: "AAOS OrthoInfo — Minimally Invasive Total Hip Replacement", url: "https://orthoinfo.aaos.org/en/treatment/minimally-invasive-total-hip-replacement/" },
      { label: "PMC — Bikini Incision Anterior THA, Mid-Term Review (SICOT-J, 2021)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7802519/" },
    ],
  },

  "complex-revision-joint-replacement": {
    intro:
      "Most hip and knee replacements are considered \"primary\" procedures — the first time that joint has been replaced. Complex primary and revision joint replacement is a different category of surgery entirely, reserved for challenging anatomy or previously replaced joints that now need to be rebuilt.",
    sections: [
      {
        heading: "What makes a case \"complex\"",
        paragraphs: [
          "A complex primary case might involve significant bone deformity, prior fractures, prior hardware, or unusual anatomy that a standard primary replacement technique wasn't designed for. These cases require more extensive pre-operative planning and, frequently, specialized implants beyond what's used in a routine primary replacement.",
        ],
      },
      {
        heading: "What revision surgery involves",
        paragraphs: [
          "Revision surgery replaces an implant that was placed in a prior joint replacement — because of wear, loosening, infection, instability, or a periprosthetic fracture. It is a longer and more technically demanding procedure than primary replacement: removing a well-fixed implant while preserving as much of the patient's remaining bone as possible is a meticulous process, and rebuilding bone loss around the joint often requires metal augments, bone graft, or custom implants.",
          "Because of this added complexity, revision surgery carries a higher risk profile than primary replacement, and pre-operative workup is more involved — often including advanced imaging and, when infection is suspected, joint fluid analysis before surgery is even scheduled.",
        ],
      },
      {
        heading: "Why subspecialization matters here",
        paragraphs: [
          "Complex and revision cases are exactly where a surgeon's case volume and focus make the biggest difference. A practice dedicated specifically to hip and knee reconstruction — rather than general orthopedics — sees the bone-loss patterns, prior-hardware challenges, and instability issues that come up in these cases far more often, which shapes both surgical planning and outcomes.",
        ],
      },
    ],
    citations: [
      { label: "AAOS OrthoInfo — Revision Total Knee Replacement", url: "https://orthoinfo.aaos.org/en/treatment/revision-total-knee-replacement/" },
      { label: "AAOS OrthoInfo — Revision Total Hip Replacement", url: "https://orthoinfo.aaos.org/en/treatment/revision-total-hip-replacement/" },
    ],
  },
};
