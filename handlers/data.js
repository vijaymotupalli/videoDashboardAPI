var populateDB = {

    roles: [
        {

            "role": "SUPER_ADMIN",
            "privileges": [
                "ORG_ADD",
                "APP_ADD",
                "ADMIN_ADD"
            ]
        }


    ],
    privileges: [
        {
            "name": "ORG_ADD",
            "description": "Add Organization"
        },
        {
            "name": "APP_ADD",
            "description": "Add App"
        },
        {
            "name": "ADMIN_ADD",
            "description": "Add Admin"
        }

    ],
    facets: [
        {
            "_id": "DRESS_SIZE",
            "title": "Dress Size",
            "values": [
                {
                    "default": "XS"
                },
                {
                    "default": "S"
                },
                {
                    "default": "M"
                },
                {
                    "default": "L"
                },
                {
                    "default": "XL"
                },
                {
                    "default": "XXL"
                }
            ],
            "categories": [],
            "multiSelect": true,
            "appearance":"SIZE_LIST"
        },
        {
            "_id": "SHOE_SIZE",
            "title": "Shoe Size",
            "values": [
                {
                    "default": "3",
                    "alt": "36"
                },
                {
                    "default": "4",
                    "alt": "37"
                },
                {
                    "default": "4.5",
                    "alt": "37.5"
                },
                {
                    "default": "5",
                    "alt": "38"
                },
                {
                    "default": "5.5",
                    "alt": "38.5"
                },
                {
                    "default": "6",
                    "alt": "39"
                },
                {
                    "default": "6.5",
                    "alt": "39.5"
                },
                {
                    "default": "7",
                    "alt": "40"
                },
                {
                    "default": "8",
                    "alt": "41"
                },
                {
                    "default": "9",
                    "alt": "42"
                },

            ],
            "categories": [],
            "multiSelect": true,
            "appearance":"SIZE_LIST"
        },
        {
            "_id": "UPPER_WAIST_SIZE",
            "title": "Upper Waist Size",
            "values": [
                {
                    "default": "24"
                },
                {
                    "default": "25"
                },
                {
                    "default": "26"
                },
                {
                    "default": "27"
                },
                {
                    "default": "28"
                },
                {
                    "default": "29"
                },
                {
                    "default": "30"
                },
                {
                    "default": "32"
                },
                {
                    "default": "34"
                },
                {
                    "default": "36"
                }
            ],
            "categories": [],
            "multiSelect": true,
            "appearance":"SIZE_LIST"
        },
        {
            "_id": "LOWER_WAIST_SIZE",
            "title": "Lower Waist Size",
            "values": [

                {
                    "default": "26"
                },
                {
                    "default": "27"
                },
                {
                    "default": "28"
                },
                {
                    "default": "29"
                },
                {
                    "default": "30"
                },
                {
                    "default": "32"
                },
                {
                    "default": "34"
                },
                {
                    "default": "36"
                }
            ],
            "categories": [],
            "multiSelect": true,
            "appearance":"SIZE_LIST"
        },
        {
            "_id": "BUST_SIZE",
            "title": "Bust Size",
            "values": [],
            "categories": [],
            "multiSelect": true,
            "appearance":"SIZE_LIST"
        },
        {
            "_id": "HIP_SIZE",
            "title": "Hip Size",
            "values": [],
            "categories": [],
            "multiSelect": true,
            "appearance":"SIZE_LIST"
        },
        {
            "_id": "STYLES",
            "title": "Styles",
            "values": [
                {
                  "default":"Western"
                },
                {
                    "default":"Sporty/Casual"
                },
                {
                    "default":"Traditional/Ethnic"
                },
                {
                    "default":"Sexy/Party"
                },
                {
                    "default":"High Street"
                },
                {
                    "default":"Vintage"
                },
                {
                    "default":"Boho"
                },
            ],
            "categories": [],
            "multiSelect": true,
            "appearance":"SIZE_LIST"
        },
        {
            "_id": "BRANDS",
            "title": "Brands",
            "values": [{"default":"ANASTASIA BEVERLY HILLS"},
                {"default":"AMWAY"},
                {"default":"AVON"},
                {"default":"ABHISHTI"},
                {"default":"ALAYNA"},
                {"default":"ALBERTA FERRETTI"},
                {"default":"ALEXANDER WANG"},
                {"default":"ALEXANDER McQUEEN"},
                {"default":"ACCESSORIZE"},
                {"default":"ALL SAINTS"},
                {"default":"AMERICAN EAGLE"},
                {"default":"ASOS"},
                {"default":"ARMANI"},
                {"default":"ARMANI EXCHANGE"},
                {"default":"ADIDAS"},
                {"default":"ANNAMIKA KHANNA"},
                {"default":"AKI NARULA"},
                {"default":"AND"},
                {"default":"ABERCROMBIE & FITCH"},
                {"default":"ALDO"},
                {"default":"ALDO ACCESSORIES"},
                {"default":"AMERICAN TOURISTER"},
                {"default":"ALLEN SOLLY"},
                {"default":"ANITA DONGRE"},
                {"default":"ARROW"},
                {"default":"ANOKHI"},
                {"default":"BBLUNT"},
                {"default":"BOURJOIS"},
                {"default":"BRAUN"},
                {"default":"BHARAT & DORRIS"},
                {"default":"BOBBI BROWN"},
                {"default":"BOTTEGA VENETA"},
                {"default":"BALMAIN"},
                {"default":"BRIAN ATWOOD"},
                {"default":"BECCA"},
                {"default":"BVLGARI"},
                {"default":"BENETTON"},
                {"default":"BEING HUMAN"},
                {"default":"BEBE"},
                {"default":"BANANA REPUBLIC"},
                {"default":"BURBERRY"},
                {"default":"B*WITCH"},
                {"default":"BAGGIT"},
                {"default":"BATH & BODY WORKS"},
                {"default":"BRUNO MANETTI"},
                {"default":"BOSSINI"},
                {"default":"BIOTIQUE"},
                {"default":"BARE ESSENTIALS"},
                {"default":"BARE MINERALS"},
                {"default":"BEYONCE"},
                {"default":"BRITNEY SPEARS"},
                {"default":"BENEFIT"},
                {"default":"CHLOE"},
                {"default":"COLORBAR"},
                {"default":"CALVIN KLEIN Inc."},
                {"default":"CHANEL"},
                {"default":"CHARLES & KEITH"},
                {"default":"COACH"},
                {"default":"CAROLINA HERRERA"},
                {"default":"CITIZEN"},
                {"default":"CLARKS"},
                {"default":"CHEMISTRY"},
                {"default":"CATWALK"},
                {"default":"CLARINS"},
                {"default":"CARLTON LONDON"},
                {"default":"CONVERSE"},
                {"default":"CLAIRE’S"},
                {"default":"CHRISTIAN DIOR"},
                {"default":"CHRISTIAN AUDIGIER"},
                {"default":"CHRISTIAN LOUBOUTIN"},
                {"default":"CHRISTINA AGUILERA"},
                {"default":"CROSS"},
                {"default":"CRABTREE & EVELYN"},
                {"default":"CLINIQUE"},
                {"default":"CARRERA"},
                {"default":"CROCS"},
                {"default":"CEBE"},
                {"default":"CARTIER"},
                {"default":"CHOPARD"},
                {"default":"CHLOE"},
                {"default":"CHAMBOR"},
                {"default":"DA MILANO"},
                {"default":"DC"},
                {"default":"DEBORAH"},
                {"default":"DONE BY NONE"},
                {"default":"DIOR"},
                {"default":"DUCATI"},
                {"default":"DUNHILL"},
                {"default":"DAVIDOFF"},
                {"default":"DONNA KARAN"},
                {"default":"DKNY"},
                {"default":"DIESEL"},
                {"default":"DOROTHY PERKINS"},
                {"default":"DEBENHAMS"},
                {"default":"DUNE"},
                {"default":"DOLCE & GABBANA"},
                {"default":"DITA VON TEESE"},
                {"default":"ESCADA"},
                {"default":"ELIZABETH ARDEN"},
                {"default":"ELIZABETH TAYLOR"},
                {"default":"ERMENEGILDO ZEGNA"},
                {"default":"ED HARDY CLOTHING"},
                {"default":"EMILIO PUCCI"},
                {"default":"ESPRIT"},
                {"default":"ELIE SAAB"},
                {"default":"EMPORIO ARMANI"},
                {"default":"ESTEE LAUDER"},
                {"default":"ELLE"},
                {"default":"FENDI"},
                {"default":"FASTRACK"},
                {"default":"FERRARI"},
                {"default":"FLYING MACHINE"},
                {"default":"FOREST ESSENTIALS"},
                {"default":"FACES"},
                {"default":"FCUK"},
                {"default":"FOSSIL"},
                {"default":"FRENCH CONNECTION"},
                {"default":"FILA"},
                {"default":"FUBU"},
                {"default":"FOREVER 21"},
                {"default":"FOREVER NEW"},
                {"default":"FARAH KHAN ALI"},
                {"default":"FALGUNI AND SHANE PEACOCK"},
                {"default":"FAB INDIA"},
                {"default":"FIORELLI"},
                {"default":"FREEDOME LONDON"},
                {"default":"GIVENCHY"},
                {"default":"GIUSEPPE ZANOTTI"},
                {"default":"GUCCI"},
                {"default":"GAS"},
                {"default":"GILLETTE"},
                {"default":"GANT"},
                {"default":"GAP Inc."},
                {"default":"GUESS"},
                {"default":"GIORDANO"},
                {"default":"G STAR"},
                {"default":"GOYARD"},
                {"default":"GWEN STEFANI"},
                {"default":"GEOX"},
                {"default":"HERMES"},
                {"default":"HUGO BOSS"},
                {"default":"HELIOS"},
                {"default":"HOLII"},
                {"default":"HELLO KITTY"},
                {"default":"HIDESIGN"},
                {"default":"HUSH PUPPIES"},
                {"default":"HOBO"},
                {"default":"HUDA BEAUTY"},
                {"default":"H&M"},
                {"default":"HOUSE OF FRASER"},
                {"default":"HARVEY NICHOLS"},
                {"default":"HAVAIANAS"},
                {"default":"HIMALYA"},
                {"default":"ICONIC"},
                {"default":"ISSEY MIYAKE"},
                {"default":"INGLOT"},
                {"default":"INVISIBOBBLE"},
                {"default":"JEAN PAUL GAUTIER"},
                {"default":"JUST CAVALLI"},
                {"default":"JUICY COUTURE"},
                {"default":"J. LO by JENNIFER LOPEZ"},
                {"default":"JIMMY CHOO"},
                {"default":"J. CREW"},
                {"default":"JC PENNY"},
                {"default":"KENZO"},
                {"default":"KAMA AYURVEDA"},
                {"default":"KHADI"},
                {"default":"KAYA"},
                {"default":"KIEHL’S"},
                {"default":"KERESTASE"},
                {"default":"KENNETH COLE"},
                {"default":"KEDS"},
                {"default":"KALPANA SAREES"},
                {"default":"KARDASHIAN KOLLECTION"},
                {"default":"KATE SPADE"},
                {"default":"KATY PERRY"},
                {"default":"LA SENZA"},
                {"default":"L’OREAL"},
                {"default":"LANCOME"},
                {"default":"LANVIN"},
                {"default":"LAFFAIRE"},
                {"default":"L’OCCITANE"},
                {"default":"LEE"},
                {"default":"LAKME"},
                {"default":"LACOSTE"},
                {"default":"LAVIE"},
                {"default":"LEVI STRAUSS & CO."},
                {"default":"LOUIS VUITTON"},
                {"default":"LANCE BREMMER"},
                {"default":"LONGINES"},
                {"default":"LORAC"},
                {"default":"LOVE MOSCHINO"},
                {"default":"LA GIRL"},
                {"default":"MISS SELFRIDGE"},
                {"default":"MISSONI"},
                {"default":"MICHAEL KORS"},
                {"default":"MIU MIU"},
                {"default":"MOSCHINO"},
                {"default":"MONT BLANC"},
                {"default":"MANISH MALHOTRA"},
                {"default":"MANISH ARORA"},
                {"default":"MARIAH CAREY"},
                {"default":"MAX FACTOR"},
                {"default":"MAYBELLINE"},
                {"default":"MEENA BAZAAR"},
                {"default":"MANGO"},
                {"default":"MINERAL"},
                {"default":"MANGO TCH"},
                {"default":"MARC JACOBS"},
                {"default":"MARC by MARC JACOBS"},
                {"default":"MAC"},
                {"default":"MARKS & SPENCER"},
                {"default":"MAKEUP REVOLUTION LONDON"},
                {"default":"NASTY GAL"},
                {"default":"NAKED"},
                {"default":"NAUTICA"},
                {"default":"NORDSTROM"},
                {"default":"NICKI MINAJ"},
                {"default":"NINA RICCI"},
                {"default":"NUN"},
                {"default":"NARS"},
                {"default":"NEUTROGENA"},
                {"default":"NOTE"},
                {"default":"NEXT"},
                {"default":"NEW LOOK"},
                {"default":"NINE WEST"},
                {"default":"NEETA LULLA"},
                {"default":"NIKE"},
                {"default":"NEW BALANCE"},
                {"default":"NORTH FACE"},
                {"default":"NIDA MAHMOOD"},
                {"default":"NALLI’S"},
                {"default":"NYKAA"},
                {"default":"NYX"},
                {"default":"ORIFLAME"},
                {"default":"ONLY"},
                {"default":"OAKLEY"},
                {"default":"OLAY"},
                {"default":"OLD NAVY"},
                {"default":"OMEGA"},
                {"default":"O LAYLA"},
                {"default":"OTHERS"},
                {"default":"POLAROID"},
                {"default":"PERRY ELLIS"},
                {"default":"PARIS HILTON"},
                {"default":"PUMA"},
                {"default":"PACO ROBANNE"},
                {"default":"PARK AVENUE"},
                {"default":"PRADA"},
                {"default":"PROMOD"},
                {"default":"PAUL SMITH"},
                {"default":"PERSOL"},
                {"default":"POLO RALPH LAUREN"},
                {"default":"PLAYBOY"},
                {"default":"PEPE JEANS"},
                {"default":"POLICE"},
                {"default":"PAC COSMETICS"},
                {"default":"QUICK SILVER"},
                {"default":"REEBOK"},
                {"default":"ROHIT BAL"},
                {"default":"ROBERT RODRIGUEZ"},
                {"default":"RALPH LAUREN"},
                {"default":"RALPH by RALPH LAUREN"},
                {"default":"ROCKPORT"},
                {"default":"RAYBAN"},
                {"default":"ROBERTO CAVALLI"},
                {"default":"REAL TECHNIQUES"},
                {"default":"ROLEX"},
                {"default":"RADO"},
                {"default":"REVLON"},
                {"default":"RITU KUMAR"},
                {"default":"RIVER ISLAND"},
                {"default":"RITU BERI"},
                {"default":"ROHIT GANDHI+ RAHUL KHANNA"},
                {"default":"ROXY"},
                {"default":"RIHANNA"},
                {"default":"SALVATORE FERRAGAMO"},
                {"default":"SELFRIDGES"},
                {"default":"SAMSONITE"},
                {"default":"SKECHERS"},
                {"default":"STELLA McCARTNEY"},
                {"default":"SWATCH"},
                {"default":"S. OLIVER"},
                {"default":"SISLEY"},
                {"default":"SHIVAN & NARESH"},
                {"default":"SWAROVSKI"},
                {"default":"SCULLERS"},
                {"default":"SATYA PAUL"},
                {"default":"SABYASACHI"},
                {"default":"SEIKO"},
                {"default":"SWISS EAGLE"},
                {"default":"STEVE MADDEN"},
                {"default":"SUPERDRY"},
                {"default":"STUSSY"},
                {"default":"SMALL INDIE BRANDS"},
                {"default":"SPEEDO"},
                {"default":"SKYBAGS"},
                {"default":"SEPHORA"},
                {"default":"SELENA GOMEZ"},
                {"default":"SHISEIDO"},
                {"default":"SUPER DRUG"},
                {"default":"SUGAR"},
                {"default":"SCHWARZKPOF"},
                {"default":"TITAN"},
                {"default":"TITAN RAGA"},
                {"default":"TIMEX"},
                {"default":"TISSOT"},
                {"default":"TED BAKER"},
                {"default":"THE BODY SHOP"},
                {"default":"TONI & GUY"},
                {"default":"TARUN TAHILIANI"},
                {"default":"TRESEMME"},
                {"default":"TOPSHOP"},
                {"default":"TOPMAN"},
                {"default":"TOMMY HILFIGER"},
                {"default":"TIMBERLAND"},
                {"default":"THE NORTH FACE"},
                {"default":"TORY BURCH"},
                {"default":"TOD’S"},
                {"default":"TIFFANY & CO."},
                {"default":"TAG HEUER"},
                {"default":"TAYLOR SWIFT"},
                {"default":"TOMS"},
                {"default":"TOYWATCH"},
                {"default":"URBAN OUTFITTERS"},
                {"default":"URBAN DECAY"},
                {"default":"UNIQLO"},
                {"default":"UCLA"},
                {"default":"UNITED COLOURS OF BENETTON"},
                {"default":"US POLO ASS."},
                {"default":"VALENTINO"},
                {"default":"VERSACE"},
                {"default":"VERA WANG"},
                {"default":"VIKRAM PHADNIS"},
                {"default":"VIVIENNE WESTWOOD"},
                {"default":"VICTORIA BECKHAM"},
                {"default":"VICTORIA’S SECRET"},
                {"default":"VANA VIDHI"},
                {"default":"VON DUTCH ORIGINALS"},
                {"default":"VEDIC LINE"},
                {"default":"VERO MODA"},
                {"default":"VOGUE EYEWEAR"},
                {"default":"VANS"},
                {"default":"VINTAGE"},
                {"default":"VICTORINOX"},
                {"default":"WRANGLER"},
                {"default":"WIRED BY SEIKO"},
                {"default":"WOODLAND"},
                {"default":"YSL"},
                {"default":"YVES SAINT LAURENT"},
                {"default":"ZARA"}],
            "categories": [],
            "multiSelect": true,
            "appearance":"BRANDS_LIST"
        },
        {
            "_id": "COLORS",
            "title": "Color",
            "values": [
                {
                    "default":"Black"
                },
                {
                    "default":"White"
                },
                {
                    "default":"Grey"
                },
                {
                    "default":"Blue"
                },
                {
                    "default":"Beige"
                },
                {
                    "default":"Red"
                },
                {
                    "default":"Pink"
                },
            ],
            "categories": [],
            "multiSelect": true,
            "appearance":"COLORS_SWATCH"
        },
    ],
    facet_groups: [
        {
            "title": "UserProfileRegistration",
            "facets": ["DRESS_SIZE","SHOE_SIZE","UPPER_WAIST_SIZE","LOWER_WAIST_SIZE","BUST_SIZE","HIP_SIZE","STYLES"],
            "options":{
                "include_categories":false,

            }
        },
        {
            "title": "UserProfileUpdate",
            "facets": ["DRESS_SIZE","SHOE_SIZE","UPPER_WAIST_SIZE","LOWER_WAIST_SIZE","BUST_SIZE","HIP_SIZE","STYLES"],
            "options":{
                "include_categories":false,

            }

        },
        {
            "title": "Filter",
            "facets": ["BRANDS","COLORS","DRESS_SIZE","SHOE_SIZE","UPPER_WAIST_SIZE","LOWER_WAIST_SIZE","BUST_SIZE","HIP_SIZE"],
            "options":{
                "include_categories":true,

            }

        }

    ]


};

module.exports = populateDB