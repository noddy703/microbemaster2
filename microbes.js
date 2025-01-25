let allBacteriaData = [
    // 1) ACINETOBACTER BAUMANNII
    {
        category: "bacterium",
        name: "Acinetobacter baumannii",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 40,
        capsule: true,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Hospital environment, ventilators, catheters",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Biofilm formation", diagramType: "biofilmNet"
            },
            {
                factorName: "Oxidative stress enzymes", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Opaque, whitish",
                hemolysis: "none",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic",
        differentiationTests: "Oxidase-negative, Catalase-positive; often multi-drug resistant",
        affectedCellTypes: "Epithelial cells",
        associatedDiseases: "Pneumonia, wound infections, sepsis",
        // New fields:
        specialTests: {
            catalase: "test-pos",
            citrate: "test-pos", // often positive
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Lower)", // pneumonia
            "Integumentary", // wound infections
            "Hematologic/Systemic" // sepsis
        ]
    },
    // 2) ACINETOBACTER LWOFFII
    {
        category: "bacterium",
        name: "Acinetobacter lwoffii",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Hospital setting, soil, water",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Biofilm potential", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Smooth, grayish",
                hemolysis: "none",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: null,
        airRequirements: null,
        differentiationTests: "Catalase-positive; often Oxidase-negative",
        affectedCellTypes: null,
        associatedDiseases: "Occasional nosocomial infections",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-pos",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-var", // mostly negative, can vary
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Hematologic/Systemic" // can cause opportunistic infections / nosocomial
        ]
    },
    // 3) ACTINOMYCES ISRAELII
    {
        category: "bacterium",
        name: "Actinomyces israelii",
        morphology: "bacillus",
        arrangement: "filamentous",
        shapeDetail: "branchingFilament",
        gramStain: "positive",
        cellWidth: 30,
        cellHeight: 90,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Normal oral flora, disruption of mucosal barrier",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Sulfur granule formation", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Molar tooth colonies",
                hemolysis: "none",
                environment: "Anaerobic or microaerophilic"
            }
        ],
        hemolysisPattern: null,
        airRequirements: "Anaerobic or microaerophilic",
        differentiationTests: "Gram-positive branching rods; forms characteristic 'sulfur granules'",
        affectedCellTypes: "Oral/facial tissue, cervicofacial abscesses",
        associatedDiseases: "Cervicofacial actinomycosis",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-var",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Integumentary", // can form jaw/skin abscesses
            "Oral cavity" // cervicofacial region
        ]
    },
    // 4) AEROMONAS CAVIAE
    {
        category: "bacterium",
        name: "Aeromonas caviae",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "polar", number: 1
        },
        pili: true,
        spores: false,
        exposure: "Contaminated water, wound contact with water",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Enterotoxins", diagramType: "exotoxinStar"
            },
            {
                factorName: "Cytotoxins", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Grayish",
                hemolysis: "beta",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "Beta",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Oxidase-positive, Catalase-positive, grows in water environments",
        affectedCellTypes: "Skin, gastrointestinal tract",
        associatedDiseases: "Wound infections, diarrhea",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-var",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-var",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-var",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Integumentary", // wound infections
            "Gastrointestinal"
        ]
    },
    // 5) AEROMONAS HYDROPHILA
    {
        category: "bacterium",
        name: "Aeromonas hydrophila",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "polar", number: 1
        },
        pili: true,
        spores: false,
        exposure: "Freshwater or brackish water, ingestion or wounds",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Aerolysin toxin", diagramType: "exotoxinStar"
            },
            {
                factorName: "Enterotoxins", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Grayish",
                hemolysis: "beta",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "Beta",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Oxidase-positive, Motile, Grows well in aquatic environments",
        affectedCellTypes: "Skin, gastrointestinal tract",
        associatedDiseases: "Wound infections, gastroenteritis",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-var",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-var",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-var",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Integumentary",
            "Gastrointestinal"
        ]
    },
    // 6) AEROMONAS VERONII
    {
        category: "bacterium",
        name: "Aeromonas veronii",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "polar", number: 1
        },
        pili: true,
        spores: false,
        exposure: "Water environments, fish contact",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Hemolysins", diagramType: "exotoxinStar"
            },
            {
                factorName: "Biofilm formation", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Grayish",
                hemolysis: "beta",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: null,
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Oxidase-positive; can cause diarrhea & wound infections in water exposure",
        affectedCellTypes: null,
        associatedDiseases: null,

        specialTests: {
            catalase: "test-pos",
            citrate: "test-var",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-var",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-var",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            // Because "can cause diarrhea" => GI, 
            // and "wound infections in water exposure" => Integumentary
            "Integumentary",
            "Gastrointestinal"
        ]
    },
    // 7) BACILLUS ANTHRACIS
    {
        category: "bacterium",
        name: "Bacillus anthracis",
        morphology: "bacillus",
        arrangement: "strepto",
        shapeDetail: "bacillusChain",
        gramStain: "positive",
        cellWidth: 30,
        cellHeight: 90,
        capsule: true,
        flagella: {
            presence: false
        },
        pili: false,
        spores: true,
        exposure: "Contact with infected animals or spores (wool, hides, etc.)",
        vaccine: "Yes, anthrax toxoid (for high-risk groups)",
        virulenceFactors: [
            {
                factorName: "Anthrax toxin", diagramType: "anthraxToxin"
            },
            {
                factorName: "Poly-D-glutamate capsule", diagramType: "capsulePolysaccharide"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Large, gray, 'medusa head'",
                hemolysis: "none or weak",
                environment: "Aerobic or facultative"
            }
        ],
        hemolysisPattern: "None or weak",
        airRequirements: "Aerobic or facultative anaerobe",
        differentiationTests: "Non-motile, Catalase-positive, 'Medusa head' colonies, String-of-pearls test",
        affectedCellTypes: "Macrophages, epithelial cells",
        associatedDiseases: "Cutaneous anthrax, inhalational anthrax",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-var",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-pos", // Bacillus anthracis is often lecithinase+
            lactose: "test-neg",
            sucrose: "test-pos",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Integumentary", // cutaneous anthrax
            "Respiratory (Lower)", // inhalational anthrax
            "Hematologic/Systemic" // potential septicemia
        ]
    },
    // 8) BACILLUS CEREUS
    {
        category: "bacterium",
        name: "Bacillus cereus",
        morphology: "bacillus",
        arrangement: "strepto",
        shapeDetail: "bacillusChain",
        gramStain: "positive",
        cellWidth: 30,
        cellHeight: 70,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 4
        },
        pili: false,
        spores: true,
        exposure: "Reheated rice or starchy foods, soil contamination",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Cereulide toxin", diagramType: "exotoxinStar"
            },
            {
                factorName: "Hemolysins", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Large, frosty",
                hemolysis: "beta",
                environment: "Aerobic or facultative"
            }
        ],
        hemolysisPattern: "Beta",
        airRequirements: "Aerobic or facultative anaerobe",
        differentiationTests: "Motile, Lecithinase-positive (egg yolk agar), Catalase-positive",
        affectedCellTypes: "Intestinal mucosa",
        associatedDiseases: "Food poisoning (rice dishes), eye infections",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-pos",
            lactose: "test-neg",
            sucrose: "test-pos",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal", // food poisoning
            "Eyes" // eye infections
        ]
    },
    // 9) BACTEROIDES FRAGILIS
    {
        category: "bacterium",
        name: "Bacteroides fragilis",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: true,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Normal gut flora, translocation from bowel perforation",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Polysaccharide capsule", diagramType: "capsulePolysaccharide"
            },
            {
                factorName: "Beta-lactamases", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar (anaerobic)",
                colonyColor: "Grayish",
                hemolysis: "none",
                environment: "Strict anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Strict anaerobe",
        differentiationTests: "Bile-resistant, Catalase-positive; grows on BBE agar (black colonies)",
        affectedCellTypes: "Intestinal epithelium",
        associatedDiseases: "Intra-abdominal abscesses, bacteremia",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-var",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal", // from bowel flora
            "Peritoneal Cavity", // intra-abdominal abscess
            "Hematologic/Systemic" // can cause bacteremia
        ]
    },
    // 10) BARTONELLA HENSELAE
    {
        category: "bacterium",
        name: "Bartonella henselae",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Cat scratches or bites",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Invasion of endothelial cells", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Chocolate agar",
                colonyColor: "Small, slow-growing",
                hemolysis: "none",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic",
        differentiationTests: "Serology (IgM, IgG), Warthin-Starry silver stain on tissue, PCR",
        affectedCellTypes: "Endothelial cells",
        associatedDiseases: "Cat-scratch disease, bacillary angiomatosis",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Lymphatic", // cat-scratch disease typically → lymphadenopathy
            "Integumentary", // local papule at scratch site
            "Hematologic/Systemic" // bacillary angiomatosis in immunocompromised
        ]
    },
    // 11) BARTONELLA QUINTANA
    {
        category: "bacterium",
        name: "Bartonella quintana",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Body louse (poor hygiene conditions)",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Invasion of endothelial cells", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Chocolate agar",
                colonyColor: "Slow-growing",
                hemolysis: "none",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: null,
        airRequirements: "Aerobic",
        differentiationTests: "Serology, PCR; known for 'Trench fever'",
        affectedCellTypes: "Endothelial cells",
        associatedDiseases: "Trench fever, bacillary angiomatosis in immunocompromised",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Hematologic/Systemic", // 'Trench fever' often systemic
            "Lymphatic" // can cause bacillary angiomatosis
        ]
    },
    // 12) BIFIDOBACTERIUM BIFIDUM
    {
        category: "bacterium",
        name: "Bifidobacterium bifidum",
        morphology: "bacillus",
        arrangement: "branching",
        shapeDetail: "branchingFilament",
        gramStain: "positive",
        cellWidth: 25,
        cellHeight: 70,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Normal gut flora, probiotic supplements",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Competitive gut colonization", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Anaerobic media",
                colonyColor: "Various shapes",
                hemolysis: "none",
                environment: "Anaerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Anaerobic",
        differentiationTests: "Gram-positive branching rods, Catalase-negative, typical probiotic flora",
        affectedCellTypes: "Gut epithelium",
        associatedDiseases: "Protective role in gut; rarely pathogenic",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-var",
            sucrose: "test-var",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal" // normal beneficial flora
        ]
    },
    // 13) BORDETELLA BRONCHISEPTICA
    {
        category: "bacterium",
        name: "Bordetella bronchiseptica",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 4
        },
        pili: true,
        spores: false,
        exposure: "Animals (kennel cough in dogs), immunocompromised humans",
        vaccine: "None (human); for dogs there's a kennel cough vaccine",
        virulenceFactors: [
            {
                factorName: "Adhesins", diagramType: "pili"
            },
            {
                factorName: "Pertussis-like toxins", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Small, white",
                hemolysis: "none",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic",
        differentiationTests: "Oxidase-positive, Motile; rarely infects humans (mostly animals)",
        affectedCellTypes: "Respiratory epithelium",
        associatedDiseases: "Tracheobronchitis, pneumonia in immunocompromised",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-pos",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-var"
        },
        systemsAffected: [
            "Respiratory (Lower)"
        ]
    },
    // 14) BORDETELLA PERTUSSIS
    {
        category: "bacterium",
        name: "Bordetella pertussis",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: true,
        spores: false,
        exposure: "Respiratory droplets from infected persons",
        vaccine: "Yes, acellular pertussis (DTaP/Tdap)",
        virulenceFactors: [
            {
                factorName: "Pertussis toxin", diagramType: "exotoxinStar"
            },
            {
                factorName: "Fimbriae", diagramType: "pili"
            }
        ],
        growthMedia: [
            {
                mediumName: "Bordet-Gengou (potato) agar",
                colonyColor: "Small, pearl-like",
                hemolysis: "none",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic",
        differentiationTests: "PCR for pertussis toxin gene, Agglutination tests, also Regan-Lowe medium",
        affectedCellTypes: "Ciliated respiratory epithelial cells",
        associatedDiseases: "Whooping cough (pertussis)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-var",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Upper)", // classic whooping cough
            "Respiratory (Lower)" // can progress deeper
        ]
    },
    // 15) BORRELIA BURGDORFERI
    {
        category: "bacterium",
        name: "Borrelia burgdorferi",
        morphology: "spirochete",
        arrangement: "single",
        shapeDetail: "spirocheteWaves",
        gramStain: "negative",
        cellWidth: 20,
        cellHeight: 100,
        capsule: false,
        flagella: {
            presence: true, type: "endoflagella", number: 7
        },
        pili: false,
        spores: false,
        exposure: "Ixodes tick bite in wooded areas",
        vaccine: "None (human) - old LYMErix withdrawn",
        virulenceFactors: [
            {
                factorName: "Antigenic variation", diagramType: "exotoxinStar"
            },
            {
                factorName: "Decorin binding proteins", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "Barbour-Stoenner-Kelly (BSK)",
                colonyColor: "Not typical colony on plates",
                hemolysis: "none",
                environment: "Microaerophilic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Microaerophilic",
        differentiationTests: "ELISA, Western blot, possible dark-field microscopy",
        affectedCellTypes: "Endothelial cells, connective tissues",
        associatedDiseases: "Lyme disease",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Integumentary", // erythema migrans
            "Musculoskeletal", // arthritis
            "Nervous (Central)", // neuroborreliosis
            "Cardiovascular" // carditis in some cases
        ]
    },
    // 16) BRUCELLA ABORTUS
    {
        category: "bacterium",
        name: "Brucella abortus",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Contact with cattle, unpasteurized dairy",
        vaccine: "None (human); animal vaccine exists",
        virulenceFactors: [
            {
                factorName: "Intracellular survival", diagramType: "biofilmNet"
            },
            {
                factorName: "LPS variations", diagramType: "lpsChain"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Small, convex",
                hemolysis: "none",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic",
        differentiationTests: "Oxidase-positive, Urease-positive, can use serology (Brucella agglutination)",
        affectedCellTypes: "Macrophages",
        associatedDiseases: "Brucellosis (undulant fever)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-var", // some Brucella produce H2S
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-pos"
        },
        systemsAffected: [
            "Hematologic/Systemic", // undulant fever
            "Lymphatic", // reticuloendothelial involvement
            "Musculoskeletal" // can cause joint issues
        ]
    },
    // 17) BURKHOLDERIA CEPACIA
    {
        category: "bacterium",
        name: "Burkholderia cepacia",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "polar", number: 1
        },
        pili: true,
        spores: false,
        exposure: "Hospital solutions, nebulizers, CF patient environment",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Biofilm formation", diagramType: "biofilmNet"
            },
            {
                factorName: "Multidrug resistance", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Colorless or pinkish",
                hemolysis: "none",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic",
        differentiationTests: "Oxidase-positive, Motile; notable for CF patient infections",
        affectedCellTypes: "Lungs (especially in CF)",
        associatedDiseases: "Pulmonary infections, bacteremia",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-pos",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Lower)", // CF lung infections
            "Hematologic/Systemic" // can cause bacteremia
        ]
    },
    // 18) CAMPYLOBACTER COLI
    {
        category: "bacterium",
        name: "Campylobacter coli",
        morphology: "spirilla",
        arrangement: "single",
        shapeDetail: "spirillaCurve",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 50,
        capsule: false,
        flagella: {
            presence: true, type: "polar", number: 1
        },
        pili: false,
        spores: false,
        exposure: "Undercooked pork, contaminated water",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Enterotoxins", diagramType: "exotoxinStar"
            },
            {
                factorName: "Intestinal invasion", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Campy agar",
                colonyColor: "Grayish",
                hemolysis: "none",
                environment: "Microaerophilic, 42°C"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Microaerophilic",
        differentiationTests: "Oxidase-positive, grows at 42°C, Darting motility",
        affectedCellTypes: "Intestinal epithelial cells",
        associatedDiseases: "Gastroenteritis",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal"
        ]
    },
    // 19) CAMPYLOBACTER JEJUNI
    {
        category: "bacterium",
        name: "Campylobacter jejuni",
        morphology: "spirilla",
        arrangement: "single",
        shapeDetail: "spirillaCurve",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 50,
        capsule: false,
        flagella: {
            presence: true, type: "polar", number: 1
        },
        pili: false,
        spores: false,
        exposure: "Undercooked poultry, unpasteurized milk",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Enterotoxins", diagramType: "exotoxinStar"
            },
            {
                factorName: "Invasive capabilities", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Skirrow or Campy agar",
                colonyColor: "Grayish",
                hemolysis: "none",
                environment: "Microaerophilic, 42°C"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Microaerophilic",
        differentiationTests: "Oxidase-positive, Grows best at 42°C, Darting motility",
        affectedCellTypes: "Intestinal epithelial cells",
        associatedDiseases: "Gastroenteritis, Guillain-Barré syndrome",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal",
            "Nervous (Peripheral)" // Guillain-Barré link
        ]
    },
    // 20) CAPNOCYTOPHAGA CANIMORSUS
    {
        category: "bacterium",
        name: "Capnocytophaga canimorsus",
        morphology: "bacillus",
        arrangement: "long thin rods",
        shapeDetail: "longRod",
        gramStain: "negative",
        cellWidth: 20,
        cellHeight: 70,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Dog/cat bite or lick",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Immune evasion", diagramType: "exotoxinStar"
            },
            {
                factorName: "Sepsis in asplenic patients", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar (CO2 enriched)",
                colonyColor: "Slow-growing, gliding",
                hemolysis: "none",
                environment: "Capnophilic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Capnophilic",
        differentiationTests: "Often identified by 16S rRNA or MALDI-TOF, grows slowly in CO2",
        affectedCellTypes: "Skin, soft tissue",
        associatedDiseases: "Wound infections (dog/cat bites), sepsis (asplenic patients)",

        specialTests: {
            catalase: "test-neg", // can be variable, but often neg
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg", // some strains are weakly pos
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Integumentary", // bite wound infection
            "Hematologic/Systemic" // sepsis (esp. in asplenic)
        ]
    },
    // 21) CHLAMYDIA PNEUMONIAE
    {
        category: "bacterium",
        name: "Chlamydia pneumoniae",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Respiratory droplets",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Intracellular replication", diagramType: "biofilmNet"
            },
            {
                factorName: "Inclusion bodies", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Cell culture only",
                colonyColor: "N/A",
                hemolysis: null,
                environment: "Obligate intracellular"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate intracellular",
        differentiationTests: "NAATs, Serology (IgM, IgG), MIF test (microimmunofluorescence)",
        affectedCellTypes: "Respiratory epithelium",
        associatedDiseases: "Pneumonia (atypical)",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Lower)" // atypical pneumonia
        ]
    },
    // 22) CHLAMYDIA TRACHOMATIS
    {
        category: "bacterium",
        name: "Chlamydia trachomatis",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Sexual contact (D-K serotypes), hand-eye contact (A-C), vertical",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Intracellular life cycle", diagramType: "biofilmNet"
            },
            {
                factorName: "Inclusion bodies", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Cell culture only",
                colonyColor: "N/A",
                hemolysis: null,
                environment: "Obligate intracellular"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate intracellular",
        differentiationTests: "NAATs (PCR), Direct fluorescent antibody test",
        affectedCellTypes: "Urogenital epithelium, ocular epithelium",
        associatedDiseases: "Chlamydia (urethritis, PID), Trachoma, LGV",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Urogenital", // urethritis, PID
            "Eyes", // trachoma
            "Lymphatic" // LGV involvement
        ]
    },
    // 23) CITROBACTER FREUNDII
    {
        category: "bacterium",
        name: "Citrobacter freundii",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 6
        },
        pili: true,
        spores: false,
        exposure: "GI flora, nosocomial settings",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Endotoxin (LPS)", diagramType: "lpsChain"
            },
            {
                factorName: "Beta-lactamase", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Pink (lactose fermenter)",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: null,
        airRequirements: "Facultative anaerobe",
        differentiationTests: "IMViC variable, can produce H2S; often confused with Salmonella on TSI agar",
        affectedCellTypes: null,
        associatedDiseases: "Occasional UTIs, neonatal meningitis",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-pos",
            coagulase: "test-neg",
            h2s: "test-var",
            indole: "test-var",
            lecithinase: "test-neg",
            lactose: "test-pos",
            sucrose: "test-var",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-var"
        },
        systemsAffected: [
            "Urogenital", // UTIs
            "Nervous (Central)" // neonatal meningitis in rare cases
        ]
    },
    // 24) CLOSTRIDIOIDES SEPTICUM
    {
        category: "bacterium",
        name: "Clostridioides septicum",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "positive",
        cellWidth: 30,
        cellHeight: 80,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 6
        },
        pili: false,
        spores: true,
        exposure: "Normal GI flora, translocation in GI malignancies",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Alpha toxin", diagramType: "exotoxinStar"
            },
            {
                factorName: "Gas gangrene association", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar (anaerobic)",
                colonyColor: "Spreading",
                hemolysis: "beta",
                environment: "Obligate anaerobe"
            }
        ],
        hemolysisPattern: "Beta",
        airRequirements: "Obligate anaerobe",
        differentiationTests: "Spore formation, Catalase-negative, associated w/ GI malignancies",
        affectedCellTypes: "Muscle tissue",
        associatedDiseases: "Gas gangrene, necrotizing fasciitis",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-var",
            lactose: "test-neg",
            sucrose: "test-pos",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Musculoskeletal", // necrotizing fasciitis, myonecrosis
            "Gastrointestinal" // correlation with GI malignancy
        ]
    },
    // 25) CLOSTRIDIOIDES SORDELLII
    {
        category: "bacterium",
        name: "Clostridioides sordellii",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "positive",
        cellWidth: 30,
        cellHeight: 80,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: true,
        exposure: "Soil, normal flora of female genital tract",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Lethal toxin", diagramType: "exotoxinStar"
            },
            {
                factorName: "Hemorrhagic toxin", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar (anaerobic)",
                colonyColor: "Grayish",
                hemolysis: null,
                environment: "Obligate anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate anaerobe",
        differentiationTests: "Spore formation, Toxin detection (ELISA), Rapidly fatal toxic shock postpartum",
        affectedCellTypes: "Vascular endothelium",
        associatedDiseases: "Toxic shock syndrome, gas gangrene",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-var",
            lactose: "test-neg",
            sucrose: "test-var",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Hematologic/Systemic", // toxic shock
            "Integumentary", // gas gangrene-like
            "Female Reproductive" // postpartum
        ]
    },
    // 26) CLOSTRIDIUM BOTULINUM
    {
        category: "bacterium",
        name: "Clostridium botulinum",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "positive",
        cellWidth: 30,
        cellHeight: 90,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: true,
        exposure: "Improperly canned foods, honey (infants), soil spores",
        vaccine: "None (human) except for certain lab workers (investigational)",
        virulenceFactors: [
            {
                factorName: "Botulinum toxin", diagramType: "botulinumFork"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar (anaerobic)",
                colonyColor: "Greyish, irregular",
                hemolysis: "beta (some strains)",
                environment: "Obligate anaerobe"
            }
        ],
        hemolysisPattern: "Beta (some strains)",
        airRequirements: "Obligate anaerobe",
        differentiationTests: "Spore formation, Toxin detection (mouse bioassay), Lipase-positive on egg yolk agar",
        affectedCellTypes: "Neuromuscular junctions",
        associatedDiseases: "Botulism (flaccid paralysis)",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-pos",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Nervous (Peripheral)", // flaccid paralysis
            "Gastrointestinal" // typical ingestion route
        ]
    },
    // 27) CLOSTRIDIOIDES DIFFICILE
    {
        category: "bacterium",
        name: "Clostridioides difficile",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "positive",
        cellWidth: 30,
        cellHeight: 80,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 4
        },
        pili: false,
        spores: true,
        exposure: "Hospital environment, antibiotic-associated",
        vaccine: "None (in development)",
        virulenceFactors: [
            {
                factorName: "Toxin A", diagramType: "exotoxinStar"
            },
            {
                factorName: "Toxin B", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "CCFA agar",
                colonyColor: "Yellowish ground-glass",
                hemolysis: null,
                environment: "Obligate anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate anaerobe",
        differentiationTests: "Spore formation, Toxin A/B detection (PCR/EIA), GDH test",
        affectedCellTypes: "Colonic epithelial cells",
        associatedDiseases: "Antibiotic-associated colitis, pseudomembranous colitis",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-pos", // many Clostridia can ferment sucrose
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal" // pseudomembranous colitis
        ]
    },
    // 28) CLOSTRIDIUM PERFRINGENS
    {
        category: "bacterium",
        name: "Clostridium perfringens",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "positive",
        cellWidth: 30,
        cellHeight: 80,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: true,
        exposure: "Soil, GI tract of humans/animals, contaminated meat",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Alpha toxin", diagramType: "exotoxinStar"
            },
            {
                factorName: "Gas production enzymes", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar (anaerobic)",
                colonyColor: "Double zone hemolysis",
                hemolysis: "alpha + beta",
                environment: "Anaerobic"
            }
        ],
        hemolysisPattern: "Alpha + beta",
        airRequirements: "Anaerobic",
        differentiationTests: "Lecithinase-positive (Nagler reaction), Stormy clot in litmus milk test",
        affectedCellTypes: "Muscle and connective tissue",
        associatedDiseases: "Gas gangrene, food poisoning",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-pos",
            lactose: "test-neg",
            sucrose: "test-pos",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Musculoskeletal", // myonecrosis
            "Gastrointestinal" // food poisoning
        ]
    },
    // 29) CLOSTRIDIUM TETANI
    {
        category: "bacterium",
        name: "Clostridium tetani",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "positive",
        cellWidth: 30,
        cellHeight: 90,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: true,
        exposure: "Soil, entry via puncture wounds",
        vaccine: "Yes, tetanus toxoid (part of DTaP/Tdap)",
        virulenceFactors: [
            {
                factorName: "Tetanospasmin toxin", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar (anaerobic)",
                colonyColor: "Swarming, thin filmy",
                hemolysis: "beta (often)",
                environment: "Obligate anaerobe"
            }
        ],
        hemolysisPattern: "Beta (often)",
        airRequirements: "Obligate anaerobe",
        differentiationTests: "Spore formation (terminal 'drumstick'), Toxin detection, 'Lockjaw' clinical",
        affectedCellTypes: "Neuromuscular junctions",
        associatedDiseases: "Tetanus (spastic paralysis)",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Nervous (Peripheral)", // spastic paralysis
            "Integumentary" // entry via wound
        ]
    },
    // 30) CORYNEBACTERIUM DIPHTHERIAE
    {
        category: "bacterium",
        name: "Corynebacterium diphtheriae",
        morphology: "bacillus",
        arrangement: "palisades",
        shapeDetail: "palisadeRods",
        gramStain: "positive",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Respiratory droplets",
        vaccine: "Yes, diphtheria toxoid (part of DTaP/Tdap)",
        virulenceFactors: [
            {
                factorName: "Diphtheria toxin", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Tellurite agar",
                colonyColor: "Black/brown colonies",
                hemolysis: null,
                environment: "Aerobic or facultative"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic or facultative anaerobe",
        differentiationTests: "Elek test for toxin, Loeffler's medium, 'Chinese letter' arrangement on microscopy",
        affectedCellTypes: "Respiratory epithelium, cardiac tissue",
        associatedDiseases: "Diphtheria",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Upper)", // pharyngeal diphtheria
            "Cardiovascular" // myocarditis possibility
        ]
    },
    {
        category: "bacterium",
        name: "Eikenella corrodens",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Human bite wounds, oral flora",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Oral mucosa adherence", diagramType: "pili"
            },
            {
                factorName: "Pitting on agar", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar (CO2)",
                colonyColor: "Pits agar, bleach odor",
                hemolysis: "none",
                environment: "Facultative or capnophilic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative or capnophilic",
        differentiationTests: "Catalase-negative, Indole-negative, 'Corrodes' or pits agar surface",
        affectedCellTypes: "Oral epithelium",
        associatedDiseases: "Periodontal infections, human bite wounds",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Integumentary", // bite wound infections
            "Oral cavity", // periodontal involvement
            "Hematologic/Systemic" // can occasionally spread
        ]
    },
    // 32) KLEBSIELLA AEROGENES
    {
        category: "bacterium",
        name: "Klebsiella aerogenes",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: true,
        flagella: {
            presence: true, type: "peritrichous", number: 4
        },
        pili: true,
        spores: false,
        exposure: "Hospital environment, GI flora",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Endotoxin", diagramType: "lpsChain"
            },
            {
                factorName: "Beta-lactamase", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Pink (lactose fermenter)",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Lactose fermenter, Citrate-positive, Motile (unlike K. pneumoniae)",
        affectedCellTypes: "Respiratory tract, urinary tract",
        associatedDiseases: "Nosocomial infections, UTIs",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-pos",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg", // often negative
            lecithinase: "test-neg",
            lactose: "test-pos",
            sucrose: "test-var", // many Enterobacter can ferment sucrose
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Urogenital", // UTIs
            "Respiratory (Lower)" // nosocomial pneumonia
        ]
    },
    // 33) ENTEROCOCCUS FAECALIS
    {
        category: "bacterium",
        name: "Enterococcus faecalis",
        morphology: "cocci",
        arrangement: "diplo",
        shapeDetail: "diplococci",
        gramStain: "positive",
        cellWidth: 35,
        cellHeight: 35,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Normal GI flora, translocation in hospitalized or antibiotic use",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Cytolysin", diagramType: "exotoxinStar"
            },
            {
                factorName: "Biofilm formation", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Small, grayish",
                hemolysis: "gamma or alpha",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "Gamma or alpha",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Bile-esculin positive, PYR-positive, grows in 6.5% NaCl",
        affectedCellTypes: "Urinary tract, bloodstream",
        associatedDiseases: "UTIs, endocarditis, intra-abdominal infections",

        specialTests: {
            catalase: "test-neg", // though occasionally weak or "pseudo-pos"
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg", // can be variable; not typically relevant
            sucrose: "test-pos", // many streptococci/enterococci can ferment sucrose
            oxidase: "test-neg",
            pyr: "test-pos", // hallmark
            urease: "test-neg"
        },
        systemsAffected: [
            "Urogenital", // UTIs
            "Cardiovascular", // endocarditis
            "Peritoneal Cavity", // intra-abdominal
            "Hematologic/Systemic" // bacteremia
        ]
    },
    // 34) ENTEROCOCCUS FAECIUM
    {
        category: "bacterium",
        name: "Enterococcus faecium",
        morphology: "cocci",
        arrangement: "diplo",
        shapeDetail: "diplococci",
        gramStain: "positive",
        cellWidth: 35,
        cellHeight: 35,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Normal GI flora, hospital environment",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Vancomycin resistance (VRE)", diagramType: "enzymeIcon"
            },
            {
                factorName: "Biofilm formation", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Small, grayish",
                hemolysis: "gamma or alpha",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "Gamma or alpha",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Bile-esculin positive, PYR-positive, Grows in 6.5% NaCl",
        affectedCellTypes: "Urinary tract, bloodstream",
        associatedDiseases: "UTIs, endocarditis, intra-abdominal infections",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-pos",
            oxidase: "test-neg",
            pyr: "test-pos",
            urease: "test-neg"
        },
        systemsAffected: [
            "Urogenital",
            "Cardiovascular", // endocarditis
            "Peritoneal Cavity", // intra-abdominal 
            "Hematologic/Systemic" // bloodstream
        ]
    },
    // 35) ESCHERICHIA COLI (generic)
    {
        category: "bacterium",
        name: "Escherichia coli",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 6
        },
        pili: true,
        spores: false,
        exposure: "Normal gut flora, fecal-oral route, contaminated food/water",
        vaccine: "None (some travelers’ prophylactic vaccines in development)",
        virulenceFactors: [
            {
                factorName: "Endotoxin (LPS)", diagramType: "lpsChain"
            },
            {
                factorName: "Exotoxins", diagramType: "exotoxinStar"
            },
            {
                factorName: "Shiga toxin (EHEC strains)", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Pink (lactose fermenter)",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            },
            {
                mediumName: "Blood agar",
                colonyColor: "Grayish, sometimes beta-hemolysis",
                hemolysis: "beta",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "Variable (Beta on blood agar)",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Indole-positive, Lactose fermenter (IMViC: ++--), Catalase-positive",
        affectedCellTypes: "Enterocytes, bladder epithelial cells",
        associatedDiseases: "UTIs, gastroenteritis, neonatal meningitis, sepsis",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg", // typical for E. coli
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-pos",
            lecithinase: "test-neg",
            lactose: "test-pos",
            sucrose: "test-var", // some strains can
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Urogenital", // UTIs
            "Gastrointestinal", // gastroenteritis
            "Nervous (Central)", // neonatal meningitis
            "Hematologic/Systemic" // sepsis
        ]
    },
    // 36) FRANCIsella TULARENSIS
    {
        category: "bacterium",
        name: "Francisella tularensis",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 40,
        capsule: true,
        flagella: {
            presence: false
        },
        pili: true,
        spores: false,
        exposure: "Ticks, rabbits, aerosol in lab setting",
        vaccine: "Yes (investigational live attenuated for lab workers)",
        virulenceFactors: [
            {
                factorName: "Intracellular survival", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Chocolate agar with cysteine",
                colonyColor: "Tiny",
                hemolysis: "none",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic",
        differentiationTests: "Cysteine requirement, Agglutination tests, PCR; extremely infectious",
        affectedCellTypes: "Macrophages",
        associatedDiseases: "Tularemia (ulceroglandular, pneumonic forms)",

        specialTests: {
            catalase: "test-pos", // some references say weak pos
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg", // typically
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Lymphatic", // ulceroglandular
            "Respiratory (Lower)", // pneumonic form
            "Hematologic/Systemic" // can spread systemically
        ]
    },
    // 37) FUSOBACTERIUM NUCLEATUM
    {
        category: "bacterium",
        name: "Fusobacterium nucleatum",
        morphology: "spindle-shaped bacillus",
        arrangement: "single",
        shapeDetail: "longRod",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 70,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Oral cavity (periodontal pockets), GI tract",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Adhesins", diagramType: "pili"
            },
            {
                factorName: "Tissue invasion", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Anaerobic blood agar",
                colonyColor: "Bread crumb-like",
                hemolysis: "variable",
                environment: "Anaerobic"
            }
        ],
        hemolysisPattern: "Variable",
        airRequirements: "Anaerobic",
        differentiationTests: "Indole-positive, Gram-negative spindle rods, Putrid odor",
        affectedCellTypes: "Oral and gastrointestinal epithelium",
        associatedDiseases: "Periodontal disease, Lemierre’s syndrome",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-pos",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Oral cavity", // periodontal disease
            "Hematologic/Systemic" // Lemierre’s syndrome involves jugular vein thrombophlebitis
        ]
    },
    // 38) GARDNERELLA VAGINALIS
    {
        category: "bacterium",
        name: "Gardnerella vaginalis",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "variable",
        cellWidth: 25,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Overgrowth in vaginal flora imbalance",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Vaginolysin", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Chocolate agar",
                colonyColor: "Small, gray",
                hemolysis: "none",
                environment: "Facultative"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Whiff test (KOH), 'Clue cells' on wet mount, Hippurate hydrolysis (+)",
        affectedCellTypes: "Vaginal epithelium",
        associatedDiseases: "Bacterial vaginosis",

        specialTests: {
            catalase: "test-neg", // usually negative or weak
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Urogenital (Female)" // vaginal infection
        ]
    },
    // 39) HAEMOPHILUS DUCREYI
    {
        category: "bacterium",
        name: "Haemophilus ducreyi",
        morphology: "coccobacillus",
        arrangement: "school-of-fish",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: true,
        spores: false,
        exposure: "Sexual contact (chancroid)",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Cytolethal distending toxin", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Chocolate agar",
                colonyColor: "School of fish arrangement",
                hemolysis: "none",
                environment: "Facultative"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "PCR for toxin genes; Gram stain 'school of fish' pattern",
        affectedCellTypes: "Genital epithelium",
        associatedDiseases: "Chancroid",

        specialTests: {
            catalase: "test-neg", // often variable; not a key test
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg", // can be slightly pos but not a major test
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Urogenital" // genital ulcer disease
        ]
    },
    // 40) HAEMOPHILUS INFLUENZAE
    {
        category: "bacterium",
        name: "Haemophilus influenzae",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 40,
        capsule: true,
        flagella: {
            presence: false
        },
        pili: true,
        spores: false,
        exposure: "Respiratory droplets",
        vaccine: "Yes, Hib conjugate vaccine (type b)",
        virulenceFactors: [
            {
                factorName: "Polyribosylribitol phosphate capsule", diagramType: "largeCapsuleGlow"
            },
            {
                factorName: "IgA proteases", diagramType: "igaProteaseScissors"
            }
        ],
        growthMedia: [
            {
                mediumName: "Chocolate agar",
                colonyColor: "Smooth, translucent",
                hemolysis: "none",
                environment: "Facultative"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Requires factor V (NAD+) & X (hematin); Satellite phenomenon near Staph on blood agar",
        affectedCellTypes: "Respiratory epithelium",
        associatedDiseases: "Meningitis (type b), otitis media, epiglottitis",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg", // mostly negative
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-var", // often weak positive
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Upper)", // epiglottitis, otitis media
            "Nervous (Central)" // meningitis
        ]
    },
    // 41) HAEMOPHILUS PARAINFLUENZAE
    {
        category: "bacterium",
        name: "Haemophilus parainfluenzae",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: true,
        spores: false,
        exposure: "Respiratory droplets, normal flora",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "IgA proteases", diagramType: "igaProteaseScissors"
            }
        ],
        growthMedia: [
            {
                mediumName: "Chocolate agar",
                colonyColor: "Small, translucent",
                hemolysis: "none",
                environment: "Facultative"
            }
        ],
        hemolysisPattern: null,
        airRequirements: null,
        differentiationTests: "Requires factor V only (unlike H. influenzae which needs X & V)",
        affectedCellTypes: null,
        associatedDiseases: "Occasional respiratory flora, less pathogenic than H. influenzae",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-var", // can be mild positive
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Upper)" // typically minor or commensal
        ]
    },
    // 42) HELICOBACTER HEPATICUS
    {
        category: "bacterium",
        name: "Helicobacter hepaticus",
        morphology: "spirilla",
        arrangement: "single",
        shapeDetail: "spirillaCurve",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 50,
        capsule: false,
        flagella: {
            presence: true, type: "polar", number: 4
        },
        pili: false,
        spores: false,
        exposure: "Animal models (lab rodents), possibly zoonotic",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Urease", diagramType: "ureaseBubbles"
            },
            {
                factorName: "Chronic liver inflammation", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "Microaerophilic media",
                colonyColor: "Translucent",
                hemolysis: "none",
                environment: "Microaerophilic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Microaerophilic",
        differentiationTests: "Urease-positive, Oxidase-positive, typically in rodent models",
        affectedCellTypes: "Liver cells",
        associatedDiseases: "Chronic hepatitis (primarily in animal models)",

        specialTests: {
            catalase: "test-pos", // many Helicobacters are catalase+ 
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-pos"
        },
        systemsAffected: [
            "Hepatobiliary" // chronic hepatitis in animal models
        ]
    },
    // 43) HELICOBACTER PYLORI
    {
        category: "bacterium",
        name: "Helicobacter pylori",
        morphology: "spirilla",
        arrangement: "single",
        shapeDetail: "spirillaCurve",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 50,
        capsule: false,
        flagella: {
            presence: true, type: "polar", number: 4
        },
        pili: false,
        spores: false,
        exposure: "Fecal-oral or oral-oral, persistent in stomach",
        vaccine: "None (research ongoing)",
        virulenceFactors: [
            {
                factorName: "Urease enzyme", diagramType: "ureaseBubbles"
            },
            {
                factorName: "VacA toxin", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Chocolate agar (microaerophilic)",
                colonyColor: "Translucent",
                hemolysis: "none",
                environment: "Microaerophilic, 37°C"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Microaerophilic",
        differentiationTests: "Urease-positive (rapid urease test), Oxidase-positive, 13C-urea breath test",
        affectedCellTypes: "Gastric epithelial cells",
        associatedDiseases: "Peptic ulcers, gastric carcinoma",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-pos"
        },
        systemsAffected: [
            "Gastrointestinal" // stomach ulcers, etc.
        ]
    },
    // 44) KINGELLA KINGAE
    {
        category: "bacterium",
        name: "Kingella kingae",
        morphology: "coccobacillus",
        arrangement: "pairs",
        shapeDetail: "diplococci",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: true,
        spores: false,
        exposure: "Normal oropharyngeal flora in young children, spread to joints/bone",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Adherence to bones/joints", diagramType: "pili"
            },
            {
                factorName: "RTX toxin", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar (CO2)",
                colonyColor: "Small, beta-hemolysis",
                hemolysis: "beta",
                environment: "Capnophilic"
            }
        ],
        hemolysisPattern: "Beta",
        airRequirements: "Capnophilic",
        differentiationTests: "Catalase-negative, Gram-negative diplococci, MALDI-TOF often used clinically",
        affectedCellTypes: "Bones, joints",
        associatedDiseases: "Septic arthritis, osteomyelitis (pediatric)",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg", // can be weak pos; references differ
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Musculoskeletal" // pediatric bone/joint infections
        ]
    },
    // 45) KLEBSIELLA PNEUMONIAE
    {
        category: "bacterium",
        name: "Klebsiella pneumoniae",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: true,
        flagella: {
            presence: false
        },
        pili: true,
        spores: false,
        exposure: "Respiratory droplets, GI tract (endogenous)",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Polysaccharide capsule", diagramType: "largeCapsuleGlow"
            },
            {
                factorName: "Beta-lactamases", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Pink, mucoid",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Lactose fermenter, Non-motile, Indole-negative, Urease-variable",
        affectedCellTypes: "Respiratory epithelium, urinary tract epithelium",
        associatedDiseases: "Pneumonia (currant jelly sputum), UTIs, sepsis",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-pos",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-pos",
            sucrose: "test-var",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-var"
        },
        systemsAffected: [
            "Respiratory (Lower)", // pneumonia
            "Urogenital", // UTIs
            "Hematologic/Systemic" // sepsis
        ]
    },
    // 46) LACTOBACILLUS ACIDOPHILUS
    {
        category: "bacterium",
        name: "Lactobacillus acidophilus",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "positive",
        cellWidth: 25,
        cellHeight: 70,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Normal vaginal/GI flora, probiotic supplements",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Acid production", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "MRS agar",
                colonyColor: "White, small",
                hemolysis: "none",
                environment: "Microaerophilic or facultative"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Microaerophilic or facultative",
        differentiationTests: "Catalase-positive (variable), Rod-shaped, Part of normal vaginal flora",
        affectedCellTypes: "Mostly commensal",
        associatedDiseases: "Rarely pathogenic",

        specialTests: {
            catalase: "test-var", // can be weak or negative
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-var",
            sucrose: "test-pos", // many lactobacilli ferment sucrose
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal",
            "Urogenital (Female)" // normal vaginal flora
        ]
    },
    // 47) LACTOCOCCUS LACTIS
    {
        category: "bacterium",
        name: "Lactococcus lactis",
        morphology: "cocci",
        arrangement: "chains",
        shapeDetail: "streptococciChain",
        gramStain: "positive",
        cellWidth: 35,
        cellHeight: 35,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Dairy products, environment",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Bacteriocin production", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "M17 agar",
                colonyColor: "Creamy, white",
                hemolysis: "none",
                environment: "Facultative"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Catalase-negative, Gram-positive cocci in chains, used in dairy fermentation",
        affectedCellTypes: "Gut epithelium",
        associatedDiseases: "Rarely pathogenic; occasional endocarditis",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-pos", // used in dairy
            sucrose: "test-pos",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal" // typically beneficial/harmless
            // occasional endocarditis => "Cardiovascular" (rare)
        ]
    },
    // 48) LEGIONELLA PNEUMOPHILA
    {
        category: "bacterium",
        name: "Legionella pneumophila",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "polar", number: 1
        },
        pili: false,
        spores: false,
        exposure: "Inhalation of aerosolized water (AC systems, cooling towers)",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Intracellular growth in macrophages", diagramType: "biofilmNet"
            },
            {
                factorName: "Type IV secretion system", diagramType: "typeThreeNeedle"
            }
        ],
        growthMedia: [
            {
                mediumName: "BCYE agar",
                colonyColor: "Gray-white",
                hemolysis: "none",
                environment: "Aerobic, needs cysteine & iron"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic",
        differentiationTests: "Catalase-positive, DFA staining, Urinary antigen test, poor Gram stain",
        affectedCellTypes: "Alveolar macrophages",
        associatedDiseases: "Legionnaires' disease, Pontiac fever",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-var", // can be weak positive
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Lower)", // pneumonia (Legionnaires')
            "Hematologic/Systemic" // can cause systemic symptoms
        ]
    },
    // 49) LEPTOSPIRA INTERROGANS
    {
        category: "bacterium",
        name: "Leptospira interrogans",
        morphology: "spirochete",
        arrangement: "single",
        shapeDetail: "spirocheteWaves",
        gramStain: "negative",
        cellWidth: 15,
        cellHeight: 120,
        capsule: false,
        flagella: {
            presence: true, type: "endoflagella", number: 2
        },
        pili: false,
        spores: false,
        exposure: "Water contaminated by animal urine",
        vaccine: "None (human) - some animal vaccines",
        virulenceFactors: [
            {
                factorName: "Motility in tissues", diagramType: "exotoxinStar"
            },
            {
                factorName: "Adhesins", diagramType: "pili"
            }
        ],
        growthMedia: [
            {
                mediumName: "Fletcher or EMJH medium",
                colonyColor: "Not typical colony",
                hemolysis: "none",
                environment: "Aerobic or microaerophilic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic or microaerophilic",
        differentiationTests: "Dark-field microscopy, Serology (MAT test)",
        affectedCellTypes: "Kidney tubules, blood vessels",
        associatedDiseases: "Leptospirosis",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg", // often variable
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Urogenital", // kidney involvement
            "Hematologic/Systemic" // can cause Weil’s disease
        ]
    },
    // 50) LISTERIA MONOCYTOGENES
    {
        category: "bacterium",
        name: "Listeria monocytogenes",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "positive",
        cellWidth: 25,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 4
        },
        pili: false,
        spores: false,
        exposure: "Contaminated foods (unpasteurized milk, soft cheeses, deli meats)",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Listeriolysin O", diagramType: "slOExplosion"
            },
            {
                factorName: "Intracellular motility (ActA)", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Small, grayish",
                hemolysis: "beta (narrow zone)",
                environment: "Facultative, cold enrichment"
            }
        ],
        hemolysisPattern: "Beta (narrow zone)",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Motility at 25°C (tumbling), Catalase-positive, CAMP test (+)",
        affectedCellTypes: "Macrophages, hepatocytes",
        associatedDiseases: "Listeriosis",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-pos", // can ferment some sugars
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal", // ingestion
            "Hematologic/Systemic", // can become systemic
            "Nervous (Central)", // meningitis in immunocompromised
            "Pregnancy/Fetus" // can cross placenta
        ]
    },
    // 51) MICROCOCCUS LUTEUS
    {
        category: "bacterium",
        name: "Micrococcus luteus",
        morphology: "cocci",
        arrangement: "tetrads",
        shapeDetail: "staphylococciCluster",
        gramStain: "positive",
        cellWidth: 35,
        cellHeight: 35,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Skin flora, environment",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Pigment production", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Yellow pigmented",
                hemolysis: "none",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic",
        differentiationTests: "Catalase-positive, Gram-positive cocci in tetrads, usually coagulase-negative",
        affectedCellTypes: "Skin, mucosa",
        associatedDiseases: "Rarely pathogenic; opportunistic",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-var", // can be weak pos
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Integumentary" // mainly skin flora
        ]
    },
    // 52) MORAXELLA CATARRHALIS
    {
        category: "bacterium",
        name: "Moraxella catarrhalis",
        morphology: "cocci",
        arrangement: "diplo",
        shapeDetail: "diplococci",
        gramStain: "negative",
        cellWidth: 35,
        cellHeight: 35,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Respiratory droplets, normal upper airway flora",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Beta-lactamases", diagramType: "enzymeIcon"
            },
            {
                factorName: "Adherence factors", diagramType: "pili"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Opaque, white-gray",
                hemolysis: "none",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic",
        differentiationTests: "Oxidase-positive, DNAse-positive, 'Hockey puck' sign (colony moves)",
        affectedCellTypes: "Respiratory epithelium",
        associatedDiseases: "Otitis media, sinusitis, bronchitis",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Upper)", // otitis media, sinusitis
            "Respiratory (Lower)" // can cause bronchitis
        ]
    },
    // 53) MORGANELLA MORGANII
    {
        category: "bacterium",
        name: "Morganella morganii",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 6
        },
        pili: true,
        spores: false,
        exposure: "GI flora, nosocomial",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Urease production", diagramType: "ureaseBubbles"
            },
            {
                factorName: "Endotoxin", diagramType: "lpsChain"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Colorless (non-lactose)",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Urease-positive, Motile, can produce phenylalanine deaminase",
        affectedCellTypes: "Urinary tract epithelium",
        associatedDiseases: "UTIs, kidney stones",

        specialTests: {
            catalase: "test-pos", // typical for Enterobacteriaceae
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg", // typically 
            indole: "test-neg", // Morganella morganii can be variable, but often neg
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-pos"
        },
        systemsAffected: [
            "Urogenital" // UTIs, kidney stones
        ]
    },
    // 54) MYCOBACTERIUM LEPRAE
    {
        category: "bacterium",
        name: "Mycobacterium leprae",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "longRod",
        gramStain: "positive",
        cellWidth: 30,
        cellHeight: 80,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Prolonged skin contact, respiratory droplets, armadillos",
        vaccine: "None (BCG offers partial protection)",
        virulenceFactors: [
            {
                factorName: "Mycolic acids", diagramType: "biofilmNet"
            },
            {
                factorName: "Intracellular survival", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Not grown on artificial media",
                colonyColor: "N/A",
                hemolysis: null,
                environment: "Obligate intracellular"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate intracellular",
        differentiationTests: "Acid-fast staining, PCR, Grows in armadillos (footpads)",
        affectedCellTypes: "Schwann cells, skin macrophages",
        associatedDiseases: "Leprosy (Hansen’s disease)",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Integumentary", // skin lesions
            "Nervous (Peripheral)" // nerve involvement
        ]
    },
    // 55) MYCOBACTERIUM TUBERCULOSIS
    {
        category: "bacterium",
        name: "Mycobacterium tuberculosis",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "longRod",
        gramStain: "positive",
        cellWidth: 30,
        cellHeight: 80,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Respiratory droplets from active TB patients",
        vaccine: "BCG (live attenuated M. bovis)",
        virulenceFactors: [
            {
                factorName: "Mycolic acids", diagramType: "biofilmNet"
            },
            {
                factorName: "Cord factor", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Lowenstein-Jensen",
                colonyColor: "Buff, dry, slow-growing",
                hemolysis: null,
                environment: "Obligate aerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate aerobe",
        differentiationTests: "Acid-fast staining, Niacin production (positive), PPD skin test",
        affectedCellTypes: "Macrophages",
        associatedDiseases: "Tuberculosis",

        specialTests: {
            catalase: "test-var", // can be heat-labile
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-pos" // MTB is typically urease+
        },
        systemsAffected: [
            "Respiratory (Lower)", // primary TB
            "Hematologic/Systemic", // miliary TB
            "Lymphatic", // scrofula
            "Nervous (Central)",
            "Musculoskeletal", // Pott's disease
            "Gastrointestinal", // GI TB
            "Others" // can spread to bone (Pott’s), CNS, etc.
        ]
    },
    // 56) MYCOPLASMA PNEUMONIAE
    {
        category: "bacterium",
        name: "Mycoplasma pneumoniae",
        morphology: "pleomorphic",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "none",
        cellWidth: 25,
        cellHeight: 25,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Respiratory droplets, close contact (schools, barracks)",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Adhesion organelle", diagramType: "pili"
            },
            {
                factorName: "Ciliostasis induction", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Eaton's agar",
                colonyColor: "Fried egg colonies",
                hemolysis: null,
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic",
        differentiationTests: "Cold agglutinin test-positive, lacks cell wall (not visible on Gram)",
        affectedCellTypes: "Respiratory epithelium",
        associatedDiseases: "Atypical pneumonia",

        specialTests: {
            catalase: "test-neg", // not typically used
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Lower)" // atypical pneumonia
        ]
    },
    // 57) NEISSERIA GONORRHOEAE
    {
        category: "bacterium",
        name: "Neisseria gonorrhoeae",
        morphology: "cocci",
        arrangement: "diplo",
        shapeDetail: "diplococci",
        gramStain: "negative",
        cellWidth: 35,
        cellHeight: 35,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: true,
        spores: false,
        exposure: "Sexual contact, vertical transmission",
        vaccine: "None (research in progress)",
        virulenceFactors: [
            {
                factorName: "Pili antigenic variation", diagramType: "pili"
            },
            {
                factorName: "IgA protease", diagramType: "igaProteaseScissors"
            }
        ],
        growthMedia: [
            {
                mediumName: "Chocolate agar",
                colonyColor: "Small, grayish",
                hemolysis: "none",
                environment: "Aerobic, 5% CO2"
            },
            {
                mediumName: "Thayer-Martin agar",
                colonyColor: "Small, translucent",
                hemolysis: "none",
                environment: "Aerobic, 5% CO2"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic (5% CO2)",
        differentiationTests: "Oxidase-positive, Glucose fermentation only, NAAT often used",
        affectedCellTypes: "Urogenital epithelium",
        associatedDiseases: "Gonorrhea, pelvic inflammatory disease",

        specialTests: {
            catalase: "test-pos", // usually
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Urogenital",
            "Eyes" // neonatal conjunctivitis
        ]
    },
    // 58) NEISSERIA MENINGITIDIS
    {
        category: "bacterium",
        name: "Neisseria meningitidis",
        morphology: "cocci",
        arrangement: "diplo",
        shapeDetail: "diplococci",
        gramStain: "negative",
        cellWidth: 35,
        cellHeight: 35,
        capsule: true,
        flagella: {
            presence: false
        },
        pili: true,
        spores: false,
        exposure: "Respiratory droplets, close contact (dorms, barracks)",
        vaccine: "Yes, conjugate polysaccharide vaccine (MenACWY), MenB for some",
        virulenceFactors: [
            {
                factorName: "Polysaccharide capsule", diagramType: "largeCapsuleGlow"
            },
            {
                factorName: "IgA protease", diagramType: "igaProteaseScissors"
            }
        ],
        growthMedia: [
            {
                mediumName: "Chocolate agar",
                colonyColor: "Medium, grayish",
                hemolysis: "none",
                environment: "Aerobic, 5% CO2"
            },
            {
                mediumName: "Thayer-Martin agar",
                colonyColor: "Small, grayish",
                hemolysis: "none",
                environment: "Aerobic, 5% CO2"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic (5% CO2)",
        differentiationTests: "Oxidase-positive, Glucose & maltose fermentation, Rapid latex agglutination",
        affectedCellTypes: "Endothelial cells, meninges",
        associatedDiseases: "Meningitis, septicemia",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Nervous (Central)", // meningitis
            "Hematologic/Systemic" // septicemia, Waterhouse-Friderichsen syndrome
        ]
    },
    // 59) NOCARDIA ASTEROIDES
    {
        category: "bacterium",
        name: "Nocardia asteroides",
        morphology: "bacillus",
        arrangement: "branching filament",
        shapeDetail: "branchingFilament",
        gramStain: "positive",
        cellWidth: 30,
        cellHeight: 90,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Soil, inhalation or traumatic inoculation",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Mycolic acids", diagramType: "biofilmNet"
            },
            {
                factorName: "Catalase", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "Buffered charcoal yeast agar",
                colonyColor: "White to orange chalky",
                hemolysis: null,
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic",
        differentiationTests: "Weakly acid-fast, Catalase-positive, branching rods, Grows in immunocompromised",
        affectedCellTypes: "Lung tissue, brain tissue",
        associatedDiseases: "Nocardiosis (pulmonary, CNS abscesses)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Lower)", // pulmonary infections
            "Nervous (Central)", // brain abscess
            "Integumentary" // cutaneous forms if traumatic inoculation
        ]
    },
    // 60) PASTEURELLA MULTOCIDA
    {
        category: "bacterium",
        name: "Pasteurella multocida",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 40,
        capsule: true,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Animal bites (cats, dogs)",
        vaccine: "None (human); vaccine for livestock exists",
        virulenceFactors: [
            {
                factorName: "Capsule", diagramType: "largeCapsuleGlow"
            },
            {
                factorName: "Adhesins", diagramType: "pili"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Grayish, mucoid",
                hemolysis: "none",
                environment: "Facultative"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Oxidase-positive, Catalase-positive, Indole-positive, 'Safety pin' appearance (bipolar stain)",
        affectedCellTypes: "Soft tissue",
        associatedDiseases: "Cellulitis, abscesses (animal bites)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-pos",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Integumentary" // cellulitis from animal bites
        ]
    },
    // 61) PORPHYROMONAS GINGIVALIS
    {
        category: "bacterium",
        name: "Porphyromonas gingivalis",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 60,
        capsule: true,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Oral cavity (subgingival plaque)",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Gingipains proteases", diagramType: "enzymeIcon"
            },
            {
                factorName: "Biofilm in oral cavity", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Anaerobic blood agar",
                colonyColor: "Black pigmented",
                hemolysis: "none",
                environment: "Strict anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Strict anaerobe",
        differentiationTests: "Gram-negative rods, Indole-positive, Black colony on blood agar (heme breakdown)",
        affectedCellTypes: "Oral epithelium",
        associatedDiseases: "Chronic periodontitis, endodontic infections",

        specialTests: {
            catalase: "test-neg", // typically negative
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-pos",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Oral cavity", // periodontal involvement
            "Hematologic/Systemic" // can contribute to systemic inflammation
        ]
    },
    // 62) PREVOTELLA INTERMEDIA
    {
        category: "bacterium",
        name: "Prevotella intermedia",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Oral cavity (dental plaque, gingiva)",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Biofilm formation", diagramType: "biofilmNet"
            },
            {
                factorName: "Periodontal disease", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "Anaerobic blood agar",
                colonyColor: "Dark, pigmented",
                hemolysis: "none",
                environment: "Anaerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Anaerobic",
        differentiationTests: "Gram-negative bacilli, black colonies, often part of oral flora",
        affectedCellTypes: "Oral epithelium",
        associatedDiseases: "Periodontal disease, abscesses",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg", // some strains may be variable
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Oral cavity"
        ]
    },
    // 63) PREVOTELLA MELANINOGENICA
    {
        category: "bacterium",
        name: "Prevotella melaninogenica",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Oral cavity (normal flora), aspiration pneumonia",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Black pigment", diagramType: "exotoxinStar"
            },
            {
                factorName: "Periodontal involvement", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Anaerobic blood agar",
                colonyColor: "Black pigmented",
                hemolysis: "none",
                environment: "Anaerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Anaerobic",
        differentiationTests: "Indole-positive, black colonies, normal oral flora",
        affectedCellTypes: "Oral epithelium",
        associatedDiseases: "Periodontal disease",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-pos",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Oral cavity",
            "Respiratory (Lower)" // can be involved in aspiration pneumonia
        ]
    },
    // 64) PROTEUS MIRABILIS
    {
        category: "bacterium",
        name: "Proteus mirabilis",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 8
        },
        pili: true,
        spores: false,
        exposure: "GI flora, hospital environment",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Urease production", diagramType: "ureaseBubbles"
            },
            {
                factorName: "Swarming motility", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Swarming waves",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Urease-positive, Motile, H2S-positive, Phenylalanine deaminase-positive",
        affectedCellTypes: "Urinary tract epithelium",
        associatedDiseases: "UTIs, kidney stones",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-var", // can be positive in some strains
            coagulase: "test-neg",
            h2s: "test-pos",
            indole: "test-neg", // mirabilis usually negative
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-var",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-pos"
        },
        systemsAffected: [
            "Urogenital"
        ]
    },
    // 65) PROTEUS VULGARIS
    {
        category: "bacterium",
        name: "Proteus vulgaris",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 8
        },
        pili: true,
        spores: false,
        exposure: "GI flora, nosocomial environment",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Urease production", diagramType: "ureaseBubbles"
            },
            {
                factorName: "Beta-lactamase", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Swarming, odor",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Urease-positive, H2S production, Indole-positive, Phenylalanine deaminase+",
        affectedCellTypes: "Urinary tract epithelium",
        associatedDiseases: "UTIs, kidney stones",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-var", // some strains can
            coagulase: "test-neg",
            h2s: "test-pos",
            indole: "test-pos", // vulgaris is typically indole+
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-var",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-pos"
        },
        systemsAffected: [
            "Urogenital"
        ]
    },
    // 66) PROVIDENCIA STUARTII
    {
        category: "bacterium",
        name: "Providencia stuartii",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 6
        },
        pili: true,
        spores: false,
        exposure: "Nosocomial infections, catheterized patients",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Biofilm formation", diagramType: "biofilmNet"
            },
            {
                factorName: "Urease production", diagramType: "ureaseBubbles"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Colorless or slightly pink",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: null,
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Motile, Urease-positive (often), Phenylalanine deaminase+",
        affectedCellTypes: null,
        associatedDiseases: "UTIs, nosocomial infections",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-var",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-var",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-pos"
        },
        systemsAffected: [
            "Urogenital" // UTIs
        ]
    },
    // 67) PROPIONIBACTERIUM ACNES (CUTIBACTERIUM ACNES)
    {
        category: "bacterium",
        name: "Propionibacterium acnes (Cutibacterium acnes)",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "positive",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Normal skin flora, overgrowth in blocked follicles",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Lipases", diagramType: "enzymeIcon"
            },
            {
                factorName: "Biofilm on skin", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Anaerobic blood agar",
                colonyColor: "Small, white",
                hemolysis: "none",
                environment: "Anaerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Anaerobic",
        differentiationTests: "Catalase-positive, Indole-positive; normal skin flora, implicated in acne",
        affectedCellTypes: "Skin follicles",
        associatedDiseases: "Acne vulgaris, prosthetic joint infections",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-pos",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Integumentary", // acne
            "Musculoskeletal" // prosthetic joint infection
        ]
    },
    // 68) PSEUDOMONAS AERUGINOSA
    {
        category: "bacterium",
        name: "Pseudomonas aeruginosa",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 70,
        capsule: false,
        flagella: {
            presence: true, type: "polar", number: 1
        },
        pili: true,
        spores: false,
        exposure: "Environmental water sources, hospital devices, burn wounds",
        vaccine: "None (some experimental)",
        virulenceFactors: [
            {
                factorName: "Exotoxin A", diagramType: "exotoxinStar"
            },
            {
                factorName: "Pyocyanin", diagramType: "enzymeIcon"
            },
            {
                factorName: "Biofilm formation", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Greenish pigment",
                hemolysis: "beta",
                environment: "Aerobic"
            },
            {
                mediumName: "MacConkey agar",
                colonyColor: "Colorless (non-lactose)",
                hemolysis: "none",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "Beta",
        airRequirements: "Aerobic",
        differentiationTests: "Oxidase-positive, Grape-like odor, Produces pyocyanin (blue-green pigment)",
        affectedCellTypes: "Respiratory epithelium, skin, cornea",
        associatedDiseases: "Pneumonia (CF), wound/burn infections, otitis externa, sepsis",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-pos",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Lower)", // CF pneumonia
            "Integumentary", // burn/wound infections
            "Ears (Outer/Middle)", // otitis externa
            "Hematologic/Systemic" // sepsis
        ]
    },
    // 69) RICKETTSIA PROWAZEKII
    {
        category: "bacterium",
        name: "Rickettsia prowazekii",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Human body louse feces, scratch into bite",
        vaccine: "None (historical vaccine not widely used)",
        virulenceFactors: [
            {
                factorName: "Intracellular survival", diagramType: "biofilmNet"
            },
            {
                factorName: "Endothelial cell infection", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "Cell culture or animal inoculation",
                colonyColor: "N/A",
                hemolysis: null,
                environment: "Obligate intracellular"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate intracellular",
        differentiationTests: "Weil-Felix test (cross-reacts with Proteus OX19), PCR, Serology (IgM/IgG)",
        affectedCellTypes: "Endothelial cells",
        associatedDiseases: "Epidemic typhus (louse-borne)",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg", // typically not used in rickettsia
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Hematologic/Systemic" // epidemic typhus is systemic
        ]
    },
    // 70) RICKETTSIA RICKETTSII
    {
        category: "bacterium",
        name: "Rickettsia rickettsii",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Tick bites (Dermacentor) in wooded areas",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Intracellular survival", diagramType: "biofilmNet"
            },
            {
                factorName: "Endothelial damage", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Cell culture or animal inoculation",
                colonyColor: "N/A",
                hemolysis: null,
                environment: "Obligate intracellular"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate intracellular",
        differentiationTests: "Weil-Felix test (Proteus OX2 & OX19), Serology, PCR",
        affectedCellTypes: "Endothelial cells",
        associatedDiseases: "Rocky Mountain spotted fever",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Hematologic/Systemic" // vasculitis, spotted fever
        ]
    },
    // 71) SALMONELLA BONGORI
    {
        category: "bacterium",
        name: "Salmonella bongori",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 6
        },
        pili: true,
        spores: false,
        exposure: "Animal GI (reptiles, birds), contaminated food",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Endotoxin", diagramType: "lpsChain"
            },
            {
                factorName: "Invasion factors", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Colorless (non-lactose)",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "H2S production, Motile, Typically doesn’t ferment lactose",
        affectedCellTypes: "Intestinal epithelium",
        associatedDiseases: "Gastroenteritis",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-var",
            coagulase: "test-neg",
            h2s: "test-pos",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal"
        ]
    },
    // 72) SALMONELLA ENTERICA
    {
        category: "bacterium",
        name: "Salmonella enterica",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 6
        },
        pili: true,
        spores: false,
        exposure: "Contaminated poultry, eggs, produce",
        vaccine: "None (except Typhi variants)",
        virulenceFactors: [
            {
                factorName: "Type III secretion system", diagramType: "typeThreeNeedle"
            },
            {
                factorName: "Invasion proteins", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Colorless (non-lactose)",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "H2S production (black on HE agar), Motile, Lysine decarboxylase+",
        affectedCellTypes: "M cells, intestinal epithelium",
        associatedDiseases: "Gastroenteritis, sometimes typhoid-like fevers",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-pos",
            coagulase: "test-neg",
            h2s: "test-pos",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal",
            "Hematologic/Systemic" // if invasive
        ]
    },
    // 73) SALMONELLA TYPHI
    {
        category: "bacterium",
        name: "Salmonella Typhi",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: true,
        flagella: {
            presence: true, type: "peritrichous", number: 6
        },
        pili: true,
        spores: false,
        exposure: "Fecal-oral, contaminated water (human-only reservoir)",
        vaccine: "Yes (oral live attenuated or parenteral polysaccharide)",
        virulenceFactors: [
            {
                factorName: "Vi capsule", diagramType: "largeCapsuleGlow"
            },
            {
                factorName: "Endotoxin", diagramType: "lpsChain"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Colorless (non-lactose)",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "H2S production, Widal test (agglutinins), Motile, Lysine decarboxylase+",
        affectedCellTypes: "Intestinal epithelium, M cells",
        associatedDiseases: "Typhoid fever",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-pos",
            coagulase: "test-neg",
            h2s: "test-pos",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal",
            "Hematologic/Systemic" // can become systemic
        ]
    },
    // 74) SARCINA VENTRICULI
    {
        category: "bacterium",
        name: "Sarcina ventriculi",
        morphology: "cocci",
        arrangement: "octets",
        shapeDetail: "staphylococciCluster",
        gramStain: "positive",
        cellWidth: 40,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Gastric environment (acid-tolerant), unclear transmission",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Acid tolerance", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "Acidic media",
                colonyColor: "Yellowish",
                hemolysis: "none",
                environment: "Anaerobic or microaerophilic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Anaerobic or microaerophilic",
        differentiationTests: "Gram-positive cocci in packets of 8, grows in low pH environment",
        affectedCellTypes: null,
        associatedDiseases: "Rare gastric issues",

        specialTests: {
            catalase: "test-neg", // or variable
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal"
        ]
    },
    // 75) SERRATIA MARCESCENS
    {
        category: "bacterium",
        name: "Serratia marcescens",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 4
        },
        pili: true,
        spores: false,
        exposure: "Hospital environment, damp surfaces, IV solutions",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Red pigment production", diagramType: "exotoxinStar"
            },
            {
                factorName: "Biofilm formation", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Red center or colorless",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "DNAse-positive, Gelatinase-positive, Lactose non-fermenter or late fermenter",
        affectedCellTypes: "Respiratory tract, urinary tract",
        associatedDiseases: "Nosocomial infections, UTIs, pneumonia",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-pos",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-var", // sometimes delayed
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Urogenital", // UTIs
            "Respiratory (Lower)", // pneumonia
            "Hematologic/Systemic" // nosocomial bloodstream infections
        ]
    },
    // 76) SHIGELLA BOYDII
    {
        category: "bacterium",
        name: "Shigella boydii",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Fecal-oral (contaminated food, water)",
        vaccine: "None (research trials)",
        virulenceFactors: [
            {
                factorName: "Shiga toxin", diagramType: "exotoxinStar"
            },
            {
                factorName: "Actin-based motility", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Colorless (non-lactose)",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Non-motile, Lactose non-fermenter, H2S negative",
        affectedCellTypes: "Colon epithelial cells",
        associatedDiseases: "Bacillary dysentery",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal"
        ]
    },
    // 77) SHIGELLA DYSENTERIAE
    {
        category: "bacterium",
        name: "Shigella dysenteriae",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Fecal-oral, poor sanitation",
        vaccine: "None (under development)",
        virulenceFactors: [
            {
                factorName: "Shiga toxin", diagramType: "exotoxinStar"
            },
            {
                factorName: "Invasion plasmid antigens", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Colorless",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Non-motile, Lactose non-fermenter, H2S-negative, Mannitol fermentation varies",
        affectedCellTypes: "Colon epithelial cells",
        associatedDiseases: "Bacillary dysentery",

        specialTests: {
            catalase: "test-pos", // typically for Enterobacteriaceae
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal"
        ]
    },
    // 78) SHIGELLA FLEXNERI
    {
        category: "bacterium",
        name: "Shigella flexneri",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Fecal-oral, contaminated water",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Actin polymerization", diagramType: "biofilmNet"
            },
            {
                factorName: "Shiga-like toxin", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Colorless",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Non-motile, Lactose non-fermenter, local motility via actin polymerization",
        affectedCellTypes: "Colonic epithelial cells",
        associatedDiseases: "Shigellosis (dysentery)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal"
        ]
    },
    // 79) SHIGELLA SONNEI
    {
        category: "bacterium",
        name: "Shigella sonnei",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Fecal-oral, daycares, schools",
        vaccine: "None (under research)",
        virulenceFactors: [
            {
                factorName: "Shiga-like toxin", diagramType: "exotoxinStar"
            },
            {
                factorName: "Intracellular spread", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Colorless",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Non-motile, Lactose non-fermenter (can slowly ferment lactose), H2S-negative",
        affectedCellTypes: "Colonic epithelial cells",
        associatedDiseases: "Shigellosis (diarrhea, dysentery)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg", // slow fermentation in some
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal"
        ]
    },
    // 80) STAPHYLOCOCCUS AUREUS
    {
        category: "bacterium",
        name: "Staphylococcus aureus",
        morphology: "cocci",
        arrangement: "staphylococci",
        shapeDetail: "staphylococciCluster",
        gramStain: "positive",
        cellWidth: 40,
        cellHeight: 40,
        capsule: true,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Skin flora, contact, nasal carriage",
        vaccine: "None (some experimental for MRSA)",
        virulenceFactors: [
            {
                factorName: "Protein A", diagramType: "proteinAIcon"
            },
            {
                factorName: "TSST-1 toxin", diagramType: "exotoxinStar"
            },
            {
                factorName: "Coagulase", diagramType: "coagulaseSparkle"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Golden yellow",
                hemolysis: "beta",
                environment: "Facultative anaerobe"
            },
            {
                mediumName: "Mannitol salt agar",
                colonyColor: "Yellow colonies",
                hemolysis: null,
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "Beta",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Catalase-positive, Coagulase-positive, DNase-positive, Mannitol-fermenter",
        affectedCellTypes: "Skin, mucosal epithelial cells",
        associatedDiseases: "Skin infections, toxic shock syndrome, endocarditis",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-pos", // hallmark
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg", // though it does have alpha- toxin
            lactose: "test-neg",
            sucrose: "test-var",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-var" // some strains
        },
        systemsAffected: [
            "Integumentary", // skin infections
            "Cardiovascular", // endocarditis
            "Hematologic/Systemic" // toxic shock
        ]
    },
    // 81) STAPHYLOCOCCUS EPIDERMIDIS
    {
        category: "bacterium",
        name: "Staphylococcus epidermidis",
        morphology: "cocci",
        arrangement: "staphylococci",
        shapeDetail: "staphylococciCluster",
        gramStain: "positive",
        cellWidth: 40,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Skin flora, contamination of medical devices",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Biofilm on devices", diagramType: "biofilmNet"
            },
            {
                factorName: "Polysaccharide intercellular adhesin", diagramType: "capsulePolysaccharide"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "White, non-hemolytic",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            },
            {
                mediumName: "Mannitol salt agar",
                colonyColor: "Pink (no mannitol fermentation)",
                hemolysis: null,
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Catalase-positive, Coagulase-negative, Novobiocin-sensitive",
        affectedCellTypes: "Skin, medical devices",
        associatedDiseases: "Prosthetic device infections, endocarditis",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-var",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-pos" // many S. epidermidis are urease+
        },
        systemsAffected: [
            "Integumentary", // skin flora
            "Cardiovascular" // endocarditis on prosthetic valves
        ]
    },
    // 82) STAPHYLOCOCCUS SAPROPHYTICUS
    {
        category: "bacterium",
        name: "Staphylococcus saprophyticus",
        morphology: "cocci",
        arrangement: "staphylococci",
        shapeDetail: "staphylococciCluster",
        gramStain: "positive",
        cellWidth: 40,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Genital flora, sexual activity",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Urease production", diagramType: "ureaseBubbles"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "White, non-hemolytic",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            },
            {
                mediumName: "Mannitol salt agar",
                colonyColor: "Pink or slight change",
                hemolysis: null,
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Catalase-positive, Coagulase-negative, Novobiocin-resistant",
        affectedCellTypes: "Urinary tract epithelium",
        associatedDiseases: "UTIs (especially in young women)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-var",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-pos"
        },
        systemsAffected: [
            "Urogenital" // UTIs
        ]
    },
    // 83) STENOTROPHOMONAS MALTOPHILIA
    {
        category: "bacterium",
        name: "Stenotrophomonas maltophilia",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "polar", number: 1
        },
        pili: true,
        spores: false,
        exposure: "Hospital environment, water, ventilators",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Multidrug resistance", diagramType: "enzymeIcon"
            },
            {
                factorName: "Biofilm formation", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Yellowish, lavender-greenish",
                hemolysis: "none",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic",
        differentiationTests: "Catalase-positive, Oxidase-negative, Grows on MacConkey (pale colonies)",
        affectedCellTypes: "Respiratory epithelium",
        associatedDiseases: "Nosocomial pneumonia, bloodstream infections",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-pos",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Lower)",
            "Hematologic/Systemic" // bloodstream infections
        ]
    },
    // 84) STREPTOBACILLUS MONILIFORMIS
    {
        category: "bacterium",
        name: "Streptobacillus moniliformis",
        morphology: "bacillus",
        arrangement: "strepto",
        shapeDetail: "bacillusChain",
        gramStain: "negative",
        cellWidth: 20,
        cellHeight: 90,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Rat bites, contaminated food or water",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Rat-bite fever agent", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Stringy filaments",
                hemolysis: "none",
                environment: "Microaerophilic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Microaerophilic",
        differentiationTests: "Gram-negative pleomorphic rods in chains, Serum or ascitic fluid required for growth",
        affectedCellTypes: "Soft tissue, bloodstream",
        associatedDiseases: "Rat-bite fever (Haverhill fever)",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Integumentary", // bite
            "Hematologic/Systemic" // fever, possible sepsis
        ]
    },
    // 85) STREPTOCOCCUS AGALACTIAE (GROUP B)
    {
        category: "bacterium",
        name: "Streptococcus agalactiae (Group B)",
        morphology: "cocci",
        arrangement: "streptococci",
        shapeDetail: "streptococciChain",
        gramStain: "positive",
        cellWidth: 35,
        cellHeight: 35,
        capsule: true,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Vaginal colonization, vertical transmission to neonate",
        vaccine: "None (research ongoing)",
        virulenceFactors: [
            {
                factorName: "Polysaccharide capsule", diagramType: "largeCapsuleGlow"
            },
            {
                factorName: "C5a peptidase", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Narrow beta hemolysis",
                hemolysis: "beta",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "Beta",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "CAMP test-positive, Hippurate hydrolysis-positive, Bacitracin-resistant",
        affectedCellTypes: "Neonatal and maternal epithelium",
        associatedDiseases: "Neonatal sepsis, meningitis, postpartum infections",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-var",
            sucrose: "test-pos",
            oxidase: "test-neg",
            pyr: "test-neg", // group B is PYR-neg
            urease: "test-neg"
        },
        systemsAffected: [
            "Hematologic/Systemic", // neonatal sepsis
            "Nervous (Central)", // neonatal meningitis
            "Female Reproductive" // postpartum infections
        ]
    },
    // 86) STREPTOCOCCUS BOVIS (GROUP D) [STREPTOCOCCUS GALLOLYTICUS]
    {
        category: "bacterium",
        name: "Streptococcus bovis (Group D)",
        morphology: "cocci",
        arrangement: "streptococci",
        shapeDetail: "streptococciChain",
        gramStain: "positive",
        cellWidth: 35,
        cellHeight: 35,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Normal colon flora, translocation in colon lesions",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Association with colon cancer", diagramType: "exotoxinStar"
            },
            {
                factorName: "Polysaccharides", diagramType: "capsulePolysaccharide"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Small, gamma hemolysis",
                hemolysis: "gamma",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "Gamma",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Bile-esculin positive, PYR-negative, Does not grow in 6.5% NaCl",
        affectedCellTypes: "Gut epithelium",
        associatedDiseases: "Endocarditis, bacteremia, possible link with colon malignancies",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-var",
            sucrose: "test-pos",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Cardiovascular", // endocarditis
            "Hematologic/Systemic" // bacteremia
            // Also "Gastrointestinal" link (colon lesions)
        ]
    },
    // 87) STREPTOCOCCUS MUTANS (VIRIDANS)
    {
        category: "bacterium",
        name: "Streptococcus mutans (Viridans)",
        morphology: "cocci",
        arrangement: "streptococci",
        shapeDetail: "streptococciChain",
        gramStain: "positive",
        cellWidth: 35,
        cellHeight: 35,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Normal oral flora, high-sugar diets",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Glucans formation", diagramType: "biofilmNet"
            },
            {
                factorName: "Biofilm on teeth", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Small, dull",
                hemolysis: "alpha or gamma",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "Alpha or gamma",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Catalase-negative, Optochin-resistant, Does not bile-esculin, Part of normal oral flora",
        affectedCellTypes: "Dental enamel, oral epithelium",
        associatedDiseases: "Dental caries, subacute endocarditis",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-var",
            sucrose: "test-pos", // used for glucan formation
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Oral cavity", // caries
            "Cardiovascular" // endocarditis
        ]
    },
    // 88) STREPTOCOCCUS PNEUMONIAE
    {
        category: "bacterium",
        name: "Streptococcus pneumoniae",
        morphology: "cocci",
        arrangement: "diplo",
        shapeDetail: "diplococci",
        gramStain: "positive",
        cellWidth: 35,
        cellHeight: 35,
        capsule: true,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Respiratory droplets, normal nasopharynx flora",
        vaccine: "Yes, polysaccharide (PPSV23) and conjugate (PCV13) vaccines",
        virulenceFactors: [
            {
                factorName: "Polysaccharide capsule", diagramType: "largeCapsuleGlow"
            },
            {
                factorName: "Pneumolysin", diagramType: "pneumolysinSpark"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Greenish (alpha hemolysis)",
                hemolysis: "alpha",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "Alpha",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Optochin-sensitive, Bile solubility positive, Quellung reaction positive",
        affectedCellTypes: "Respiratory epithelium, meninges",
        associatedDiseases: "Pneumonia, meningitis, otitis media",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-var",
            sucrose: "test-var",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Lower)", // pneumonia
            "Nervous (Central)", // meningitis
            "Respiratory (Upper)" // otitis media
        ]
    },
    // 89) STREPTOCOCCUS PYOGENES (GROUP A)
    {
        category: "bacterium",
        name: "Streptococcus pyogenes (Group A)",
        morphology: "cocci",
        arrangement: "streptococci",
        shapeDetail: "streptococciChain",
        gramStain: "positive",
        cellWidth: 35,
        cellHeight: 35,
        capsule: true,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Respiratory droplets, skin contact",
        vaccine: "None (research ongoing)",
        virulenceFactors: [
            {
                factorName: "M protein", diagramType: "exotoxinStar"
            },
            {
                factorName: "Streptolysin O", diagramType: "slOExplosion"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Small, translucent",
                hemolysis: "beta",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "Beta",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Catalase-negative, Bacitracin-sensitive, PYR-positive",
        affectedCellTypes: "Epithelial cells, pharyngeal mucosa",
        associatedDiseases: "Pharyngitis, cellulitis, necrotizing fasciitis",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-var",
            sucrose: "test-pos", // many streps can ferment sucrose
            oxidase: "test-neg",
            pyr: "test-pos",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Upper)", // pharyngitis
            "Integumentary", // cellulitis
            "Musculoskeletal" // necrotizing fasciitis (soft tissue)
        ]
    },
    // 90) TREPONEMA PALLIDUM
    {
        category: "bacterium",
        name: "Treponema pallidum",
        morphology: "spirochete",
        arrangement: "single",
        shapeDetail: "spirocheteWaves",
        gramStain: "negative",
        cellWidth: 15,
        cellHeight: 100,
        capsule: false,
        flagella: {
            presence: true, type: "endoflagella", number: 3
        },
        pili: false,
        spores: false,
        exposure: "Sexual contact, transplacental, blood",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Immune evasion", diagramType: "exotoxinStar"
            },
            {
                factorName: "Tissue invasion", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Cannot be grown on artificial media",
                colonyColor: "N/A",
                hemolysis: null,
                environment: "Obligate parasitic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate parasitic",
        differentiationTests: "Dark-field microscopy, Serology (RPR, VDRL, FTA-ABS)",
        affectedCellTypes: "Connective tissue, endothelial cells",
        associatedDiseases: "Syphilis",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Integumentary", // chancre, rash
            "Cardiovascular", // tertiary syphilis (aortitis)
            "Nervous (Central)" // neurosyphilis
        ]
    },
    // 91) TROPHERYMA WHIPPLEI
    {
        category: "bacterium",
        name: "Tropheryma whipplei",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "longRod",
        gramStain: "positive",
        cellWidth: 25,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Unknown, possibly fecal-oral or environment, rare",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Intracellular survival", diagramType: "biofilmNet"
            },
            {
                factorName: "PAS-positive granules", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "Not typically cultured",
                colonyColor: "N/A",
                hemolysis: null,
                environment: "Obligate intracellular or special culture"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate intracellular",
        differentiationTests: "PAS-positive macrophages in intestinal biopsy, PCR",
        affectedCellTypes: "Intestinal epithelium",
        associatedDiseases: "Whipple's disease (malabsorption)",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal",
            "Hematologic/Systemic" // can cause systemic symptoms (joints, etc.)
        ]
    },
    // 92) UREAPLASMA UREALYTICUM
    {
        category: "bacterium",
        name: "Ureaplasma urealyticum",
        morphology: "pleomorphic",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "none",
        cellWidth: 20,
        cellHeight: 20,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Sexual transmission, vertical",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Urease enzyme", diagramType: "ureaseBubbles"
            }
        ],
        growthMedia: [
            {
                mediumName: "A8 agar or specialized",
                colonyColor: "Tiny, fried-egg",
                hemolysis: null,
                environment: "Facultative"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Urease-positive, lacks cell wall, grows in specialized media, often diagnosed by PCR",
        affectedCellTypes: "Urogenital epithelium",
        associatedDiseases: "Urethritis, infertility",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-pos"
        },
        systemsAffected: [
            "Urogenital"
        ]
    },
    // 93) VEILLONELLA PARVULA
    {
        category: "bacterium",
        name: "Veillonella parvula",
        morphology: "cocci",
        arrangement: "pairs",
        shapeDetail: "diplococci",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 30,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Normal oral and GI flora",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Acid utilization", diagramType: "enzymeIcon"
            },
            {
                factorName: "Oral biofilm synergy", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Anaerobic blood agar",
                colonyColor: "Small, translucent",
                hemolysis: "none",
                environment: "Strict anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Anaerobic",
        differentiationTests: "Catalase-positive, Lactate utilization, Part of normal oral flora",
        affectedCellTypes: "Oral, GI epithelium",
        associatedDiseases: "Oral infections, bacteremia (rare)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Oral cavity",
            "Hematologic/Systemic" // rare bacteremia
        ]
    },
    // 94) VIBRIO ALGINOLYTICUS
    {
        category: "bacterium",
        name: "Vibrio alginolyticus",
        morphology: "vibrio",
        arrangement: "single",
        shapeDetail: "vibrioCurve",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 50,
        capsule: false,
        flagella: {
            presence: true, type: "polar", number: 1
        },
        pili: true,
        spores: false,
        exposure: "Seawater, wounds in marine environments",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Hemolysins", diagramType: "exotoxinStar"
            },
            {
                factorName: "Wound infections in sea water", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "TCBS agar",
                colonyColor: "Green or yellow",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Oxidase-positive, Halophilic, Grows in high-salt environment",
        affectedCellTypes: "Skin, soft tissue",
        associatedDiseases: "Wound infections, ear infections",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-var", // can be fermenter or not
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Integumentary", // wound infections
            "Ears (Outer/Middle)" // possible ear infection
        ]
    },
    // 95) VIBRIO CHOLERAE
    {
        category: "bacterium",
        name: "Vibrio cholerae",
        morphology: "vibrio",
        arrangement: "single",
        shapeDetail: "vibrioCurve",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 50,
        capsule: false,
        flagella: {
            presence: true, type: "polar", number: 1
        },
        pili: true,
        spores: false,
        exposure: "Fecal-oral, contaminated water (feces)",
        vaccine: "Yes, oral killed or live-attenuated (limited availability)",
        virulenceFactors: [
            {
                factorName: "Cholera toxin", diagramType: "exotoxinStar"
            },
            {
                factorName: "Toxin-coregulated pilus", diagramType: "pili"
            }
        ],
        growthMedia: [
            {
                mediumName: "TCBS agar",
                colonyColor: "Yellow (sucrose fermenter)",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Oxidase-positive, Agglutination with O1/O139 antisera, Grows in alkaline media",
        affectedCellTypes: "Intestinal epithelial cells",
        associatedDiseases: "Cholera (rice-water diarrhea)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-pos", // key on TCBS
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal"
        ]
    },
    // 96) VIBRIO PARAHAEMOLYTICUS
    {
        category: "bacterium",
        name: "Vibrio parahaemolyticus",
        morphology: "vibrio",
        arrangement: "single",
        shapeDetail: "vibrioCurve",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 50,
        capsule: false,
        flagella: {
            presence: true, type: "polar", number: 1
        },
        pili: true,
        spores: false,
        exposure: "Raw or undercooked seafood (especially shellfish)",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Thermostable direct hemolysin", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "TCBS agar",
                colonyColor: "Green (no sucrose)",
                hemolysis: "beta",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "Beta",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Oxidase-positive, Halophile, Common in seafood (shellfish)",
        affectedCellTypes: "Intestinal epithelium",
        associatedDiseases: "Gastroenteritis, wound infections",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg", // negative on TCBS => green colonies
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal",
            "Integumentary" // wound infections
        ]
    },
    // 97) VIBRIO VULNIFICUS
    {
        category: "bacterium",
        name: "Vibrio vulnificus",
        morphology: "vibrio",
        arrangement: "single",
        shapeDetail: "vibrioCurve",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 50,
        capsule: true,
        flagella: {
            presence: true, type: "polar", number: 1
        },
        pili: false,
        spores: false,
        exposure: "Raw oysters, seawater contact in wounds",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Capsule", diagramType: "largeCapsuleGlow"
            },
            {
                factorName: "Cytolytic toxins", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "TCBS agar",
                colonyColor: "Green or bluish",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Oxidase-positive, Halophilic, Associated with raw oysters",
        affectedCellTypes: "Skin, bloodstream",
        associatedDiseases: "Wound infections, septicemia",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Integumentary", // wound infections
            "Hematologic/Systemic" // septicemia
        ]
    },
    // 98) WOLINELLA SUCCINOGENES
    {
        category: "bacterium",
        name: "Wolinella succinogenes",
        morphology: "spirilla",
        arrangement: "single",
        shapeDetail: "spirillaCurve",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 50,
        capsule: false,
        flagella: {
            presence: true, type: "polar", number: 1
        },
        pili: false,
        spores: false,
        exposure: "Gut of ruminants, possible oral/gut in humans",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Anaerobic respiration", diagramType: "enzymeIcon"
            },
            {
                factorName: "H2/CO2 metabolism", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Anaerobic media",
                colonyColor: "Grayish",
                hemolysis: "none",
                environment: "Strict or microaerophilic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Strict or microaerophilic",
        differentiationTests: "Oxidase-positive, Nitrate reduction, Rarely pathogenic in humans",
        affectedCellTypes: "Gut epithelium",
        associatedDiseases: "Rarely pathogenic; possible gut involvement",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal"
        ]
    },
    // 99) YERSINIA ENTEROCOLITICA
    {
        category: "bacterium",
        name: "Yersinia enterocolitica",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: true,
        spores: false,
        exposure: "Pork, contaminated food, water (cold growth)",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Invasion of M cells", diagramType: "biofilmNet"
            },
            {
                factorName: "Yops proteins", diagramType: "typeThreeNeedle"
            }
        ],
        growthMedia: [
            {
                mediumName: "CIN agar",
                colonyColor: "Bull’s-eye colonies",
                hemolysis: "none",
                environment: "Facultative anaerobe, cold growth"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Oxidase-negative, Urease-positive, Grows at cooler temps (4°C enrichment)",
        affectedCellTypes: "Intestinal epithelium",
        associatedDiseases: "Yersiniosis (gastroenteritis, mesenteric adenitis)",

        specialTests: {
            catalase: "test-pos", // typical for Enterobacteriaceae
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-pos"
        },
        systemsAffected: [
            "Gastrointestinal", // enterocolitis
            "Lymphatic" // mesenteric lymph nodes
        ]
    },
    // 100) YERSINIA PESTIS
    {
        category: "bacterium",
        name: "Yersinia pestis",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 40,
        capsule: true,
        flagella: {
            presence: false
        },
        pili: true,
        spores: false,
        exposure: "Flea bite from infected rodents, respiratory droplets (pneumonic)",
        vaccine: "Yes (killed or live attenuated in high-risk lab workers)",
        virulenceFactors: [
            {
                factorName: "Fraction 1 capsule (F1)", diagramType: "largeCapsuleGlow"
            },
            {
                factorName: "Yops proteins", diagramType: "typeThreeNeedle"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Pinpoint, gray-white",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Bipolar 'safety pin' staining (Wayson stain), Catalase-positive, Non-motile at 37°C",
        affectedCellTypes: "Macrophages, lymph tissue",
        associatedDiseases: "Plague (bubonic, septicemic, pneumonic)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Lymphatic", // bubonic plague
            "Hematologic/Systemic", // septicemic plague
            "Respiratory (Lower)" // pneumonic plague
        ]
    },
    // 101) SALMONELLA TYPHIMURIUM
    {
        category: "bacterium",
        name: "Salmonella Typhimurium",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 6
        },
        pili: true,
        spores: false,
        exposure: "Contaminated poultry, rodents, labs",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Endotoxin (LPS)", diagramType: "lpsChain"
            },
            {
                factorName: "Type III secretion", diagramType: "typeThreeNeedle"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Colorless",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "H2S-positive, Motile, Lysine decarboxylase+, often associated with rodents/poultry",
        affectedCellTypes: "Intestinal epithelium",
        associatedDiseases: "Gastroenteritis",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-pos",
            coagulase: "test-neg",
            h2s: "test-pos",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal"
        ]
    },
    // 102) SALMONELLA ENTERITIDIS
    {
        category: "bacterium",
        name: "Salmonella Enteritidis",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 6
        },
        pili: true,
        spores: false,
        exposure: "Contaminated eggs, poultry, reptile contact",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Endotoxin (LPS)", diagramType: "lpsChain"
            },
            {
                factorName: "Invasion proteins", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Colorless (non-lactose)",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "H2S production (black colonies on HE agar), Motile, Infects poultry/eggs commonly",
        affectedCellTypes: "Intestinal epithelium",
        associatedDiseases: "Gastroenteritis",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-pos",
            coagulase: "test-neg",
            h2s: "test-pos",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal"
        ]
    },
    // 103) SALMONELLA PARATYPHI
    {
        category: "bacterium",
        name: "Salmonella Paratyphi",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: true,
        flagella: {
            presence: true, type: "peritrichous", number: 6
        },
        pili: true,
        spores: false,
        exposure: "Fecal-oral, contaminated water/food (human reservoir)",
        vaccine: "None specifically for Paratyphi (Typhi vaccines partial cross-protection)",
        virulenceFactors: [
            {
                factorName: "Vi capsule (some strains)", diagramType: "largeCapsuleGlow"
            },
            {
                factorName: "Endotoxin", diagramType: "lpsChain"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Colorless",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "H2S variable, Widal test, Motile, Mildly invasive compared to S. Typhi",
        affectedCellTypes: "Intestinal epithelium",
        associatedDiseases: "Paratyphoid fever",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-pos",
            coagulase: "test-neg",
            h2s: "test-var",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal",
            "Hematologic/Systemic" // can cause systemic febrile illness
        ]
    },
    // 104) BURKHOLDERIA PSEUDOMALLEI
    {
        category: "bacterium",
        name: "Burkholderia pseudomallei",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: true,
        flagella: {
            presence: true, type: "polar", number: 1
        },
        pili: true,
        spores: false,
        exposure: "Soil, water in Southeast Asia, Northern Australia",
        vaccine: "None (human) - experimental in labs",
        virulenceFactors: [
            {
                factorName: "Type III/VI secretion systems", diagramType: "typeThreeNeedle"
            },
            {
                factorName: "Intracellular survival", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Ashdown's agar",
                colonyColor: "Wrinkled, violet or purple",
                hemolysis: "variable",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "Variable",
        airRequirements: "Aerobic",
        differentiationTests: "Oxidase-positive, Motile, Grows in soil/water in SE Asia, 'Safety pin' bipolar stain",
        affectedCellTypes: "Multiple tissues, lungs",
        associatedDiseases: "Melioidosis (pneumonia, abscesses)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-var",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Lower)", // pneumonia
            "Hematologic/Systemic", // can form abscesses throughout body
            "Integumentary" // possible cutaneous involvement
        ]
    },
    // 105) BURKHOLDERIA CENOCEPACIA
    {
        category: "bacterium",
        name: "Burkholderia cenocepacia",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "polar", number: 1
        },
        pili: true,
        spores: false,
        exposure: "Environment, hospital settings, particularly CF patients",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Biofilm formation", diagramType: "biofilmNet"
            },
            {
                factorName: "Multiple efflux pumps", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Colorless or slightly pink",
                hemolysis: "none",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic",
        differentiationTests: "Oxidase-positive, Motile, CF patient pathogen, difficult to treat",
        affectedCellTypes: "Lungs (CF patients)",
        associatedDiseases: "Cepacia syndrome, pneumonia",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-pos",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Lower)" // CF pneumonia
        ]
    },
    // 106) BURKHOLDERIA MULTIVORANS
    {
        category: "bacterium",
        name: "Burkholderia multivorans",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "polar", number: 1
        },
        pili: true,
        spores: false,
        exposure: "Part of Burkholderia cepacia complex in CF patients",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Biofilm formation", diagramType: "biofilmNet"
            },
            {
                factorName: "Multidrug resistance", diagramType: "enzymeIcon"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Colorless or pale",
                hemolysis: "none",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic",
        differentiationTests: "Oxidase-positive, Motile, Part of Burkholderia cepacia complex",
        affectedCellTypes: "Lung epithelium",
        associatedDiseases: "Pulmonary infection (esp. in CF patients)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-pos",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Lower)" // CF lung involvement
        ]
    },
    // 107) BRUCELLA MELITENSIS
    {
        category: "bacterium",
        name: "Brucella melitensis",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Goats, sheep, unpasteurized milk/cheese",
        vaccine: "None (human); used in animals",
        virulenceFactors: [
            {
                factorName: "Intracellular survival", diagramType: "biofilmNet"
            },
            {
                factorName: "LPS variations", diagramType: "lpsChain"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Small, translucent",
                hemolysis: "none",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic",
        differentiationTests: "Oxidase-positive, Urease-positive, Serology (milk ring test), Infects goats/sheep",
        affectedCellTypes: "Macrophages",
        associatedDiseases: "Brucellosis (Malta fever)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-var", // some Brucella produce H2S
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-pos"
        },
        systemsAffected: [
            "Hematologic/Systemic", // undulant fever
            "Reticuloendothelial", // spleen, liver involvement
            "Musculoskeletal" // can cause arthralgias
        ]
    },
    // 108) BRUCELLA SUIS
    {
        category: "bacterium",
        name: "Brucella suis",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 25,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Pigs, wild boar, unpasteurized pork products",
        vaccine: "None (human); veterinary vaccines",
        virulenceFactors: [
            {
                factorName: "Intracellular survival", diagramType: "biofilmNet"
            },
            {
                factorName: "LPS variations", diagramType: "lpsChain"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Small, convex",
                hemolysis: "none",
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Aerobic",
        differentiationTests: "Oxidase-positive, Urease-positive, Infects pigs; Serology for brucellosis",
        affectedCellTypes: "Macrophages",
        associatedDiseases: "Brucellosis (pigs source), undulant fever",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-var",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-pos",
            pyr: "test-neg",
            urease: "test-pos"
        },
        systemsAffected: [
            "Hematologic/Systemic",
            "Reticuloendothelial",
            "Musculoskeletal"
        ]
    },
    // 109) ANAPLASMA PHAGOCYTOPHILUM
    {
        category: "bacterium",
        name: "Anaplasma phagocytophilum",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 20,
        cellHeight: 30,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Ixodes tick (same as Lyme), northeastern US",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Intracellular survival in granulocytes", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Cell culture or tick cell lines",
                colonyColor: "N/A",
                hemolysis: null,
                environment: "Obligate intracellular"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate intracellular",
        differentiationTests: "Morulae in granulocytes, PCR, Serology, Tick-borne (Ixodes)",
        affectedCellTypes: "Neutrophils",
        associatedDiseases: "Human granulocytic anaplasmosis",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Hematologic/Systemic", // febrile illness
            "Lymphatic" // can affect WBCs
        ]
    },
    // 110) EHRLICHIA CHAFFEENSIS
    {
        category: "bacterium",
        name: "Ehrlichia chaffeensis",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 20,
        cellHeight: 30,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Lone Star tick (Amblyomma), southeastern US",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Intracellular survival in monocytes", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Cell culture or tick cell lines",
                colonyColor: "N/A",
                hemolysis: null,
                environment: "Obligate intracellular"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate intracellular",
        differentiationTests: "Morulae in monocytes, PCR, Serology, Tick-borne",
        affectedCellTypes: "Monocytes",
        associatedDiseases: "Human monocytic ehrlichiosis",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Hematologic/Systemic",
            "Lymphatic"
        ]
    },
    // 111) MYCOBACTERIUM AVIUM
    {
        category: "bacterium",
        name: "Mycobacterium avium",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "longRod",
        gramStain: "positive",
        cellWidth: 25,
        cellHeight: 70,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Environment (water, soil), inhalation or ingestion",
        vaccine: "None (BCG not fully protective)",
        virulenceFactors: [
            {
                factorName: "Mycolic acids", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Lowenstein-Jensen",
                colonyColor: "Slow-growing, buff",
                hemolysis: null,
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate aerobe",
        differentiationTests: "Acid-fast staining, Usually part of MAC (Mycobacterium avium complex)",
        affectedCellTypes: "Macrophages",
        associatedDiseases: "Disseminated infection in AIDS patients",

        specialTests: {
            catalase: "test-pos", // often heat-stable
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg" // can be variable
        },
        systemsAffected: [
            "Respiratory (Lower)",
            "Hematologic/Systemic" // disseminated MAC
        ]
    },
    // 112) MYCOBACTERIUM INTRACELLULARE
    {
        category: "bacterium",
        name: "Mycobacterium intracellulare",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "longRod",
        gramStain: "positive",
        cellWidth: 25,
        cellHeight: 70,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Environment, part of MAC with M. avium",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Mycolic acids", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Lowenstein-Jensen",
                colonyColor: "Slow-growing, buff",
                hemolysis: null,
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate aerobe",
        differentiationTests: "Part of MAC, Acid-fast, clinically similar to M. avium",
        affectedCellTypes: "Macrophages",
        associatedDiseases: "Pulmonary infections (esp. in immunocompromised)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Lower)",
            "Hematologic/Systemic" // disseminated in AIDS
        ]
    },
    // 113) MYCOBACTERIUM SCROFULACEUM
    {
        category: "bacterium",
        name: "Mycobacterium scrofulaceum",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "longRod",
        gramStain: "positive",
        cellWidth: 25,
        cellHeight: 70,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Environment, infection via oropharynx",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Mycolic acids", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Lowenstein-Jensen",
                colonyColor: "Slow-growing",
                hemolysis: null,
                environment: "Aerobic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate aerobe",
        differentiationTests: "Acid-fast, Causes cervical lymphadenitis (scrofula) in children",
        affectedCellTypes: "Lymph nodes",
        associatedDiseases: "Scrofula (cervical lymphadenitis)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Lymphatic" // cervical lymph nodes
        ]
    },
    // 114) MYCOBACTERIUM MARINUM
    {
        category: "bacterium",
        name: "Mycobacterium marinum",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "longRod",
        gramStain: "positive",
        cellWidth: 25,
        cellHeight: 70,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Aquatic environments (fish tanks, swimming pools)",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Mycolic acids", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Lowenstein-Jensen",
                colonyColor: "Slow-growing",
                hemolysis: null,
                environment: "Aerobic, grows best at 30°C"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate aerobe",
        differentiationTests: "Acid-fast, Grows optimally at lower temp (30°C), Associated with aquatic environments",
        affectedCellTypes: "Skin, subcutaneous tissue",
        associatedDiseases: "Swimming pool (fish tank) granuloma",

        specialTests: {
            catalase: "test-pos", // variable
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Integumentary" // cutaneous granulomas
        ]
    },
    // 115) BORRELIA RECURRENTIS
    {
        category: "bacterium",
        name: "Borrelia recurrentis",
        morphology: "spirochete",
        arrangement: "single",
        shapeDetail: "spirocheteWaves",
        gramStain: "negative",
        cellWidth: 15,
        cellHeight: 80,
        capsule: false,
        flagella: {
            presence: true, type: "endoflagella", number: 10
        },
        pili: false,
        spores: false,
        exposure: "Body louse (epidemic) or soft ticks (endemic)",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Antigenic variation", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Not typically cultured",
                colonyColor: "N/A",
                hemolysis: null,
                environment: "Microaerophilic"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Microaerophilic",
        differentiationTests: "Dark-field or Giemsa stain, relapsing fever cycles, Serology",
        affectedCellTypes: "Blood cells",
        associatedDiseases: "Relapsing fever (louse-borne or tick-borne)",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Hematologic/Systemic" // recurrent fevers
        ]
    },
    // 116) CHLAMYDIA PSITTACI
    {
        category: "bacterium",
        name: "Chlamydia psittaci",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 40,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Birds (parrots), inhalation of dried feces",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Intracellular replication", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Cell culture only",
                colonyColor: "N/A",
                hemolysis: null,
                environment: "Obligate intracellular"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate intracellular",
        differentiationTests: "Serology, PCR, History of bird (parrot) exposure, MIF test",
        affectedCellTypes: "Respiratory epithelium",
        associatedDiseases: "Psittacosis (parrot fever)",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Respiratory (Lower)",
            "Hematologic/Systemic" // can become systemic
        ]
    },
    // 117) COXIELLA BURNETII
    {
        category: "bacterium",
        name: "Coxiella burnetii",
        morphology: "coccobacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 20,
        cellHeight: 30,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Inhalation of aerosols from farm animals, birth products (placenta)",
        vaccine: "None (human in US) - used in some countries for high-risk workers",
        virulenceFactors: [
            {
                factorName: "Spore-like resistance", diagramType: "enzymeIcon"
            },
            {
                factorName: "Intracellular survival", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Cell culture or embryonated eggs",
                colonyColor: "N/A",
                hemolysis: null,
                environment: "Obligate intracellular"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Obligate intracellular",
        differentiationTests: "Phase I & II antigens (IFA test), Serology, Exposure to farm animals",
        affectedCellTypes: "Phagolysosomes of macrophages",
        associatedDiseases: "Q fever (pneumonia, hepatitis)",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-neg",
            sucrose: "test-neg",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg" // variable in some references
        },
        systemsAffected: [
            "Respiratory (Lower)", // Q fever pneumonia
            "Hepatobiliary", // hepatitis
            "Hematologic/Systemic" // can be systemic
        ]
    },
    // 118) STREPTOCOCCUS SANGUINIS (VIRIDANS)
    {
        category: "bacterium",
        name: "Streptococcus sanguinis (Viridans)",
        morphology: "cocci",
        arrangement: "streptococci",
        shapeDetail: "streptococciChain",
        gramStain: "positive",
        cellWidth: 35,
        cellHeight: 35,
        capsule: false,
        flagella: {
            presence: false
        },
        pili: false,
        spores: false,
        exposure: "Oral flora, dental procedures",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Dextran-based adhesins", diagramType: "biofilmNet"
            }
        ],
        growthMedia: [
            {
                mediumName: "Blood agar",
                colonyColor: "Small, alpha hemolysis",
                hemolysis: "alpha",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "Alpha",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Catalase-negative, Optochin-resistant, Bile insoluble, Dental flora",
        affectedCellTypes: "Oral cavity, endocardium",
        associatedDiseases: "Subacute bacterial endocarditis (damaged valves)",

        specialTests: {
            catalase: "test-neg",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-neg",
            lecithinase: "test-neg",
            lactose: "test-var",
            sucrose: "test-pos",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Oral cavity",
            "Cardiovascular" // subacute endocarditis
        ]
    },
    // 119) ENTEROAGGREGATIVE ESCHERICHIA COLI
    {
        category: "bacterium",
        name: "Enteroaggregative Escherichia coli",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 4
        },
        pili: true,
        spores: false,
        exposure: "Fecal-oral, contaminated food/water",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Aggregative adherence fimbriae", diagramType: "pili"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Pink (lactose fermenter)",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Indole-positive, Lactose fermenter; characteristic 'stacked brick' adherence in cell culture",
        affectedCellTypes: "Intestinal epithelium",
        associatedDiseases: "Persistent diarrhea (esp. in children)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-pos",
            lecithinase: "test-neg",
            lactose: "test-pos",
            sucrose: "test-var",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal"
        ]
    },
    // 120) ENTEROHEMORRHAGIC ESCHERICHIA COLI (EHEC)
    {
        category: "bacterium",
        name: "Enterohemorrhagic Escherichia coli",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 4
        },
        pili: true,
        spores: false,
        exposure: "Undercooked beef, raw vegetables contaminated with manure",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Shiga-like toxin (Stx)", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "Sorbitol MacConkey agar",
                colonyColor: "Colorless (non-sorbitol fermenter; O157:H7)",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Indole-positive, SMAC agar (-) for sorbitol, Lactose fermenter on regular MacConkey",
        affectedCellTypes: "Intestinal epithelium",
        associatedDiseases: "Hemorrhagic colitis, HUS",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-pos",
            lecithinase: "test-neg",
            lactose: "test-pos", // on standard MacConkey
            sucrose: "test-var",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal", // hemorrhagic colitis
            "Hematologic/Systemic" // HUS (hemolytic uremic syndrome) 
        ]
    },
    // 121) ENTEROPATHOGENIC ESCHERICHIA COLI (EPEC)
    {
        category: "bacterium",
        name: "Enteropathogenic Escherichia coli",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 4
        },
        pili: true,
        spores: false,
        exposure: "Fecal-oral, contaminated food/water (infants)",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "Bundle-forming pili", diagramType: "pili"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Pink",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Lactose fermenter, Indole-positive; Attaching and effacing lesions (no Shiga toxin)",
        affectedCellTypes: "Intestinal epithelium",
        associatedDiseases: "Infantile diarrhea (developing countries)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-pos",
            lecithinase: "test-neg",
            lactose: "test-pos",
            sucrose: "test-var",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal"
        ]
    },
    // 122) ENTEROTOXIGENIC ESCHERICHIA COLI (ETEC)
    {
        category: "bacterium",
        name: "Enterotoxigenic Escherichia coli",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 4
        },
        pili: true,
        spores: false,
        exposure: "Fecal-oral, contaminated water, 'Traveler’s diarrhea'",
        vaccine: "None (some travelers’ prophylactic vaccines in progress)",
        virulenceFactors: [
            {
                factorName: "Heat-labile & Heat-stable toxins", diagramType: "exotoxinStar"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Pink (lactose fermenter)",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "None",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Indole-positive, Toxin assays; 'Traveler’s diarrhea'",
        affectedCellTypes: "Intestinal epithelium",
        associatedDiseases: "Watery diarrhea (traveler’s diarrhea)",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-pos",
            lecithinase: "test-neg",
            lactose: "test-pos",
            sucrose: "test-var",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Gastrointestinal"
        ]
    },
    // 123) UROPATHOGENIC ESCHERICHIA COLI (UPEC)
    {
        category: "bacterium",
        name: "Uropathogenic Escherichia coli",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: false,
        flagella: {
            presence: true, type: "peritrichous", number: 6
        },
        pili: true,
        spores: false,
        exposure: "Colon flora ascending the urethra",
        vaccine: "None (research stage)",
        virulenceFactors: [
            {
                factorName: "P fimbriae", diagramType: "pili"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Pink",
                hemolysis: "beta (sometimes)",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "Beta",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Indole-positive, Lactose fermenter, Typically 'Type 1' & 'P' pili for UT adhesion",
        affectedCellTypes: "Urinary tract epithelium",
        associatedDiseases: "Cystitis, pyelonephritis",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-pos",
            lecithinase: "test-neg",
            lactose: "test-pos",
            sucrose: "test-var",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Urogenital" // UTIs, kidney infection
        ]
    },
    {
        category: "bacterium",
        name: "Escherichia coli K1",
        morphology: "bacillus",
        arrangement: "single",
        shapeDetail: "ellipse",
        gramStain: "negative",
        cellWidth: 30,
        cellHeight: 60,
        capsule: true, // Polysialic acid capsule (K1 antigen)
        flagella: { presence: true, type: "peritrichous", number: 6 },
        pili: true, // includes P pili, Type 1 fimbriae
        spores: false,
        exposure: "Neonates (vertical transmission from maternal flora), GI flora",
        vaccine: "None",
        virulenceFactors: [
            {
                factorName: "K1 polysialic acid capsule",
                diagramType: "largeCapsuleGlow"
            },
            {
                factorName: "Pili/fimbriae (Type 1, P pili)",
                diagramType: "pili"
            }
        ],
        growthMedia: [
            {
                mediumName: "MacConkey agar",
                colonyColor: "Pink (lactose fermenter)",
                hemolysis: "none",
                environment: "Facultative anaerobe"
            },
            {
                mediumName: "Blood agar",
                colonyColor: "Grayish, sometimes beta-hemolytic",
                hemolysis: "beta (some strains)",
                environment: "Facultative anaerobe"
            }
        ],
        hemolysisPattern: "Beta (some strains)",
        airRequirements: "Facultative anaerobe",
        differentiationTests: "Indole-positive, Lactose fermenter (IMViC: ++--), K1 capsule detection",
        affectedCellTypes: "Neonatal meninges, urinary tract epithelium",
        associatedDiseases: "Neonatal meningitis, sepsis, UTIs",

        specialTests: {
            catalase: "test-pos",
            citrate: "test-neg",
            coagulase: "test-neg",
            h2s: "test-neg",
            indole: "test-pos",
            lecithinase: "test-neg",
            lactose: "test-pos",
            sucrose: "test-var",
            oxidase: "test-neg",
            pyr: "test-neg",
            urease: "test-neg"
        },
        systemsAffected: [
            "Nervous (Central)",   // neonatal meningitis
            "Hematologic/Systemic",// sepsis
            "Urogenital"           // UTIs
        ]
    }

    // =========================
    // END OF ARRAY (1–123)
    // =========================
];

let allVirusesData = [
    // ======================================
    // RNA VIRUSES - POSITIVE-SENSE
    // ======================================
    {
        category: "virus",
        name: "SARS-CoV-2 (Coronaviridae)",
        virusFamily: "Coronaviridae",
        genomeType: "Positive-sense ssRNA",
        envelope: true,
        shapeDetail: "helical (enveloped)",
        sizeRange: "80-160 nm",
        reservoir: "Humans, possibly bats (original spillover)",
        exposure: "Respiratory droplets, aerosols",
        replicationSite: "Cytoplasm",
        specialTests: "RT-PCR, antigen tests",
        diseases: "COVID-19 (respiratory illness, multisystem involvement)",
        keyProteins: [
            {
                factorName: "Spike (S) protein"
            },
            {
                factorName: "Envelope (E) protein"
            }
        ],
        note: "Characteristic crown-like spikes; variants of concern",
        vaccine: "Yes, mRNA or viral vector vaccines available"
    },
    {
        category: "virus",
        name: "Coxsackie A virus (Picornaviridae)",
        virusFamily: "Picornaviridae",
        genomeType: "Positive-sense ssRNA",
        envelope: false,
        shapeDetail: "icosahedral",
        sizeRange: "~30 nm",
        reservoir: "Humans",
        exposure: "Fecal-oral, droplets",
        replicationSite: "Cytoplasm",
        specialTests: "RT-PCR (throat/stool), usually clinical",
        diseases: "Hand-foot-and-mouth disease, herpangina",
        keyProteins: [
            {
                factorName: "VP1-4 capsid proteins"
            }
        ],
        note: "Enterovirus genus; frequent in children",
        vaccine: "None"
    },
    {
        category: "virus",
        name: "Coxsackie B virus (Picornaviridae)",
        virusFamily: "Picornaviridae",
        genomeType: "Positive-sense ssRNA",
        envelope: false,
        shapeDetail: "icosahedral",
        sizeRange: "~30 nm",
        reservoir: "Humans",
        exposure: "Fecal-oral, droplets",
        replicationSite: "Cytoplasm",
        specialTests: "RT-PCR, serology",
        diseases: "Myocarditis, pericarditis, pleurodynia (Bornholm disease)",
        keyProteins: [
            {
                factorName: "VP1-4 capsid proteins"
            }
        ],
        note: "Common cause of viral myocarditis",
        vaccine: "None"
    },
    {
        category: "virus",
        name: "Eastern equine encephalitis virus (Togaviridae)",
        virusFamily: "Togaviridae",
        genomeType: "Positive-sense ssRNA",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "~70 nm",
        reservoir: "Birds, marshes; mosquito vectors",
        exposure: "Mosquito bite (Culiseta, Aedes)",
        replicationSite: "Cytoplasm",
        specialTests: "Serology (IgM), RT-PCR",
        diseases: "Severe encephalitis (high mortality)",
        keyProteins: [
            {
                factorName: "E1, E2 envelope glycoproteins"
            }
        ],
        note: "Primarily in eastern/southeastern US",
        vaccine: "None (human); equine vaccine exists"
    },
    {
        category: "virus",
        name: "Western equine encephalitis virus (Togaviridae)",
        virusFamily: "Togaviridae",
        genomeType: "Positive-sense ssRNA",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "~70 nm",
        reservoir: "Birds, mosquitoes in Western US",
        exposure: "Mosquito bite",
        replicationSite: "Cytoplasm",
        specialTests: "Serology, RT-PCR",
        diseases: "Encephalitis (less common than EEE)",
        keyProteins: [
            {
                factorName: "E1, E2 glycoproteins"
            }
        ],
        note: "Part of alphavirus group",
        vaccine: "None"
    },
    {
        category: "virus",
        name: "Venezuelan equine encephalitis virus (Togaviridae)",
        virusFamily: "Togaviridae",
        genomeType: "Positive-sense ssRNA",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "~70 nm",
        reservoir: "Rodents, horses; mosquito vectors",
        exposure: "Mosquito bite",
        replicationSite: "Cytoplasm",
        specialTests: "Serology, RT-PCR",
        diseases: "Encephalitis, often milder than EEE/WEE",
        keyProteins: [
            {
                factorName: "E1, E2 glycoproteins"
            }
        ],
        note: "Alphavirus; occasional outbreaks in Central/South America",
        vaccine: "None (human); some equine vaccines"
    },
    {
        category: "virus",
        name: "Chikungunya virus (Togaviridae)",
        virusFamily: "Togaviridae",
        genomeType: "Positive-sense ssRNA",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "~70 nm",
        reservoir: "Humans, primates; Aedes mosquito vector",
        exposure: "Mosquito bite (Aedes aegypti/albopictus)",
        replicationSite: "Cytoplasm",
        specialTests: "Serology (IgM), RT-PCR",
        diseases: "Fever, polyarthralgia/arthritis, rash",
        keyProteins: [
            {
                factorName: "E1, E2 envelope glycoproteins"
            }
        ],
        note: "Outbreaks in Africa, Asia, Americas",
        vaccine: "None (in clinical trials)"
    },
    {
        category: "virus",
        name: "Dengue virus (Flaviviridae)",
        virusFamily: "Flaviviridae",
        genomeType: "Positive-sense ssRNA",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "40-60 nm",
        reservoir: "Humans, monkeys; Aedes mosquito vector",
        exposure: "Mosquito bite",
        replicationSite: "Cytoplasm",
        specialTests: "Serology (IgM), NS1 antigen test, RT-PCR",
        diseases: "Dengue fever (breakbone fever), hemorrhagic fever",
        keyProteins: [
            {
                factorName: "E (envelope) glycoprotein"
            }
        ],
        note: "4 serotypes; sequential infection ↑ hemorrhagic risk",
        vaccine: "Yes, but limited use (Dengvaxia) in endemic areas"
    },
    {
        category: "virus",
        name: "Yellow fever virus (Flaviviridae)",
        virusFamily: "Flaviviridae",
        genomeType: "Positive-sense ssRNA",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "40-60 nm",
        reservoir: "Humans, monkeys; Aedes mosquito vector",
        exposure: "Mosquito bite",
        replicationSite: "Cytoplasm",
        specialTests: "Serology (IgM), RT-PCR",
        diseases: "Yellow fever (jaundice, hemorrhagic disease)",
        keyProteins: [
            {
                factorName: "E glycoprotein"
            }
        ],
        note: "Councilman bodies in liver; Africa/South America",
        vaccine: "Yes, live attenuated (17D)"
    },
    {
        category: "virus",
        name: "Zika virus (Flaviviridae)",
        virusFamily: "Flaviviridae",
        genomeType: "Positive-sense ssRNA",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "40-60 nm",
        reservoir: "Humans, monkeys; Aedes mosquitoes",
        exposure: "Mosquito bites, sexual, vertical",
        replicationSite: "Cytoplasm",
        specialTests: "RT-PCR (blood/urine), serology",
        diseases: "Zika fever (mild), congenital microcephaly",
        keyProteins: [
            {
                factorName: "Envelope (E) protein"
            }
        ],
        note: "Major outbreak in Americas (2015–2016)",
        vaccine: "None (under development)"
    },
    {
        category: "virus",
        name: "West Nile virus (Flaviviridae)",
        virusFamily: "Flaviviridae",
        genomeType: "Positive-sense ssRNA",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "40-60 nm",
        reservoir: "Birds; Culex mosquito vector",
        exposure: "Mosquito bite",
        replicationSite: "Cytoplasm",
        specialTests: "Serology (IgM), RT-PCR CSF",
        diseases: "West Nile fever, encephalitis, flaccid paralysis",
        keyProteins: [
            {
                factorName: "E glycoprotein"
            }
        ],
        note: "Common in US (summer/fall); neuroinvasive forms",
        vaccine: "None (human); equine vaccine available"
    },
    {
        category: "virus",
        name: "Hepatitis A virus (Picornaviridae)",
        virusFamily: "Picornaviridae",
        genomeType: "Positive-sense ssRNA",
        envelope: false,
        shapeDetail: "icosahedral",
        sizeRange: "~27 nm",
        reservoir: "Humans",
        exposure: "Fecal-oral (food/water)",
        replicationSite: "Cytoplasm",
        specialTests: "Serology (IgM anti-HAV)",
        diseases: "Acute hepatitis (self-limited)",
        keyProteins: [
            {
                factorName: "VP1-4 capsid proteins"
            }
        ],
        note: "No chronic infection; typically mild disease",
        vaccine: "Yes, inactivated HAV vaccine"
    },
    {
        category: "virus",
        name: "HIV-1 (Retroviridae)",
        virusFamily: "Retroviridae",
        genomeType: "Positive-sense ssRNA (diploid), reverse-transcribing",
        envelope: true,
        shapeDetail: "complex conical core",
        sizeRange: "100-120 nm",
        reservoir: "Humans",
        exposure: "Sexual, blood, vertical",
        replicationSite: "Nucleus (integration after RT)",
        specialTests: "ELISA, Western blot, viral load (RT-PCR)",
        diseases: "AIDS (CD4+ T-cell depletion), opportunistic infections",
        keyProteins: [
            {
                factorName: "gp120 (attachment)"
            },
            {
                factorName: "gp41 (fusion)"
            }
        ],
        note: "Major global pandemic strain (Group M, etc.)",
        vaccine: "None (in research)"
    },
    {
        category: "virus",
        name: "HIV-2 (Retroviridae)",
        virusFamily: "Retroviridae",
        genomeType: "Positive-sense ssRNA (diploid), reverse-transcribing",
        envelope: true,
        shapeDetail: "complex conical core",
        sizeRange: "100-120 nm",
        reservoir: "Humans (West Africa primarily)",
        exposure: "Sexual, blood, vertical",
        replicationSite: "Nucleus (integration after RT)",
        specialTests: "ELISA, Western blot (HIV-2–specific), viral load",
        diseases: "AIDS, generally slower progression than HIV-1",
        keyProteins: [
            {
                factorName: "gp120, gp41"
            }
        ],
        note: "Primarily in West Africa; cross-reactivity with HIV-1 tests can vary",
        vaccine: "None (in research)"
    },
    {
        category: "virus",
        name: "Norovirus (Caliciviridae)",
        virusFamily: "Caliciviridae",
        genomeType: "Positive-sense ssRNA",
        envelope: false,
        shapeDetail: "icosahedral",
        sizeRange: "~35 nm",
        reservoir: "Humans",
        exposure: "Fecal-oral (outbreaks, cruise ships)",
        replicationSite: "Cytoplasm",
        specialTests: "RT-PCR from stool",
        diseases: "Acute gastroenteritis (vomiting, diarrhea)",
        keyProteins: [
            {
                factorName: "VP1 major capsid"
            }
        ],
        note: "Highly infectious, self-limited illness",
        vaccine: "None (in development)"
    },
    {
        category: "virus",
        name: "Poliovirus (Picornaviridae)",
        virusFamily: "Picornaviridae",
        genomeType: "Positive-sense ssRNA",
        envelope: false,
        shapeDetail: "icosahedral",
        sizeRange: "~30 nm",
        reservoir: "Humans",
        exposure: "Fecal-oral",
        replicationSite: "Cytoplasm",
        specialTests: "Stool RT-PCR, culture, serology",
        diseases: "Poliomyelitis (flaccid paralysis)",
        keyProteins: [
            {
                factorName: "VP1-4 capsid proteins"
            }
        ],
        note: "Salk (inactivated) & Sabin (live attenuated) vaccines",
        vaccine: "Yes (inactivated or live-attenuated)"
    },
    {
        category: "virus",
        name: "Rubella virus (Matonaviridae)",
        virusFamily: "Matonaviridae",
        genomeType: "Positive-sense ssRNA",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "~60-70 nm",
        reservoir: "Humans",
        exposure: "Respiratory droplets, vertical",
        replicationSite: "Cytoplasm",
        specialTests: "Serology (IgM, IgG), RT-PCR",
        diseases: "Rubella (German measles), congenital rubella",
        keyProteins: [
            {
                factorName: "E1, E2 glycoproteins"
            }
        ],
        note: "Formerly a Togavirus; part of MMR vaccine",
        vaccine: "Yes, live attenuated (MMR)"
    },
    {
        category: "virus",
        name: "Rhinovirus (Picornaviridae)",
        virusFamily: "Picornaviridae",
        genomeType: "Positive-sense ssRNA",
        envelope: false,
        shapeDetail: "icosahedral",
        sizeRange: "~30 nm",
        reservoir: "Humans (nasopharynx)",
        exposure: "Respiratory droplets, fomites",
        replicationSite: "Cytoplasm",
        specialTests: "Clinical diagnosis typically",
        diseases: "Common cold (upper respiratory infections)",
        keyProteins: [
            {
                factorName: "VP1-4 capsid proteins"
            }
        ],
        note: "Prefers cooler temps (~33°C) in nasal passages",
        vaccine: "None (too many serotypes)"
    },
    {
        category: "virus",
        name: "Hepatitis C virus (Flaviviridae)",
        virusFamily: "Flaviviridae",
        genomeType: "Positive-sense ssRNA",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "~50 nm",
        reservoir: "Humans",
        exposure: "Blood (IV drugs), sexual, vertical",
        replicationSite: "Cytoplasm",
        specialTests: "Serology (anti-HCV), HCV RNA PCR",
        diseases: "Chronic hepatitis, cirrhosis, HCC",
        keyProteins: [
            {
                factorName: "E1, E2 envelope glycoproteins"
            }
        ],
        note: "High chronicity; direct-acting antivirals available",
        vaccine: "None"
    },
    // ======================================
    // RNA VIRUSES - NEGATIVE-SENSE
    // ======================================
    {
        category: "virus",
        name: "Ebolavirus (Filoviridae)",
        virusFamily: "Filoviridae",
        genomeType: "Negative-sense ssRNA",
        envelope: true,
        shapeDetail: "filamentous",
        sizeRange: "800-1000 nm length",
        reservoir: "Fruit bats, possibly other mammals",
        exposure: "Blood/body fluids",
        replicationSite: "Cytoplasm",
        specialTests: "RT-PCR, antigen detection",
        diseases: "Severe hemorrhagic fever",
        keyProteins: [
            {
                factorName: "Glycoprotein (GP)"
            }
        ],
        note: "High fatality; outbreak in Africa",
        vaccine: "Yes (rVSV-ZEBOV) for Ebola Zaire"
    },
    {
        category: "virus",
        name: "Marburg virus (Filoviridae)",
        virusFamily: "Filoviridae",
        genomeType: "Negative-sense ssRNA",
        envelope: true,
        shapeDetail: "filamentous",
        sizeRange: "800-1000 nm",
        reservoir: "Fruit bats (Africa)",
        exposure: "Blood/body fluids",
        replicationSite: "Cytoplasm",
        specialTests: "RT-PCR, antigen detection",
        diseases: "Severe hemorrhagic fever, similar to Ebola",
        keyProteins: [
            {
                factorName: "Glycoprotein (GP)"
            }
        ],
        note: "Outbreaks in Africa, high fatality",
        vaccine: "None (research ongoing)"
    },
    {
        category: "virus",
        name: "Hantavirus (Bunyaviridae)",
        virusFamily: "Bunyaviridae",
        genomeType: "Negative-sense ssRNA (3 segments)",
        envelope: true,
        shapeDetail: "spherical/pleomorphic",
        sizeRange: "80-120 nm",
        reservoir: "Rodents (deer mouse in US)",
        exposure: "Inhalation of rodent excreta",
        replicationSite: "Cytoplasm",
        specialTests: "Serology, RT-PCR",
        diseases: "Hantavirus pulmonary syndrome, hemorrhagic fever with renal syndrome",
        keyProteins: [
            {
                factorName: "G1, G2 glycoproteins"
            }
        ],
        note: "Sin Nombre virus in US Southwest",
        vaccine: "None"
    },
    {
        category: "virus",
        name: "California encephalitis virus (Bunyaviridae)",
        virusFamily: "Bunyaviridae",
        genomeType: "Negative-sense ssRNA (3 segments)",
        envelope: true,
        shapeDetail: "spherical/pleomorphic",
        sizeRange: "80-120 nm",
        reservoir: "Small mammals, Aedes mosquitoes",
        exposure: "Mosquito bite",
        replicationSite: "Cytoplasm",
        specialTests: "Serology, RT-PCR (CSF)",
        diseases: "Encephalitis (primarily in children)",
        keyProteins: [
            {
                factorName: "G1, G2 glycoproteins"
            }
        ],
        note: "Includes La Crosse virus variant",
        vaccine: "None"
    },
    {
        category: "virus",
        name: "Rift Valley fever virus (Bunyaviridae)",
        virusFamily: "Bunyaviridae",
        genomeType: "Negative-sense ssRNA (3 segments)",
        envelope: true,
        shapeDetail: "spherical/pleomorphic",
        sizeRange: "80-120 nm",
        reservoir: "Domestic animals (sheep, cattle), mosquitoes",
        exposure: "Mosquito bite, contact with infected animals",
        replicationSite: "Cytoplasm",
        specialTests: "Serology, RT-PCR",
        diseases: "Fever, hemorrhagic fever, encephalitis",
        keyProteins: [
            {
                factorName: "Glycoproteins Gn, Gc"
            }
        ],
        note: "Mostly in Africa; can affect livestock",
        vaccine: "None (human)"
    },
    {
        category: "virus",
        name: "Influenza virus (Orthomyxoviridae)",
        virusFamily: "Orthomyxoviridae",
        genomeType: "Negative-sense ssRNA (8 segments)",
        envelope: true,
        shapeDetail: "pleomorphic",
        sizeRange: "~80-120 nm",
        reservoir: "Humans, birds, swine",
        exposure: "Respiratory droplets",
        replicationSite: "Nucleus + cytoplasm (unique for RNA virus)",
        specialTests: "Rapid flu test, RT-PCR",
        diseases: "Seasonal influenza, pneumonia",
        keyProteins: [
            {
                factorName: "Hemagglutinin (HA)"
            },
            {
                factorName: "Neuraminidase (NA)"
            }
        ],
        note: "Antigenic drift & shift in Influenza A",
        vaccine: "Yes, inactivated or live attenuated yearly"
    },
    {
        category: "virus",
        name: "Lymphocytic choriomeningitis virus (Arenaviridae)",
        virusFamily: "Arenaviridae",
        genomeType: "Ambisense/negative-sense ssRNA (2 segments)",
        envelope: true,
        shapeDetail: "pleomorphic, sandy appearance (ribosomes)",
        sizeRange: "~50-300 nm",
        reservoir: "Rodents (house mice, hamsters)",
        exposure: "Inhalation of rodent excreta",
        replicationSite: "Cytoplasm",
        specialTests: "Serology, RT-PCR",
        diseases: "LCM (meningitis, flu-like illness)",
        keyProteins: [
            {
                factorName: "Glycoprotein complex (GP1, GP2)"
            }
        ],
        note: "Arena = sand-like granules inside virion",
        vaccine: "None"
    },
    {
        category: "virus",
        name: "Measles virus (Paramyxoviridae)",
        virusFamily: "Paramyxoviridae",
        genomeType: "Negative-sense ssRNA",
        envelope: true,
        shapeDetail: "helical nucleocapsid",
        sizeRange: "150-300 nm",
        reservoir: "Humans",
        exposure: "Respiratory droplets (highly contagious)",
        replicationSite: "Cytoplasm",
        specialTests: "Serology (IgM), RT-PCR, clinical (Koplik spots)",
        diseases: "Measles (rubeola): rash, fever, cough, conjunctivitis",
        keyProteins: [
            {
                factorName: "Hemagglutinin (H)"
            },
            {
                factorName: "Fusion (F)"
            }
        ],
        note: "Can cause SSPE later; part of MMR",
        vaccine: "Yes, live attenuated (MMR)"
    },
    {
        category: "virus",
        name: "Mumps virus (Paramyxoviridae)",
        virusFamily: "Paramyxoviridae",
        genomeType: "Negative-sense ssRNA",
        envelope: true,
        shapeDetail: "helical nucleocapsid",
        sizeRange: "150-300 nm",
        reservoir: "Humans",
        exposure: "Respiratory droplets",
        replicationSite: "Cytoplasm",
        specialTests: "Serology (IgM), RT-PCR",
        diseases: "Mumps (parotitis, orchitis), meningitis",
        keyProteins: [
            {
                factorName: "Hemagglutinin-neuraminidase (HN)"
            },
            {
                factorName: "Fusion (F)"
            }
        ],
        note: "Part of MMR vaccine",
        vaccine: "Yes, live attenuated (MMR)"
    },
    {
        category: "virus",
        name: "Parainfluenza virus (Paramyxoviridae)",
        virusFamily: "Paramyxoviridae",
        genomeType: "Negative-sense ssRNA",
        envelope: true,
        shapeDetail: "helical nucleocapsid",
        sizeRange: "150-300 nm",
        reservoir: "Humans",
        exposure: "Respiratory droplets",
        replicationSite: "Cytoplasm",
        specialTests: "Antigen tests, RT-PCR",
        diseases: "Croup (laryngotracheobronchitis), bronchiolitis",
        keyProteins: [
            {
                factorName: "Hemagglutinin-neuraminidase (HN)"
            },
            {
                factorName: "Fusion (F)"
            }
        ],
        note: "Seal-like barking cough in croup",
        vaccine: "None"
    },
    {
        category: "virus",
        name: "Rabies virus (Rhabdoviridae)",
        virusFamily: "Rhabdoviridae",
        genomeType: "Negative-sense ssRNA",
        envelope: true,
        shapeDetail: "bullet-shaped",
        sizeRange: "~180 x 75 nm",
        reservoir: "Mammals (dogs, bats, raccoons)",
        exposure: "Animal bite, saliva",
        replicationSite: "Cytoplasm",
        specialTests: "RT-PCR (saliva), biopsy (Negri bodies)",
        diseases: "Rabies (fatal encephalitis)",
        keyProteins: [
            {
                factorName: "G glycoprotein"
            }
        ],
        note: "Long incubation; post-exposure prophylaxis available",
        vaccine: "Yes, inactivated (for humans & animals)"
    },
    {
        category: "virus",
        name: "Respiratory Syncytial Virus (Pneumoviridae)",
        virusFamily: "Pneumoviridae",
        genomeType: "Negative-sense ssRNA",
        envelope: true,
        shapeDetail: "pleomorphic, helical",
        sizeRange: "120-300 nm",
        reservoir: "Humans",
        exposure: "Respiratory droplets",
        replicationSite: "Cytoplasm",
        specialTests: "Rapid antigen test, RT-PCR",
        diseases: "Bronchiolitis, pneumonia in infants",
        keyProteins: [
            {
                factorName: "Fusion (F) protein"
            }
        ],
        note: "Palivizumab (anti-F) prophylaxis in high-risk infants",
        vaccine: "None currently (research in progress)"
    },
    {
        category: "virus",
        name: "Human metapneumovirus (Pneumoviridae)",
        virusFamily: "Pneumoviridae",
        genomeType: "Negative-sense ssRNA",
        envelope: true,
        shapeDetail: "pleomorphic, helical",
        sizeRange: "~150 nm",
        reservoir: "Humans",
        exposure: "Respiratory droplets",
        replicationSite: "Cytoplasm",
        specialTests: "RT-PCR, antigen tests",
        diseases: "Bronchiolitis, pneumonia (children, elderly)",
        keyProteins: [
            {
                factorName: "Fusion (F) protein"
            }
        ],
        note: "Similar to RSV, discovered early 2000s",
        vaccine: "None"
    },
    {
        category: "virus",
        name: "Rotavirus (Reoviridae)",
        virusFamily: "Reoviridae",
        genomeType: "dsRNA (segmented)",
        envelope: false,
        shapeDetail: "icosahedral, double-layered capsid",
        sizeRange: "~60-80 nm",
        reservoir: "Humans (GI tract)",
        exposure: "Fecal-oral",
        replicationSite: "Cytoplasm",
        specialTests: "ELISA for viral antigen in stool",
        diseases: "Severe diarrhea in children, infants",
        keyProteins: [
            {
                factorName: "VP4, VP7 (outer capsid)"
            }
        ],
        note: "Major cause of gastroenteritis worldwide",
        vaccine: "Yes, live oral (Rotarix, RotaTeq)"
    },
    {
        category: "virus",
        name: "Colorado tick fever virus (Reoviridae)",
        virusFamily: "Reoviridae",
        genomeType: "dsRNA (segmented)",
        envelope: false,
        shapeDetail: "icosahedral, double-layered",
        sizeRange: "~80 nm",
        reservoir: "Small mammals, ticks (Dermacentor)",
        exposure: "Tick bite (Rocky Mountains, US)",
        replicationSite: "Cytoplasm",
        specialTests: "Serology, RT-PCR",
        diseases: "Fever, headache, myalgia; can be biphasic",
        keyProteins: [
            {
                factorName: "VP proteins"
            }
        ],
        note: "Sometimes called Mountain tick fever",
        vaccine: "None"
    },
    // ======================================
    // DNA VIRUSES
    // ======================================
    {
        category: "virus",
        name: "Adenovirus (Adenoviridae)",
        virusFamily: "Adenoviridae",
        genomeType: "dsDNA, linear",
        envelope: false,
        shapeDetail: "icosahedral",
        sizeRange: "70-90 nm",
        reservoir: "Humans",
        exposure: "Respiratory, fecal-oral, fomites",
        replicationSite: "Nucleus",
        specialTests: "Antigen detection, PCR, culture",
        diseases: "Pharyngoconjunctival fever, pneumonia, GI disease",
        keyProteins: [
            {
                factorName: "Fiber protein (attachment)"
            }
        ],
        note: "Common in military recruits (vaccine available for types 4,7)",
        vaccine: "Yes, live oral vaccine (military use) for certain types"
    },
    {
        category: "virus",
        name: "Cytomegalovirus (Herpesviridae)",
        virusFamily: "Herpesviridae",
        genomeType: "dsDNA, linear",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "150-200 nm",
        reservoir: "Humans",
        exposure: "Body fluids (saliva, urine, sexual), vertical",
        replicationSite: "Nucleus",
        specialTests: "PCR, shell vial culture, 'owl's eye' inclusions",
        diseases: "Mononucleosis-like syndrome, congenital CMV, retinitis",
        keyProteins: [
            {
                factorName: "gB envelope glycoprotein"
            }
        ],
        note: "Latency in mononuclear cells; reactivates in immunocompromised",
        vaccine: "None (research ongoing)"
    },
    {
        category: "virus",
        name: "Hepatitis B virus (Hepadnaviridae)",
        virusFamily: "Hepadnaviridae",
        genomeType: "Partially dsDNA, circular, reverse transcriptase",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "~42 nm (Dane particle)",
        reservoir: "Humans",
        exposure: "Blood (IV drugs), sexual, vertical",
        replicationSite: "Nucleus + cytoplasm (RT step)",
        specialTests: "HBsAg, anti-HBc, anti-HBs, HBV DNA",
        diseases: "Acute/chronic hepatitis, cirrhosis, HCC",
        keyProteins: [
            {
                factorName: "HBsAg (surface)"
            },
            {
                factorName: "HBcAg (core)"
            }
        ],
        note: "Only DNA virus that uses reverse transcriptase",
        vaccine: "Yes, subunit (HBsAg) vaccine"
    },
    {
        category: "virus",
        name: "Herpes simplex virus type 1 (Herpesviridae)",
        virusFamily: "Herpesviridae",
        genomeType: "dsDNA, linear",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "150-200 nm",
        reservoir: "Humans",
        exposure: "Saliva, direct contact",
        replicationSite: "Nucleus",
        specialTests: "Tzanck smear, PCR, serology",
        diseases: "Oral herpes (cold sores), encephalitis",
        keyProteins: [
            {
                factorName: "Glycoprotein B, C, D"
            }
        ],
        note: "Latency in trigeminal ganglia",
        vaccine: "None"
    },
    {
        category: "virus",
        name: "Herpes simplex virus type 2 (Herpesviridae)",
        virusFamily: "Herpesviridae",
        genomeType: "dsDNA, linear",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "150-200 nm",
        reservoir: "Humans",
        exposure: "Sexual contact, vertical",
        replicationSite: "Nucleus",
        specialTests: "PCR, Tzanck smear, serology",
        diseases: "Genital herpes, neonatal herpes, meningitis",
        keyProteins: [
            {
                factorName: "Glycoprotein B, C, D"
            }
        ],
        note: "Latency in sacral ganglia",
        vaccine: "None"
    },
    {
        category: "virus",
        name: "HHV-6 (Roseola) (Herpesviridae)",
        virusFamily: "Herpesviridae",
        genomeType: "dsDNA, linear",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "150-200 nm",
        reservoir: "Humans",
        exposure: "Saliva",
        replicationSite: "Nucleus",
        specialTests: "Serology, PCR",
        diseases: "Roseola infantum (exanthem subitum): high fever → rash",
        keyProteins: [
            {
                factorName: "Various envelope glycoproteins"
            }
        ],
        note: "Common in young children, can cause febrile seizures",
        vaccine: "None"
    },
    {
        category: "virus",
        name: "HHV-8 (Kaposi's sarcoma) (Herpesviridae)",
        virusFamily: "Herpesviridae",
        genomeType: "dsDNA, linear",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "150-200 nm",
        reservoir: "Humans",
        exposure: "Sexual contact, saliva",
        replicationSite: "Nucleus",
        specialTests: "PCR, biopsy of lesions",
        diseases: "Kaposi's sarcoma (AIDS patients), primary effusion lymphoma",
        keyProteins: [
            {
                factorName: "LANA (latency-associated nuclear antigen)"
            }
        ],
        note: "Infects B cells, endothelial cells",
        vaccine: "None"
    },
    {
        category: "virus",
        name: "Human papillomavirus (Papillomaviridae)",
        virusFamily: "Papillomaviridae",
        genomeType: "dsDNA, circular",
        envelope: false,
        shapeDetail: "icosahedral",
        sizeRange: "~50-55 nm",
        reservoir: "Humans (skin, mucosa)",
        exposure: "Skin-to-skin, sexual",
        replicationSite: "Nucleus (stratified squamous epithelium)",
        specialTests: "Pap smear, HPV DNA test",
        diseases: "Warts, cervical cancer (types 16,18), other anogenital cancers",
        keyProteins: [
            {
                factorName: "E6 (p53 degradation)"
            },
            {
                factorName: "E7 (Rb inactivation)"
            }
        ],
        note: "HPV 6,11 → genital warts; 16,18 → high-risk cancers",
        vaccine: "Yes, recombinant (Gardasil)"
    },
    {
        category: "virus",
        name: "JC polyomavirus (Polyomaviridae)",
        virusFamily: "Polyomaviridae",
        genomeType: "dsDNA, circular",
        envelope: false,
        shapeDetail: "icosahedral",
        sizeRange: "~40-45 nm",
        reservoir: "Humans (latent in kidney)",
        exposure: "Likely respiratory or urine route",
        replicationSite: "Nucleus",
        specialTests: "PCR in CSF, imaging",
        diseases: "Progressive multifocal leukoencephalopathy (PML)",
        keyProteins: [
            {
                factorName: "Large T antigen"
            }
        ],
        note: "Reactivates in immunocompromised (e.g. AIDS)",
        vaccine: "None"
    },
    {
        category: "virus",
        name: "BK polyomavirus (Polyomaviridae)",
        virusFamily: "Polyomaviridae",
        genomeType: "dsDNA, circular",
        envelope: false,
        shapeDetail: "icosahedral",
        sizeRange: "~40-45 nm",
        reservoir: "Humans (latent in kidney)",
        exposure: "Likely respiratory or urine",
        replicationSite: "Nucleus",
        specialTests: "PCR (urine, blood), biopsy",
        diseases: "Nephropathy in transplant patients, hemorrhagic cystitis",
        keyProteins: [
            {
                factorName: "Large T antigen"
            }
        ],
        note: "Problematic in immunosuppressed patients",
        vaccine: "None"
    },
    {
        category: "virus",
        name: "Parvovirus B19 (Parvoviridae)",
        virusFamily: "Parvoviridae",
        genomeType: "ssDNA, linear",
        envelope: false,
        shapeDetail: "icosahedral",
        sizeRange: "20-25 nm",
        reservoir: "Humans",
        exposure: "Respiratory droplets",
        replicationSite: "Nucleus (erythroid precursor cells)",
        specialTests: "Serology (IgM), PCR",
        diseases: "Erythema infectiosum (fifth disease), aplastic crisis, hydrops fetalis",
        keyProteins: [
            {
                factorName: "VP1, VP2 capsid proteins"
            }
        ],
        note: "Smallest DNA virus; RBC precursor tropism",
        vaccine: "None"
    },
    {
        category: "virus",
        name: "Smallpox virus (Poxviridae)",
        virusFamily: "Poxviridae",
        genomeType: "dsDNA, linear",
        envelope: true,
        shapeDetail: "brick-shaped, complex",
        sizeRange: "200-300 nm",
        reservoir: "Humans (eradicated in wild)",
        exposure: "Respiratory droplets, contact with lesions",
        replicationSite: "Cytoplasm (carries own polymerases)",
        specialTests: "Historic: clinical exam, electron microscopy",
        diseases: "Smallpox (variola major/minor)",
        keyProteins: [
            {
                factorName: "Various early/late proteins"
            }
        ],
        note: "Eradicated globally by vaccination (1977)",
        vaccine: "Yes, live vaccinia virus (rarely used now)"
    },
    {
        category: "virus",
        name: "Cowpox virus (Poxviridae)",
        virusFamily: "Poxviridae",
        genomeType: "dsDNA, linear",
        envelope: true,
        shapeDetail: "brick-shaped, complex",
        sizeRange: "200-300 nm",
        reservoir: "Rodents, cows",
        exposure: "Contact with infected animals (milkers)",
        replicationSite: "Cytoplasm",
        specialTests: "Lesion swab, electron microscopy (historic)",
        diseases: "Pustular lesions on hands (milkmaids)",
        keyProteins: [
            {
                factorName: "P37 envelope protein"
            }
        ],
        note: "Historically led to smallpox vaccine concept",
        vaccine: "No distinct public vaccine (but related to vaccinia)"
    },
    {
        category: "virus",
        name: "Molluscum contagiosum virus (Poxviridae)",
        virusFamily: "Poxviridae",
        genomeType: "dsDNA, linear",
        envelope: true,
        shapeDetail: "brick-shaped, complex",
        sizeRange: "200-300 nm",
        reservoir: "Humans",
        exposure: "Direct contact",
        replicationSite: "Cytoplasm",
        specialTests: "Clinical diagnosis, histology (molluscum bodies)",
        diseases: "Benign, umbilicated skin papules",
        keyProteins: [
            {
                factorName: "MC core proteins"
            }
        ],
        note: "Common in children; also in immunocompromised",
        vaccine: "None"
    },
    {
        category: "virus",
        name: "Varicella-zoster virus (Herpesviridae)",
        virusFamily: "Herpesviridae",
        genomeType: "dsDNA, linear",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "150-200 nm",
        reservoir: "Humans",
        exposure: "Respiratory droplets, contact with lesions",
        replicationSite: "Nucleus",
        specialTests: "Tzanck smear, PCR, serology",
        diseases: "Varicella (chickenpox), zoster (shingles)",
        keyProteins: [
            {
                factorName: "Glycoprotein E (gE)"
            }
        ],
        note: "Latency in dorsal root ganglia; reactivation = shingles",
        vaccine: "Yes, live attenuated (Varivax, Zostavax/Shingrix)"
    },
    {
        category: "virus",
        name: "Epstein-Barr virus (Herpesviridae)",
        virusFamily: "Herpesviridae",
        genomeType: "dsDNA, linear",
        envelope: true,
        shapeDetail: "icosahedral (enveloped)",
        sizeRange: "150-200 nm",
        reservoir: "Humans",
        exposure: "Saliva (kissing disease)",
        replicationSite: "Nucleus (infects B cells)",
        specialTests: "Monospot (heterophile Ab), specific serology",
        diseases: "Infectious mononucleosis, Burkitt lymphoma, Hodgkin lymphoma, nasopharyngeal carcinoma",
        keyProteins: [
            {
                factorName: "gp350/220 (CD21 binding)"
            }
        ],
        note: "Latency in B cells; atypical lymphocytes on smear",
        vaccine: "None (under research)"
    }
]; // end allVirusesData

let allParasitesData = [
    // =========================
    // PROTOZOA - INTESTINAL
    // =========================
    {
        category: "parasite",
        name: "Cryptosporidium parvum",
        classification: "Protozoa",
        morphology: {
            size: 5, // Average size in micrometers
            shape: "small round oocysts",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Ingestion of oocysts → sporozoites infect intestinal epithelium → oocysts excreted",
        keyFeatures: ["Oocysts (~4–6 µm)", "Sporozoites"],
        diseases: ["Cryptosporidiosis"],
        environment: "Humans, cattle, other mammals; Worldwide",
        diagnosticTests: ["Acid-fast stain of stool (oocysts)", "Enzyme Immunoassays (EIA)"],
        affectedCellTypes: "Intestinal epithelial cells",
        associatedDiseases: ["Severe diarrhea in immunocompromised", "Mild watery diarrhea in immunocompetent"],
        exposure: "Fecal-oral (contaminated water)",
        specialTests: ["PCR-based identification"],
        treatment: "Nitazoxanide (immunocompetent), supportive care",
        note: "Chlorination may not kill oocysts; filtration needed",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Entamoeba histolytica",
        classification: "Protozoa",
        morphology: {
            size: 15, // Average size in micrometers
            shape: "amoeboid trophozoites and spherical cysts",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Ingestion of cysts → excystation in small intestine → trophozoites invade colon → encyst and excrete",
        keyFeatures: ["Trophozoite with ingested RBCs", "Cyst with up to 4 nuclei"],
        diseases: ["Amebiasis"],
        environment: "Humans (intestinal tract), cysts in environment",
        diagnosticTests: ["Stool O&P (cysts, trophozoites)", "Serology", "Colonoscopy/biopsy"],
        affectedCellTypes: "Colon epithelial cells, liver cells",
        associatedDiseases: ["Flask-shaped ulcers in colon", "Liver abscesses"],
        exposure: "Fecal-oral (contaminated water/food)",
        specialTests: ["PCR-based identification", "Microscopic examination for RBCs inside trophozoites"],
        treatment: "Metronidazole + paromomycin (to clear intraluminal cysts)",
        note: "May see RBCs inside trophozoites microscopically",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Giardia lamblia",
        classification: "Protozoa",
        morphology: {
            size: 10, // Average size in micrometers
            shape: "tear-drop shaped trophozoites and oval cysts",
            segmentation: false,
            appendages: {
                presence: true,
                type: "flagella",
                count: 4
            }
        },
        lifeCycle: "Ingestion of cysts → trophozoites in small intestine → encyst in colon",
        keyFeatures: ["Tear-drop shaped trophozoites with two nuclei", "Oval cysts", "Flagella"],
        diseases: ["Giardiasis"],
        environment: "Humans, beavers, contaminated water; Worldwide",
        diagnosticTests: ["Stool O&P (trophozoites/cysts)", "Antigen tests"],
        affectedCellTypes: "Intestinal epithelial cells",
        associatedDiseases: ["Fatty diarrhea", "Bloating", "Flatulence"],
        exposure: "Fecal-oral (contaminated water)",
        specialTests: ["PCR-based identification"],
        treatment: "Metronidazole, tinidazole",
        note: "Common in campers drinking unfiltered stream water",
        vaccine: "None"
    },
    // =========================
    // PROTOZOA - CNS
    // =========================
    {
        category: "parasite",
        name: "Naegleria fowleri",
        classification: "Protozoa",
        morphology: {
            size: 15, // Average size in micrometers
            shape: "amoeboid trophozoites",
            segmentation: false,
            appendages: {
                presence: true,
                type: "flagella",
                count: 1
            }
        },
        lifeCycle: "Trophozoite enters nasal passages → crosses cribriform plate → infects CNS",
        keyFeatures: ["Amoeboid trophozoites", "Flagellated form"],
        diseases: ["Primary amebic meningoencephalitis (PAM)"],
        environment: "Freshwater lakes, ponds, warm water; Worldwide",
        diagnosticTests: ["CSF wet mount (motile trophozoites)", "PCR-based identification"],
        affectedCellTypes: "Central nervous system cells",
        associatedDiseases: ["Rapid meningoencephalitis", "Brain tissue destruction"],
        exposure: "Water forced up nose during swimming/diving",
        specialTests: ["Imaging for CNS involvement"],
        treatment: "Miltefosine (investigational), often futile",
        note: "Very high mortality, “brain-eating amoeba”",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Toxoplasma gondii",
        classification: "Protozoa",
        morphology: {
            size: 8, // Average size in micrometers
            shape: "triangular tachyzoites, cysts with bradyzoites",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Oocysts shed by cats → ingestion by intermediate hosts → tachyzoites replicate intracellularly → form tissue cysts",
        keyFeatures: ["Sporozoites within oocysts", "Tachyzoites", "Tissue cysts with bradyzoites"],
        diseases: ["Toxoplasmosis"],
        environment: "Humans, cats (definitive host), other animals (intermediate hosts); Worldwide",
        diagnosticTests: ["Serology (IgM, IgG)", "Imaging (ring-enhancing brain lesions)", "PCR"],
        affectedCellTypes: "Brain cells, muscle cells, retinal cells, fetal tissues",
        associatedDiseases: ["Ring-enhancing brain lesions in immunocompromised individuals", "Chorioretinitis", "Congenital defects"],
        exposure: "Ingestion of oocysts (cat feces) or tissue cysts (undercooked meat)",
        specialTests: ["PCR for T. gondii DNA"],
        treatment: "Sulfadiazine + pyrimethamine (plus folinic acid)",
        note: "Congenital triad: chorioretinitis, hydrocephalus, intracranial calcifications",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Trypanosoma brucei (gambiense/rhodesiense)",
        classification: "Protozoa",
        morphology: {
            size: 15, // Average size in micrometers
            shape: "flagellated slender forms with undulating membrane",
            segmentation: false,
            appendages: {
                presence: true,
                type: "flagella",
                count: 1
            }
        },
        lifeCycle: "Tsetse fly injects trypomastigotes → multiply in blood and lymphatic system → invade CNS",
        keyFeatures: ["Undulating membrane", "Single flagellum", "Variant surface glycoproteins"],
        diseases: ["African sleeping sickness"],
        environment: "Humans, wild game; Africa",
        diagnosticTests: ["Blood smear", "CSF examination (trypomastigotes)"],
        affectedCellTypes: "Blood cells, central nervous system cells",
        associatedDiseases: ["Fever", "Somnolence", "Coma"],
        exposure: "Tsetse fly bite (Glossina species)",
        specialTests: ["PCR for Trypanosoma DNA", "Serological assays for trypanosomal antigens"],
        treatment: "Suramin (blood stage), melarsoprol (CNS), or eflornithine",
        note: "“African sleeping sickness”; variant surface glycoproteins",
        vaccine: "None"
    },
    // =========================
    // PROTOZOA - BLOOD
    // =========================
    {
        category: "parasite",
        name: "Babesia microti",
        classification: "Protozoa",
        morphology: {
            size: 4, // Average size in micrometers
            shape: "ring forms and tetrads (Maltese cross) within RBCs",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Tick introduces sporozoites → infect red blood cells → trophozoites form tetrads",
        keyFeatures: ["Tetrad formation (Maltese cross)", "Ring forms in RBCs"],
        diseases: ["Babesiosis"],
        environment: "Rodents, Ixodes scapularis ticks; Northeastern US",
        diagnosticTests: ["Blood smear (Maltese cross)", "PCR"],
        affectedCellTypes: "Red blood cells",
        associatedDiseases: ["Fever", "Hemolytic anemia", "Worse in asplenic individuals"],
        exposure: "Tick bite (Ixodes scapularis)",
        specialTests: ["PCR for Babesia DNA"],
        treatment: "Atovaquone + azithromycin",
        note: "Often co-infection with Borrelia burgdorferi (Lyme)",
        vaccine: "None"
    },
    // =========================
    // PROTOZOA - OTHER (TISSUE)
    // =========================
    {
        category: "parasite",
        name: "Leishmania braziliensis",
        classification: "Protozoa",
        morphology: {
            size: 15, // Average size in micrometers
            shape: "promastigotes in sandfly and amastigotes in macrophages",
            segmentation: false,
            appendages: {
                presence: true,
                type: "flagella",
                count: 1
            }
        },
        lifeCycle: "Sandfly injects promastigotes → transform into amastigotes in host macrophages",
        keyFeatures: ["Promastigotes in sandfly", "Amastigotes in macrophages", "Rod-shaped kinetoplast"],
        diseases: ["Mucocutaneous leishmaniasis"],
        environment: "Rodents, dogs, humans; Central & South America",
        diagnosticTests: ["Biopsy showing amastigotes in macrophages"],
        affectedCellTypes: "Macrophages, mucocutaneous tissues",
        associatedDiseases: ["Ulcers", "Cartilage destruction"],
        exposure: "Sandfly bite (Lutzomyia species)",
        specialTests: ["PCR for Leishmania DNA"],
        treatment: "Sodium stibogluconate, amphotericin B",
        note: "Disfiguring lesions, “Espundia”",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Leishmania donovani",
        classification: "Protozoa",
        morphology: {
            size: 15, // Average size in micrometers
            shape: "promastigotes in sandfly and amastigotes in macrophages",
            segmentation: false,
            appendages: {
                presence: true,
                type: "flagella",
                count: 1
            }
        },
        lifeCycle: "Sandfly injects promastigotes → transform into amastigotes in host macrophages → spread to visceral organs",
        keyFeatures: ["Promastigotes in sandfly", "Amastigotes in macrophages", "Rod-shaped kinetoplast"],
        diseases: ["Visceral leishmaniasis (kala-azar)"],
        environment: "Humans, dogs; India, East Africa, Mediterranean",
        diagnosticTests: ["Splenic aspirate", "Bone marrow aspirate (amastigotes)"],
        affectedCellTypes: "Reticuloendothelial system cells",
        associatedDiseases: ["Fever", "Hepatosplenomegaly", "Pancytopenia"],
        exposure: "Sandfly bite (Phlebotomus species)",
        specialTests: ["PCR for Leishmania DNA"],
        treatment: "Amphotericin B, miltefosine",
        note: "Black fever (“kala-azar”), fatal if untreated",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Trypanosoma cruzi",
        classification: "Protozoa",
        morphology: {
            size: 15, // Average size in micrometers
            shape: "flagellated trypomastigotes in blood and amastigotes in tissues",
            segmentation: false,
            appendages: {
                presence: true,
                type: "flagella",
                count: 1
            }
        },
        lifeCycle: "Reduviid bug bites and defecates → trypomastigotes invade host tissues → amastigotes multiply in cardiac and smooth muscle cells",
        keyFeatures: ["Flagellated trypomastigotes", "Amastigotes in tissues", "Intracellular forms"],
        diseases: ["Chagas disease"],
        environment: "Humans, animals; Central & South America; Reduviid 'kissing' bug vector",
        diagnosticTests: ["Blood smear (acute)", "Serology (chronic)", "Xenodiagnosis"],
        affectedCellTypes: "Myenteric plexus cells, cardiac muscle cells",
        associatedDiseases: ["Cardiomyopathy", "Megaesophagus", "Megacolon"],
        exposure: "Bug feces deposited on skin and rubbed into bite or eye",
        specialTests: ["PCR for Trypanosoma cruzi DNA"],
        treatment: "Benznidazole or nifurtimox (acute), limited chronic efficacy",
        note: "Romaña sign (periorbital swelling) in acute infection",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Trichomonas vaginalis",
        classification: "Protozoa",
        morphology: {
            size: 10, // Average size in micrometers
            shape: "pear-shaped flagellated trophozoites",
            segmentation: false,
            appendages: {
                presence: true,
                type: "flagella",
                count: 5
            }
        },
        lifeCycle: "No cyst stage; trophozoites transmitted via sexual intercourse",
        keyFeatures: ["Pear-shaped trophozoites", "Multiple flagella", "Incomplete cell division"],
        diseases: ["Trichomoniasis"],
        environment: "Humans (urogenital tract)",
        diagnosticTests: ["Wet mount (motile trophozoites)", "Rapid antigen tests"],
        affectedCellTypes: "Urogenital epithelial cells",
        associatedDiseases: ["Frothy yellow-green discharge", "Itching", "'Strawberry cervix'"],
        exposure: "Sexual contact",
        specialTests: ["PCR for Trichomonas DNA"],
        treatment: "Metronidazole (treat partner too)",
        note: "Strawberry cervix observed during examination",
        vaccine: "None"
    },
    // =========================
    // HELMINTHS - NEMATODES (TISSUE)
    // =========================
    {
        category: "parasite",
        name: "Dracunculus medinensis",
        classification: "Nematode",
        morphology: {
            size: 100, // Adult female up to ~100 cm
            shape: "long, thread-like adult female emerging from skin",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Ingestion of infected copepods in drinking water → larvae mature in body → female worm emerges from skin through ulcer",
        keyFeatures: ["Long thread-like adult females", "Emerges from skin causing ulcers"],
        diseases: ["Dracunculiasis (Guinea worm disease)"],
        environment: "Humans; copepods in water sources; Africa (Guinea worm)",
        diagnosticTests: ["Clinical visualization of worm in skin ulcer"],
        affectedCellTypes: "Skin tissues",
        associatedDiseases: ["Painful skin ulcer with protruding worm"],
        exposure: "Drinking water contaminated with infected copepods",
        specialTests: ["Observation of emerging worm in clinical examination"],
        treatment: "Slow extraction of worm, wrap on stick; no broad anthelmintic typically",
        note: "Eradication efforts under way",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Wuchereria bancrofti",
        classification: "Nematode",
        morphology: {
            size: 100, // Adult worms up to ~12 cm
            shape: "thread-like adult worms in lymphatics",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Mosquito deposits larvae → larvae migrate to lymphatic system → produce microfilariae in blood (nocturnal)",
        keyFeatures: ["Filariform larvae in mosquitoes", "Microfilariae in blood", "Adult worms in lymphatics"],
        diseases: ["Lymphatic filariasis", "Elephantiasis", "Hydrocele"],
        environment: "Humans; mosquito vectors (Culex, Anopheles); Tropics (Africa, Asia, Pacific, Americas)",
        diagnosticTests: ["Blood smear for microfilariae (nighttime sampling)"],
        affectedCellTypes: "Lymphatic endothelial cells",
        associatedDiseases: ["Lymphedema", "Elephantiasis", "Hydrocele"],
        exposure: "Mosquito bite",
        specialTests: ["PCR for Wuchereria bancrofti DNA"],
        treatment: "Diethylcarbamazine (DEC), ivermectin + albendazole combos",
        note: "Avoid mosquito bites, mass drug administration in endemic areas",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Onchocerca volvulus",
        classification: "Nematode",
        morphology: {
            size: 60, // Adult worms up to ~30 cm
            shape: "long filarial worms in subcutaneous nodules",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Blackfly injects larvae → larvae mature into adults in subcutaneous nodules → adults produce microfilariae that migrate to skin and eyes",
        keyFeatures: ["Adult worms in subcutaneous nodules", "Microfilariae in skin and eyes"],
        diseases: ["Onchocerciasis (river blindness)", "Leopard skin depigmentation"],
        environment: "Humans; blackfly vectors (Simulium); Africa, parts of Latin America, Yemen",
        diagnosticTests: ["Skin snip for microfilariae", "Nodule biopsy"],
        affectedCellTypes: "Skin cells, ocular tissues",
        associatedDiseases: ["Eye lesions leading to blindness", "Dermatitis", "Leopard skin"],
        exposure: "Blackfly bite near rivers",
        specialTests: ["Ocular examination for adult worms"],
        treatment: "Ivermectin (repeated doses)",
        note: "“Black fly, black sight, black skin nodules”",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Toxocara canis",
        classification: "Nematode",
        morphology: {
            size: 0.5, // Larvae ~0.5 cm
            shape: "elongated larvae",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Humans accidentally ingest eggs from dog feces → eggs hatch → larvae migrate through tissues (dead-end host)",
        keyFeatures: ["Elongated larvae", "Larval stages in tissues"],
        diseases: ["Toxocariasis"],
        environment: "Dogs (definitive host), contaminated soil/environment",
        diagnosticTests: ["Serology (ELISA)", "Eosinophilia in blood tests"],
        affectedCellTypes: "Various organs (liver, lungs, eyes)",
        associatedDiseases: ["Visceral larva migrans", "Ocular larva migrans"],
        exposure: "Fecal-oral ingestion of eggs from dog feces",
        specialTests: ["Imaging for organ involvement"],
        treatment: "Albendazole or mebendazole, steroids if severe",
        note: "Common in children who ingest dirt contaminated with dog feces",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Loa loa",
        classification: "Nematode",
        morphology: {
            size: 50, // Adult worms up to ~35 cm
            shape: "long, thread-like adult worms migrating in subcutaneous tissue",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Deer fly (Chrysops) injects larvae → larvae mature into adults in subcutaneous tissues → adults produce microfilariae in blood (daytime)",
        keyFeatures: ["Adult worms migrating in subcutaneous tissues", "Microfilariae in blood during daytime"],
        diseases: ["Loiasis"],
        environment: "Humans; deer fly vectors (Chrysops); West/Central Africa (rainforest)",
        diagnosticTests: ["Blood smear for microfilariae present during daytime", "Visual identification of adult worm in eye"],
        affectedCellTypes: "Subcutaneous tissues, ocular tissues",
        associatedDiseases: ["Localized edema (Calabar swellings)", "Worm crossing conjunctiva (African eye worm)"],
        exposure: "Deer fly bite",
        specialTests: ["Ocular examination for adult worms"],
        treatment: "Diethylcarbamazine or albendazole",
        note: "“African eye worm”",
        vaccine: "None"
    },
    // =========================
    // HELMINTHS - NEMATODES (INTESTINAL)
    // =========================
    {
        category: "parasite",
        name: "Enterobius vermicularis (pinworm)",
        classification: "Nematode",
        morphology: {
            size: 1, // ~1 cm
            shape: "thin, elongated worms",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Ingestion of eggs → eggs hatch in intestine → adult worms in intestine → female lays eggs around anus at night",
        keyFeatures: ["Small white worms", "Eggs with flattened side", "Female lays eggs around anus"],
        diseases: ["Pinworm infection"],
        environment: "Humans; especially in children",
        diagnosticTests: ["Scotch tape test for eggs"],
        affectedCellTypes: "Intestinal epithelial cells",
        associatedDiseases: ["Pruritus ani (perianal itching)"],
        exposure: "Fecal-oral ingestion of eggs, especially in children",
        specialTests: ["Microscopic identification of eggs on perianal skin"],
        treatment: "Mebendazole, albendazole, or pyrantel pamoate",
        note: "Most common helminth infection in US children",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Ancylostoma duodenale",
        classification: "Nematode",
        morphology: {
            size: 1, // ~1 cm
            shape: "hook-shaped anterior end",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Filariform larvae in soil penetrate skin → migrate through bloodstream → lungs → swallowed → mature in intestines, adult worms suck blood",
        keyFeatures: ["Curved adult worms with hook-shaped anterior end", "Eggs with distinct morphology"],
        diseases: ["Hookworm infection"],
        environment: "Humans; soil contaminated with larvae; worldwide (tropics), historically Southeastern US",
        diagnosticTests: ["Stool O&P (eggs)", "Eosinophilia in blood tests"],
        affectedCellTypes: "Intestinal epithelial cells, red blood cells",
        associatedDiseases: ["Chronic intestinal blood loss", "Iron deficiency anemia", "Malnutrition"],
        exposure: "Filariform larvae penetrate skin (especially barefoot walking in contaminated soil)",
        specialTests: ["Microscopic identification of eggs in stool"],
        treatment: "Albendazole or mebendazole, iron supplementation",
        note: "Often co-labeled with Necator americanus as 'hookworms'",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Necator americanus",
        classification: "Nematode",
        morphology: {
            size: 1, // ~1 cm
            shape: "hook-shaped anterior end",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Filariform larvae in soil penetrate skin → migrate through bloodstream → lungs → swallowed → mature in intestines, adult worms suck blood",
        keyFeatures: ["Curved adult worms with hook-shaped anterior end", "Eggs with distinct morphology"],
        diseases: ["Hookworm infection"],
        environment: "Humans; soil contaminated with larvae; Americas and other tropical/subtropical regions",
        diagnosticTests: ["Stool O&P (eggs)", "Eosinophilia in blood tests"],
        affectedCellTypes: "Intestinal epithelial cells, red blood cells",
        associatedDiseases: ["Iron deficiency anemia", "Protein loss"],
        exposure: "Larval penetration through skin (especially barefoot walking in contaminated soil)",
        specialTests: ["Microscopic identification of eggs in stool"],
        treatment: "Albendazole, mebendazole, pyrantel pamoate",
        note: "Causative agent of 'ground itch', 'hookworm disease'",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Ascaris lumbricoides (giant roundworm)",
        classification: "Nematode",
        morphology: {
            size: 35, // females up to 35 cm
            shape: "long cylindrical worms",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Ingestion of eggs → eggs hatch in intestine → larvae migrate through bloodstream to lungs → coughed up and swallowed → mature into adults in intestine",
        keyFeatures: ["Largest intestinal nematode in humans", "Knobby-coated eggs", "High worm burden can obstruct intestines or bile ducts"],
        diseases: ["Ascariasis"],
        environment: "Humans; soil contaminated with feces; worldwide, especially in areas with poor sanitation",
        diagnosticTests: ["Stool O&P (knobby-coated eggs)", "Eosinophilia in blood tests"],
        affectedCellTypes: "Intestinal epithelial cells, bile duct cells",
        associatedDiseases: ["Gastrointestinal obstruction", "Pulmonary symptoms during larval migration"],
        exposure: "Fecal-oral ingestion of eggs",
        specialTests: ["Microscopic identification of eggs in stool"],
        treatment: "Albendazole, mebendazole",
        note: "Largest intestinal nematode in humans",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Strongyloides stercoralis",
        classification: "Nematode",
        morphology: {
            size: 1, // adult females ~1 cm
            shape: "thread-like worms with rhabditiform and filariform larvae",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Filariform larvae penetrate skin → migrate through bloodstream to lungs → coughed up and swallowed → mature in intestine → can cause autoinfection or hyperinfection in immunosuppressed individuals",
        keyFeatures: ["Rhabditiform and filariform larvae", "Autoinfection capability"],
        diseases: ["Strongyloidiasis"],
        environment: "Humans; soil contaminated with larvae; tropics, subtropics, some temperate zones",
        diagnosticTests: ["Stool O&P (rhabditiform larvae)", "Serological tests"],
        affectedCellTypes: "Intestinal epithelial cells",
        associatedDiseases: ["Abdominal pain", "Diarrhea", "Hyperinfection syndrome in immunosuppressed"],
        exposure: "Skin penetration by filariform larvae",
        specialTests: ["PCR for Strongyloides DNA"],
        treatment: "Ivermectin, albendazole",
        note: "Only helminth that can replicate in host (autoinfection)",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Trichinella spiralis",
        classification: "Nematode",
        morphology: {
            size: 3, // adult worms ~3 cm
            shape: "coiled larvae in muscle, adult worms in intestine",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Ingestion of undercooked meat containing encysted larvae → larvae released in intestine → adults reproduce → new larvae migrate and encyst in muscle tissues",
        keyFeatures: ["Encysted larvae in striated muscle", "Coiled larvae", "Adult worms in intestine"],
        diseases: ["Trichinosis"],
        environment: "Humans, pigs, wild game; wherever pork is consumed",
        diagnosticTests: ["Serological tests", "Muscle biopsy for encysted larvae"],
        affectedCellTypes: "Skeletal muscle cells",
        associatedDiseases: ["Periorbital edema", "Myositis", "Eosinophilia"],
        exposure: "Ingestion of undercooked or raw meat containing encysted larvae",
        specialTests: ["ELISA for Trichinella antibodies"],
        treatment: "Albendazole or mebendazole, steroids if severe",
        note: "Classic triad: periorbital edema, myositis, eosinophilia",
        vaccine: "None"
    },
    // =========================
    // HELMINTHS - CESTODES (TAPEWORMS)
    // =========================
    {
        category: "parasite",
        name: "Taenia solium",
        classification: "Cestode",
        morphology: {
            size: 1.5, // adult worms ~1.5 meters
            shape: "flat, segmented worms with scolex containing hooks",
            segmentation: true,
            appendages: {
                presence: true,
                type: "hooks",
                count: 20 // Average number of hooks on scolex; varies
            }
        },
        lifeCycle: "Ingestion of larval cysts in pork → intestinal tapeworm develops or ingestion of eggs via fecal-oral route → cysticercosis in tissues",
        keyFeatures: ["Scolex with hooks", "Proglottids (segments)", "Eggs in feces"],
        diseases: ["Taeniasis", "Cysticercosis", "Neurocysticercosis"],
        environment: "Humans (definitive host), pigs (intermediate host); wherever pigs are raised; Worldwide",
        diagnosticTests: ["Stool O&P (proglottids)", "Imaging for cysts", "Serological tests"],
        affectedCellTypes: "Intestinal epithelial cells (taeniasis), CNS cells (neurocysticercosis)",
        associatedDiseases: ["Neurocysticercosis (CNS lesions)", "Cysticercosis (tissue cysts)"],
        exposure: "Ingestion of undercooked pork containing cysticerci or ingestion of eggs via fecal-oral route",
        specialTests: ["PCR for Taenia DNA", "CT/MRI for neurocysticercosis"],
        treatment: "Praziquantel for intestinal tapeworm; albendazole for neurocysticercosis",
        note: "Brain lesions on CT/MRI with 'ring-enhancing' cysts",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Taenia saginata",
        classification: "Cestode",
        morphology: {
            size: 4, // adult worms ~4 meters
            shape: "flat, segmented worms with scolex lacking hooks",
            segmentation: true,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Ingestion of undercooked beef containing cysticerci → adult tapeworm develops in intestine",
        keyFeatures: ["Scolex without hooks ('unarmed')", "Large proglottids (segments)", "Eggs in feces"],
        diseases: ["Taeniasis"],
        environment: "Humans (definitive host), cattle (intermediate host); Worldwide where beef is consumed",
        diagnosticTests: ["Stool O&P (proglottids, eggs)"],
        affectedCellTypes: "Intestinal epithelial cells",
        associatedDiseases: ["Mild gastrointestinal symptoms", "Often asymptomatic"],
        exposure: "Ingestion of undercooked beef containing cysticerci",
        specialTests: ["PCR for Taenia saginata DNA"],
        treatment: "Praziquantel",
        note: "No hooks on scolex ('unarmed')",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Diphyllobothrium latum",
        classification: "Cestode",
        morphology: {
            size: 10, // adult worms up to 10 meters
            shape: "flat, segmented worms with rosette uterus",
            segmentation: true,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Ingestion of raw or undercooked freshwater fish containing larval forms → adult tapeworm in intestine → eggs excreted in feces",
        keyFeatures: ["Longest human tapeworm (~10 meters)", "Rosette uterus in proglottids", "Operculated eggs"],
        diseases: ["Diphyllobothriasis"],
        environment: "Humans; freshwater fish as intermediate hosts; Scandinavia, Great Lakes, parts of Asia",
        diagnosticTests: ["Stool O&P (operculated eggs, proglottids)"],
        affectedCellTypes: "Intestinal epithelial cells",
        associatedDiseases: ["Vitamin B12 deficiency", "Megaloblastic anemia", "Pernicious anemia-like symptoms"],
        exposure: "Ingestion of raw or undercooked freshwater fish containing larval forms",
        specialTests: ["PCR for Diphyllobothrium DNA"],
        treatment: "Praziquantel",
        note: "Longest human tapeworm, competes for B12",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Echinococcus granulosus",
        classification: "Cestode",
        morphology: {
            size: 1.5, // adult worms ~1.5 meters
            shape: "small, flat tapeworms with hydatid cysts in intermediate hosts",
            segmentation: true,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Dogs (definitive hosts) harbor adult worms → eggs shed in feces → ingestion by intermediate hosts (sheep) → larval stage forms hydatid cysts in liver or lungs → humans accidentally ingest eggs → hydatid cysts develop in human organs",
        keyFeatures: ["Hydatid cysts in liver and lungs", "Brood capsules within cysts", "Small adult worms in dogs"],
        diseases: ["Hydatid cyst disease"],
        environment: "Dogs (definitive host), sheep (intermediate host), humans (accidental host); Sheep-raising areas (Mediterranean, Middle East, etc.)",
        diagnosticTests: ["Imaging (large cysts)", "Serological tests", "Ultrasound showing 'hydatid sand'"],
        affectedCellTypes: "Liver cells, lung cells",
        associatedDiseases: ["Cyst expansion causing mass effect", "Anaphylaxis if cyst ruptures"],
        exposure: "Ingestion of eggs from dog feces",
        specialTests: ["Imaging (Ultrasound, CT, MRI) for cyst detection"],
        treatment: "PAIR (puncture-aspiration-injection-reaspiration) + albendazole",
        note: "Anaphylactic shock if cyst contents spill",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Echinococcus multilocularis",
        classification: "Cestode",
        morphology: {
            size: 1.5, // adult worms ~1.5 meters
            shape: "flat, segmented worms similar to E. granulosus, forms alveolar cysts",
            segmentation: true,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Eggs ingested by intermediate hosts (rodents) → larval stage forms alveolar cysts in liver → eggs shed by definitive hosts (foxes, dogs) → humans accidentally ingest eggs → alveolar cysts develop in human liver",
        keyFeatures: ["Alveolar/multiloculated cysts in liver", "Invasive tumor-like growth"],
        diseases: ["Alveolar echinococcosis"],
        environment: "Foxes, dogs (definitive hosts), rodents (intermediate hosts), humans (accidental); Northern hemisphere (Europe, North Asia, North America)",
        diagnosticTests: ["Imaging (multiloculated cystic lesions)", "Serological tests"],
        affectedCellTypes: "Liver cells",
        associatedDiseases: ["Invasive tumor-like growth in liver", "Possible metastasis"],
        exposure: "Ingestion of eggs from feces of infected canids",
        specialTests: ["Imaging (Ultrasound, CT, MRI)", "PCR for E. multilocularis DNA"],
        treatment: "Radical surgical resection + albendazole long-term",
        note: "Mimics carcinoma with infiltration of liver tissue",
        vaccine: "None"
    },
    // =========================
    // HELMINTHS - TREMATODES (FLUKES)
    // =========================
    {
        category: "parasite",
        name: "Schistosoma mansoni",
        classification: "Trematode",
        morphology: {
            size: 0.7, // adult worms ~7 cm
            shape: "elongated flukes with paired sexes; eggs with lateral spine",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Eggs shed in feces → hatch into miracidia → infect snails (intermediate host) → cercariae released into freshwater → penetrate human skin → mature into adults in mesenteric veins → eggs excreted in feces",
        keyFeatures: ["Eggs with lateral spine", "Paired adult worms (male and female)", "Granulomatous reaction to eggs"],
        diseases: ["Intestinal schistosomiasis", "Liver fibrosis (pipestem cirrhosis)", "Portal hypertension"],
        environment: "Humans; snails as intermediate hosts; Africa, South America, Caribbean, Middle East",
        diagnosticTests: ["Stool O&P (eggs with lateral spine)", "Serological tests"],
        affectedCellTypes: "Intestinal and liver cells",
        associatedDiseases: ["Granulomatous reactions", "Intestinal and liver pathology", "Portal hypertension"],
        exposure: "Cercariae penetrating skin in freshwater",
        specialTests: ["Ultrasound for liver fibrosis", "PCR for Schistosoma mansoni DNA"],
        treatment: "Praziquantel",
        note: "“Mansoni = lateral spine,” chronic infection → portal hypertension",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Schistosoma haematobium",
        classification: "Trematode",
        morphology: {
            size: 0.6, // adult worms ~6 cm
            shape: "elongated flukes with paired sexes; eggs with terminal spine",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Eggs shed in urine → hatch into miracidia → infect snails (intermediate host) → cercariae released into freshwater → penetrate human skin → mature into adults in vesical plexus → eggs excreted in urine",
        keyFeatures: ["Eggs with terminal spine", "Paired adult worms (male and female)", "Granulomatous reaction to eggs"],
        diseases: ["Urinary schistosomiasis", "Bladder squamous cell carcinoma"],
        environment: "Humans; snails as intermediate hosts; Africa, Middle East",
        diagnosticTests: ["Urine O&P (eggs with terminal spine)", "Serological tests"],
        affectedCellTypes: "Urinary tract epithelial cells",
        associatedDiseases: ["Hematuria", "Bladder inflammation", "Risk of bladder squamous cell carcinoma"],
        exposure: "Cercariae penetrating skin in freshwater",
        specialTests: ["Imaging of urinary tract"],
        treatment: "Praziquantel",
        note: "Association with squamous cell carcinoma of bladder",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Schistosoma japonicum",
        classification: "Trematode",
        morphology: {
            size: 0.5, // adult worms ~5 cm
            shape: "elongated flukes with eggs having small lateral spine",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Eggs shed in feces → hatch into miracidia → infect snails (intermediate host) → cercariae released into freshwater → penetrate human skin → mature into adults in mesenteric veins → eggs excreted in stool",
        keyFeatures: ["Eggs with tiny lateral spine", "Paired adult worms (male and female)", "Granulomatous reaction to eggs"],
        diseases: ["Hepatosplenic schistosomiasis", "Portal hypertension"],
        environment: "Humans; snails as intermediate hosts; East Asia (China, Philippines, etc.)",
        diagnosticTests: ["Stool O&P (smaller eggs)", "Serological tests"],
        affectedCellTypes: "Gastrointestinal and liver cells",
        associatedDiseases: ["Granulomatous reactions", "Gastrointestinal and liver pathology", "Portal hypertension"],
        exposure: "Cercariae penetrating skin in freshwater",
        specialTests: ["Ultrasound for liver fibrosis", "PCR for Schistosoma japonicum DNA"],
        treatment: "Praziquantel",
        note: "More severe than mansoni in some cases",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Clonorchis sinensis (Chinese liver fluke)",
        classification: "Trematode",
        morphology: {
            size: 1.5, // adult flukes ~1.5 cm
            shape: "leaf-shaped flukes with operculated eggs",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Ingestion of undercooked freshwater fish containing metacercariae → excyst in duodenum → adult flukes reside in bile ducts → eggs excreted in feces",
        keyFeatures: ["Leaf-shaped fluke", "Operculated eggs", "Bile duct residence"],
        diseases: ["Clonorchiasis"],
        environment: "Humans; snails and freshwater fish as intermediate hosts; East Asia (China, Korea, Vietnam)",
        diagnosticTests: ["Stool O&P (operculated eggs)", "Imaging of biliary ducts"],
        affectedCellTypes: "Biliary epithelial cells",
        associatedDiseases: ["Inflammation of biliary tract", "Cholangitis", "Gallstones", "Risk of cholangiocarcinoma"],
        exposure: "Ingestion of undercooked freshwater fish with metacercariae",
        specialTests: ["Imaging (Ultrasound, CT, MRI) for biliary tract disease", "PCR for Clonorchis sinensis DNA"],
        treatment: "Praziquantel",
        note: "Associated with pigmented gallstones, cholangiocarcinoma",
        vaccine: "None"
    },
    {
        category: "parasite",
        name: "Paragonimus westermani (lung fluke)",
        classification: "Trematode",
        morphology: {
            size: 1, // adult flukes ~1 cm
            shape: "oval, reddish-brown flukes with operculated eggs",
            segmentation: false,
            appendages: {
                presence: false,
                type: "N/A",
                count: 0
            }
        },
        lifeCycle: "Ingestion of undercooked or raw freshwater crabs/crayfish containing metacercariae → excyst in intestine → migrate through abdominal cavity → penetrate diaphragm to reach lungs → mature into adult flukes → eggs coughed up or swallowed",
        keyFeatures: ["Ovoid shape", "Operculated eggs in sputum", "Migration to lungs"],
        diseases: ["Paragonimiasis"],
        environment: "Humans; crustaceans (crab/crayfish) as intermediate hosts; Asia, Africa, parts of South/Central America",
        diagnosticTests: ["Sputum or stool examination for operculated eggs", "Imaging of lungs (X-ray, CT)"],
        affectedCellTypes: "Lung epithelial cells",
        associatedDiseases: ["Chronic cough", "Hemoptysis", "Eosinophilic lung disease", "TB-like symptoms"],
        exposure: "Ingestion of undercooked or raw freshwater crabs/crayfish",
        specialTests: ["Imaging (X-ray, CT scans) for lung lesions", "PCR for Paragonimus DNA"],
        treatment: "Praziquantel",
        note: "Causes eosinophilic lung disease, can mimic TB",
        vaccine: "None"
    }
]; // end allParasitesData

let allFungiData = [
    // 1) BLASTOMYCES DERMATITIDIS
    {
        category: "fungus",
        name: "Blastomyces dermatitidis",
        morphology: "dimorphic (mold in cold, yeast in heat)",
        shapeDetail: "Broad-based budding yeast",
        environment: "Moist soil, decaying wood (Great Lakes, Ohio River Valley)",
        exposure: "Inhalation of conidia from soil/wood",
        dimorphism: "Yes (mold at 25°C, yeast at 37°C)",
        capsule: false,
        spores: true, // mold form has conidia
        specialTests: "KOH prep of tissue, culture on Sabouraud agar, antigen test in urine/serum",
        growthMedia: [
            {
                mediumName: "Sabouraud agar",
                colonyColor: "Whitish mold (at 25°C)",
                environment: "Slow growing, 2-4 weeks"
            }
        ],
        airRequirements: "Varies; generally grows as mold in environment, yeast in tissues",
        virulenceFactors: [
            {
                factorName: "Thick-walled yeast form",
                diagramType: "biofilmNet"
            }
        ],
        affectedCellTypes: "Lung macrophages, disseminates to skin/bone",
        associatedDiseases: "Pneumonia-like illness, verrucous skin lesions, osteomyelitis",
        vaccine: "None"
    },
    // 2) COCCIDIOIDES IMMITIS
    {
        category: "fungus",
        name: "Coccidioides immitis",
        morphology: "dimorphic (mold in soil, spherule in tissue)",
        shapeDetail: "Spherule filled with endospores in tissue",
        environment: "Desert regions (Southwestern US), 'Valley Fever'",
        exposure: "Inhalation of arthroconidia from soil/dust",
        dimorphism: "Yes (mold at 25°C, spherule at 37°C)",
        capsule: false,
        spores: true, // arthroconidia in environment
        specialTests: "Spherules on histopath, serology (IgM, IgG), culture on Sabouraud agar",
        growthMedia: [
            {
                mediumName: "Sabouraud agar",
                colonyColor: "White-gray mold, alternating arthroconidia",
                environment: "Slow growth, handle in biosafety cabinet"
            }
        ],
        airRequirements: "Varies by temperature (mold vs. spherule)",
        virulenceFactors: [
            {
                factorName: "Spherule with endospores",
                diagramType: "biofilmNet"
            }
        ],
        affectedCellTypes: "Alveolar spaces; can disseminate (esp. immunocompromised)",
        associatedDiseases: "Valley Fever (pneumonia), erythema nodosum, meningitis in severe cases",
        vaccine: "None"
    },
    // 3) HISTOPLASMA CAPSULATUM
    {
        category: "fungus",
        name: "Histoplasma capsulatum",
        morphology: "dimorphic (mold in environment, yeast in macrophages)",
        shapeDetail: "Small yeast within macrophages",
        environment: "Soil with bird/bat droppings (Ohio & Mississippi River valleys)",
        exposure: "Inhalation of microconidia from soil w/ droppings",
        dimorphism: "Yes (mold at 25°C, yeast at 37°C)",
        capsule: false,
        spores: true,
        specialTests: "Urine antigen test, KOH prep, culture (Sabouraud), Histoplasma antigen in serum",
        growthMedia: [
            {
                mediumName: "Sabouraud agar",
                colonyColor: "White-brownish mold, tuberculate macroconidia",
                environment: "Slow growth"
            }
        ],
        airRequirements: "Mold in environment, intracellular yeast in humans",
        virulenceFactors: [
            {
                factorName: "Survives inside macrophages",
                diagramType: "biofilmNet"
            }
        ],
        affectedCellTypes: "Macrophages (yeast form multiplies intracellularly)",
        associatedDiseases: "Pulmonary infection, can mimic TB; disseminated disease in immunocompromised",
        vaccine: "None"
    },
    // 4) PARACOCCIDIOIDES BRASILIENSIS
    {
        category: "fungus",
        name: "Paracoccidioides brasiliensis",
        morphology: "dimorphic (mold in environment, 'pilot’s wheel' yeast in tissue)",
        shapeDetail: "'Mickey Mouse ear' or 'pilot’s wheel' budding yeast",
        environment: "Rural areas of Latin America (especially Brazil)",
        exposure: "Inhalation of conidia from soil",
        dimorphism: "Yes",
        capsule: false,
        spores: true,
        specialTests: "KOH prep, culture, serology (double immunodiffusion)",
        growthMedia: [
            {
                mediumName: "Sabouraud agar",
                colonyColor: "Slow-growing mold, branching hyphae",
                environment: "2-4 weeks, mold to yeast transition at 37°C"
            }
        ],
        airRequirements: "Mold at 25°C, yeast at 37°C in tissue",
        virulenceFactors: [
            {
                factorName: "Multiple-budding yeast form",
                diagramType: "biofilmNet"
            }
        ],
        affectedCellTypes: "Lungs initially; can disseminate to mucous membranes, lymph nodes",
        associatedDiseases: "Pulmonary infection, mucosal lesions ('South American blastomycosis')",
        vaccine: "None"
    },
    // 5) DERMATOPHYTES (Epidermophyton, Trichophyton, Microsporum)
    //    -- We can separate them or keep them as an umbrella:
    {
        category: "fungus",
        name: "Epidermophyton spp.",
        morphology: "septate hyphae, macroconidia on KOH prep",
        shapeDetail: "Club-shaped macroconidia, infects skin/nails",
        environment: "Skin/hair/nails of humans or animals, moist areas",
        exposure: "Contact with infected skin scales, fomites",
        dimorphism: false,
        capsule: false,
        spores: true,
        specialTests: "KOH prep of skin scrapings (hyphae), Wood’s lamp (some species glow)",
        growthMedia: [
            {
                mediumName: "Dermatophyte test medium (DTM)",
                colonyColor: "Varies (white to yellowish), red color change in medium",
                environment: "Moderate growth"
            }
        ],
        airRequirements: null,
        virulenceFactors: [
            {
                factorName: "Keratin digestion",
                diagramType: "enzymeIcon"
            }
        ],
        affectedCellTypes: "Keratinized tissues (skin, nails)",
        associatedDiseases: "Tinea infections (ringworm) of skin/nails",
        vaccine: "None"
    },
    {
        category: "fungus",
        name: "Trichophyton spp.",
        morphology: "septate hyphae, numerous microconidia",
        shapeDetail: "Cylindrical or cigar-shaped microconidia, infects skin/hair/nails",
        environment: "Warm, moist environments",
        exposure: "Contact with infected surfaces (showers, floors), direct skin contact",
        dimorphism: false,
        capsule: false,
        spores: true,
        specialTests: "KOH prep, culture on DTM, sometimes Wood’s lamp (less common glow)",
        growthMedia: [
            {
                mediumName: "DTM, Sabouraud agar",
                colonyColor: "White fuzzy colony, underside may be red/purple",
                environment: "Grows in typical lab environment"
            }
        ],
        airRequirements: null,
        virulenceFactors: [
            {
                factorName: "Keratinase",
                diagramType: "enzymeIcon"
            }
        ],
        affectedCellTypes: "Skin, hair, nails",
        associatedDiseases: "Tinea pedis, tinea corporis, tinea unguium, etc.",
        vaccine: "None"
    },
    {
        category: "fungus",
        name: "Microsporum spp.",
        morphology: "septate hyphae, numerous macroconidia (spindle-shaped)",
        shapeDetail: "Spindle-shaped macroconidia, infects hair and skin mainly",
        environment: "Soil, animals (cats, dogs)",
        exposure: "Contact with infected pets or soil",
        dimorphism: false,
        capsule: false,
        spores: true,
        specialTests: "Wood’s lamp (many species fluoresce), KOH prep",
        growthMedia: [
            {
                mediumName: "DTM",
                colonyColor: "White to brownish, may turn medium red",
                environment: "Routine lab setting"
            }
        ],
        airRequirements: null,
        virulenceFactors: [
            {
                factorName: "Keratinase",
                diagramType: "enzymeIcon"
            }
        ],
        affectedCellTypes: "Hair shafts, stratum corneum",
        associatedDiseases: "Tinea capitis, tinea corporis",
        vaccine: "None"
    },
    // 6) MALASSEZIA FURFUR
    {
        category: "fungus",
        name: "Malassezia furfur",
        morphology: "Lipophilic yeast with 'spaghetti and meatballs' appearance",
        shapeDetail: "Short hyphae + round spores in KOH prep",
        environment: "Skin surface (sebaceous areas)",
        exposure: "Opportunistic overgrowth of normal skin flora",
        dimorphism: false,
        capsule: false,
        spores: false,
        specialTests: "KOH prep of skin scrapings showing 'spaghetti and meatballs'",
        growthMedia: [
            {
                mediumName: "Dixon agar (lipid-rich)",
                colonyColor: "Creamy or whitish",
                environment: "Requires lipids for growth"
            }
        ],
        airRequirements: null,
        virulenceFactors: [
            {
                factorName: "Azelaic acid production (hypopigmentation)",
                diagramType: "enzymeIcon"
            }
        ],
        affectedCellTypes: "Superficial epidermis",
        associatedDiseases: "Tinea versicolor (pityriasis), hypopigmented/hyperpigmented patches",
        vaccine: "None"
    },
    // 7) SPOROTHRIX SCHENCKII
    {
        category: "fungus",
        name: "Sporothrix schenckii",
        morphology: "dimorphic (mold with rosettes of conidia at 25°C, cigar-shaped yeast at 37°C)",
        shapeDetail: "Cigar-shaped budding yeast in tissue",
        environment: "Rose thorns, sphagnum moss, decaying vegetation",
        exposure: "Traumatic implantation (thorn prick), 'rose gardener’s disease'",
        dimorphism: true,
        capsule: false,
        spores: true,
        specialTests: "Culture on Sabouraud (mold) and conversion to yeast at 37°C, histopath",
        growthMedia: [
            {
                mediumName: "Sabouraud agar",
                colonyColor: "Dark or white mold, 'rosette' conidia arrangement",
                environment: "Grows in ~1-2 weeks"
            }
        ],
        airRequirements: null,
        virulenceFactors: [
            {
                factorName: "Thermotolerance (dimorphism)",
                diagramType: "biofilmNet"
            }
        ],
        affectedCellTypes: "Subcutaneous tissues, lymphatic spread",
        associatedDiseases: "Sporotrichosis (ascending lymphangitic spread of nodules)",
        vaccine: "None"
    },
    // 8) ASPERGILLUS FUMIGATUS
    {
        category: "fungus",
        name: "Aspergillus fumigatus",
        morphology: "septate hyphae with acute angle branching (~45°), conidial heads",
        shapeDetail: "Radiating conidial head, narrow septate hyphae",
        environment: "Soil, compost; airborne conidia",
        exposure: "Inhalation of conidia in immunocompromised or pre-existing lung cavities",
        dimorphism: false,
        capsule: false,
        spores: true,
        specialTests: "Microscopy of sputum (septate hyphae), galactomannan antigen test, culture",
        growthMedia: [
            {
                mediumName: "Sabouraud agar",
                colonyColor: "Greenish or bluish mold, fuzzy surface",
                environment: "Aerobic, grows quickly"
            }
        ],
        airRequirements: "Aerobic mold",
        virulenceFactors: [
            {
                factorName: "Gliotoxin (immunosuppressive)",
                diagramType: "exotoxinStar"
            }
        ],
        affectedCellTypes: "Respiratory tract (allergic bronchopulmonary aspergillosis, aspergilloma), vessels",
        associatedDiseases: "Invasive aspergillosis, aspergilloma in lung cavities, ABPA",
        vaccine: "None"
    },
    // 9) CANDIDA ALBICANS
    {
        category: "fungus",
        name: "Candida albicans",
        morphology: "yeast with pseudohyphae, germ tube positive",
        shapeDetail: "Budding yeast, pseudohyphae, can form germ tubes at 37°C",
        environment: "Normal mucosal flora (GI tract, vagina)",
        exposure: "Overgrowth with antibiotic use, immunosuppression, etc.",
        dimorphism: true, // yeast + hyphae
        capsule: false,
        spores: false,
        specialTests: "Germ tube test (37°C serum), CHROMagar for color differentiation",
        growthMedia: [
            {
                mediumName: "Sabouraud agar",
                colonyColor: "White, creamy, smooth colonies",
                environment: "Facultative"
            }
        ],
        airRequirements: "Facultative anaerobe",
        virulenceFactors: [
            {
                factorName: "Germ tubes/hyphal transition",
                diagramType: "biofilmNet"
            }
        ],
        affectedCellTypes: "Mucosal surfaces, can disseminate to bloodstream",
        associatedDiseases: "Thrush, vaginitis, esophagitis, systemic candidiasis",
        vaccine: "None"
    },
    // 10) CRYPTOCOCCUS NEOFORMANS
    {
        category: "fungus",
        name: "Cryptococcus neoformans",
        morphology: "yeast, heavily encapsulated, narrow-based budding",
        shapeDetail: "Round yeast with thick polysaccharide capsule",
        environment: "Soil contaminated with pigeon droppings",
        exposure: "Inhalation of spores/yeast from environment",
        dimorphism: false,
        capsule: true,
        spores: false,
        specialTests: "India ink prep, mucicarmine stain, cryptococcal antigen test (latex agglutination)",
        growthMedia: [
            {
                mediumName: "Sabouraud agar",
                colonyColor: "Mucoid, cream-colored",
                environment: "Mesophilic, grows in normal lab conditions"
            }
        ],
        airRequirements: "Aerobic yeast",
        virulenceFactors: [
            {
                factorName: "Polysaccharide capsule",
                diagramType: "largeCapsuleGlow"
            },
            {
                factorName: "Melanin production",
                diagramType: "enzymeIcon"
            }
        ],
        affectedCellTypes: "Lungs, CNS (meninges)",
        associatedDiseases: "Cryptococcal pneumonia, meningitis (especially in AIDS)",
        vaccine: "None"
    },
    // 11) MUCOR & RHIZOPUS SPP. (MUCORMYCETES)
    {
        category: "fungus",
        name: "Mucor spp. (mucormycetes)",
        morphology: "non-septate hyphae, wide-angle branching (~90°)",
        shapeDetail: "Ribbon-like hyphae with right-angle branching",
        environment: "Soil, decaying organic matter",
        exposure: "Inhalation of spores, especially in diabetic or immunocompromised patients",
        dimorphism: false,
        capsule: false,
        spores: true,
        specialTests: "Microscopic exam of tissue (non-septate hyphae), culture (fast-growing 'cottony' mold)",
        growthMedia: [
            {
                mediumName: "Sabouraud agar",
                colonyColor: "White-gray, fluffy, rapid growth",
                environment: "Aerobic mold"
            }
        ],
        airRequirements: "Aerobic mold",
        virulenceFactors: [
            {
                factorName: "Angioinvasion (hyphae invade blood vessels)",
                diagramType: "biofilmNet"
            }
        ],
        affectedCellTypes: "Nasal sinuses, blood vessels, can extend to brain",
        associatedDiseases: "Mucormycosis (rhino-cerebral), especially in DKA or immunosuppression",
        vaccine: "None"
    },
    {
        category: "fungus",
        name: "Rhizopus spp. (mucormycetes)",
        morphology: "similar to Mucor (non-septate hyphae, ~90° branching)",
        shapeDetail: "Ribbon-like, wide-angle branching hyphae",
        environment: "Soil, decaying vegetation, widespread",
        exposure: "Inhalation of spores, risk in diabetic ketoacidosis",
        dimorphism: false,
        capsule: false,
        spores: true,
        specialTests: "Tissue biopsy (non-septate hyphae with right-angle branching), culture",
        growthMedia: [
            {
                mediumName: "Sabouraud agar",
                colonyColor: "Rapidly growing, cottony white/gray mold",
                environment: "Aerobic"
            }
        ],
        airRequirements: "Aerobic mold",
        virulenceFactors: [
            {
                factorName: "Angioinvasion",
                diagramType: "biofilmNet"
            }
        ],
        affectedCellTypes: "Sinuses, orbit, brain (rhino-orbital-cerebral infections)",
        associatedDiseases: "Mucormycosis, necrosis in sinus/orbit, can be fatal",
        vaccine: "None"
    },
    // 12) PNEUMOCYSTIS JIROVECII
    {
        category: "fungus",
        name: "Pneumocystis jirovecii",
        morphology: "Atypical fungus, disc-shaped cysts on methenamine silver stain",
        shapeDetail: "Cysts with 'cup' or 'disc' shape, crushed ping-pong ball appearance",
        environment: "Ubiquitous in environment, often in immunocompromised hosts",
        exposure: "Airborne transmission, reactivation in immunosuppressed",
        dimorphism: false,
        capsule: false,
        spores: false,
        specialTests: "Bronchoalveolar lavage (BAL) fluid → methenamine silver stain or immunofluorescence",
        growthMedia: [],
        airRequirements: "Not typically cultured",
        virulenceFactors: [
            {
                factorName: "Attachment to alveolar epithelium",
                diagramType: "biofilmNet"
            }
        ],
        affectedCellTypes: "Type I pneumocytes (alveoli)",
        associatedDiseases: "Pneumocystis pneumonia (PCP) in AIDS (CD4 <200)",
        vaccine: "None"
    }
];
