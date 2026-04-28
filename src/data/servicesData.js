import { Sparkles, Droplet, Wind, Crown, Heart, Package, Home, ShoppingBag, Shield, Clock, Leaf, Star, Zap, Award } from "lucide-react";

export const servicesData = {
  "dry-cleaning": {
    title: "Dry Cleaning",
    slug: "dry-cleaning",
    Icon: Sparkles,
    description: "Professional dry cleaning for suits, dresses, and delicate garments using eco-friendly solvents that protect fabrics.",
    image: "/assets/service-drycleaning.jpg",
    overview: "Our dry cleaning service at Cassio uses advanced eco-friendly solvents to clean your most delicate garments without water. Perfect for suits, dresses, silk, wool, and other fabrics that require special care.",
    
    includes: [
      "Eco-friendly solvent cleaning",
      "Expert stain removal treatment",
      "Hand-finished pressing",
      "Free pickup & delivery",
      "24-48 hour turnaround",
      "Garment inspection & tagging",
      "Protective garment bags",
      "Full insurance coverage"
    ],

    benefits: [
      { Icon: Shield, title: "Fabric Protection", description: "Gentle cleaning that preserves fabric integrity and color" },
      { Icon: Sparkles, title: "Deep Cleaning", description: "Removes dirt, oils, and odors that water can't handle" },
      { Icon: Leaf, title: "Eco-Friendly", description: "100% biodegradable solvents safe for you and the planet" }
    ],

    process: [
      { title: "Inspection", description: "Each garment is carefully inspected for stains and damage" },
      { title: "Pre-treatment", description: "Stains are treated with specialized solutions" },
      { title: "Cleaning", description: "Garments are cleaned using eco-friendly solvents" },
      { title: "Finishing", description: "Hand-pressed and packaged with care" }
    ],

    fabrics: ["Silk", "Wool", "Cashmere", "Linen", "Rayon", "Acetate", "Velvet", "Suede", "Leather", "Sequined", "Beaded", "Delicate Blends"],

    careTips: [
      "Always check care labels before attempting home cleaning",
      "Treat stains immediately - blot, don't rub",
      "Store dry-cleaned items in breathable garment bags",
      "Avoid direct sunlight to prevent fading",
      "Professional cleaning recommended every 3-4 wears for suits"
    ],

    warnings: [
      "Remove all items from pockets before cleaning",
      "Point out stains to ensure proper treatment",
      "Some embellishments may require special handling",
      "Vintage or antique garments need extra care consultation"
    ],

    faqs: [
      { q: "How often should I dry clean my suits?", a: "We recommend dry cleaning suits every 3-4 wears, or when visibly soiled. Over-cleaning can wear down fabrics, so spot cleaning between wears is ideal." },
      { q: "Is dry cleaning safe for all fabrics?", a: "Most fabrics benefit from dry cleaning, but always check the care label. Cassio's experts can advise on the best cleaning method for your specific garment." },
      { q: "What makes your dry cleaning eco-friendly?", a: "We use biodegradable, non-toxic solvents that are safe for the environment and your health, unlike traditional perchloroethylene (perc) cleaners." },
      { q: "Can you remove all types of stains?", a: "While we have advanced stain removal techniques, some stains (especially old or set-in ones) may be permanent. We'll always do our best and inform you of the results." },
      { q: "How long does dry cleaning take?", a: "Standard turnaround is 24-48 hours. Same-day service is available for urgent requests in select areas." }
    ],

    testimonials: [
      { name: "James Bennett", location: "Chelsea, London", image: "/assets/testimonial-2.jpg", quote: "Cassio's dry cleaning is exceptional. My suits always come back looking brand new. The eco-friendly approach is a huge plus!" },
      { name: "Emma Walker", location: "Shoreditch, London", image: "/assets/testimonial-1.jpg", quote: "I trust Cassio with all my silk dresses. They handle delicate fabrics with such care. Never had an issue!" },
      { name: "Sophie Clarke", location: "Notting Hill, London", image: "/assets/testimonial-3.jpg", quote: "Best dry cleaning in London! Fast, professional, and my clothes smell amazing. Cassio is my go-to." }
    ]
  },

  "wash-fold": {
    title: "Wash & Fold",
    slug: "wash-fold",
    Icon: Droplet,
    description: "Everyday laundry service where we wash, dry, and neatly fold your clothes with care and precision.",
    image: "/assets/service-washfold.jpg",
    overview: "Let Cassio Dry Cleaners handle your everyday laundry. We wash, dry, and fold your clothes with the same care you would at home - but with professional equipment and expertise.",
    
    includes: [
      "Professional washing & drying",
      "Fabric-appropriate detergents",
      "Neatly folded & organized",
      "Free pickup & delivery",
      "24-48 hour turnaround",
      "Separate loads for colors",
      "Hypoallergenic options available",
      "Eco-friendly products"
    ],

    benefits: [
      { Icon: Clock, title: "Time Saving", description: "Get hours back in your week - we handle the laundry" },
      { Icon: Star, title: "Professional Quality", description: "Commercial-grade equipment for superior results" },
      { Icon: Leaf, title: "Gentle Care", description: "Fabric-specific washing to extend garment life" }
    ],

    process: [
      { title: "Sorting", description: "Clothes sorted by color, fabric type, and care requirements" },
      { title: "Washing", description: "Washed with premium detergents at optimal temperatures" },
      { title: "Drying", description: "Tumble dried or air dried based on fabric needs" },
      { title: "Folding", description: "Neatly folded and organized for easy storage" }
    ],

    fabrics: ["Cotton", "Polyester", "Denim", "Linen", "Blends", "Towels", "Bedding", "Activewear", "T-shirts", "Casual wear"],

    careTips: [
      "Separate whites from colors to prevent color bleeding",
      "Turn jeans inside out to preserve color",
      "Wash towels separately for better absorbency",
      "Use cold water for most loads to save energy",
      "Don't overload the washing machine"
    ],

    warnings: [
      "Remove all items from pockets",
      "Separate heavily soiled items",
      "Delicate items may require special handling",
      "Some fabrics may shrink - inform us of concerns"
    ],

    faqs: [
      { q: "What's included in wash & fold service?", a: "We wash, dry, and fold all your everyday laundry including shirts, pants, towels, bedding, and casual wear. Items are sorted by color and fabric type." },
      { q: "Can I request specific detergents?", a: "Yes! We offer hypoallergenic, fragrance-free, and eco-friendly detergent options. Just let us know your preference." },
      { q: "Do you wash colors and whites together?", a: "Never. We always separate colors, whites, and darks to prevent color bleeding and ensure optimal cleaning." },
      { q: "What if I have special washing instructions?", a: "Just include a note with your laundry, and we'll follow your specific instructions for temperature, detergent, or drying preferences." },
      { q: "Is there a minimum order?", a: "No minimum order required. Whether it's a small load or a week's worth of laundry, Cassio handles it all." }
    ],

    testimonials: [
      { name: "Sophie Clarke", location: "Notting Hill, London", image: "/assets/testimonial-3.jpg", quote: "Cassio's wash & fold service is a lifesaver! My clothes come back fresh, clean, and perfectly folded. Worth every penny." },
      { name: "James Bennett", location: "Chelsea, London", image: "/assets/testimonial-2.jpg", quote: "I use Cassio for all my everyday laundry. The quality is consistent, and the turnaround time is impressive." },
      { name: "Emma Walker", location: "Shoreditch, London", image: "/assets/testimonial-1.jpg", quote: "Finally have my weekends back! Cassio takes care of all my laundry, and everything always smells amazing." }
    ]
  },

  "ironing": {
    title: "Ironing Service",
    slug: "ironing",
    Icon: Wind,
    description: "Professional ironing and pressing service for crisp, wrinkle-free shirts, trousers, and formal wear.",
    image: "/assets/service-ironing.jpg",
    overview: "Cassio's professional ironing service delivers crisp, wrinkle-free results for all your garments. Our skilled team uses commercial-grade equipment to achieve perfect creases and a polished finish.",
    
    includes: [
      "Professional steam pressing",
      "Hand-finished details",
      "Collar & cuff perfection",
      "Trouser creases",
      "Free pickup & delivery",
      "24-48 hour turnaround",
      "Protective packaging",
      "Fabric-appropriate temperatures"
    ],

    benefits: [
      { Icon: Zap, title: "Professional Finish", description: "Commercial equipment for crisp, lasting results" },
      { Icon: Clock, title: "Time Efficient", description: "Save hours of ironing time every week" },
      { Icon: Award, title: "Expert Technique", description: "Trained professionals handle every garment" }
    ],

    process: [
      { title: "Inspection", description: "Garments checked for fabric type and special requirements" },
      { title: "Preparation", description: "Items sorted and prepared for optimal pressing" },
      { title: "Pressing", description: "Professional steam pressing at correct temperatures" },
      { title: "Finishing", description: "Hand-finished details and quality check" }
    ],

    fabrics: ["Cotton", "Linen", "Silk", "Polyester", "Wool", "Blends", "Dress Shirts", "Trousers", "Dresses", "Formal Wear"],

    careTips: [
      "Iron clothes while slightly damp for best results",
      "Always check fabric care labels for temperature",
      "Use a pressing cloth for delicate fabrics",
      "Iron inside out to prevent shine on dark fabrics",
      "Hang garments immediately after ironing"
    ],

    warnings: [
      "Some fabrics cannot withstand high heat",
      "Embellished items may require special care",
      "Vintage garments need temperature consideration",
      "Inform us of any heat-sensitive materials"
    ],

    faqs: [
      { q: "What's the difference between ironing and pressing?", a: "Ironing uses back-and-forth motion, while pressing uses up-and-down pressure. We use professional pressing techniques for superior, longer-lasting results." },
      { q: "Can you iron delicate fabrics like silk?", a: "Absolutely. We adjust temperature and technique based on fabric type. Silk, wool, and other delicates are handled with specialized care." },
      { q: "Do you starch shirts?", a: "Yes, we offer light, medium, or heavy starch upon request. Just let us know your preference when dropping off." },
      { q: "How long do pressed clothes stay wrinkle-free?", a: "With proper hanging and storage, professionally pressed garments can stay crisp for several days to a week, depending on fabric and wear." },
      { q: "Can you create trouser creases?", a: "Yes, we create sharp, professional creases for trousers and formal pants as part of our standard ironing service." }
    ],

    testimonials: [
      { name: "James Bennett", location: "Chelsea, London", image: "/assets/testimonial-2.jpg", quote: "My shirts have never looked better. Cassio's ironing service is impeccable - crisp collars and perfect creases every time." },
      { name: "Emma Walker", location: "Shoreditch, London", image: "/assets/testimonial-1.jpg", quote: "I hate ironing, so Cassio is a godsend. Professional results and I get my time back. Highly recommend!" },
      { name: "Sophie Clarke", location: "Notting Hill, London", image: "/assets/testimonial-3.jpg", quote: "The quality of Cassio's ironing is outstanding. My work clothes always look sharp and professional." }
    ]
  },

  "premium-care": {
    title: "Premium Care",
    slug: "premium-care",
    Icon: Crown,
    description: "White-glove handling for luxury, couture, and designer garments with specialized cleaning techniques.",
    image: "/assets/service-premium.jpg",
    overview: "Cassio's Premium Care service provides the highest level of garment care for your most valuable pieces. From designer couture to luxury fabrics, we handle each item with meticulous attention and specialized techniques.",
    
    includes: [
      "Hand cleaning for delicate items",
      "Specialized luxury fabric treatment",
      "Individual garment assessment",
      "Museum-quality preservation",
      "White-glove handling throughout",
      "Premium packaging",
      "Extended insurance coverage",
      "Dedicated care specialist"
    ],

    benefits: [
      { Icon: Crown, title: "Luxury Expertise", description: "Specialized training in high-end garment care" },
      { Icon: Shield, title: "Maximum Protection", description: "Enhanced insurance for valuable pieces" },
      { Icon: Star, title: "Personalized Service", description: "Dedicated specialist for your garments" }
    ],

    process: [
      { title: "Consultation", description: "Detailed assessment of each garment's needs" },
      { title: "Custom Treatment", description: "Tailored cleaning approach for each piece" },
      { title: "Hand Finishing", description: "Meticulous hand-pressing and detailing" },
      { title: "Premium Packaging", description: "Museum-quality packaging and presentation" }
    ],

    fabrics: ["Silk", "Cashmere", "Velvet", "Satin", "Chiffon", "Organza", "Brocade", "Lace", "Sequined", "Beaded", "Fur", "Designer Blends"],

    careTips: [
      "Store luxury items in breathable garment bags",
      "Avoid direct sunlight and humidity",
      "Professional cleaning before long-term storage",
      "Never use home stain removers on luxury fabrics",
      "Consult Cassio before any DIY treatment"
    ],

    warnings: [
      "Designer garments require special authorization",
      "Vintage pieces need extra consultation time",
      "Some embellishments may be fragile",
      "Extended turnaround time for complex pieces"
    ],

    faqs: [
      { q: "What qualifies as premium care?", a: "Premium care is for designer, couture, luxury fabrics, heavily embellished items, vintage pieces, and garments requiring specialized handling beyond standard dry cleaning." },
      { q: "Is premium care more expensive?", a: "Premium care reflects the specialized expertise, extended time, and enhanced insurance required for luxury garments. Contact us for specific pricing." },
      { q: "How long does premium care take?", a: "Premium care typically takes 3-5 days to ensure proper treatment. Rush service may be available for urgent needs." },
      { q: "Do you handle designer wedding dresses?", a: "Absolutely. Our premium care service specializes in designer bridal wear with museum-quality preservation techniques." },
      { q: "What's included in the insurance?", a: "Premium care includes enhanced insurance coverage. We'll assess your garment's value and provide appropriate coverage details." }
    ],

    testimonials: [
      { name: "Emma Walker", location: "Shoreditch, London", image: "/assets/testimonial-1.jpg", quote: "I trust Cassio with all my designer pieces. Their premium care service is worth every penny - my Chanel jacket looks brand new!" },
      { name: "James Bennett", location: "Chelsea, London", image: "/assets/testimonial-2.jpg", quote: "Cassio handled my vintage Savile Row suit with incredible care. The attention to detail is unmatched in London." },
      { name: "Sophie Clarke", location: "Notting Hill, London", image: "/assets/testimonial-3.jpg", quote: "Finally found a cleaner I trust with my luxury wardrobe. Cassio's premium service is exceptional - true white-glove treatment." }
    ]
  },

  "wedding-dress": {
    title: "Wedding Dress Cleaning",
    slug: "wedding-dress",
    Icon: Heart,
    description: "Specialized cleaning and preservation for bridal gowns, ensuring your precious memories are protected.",
    image: "/assets/service-premium.jpg",
    overview: "Your wedding dress deserves the best care. Cassio Dry Cleaners specializes in bridal gown cleaning and preservation, using museum-quality techniques to protect your precious memories for years to come.",
    
    includes: [
      "Pre-treatment of all stains",
      "Gentle hand cleaning",
      "Beading & embellishment care",
      "Professional pressing & shaping",
      "Acid-free preservation packaging",
      "Museum-quality storage box",
      "Detailed inspection report",
      "Lifetime storage guidance"
    ],

    benefits: [
      { Icon: Heart, title: "Bridal Specialists", description: "Expert care for wedding gowns and formal wear" },
      { Icon: Shield, title: "Preservation Quality", description: "Museum-standard techniques for lasting protection" },
      { Icon: Star, title: "Memory Protection", description: "Safeguard your special day for generations" }
    ],

    process: [
      { title: "Inspection", description: "Detailed examination of fabric, stains, and embellishments" },
      { title: "Stain Treatment", description: "Specialized removal of makeup, wine, grass, and food stains" },
      { title: "Gentle Cleaning", description: "Hand cleaning with pH-neutral solutions" },
      { title: "Preservation", description: "Acid-free packaging in archival-quality box" }
    ],

    fabrics: ["Silk", "Satin", "Lace", "Tulle", "Organza", "Chiffon", "Taffeta", "Beaded", "Sequined", "Embroidered"],

    careTips: [
      "Clean your dress within 6 months of the wedding",
      "Never store in plastic - use breathable bags only",
      "Keep away from direct sunlight and humidity",
      "Store in a cool, dry place",
      "Inspect annually for any yellowing or damage"
    ],

    warnings: [
      "Stains set over time - clean as soon as possible",
      "Some yellowing may be permanent if delayed",
      "Vintage dresses require special consultation",
      "Preservation turnaround is 2-3 weeks"
    ],

    faqs: [
      { q: "How soon should I clean my wedding dress?", a: "We recommend cleaning within 2-4 weeks after your wedding. The sooner stains are treated, the better the results. However, we can handle dresses cleaned months or even years later." },
      { q: "What stains can you remove?", a: "We specialize in removing makeup, wine, champagne, food, grass, dirt, and perspiration stains. Most stains can be removed if treated promptly." },
      { q: "What is dress preservation?", a: "Preservation involves cleaning your dress and packaging it in an acid-free, archival-quality box that protects against yellowing, moisture, and deterioration for decades." },
      { q: "Can I see my dress after preservation?", a: "Yes! Our preservation boxes have a viewing window. However, we recommend not opening the sealed box to maintain the protective environment." },
      { q: "Do you clean bridesmaid dresses too?", a: "Absolutely! We offer the same expert care for bridesmaid dresses, mother-of-the-bride outfits, and all formal wedding attire." }
    ],

    testimonials: [
      { name: "Sophie Clarke", location: "Notting Hill, London", image: "/assets/testimonial-3.jpg", quote: "Cassio preserved my wedding dress beautifully. Every stain removed, and the preservation box is gorgeous. So grateful!" },
      { name: "Emma Walker", location: "Shoreditch, London", image: "/assets/testimonial-1.jpg", quote: "My dress had wine, makeup, and grass stains - Cassio made it look brand new! The preservation service is worth every penny." },
      { name: "James Bennett", location: "Chelsea, London", image: "/assets/testimonial-2.jpg", quote: "Had my wife's vintage wedding dress cleaned by Cassio. They handled it with such care - looks perfect for our daughter someday." }
    ]
  },

  "leather-suede": {
    title: "Leather & Suede Care",
    slug: "leather-suede",
    Icon: Package,
    description: "Expert cleaning and restoration for leather jackets, suede coats, and luxury leather accessories.",
    image: "/assets/service-drycleaning.jpg",
    overview: "Leather and suede require specialized care that standard dry cleaning can't provide. Cassio's leather experts use professional techniques to clean, condition, and restore your leather and suede garments.",
    
    includes: [
      "Professional leather cleaning",
      "Suede brushing & restoration",
      "Conditioning treatment",
      "Color restoration",
      "Stain removal",
      "Odor elimination",
      "Minor repair services",
      "Protective finishing"
    ],

    benefits: [
      { Icon: Package, title: "Leather Experts", description: "Specialized training in leather and suede care" },
      { Icon: Sparkles, title: "Restoration", description: "Bring faded or worn leather back to life" },
      { Icon: Shield, title: "Protection", description: "Conditioning extends leather lifespan" }
    ],

    process: [
      { title: "Assessment", description: "Evaluate leather type, condition, and treatment needs" },
      { title: "Cleaning", description: "Specialized cleaning solutions for leather and suede" },
      { title: "Conditioning", description: "Restore moisture and suppleness to leather" },
      { title: "Finishing", description: "Protective treatment and color restoration" }
    ],

    fabrics: ["Leather", "Suede", "Nubuck", "Shearling", "Patent Leather", "Exotic Skins"],

    careTips: [
      "Treat stains immediately - blot, don't rub",
      "Store leather in breathable garment bags",
      "Avoid direct sunlight and heat sources",
      "Professional cleaning every 1-2 years",
      "Use leather conditioner between cleanings"
    ],

    warnings: [
      "Water can permanently stain suede",
      "Some color fading may be irreversible",
      "Exotic leathers require special handling",
      "Vintage leather may be more fragile"
    ],

    faqs: [
      { q: "Can you clean all types of leather?", a: "Yes! We handle all leather types including smooth leather, suede, nubuck, patent leather, shearling, and exotic skins like crocodile and python." },
      { q: "How do you clean suede?", a: "Suede requires dry cleaning with specialized solvents, followed by brushing to restore the nap. We never use water on suede." },
      { q: "Can you restore faded leather color?", a: "Yes, we offer color restoration services for faded or worn leather. We can match the original color or refresh the entire garment." },
      { q: "Do you repair leather damage?", a: "We handle minor repairs like loose stitching and small tears. For major repairs, we can recommend specialist leather repair services." },
      { q: "How often should I clean leather jackets?", a: "We recommend professional cleaning every 1-2 years, or more frequently if worn regularly or exposed to dirt and oils." }
    ],

    testimonials: [
      { name: "James Bennett", location: "Chelsea, London", image: "/assets/testimonial-2.jpg", quote: "My vintage leather jacket looks incredible after Cassio's treatment. They restored the color and it feels like new!" },
      { name: "Sophie Clarke", location: "Notting Hill, London", image: "/assets/testimonial-3.jpg", quote: "Cassio saved my suede coat after a water stain disaster. Their expertise in leather care is unmatched in London." },
      { name: "Emma Walker", location: "Shoreditch, London", image: "/assets/testimonial-1.jpg", quote: "Trust Cassio with all my leather pieces. Professional service and my jackets always come back looking perfect." }
    ]
  },

  "curtains-home": {
    title: "Curtains & Home Textiles",
    slug: "curtains-home",
    Icon: Home,
    description: "Professional cleaning for curtains, drapes, bedding, and all household textiles.",
    image: "/assets/section-towels.jpg",
    overview: "Cassio Dry Cleaners provides expert cleaning for all your home textiles. From heavy drapes to delicate sheers, we handle curtains, bedding, and household fabrics with professional care.",
    
    includes: [
      "Curtain & drape cleaning",
      "Bedding & duvet cleaning",
      "Tablecloth & linen care",
      "Cushion & pillow cleaning",
      "Free pickup & delivery",
      "Pressing & finishing",
      "Stain treatment",
      "Odor removal"
    ],

    benefits: [
      { Icon: Home, title: "Home Specialists", description: "Expert care for all household textiles" },
      { Icon: Sparkles, title: "Deep Cleaning", description: "Remove dust, allergens, and odors" },
      { Icon: Clock, title: "Convenient", description: "We handle the heavy lifting and transport" }
    ],

    process: [
      { title: "Collection", description: "We pick up your curtains and home textiles" },
      { title: "Inspection", description: "Check fabric type and cleaning requirements" },
      { title: "Cleaning", description: "Professional cleaning with appropriate methods" },
      { title: "Finishing", description: "Pressed and ready to rehang" }
    ],

    fabrics: ["Cotton", "Linen", "Silk", "Velvet", "Polyester", "Blends", "Sheers", "Blackout", "Thermal"],

    careTips: [
      "Clean curtains every 6-12 months",
      "Vacuum curtains monthly to reduce dust",
      "Rotate curtains to prevent uneven fading",
      "Professional cleaning extends fabric life",
      "Remove curtains carefully to avoid damage"
    ],

    warnings: [
      "Some curtains may require special handling",
      "Lined curtains need careful cleaning",
      "Delicate trims may need hand finishing",
      "Large items may take 3-5 days"
    ],

    faqs: [
      { q: "Do you take down and rehang curtains?", a: "We provide pickup and delivery, but we don't offer installation services. We'll clean and return your curtains ready to rehang." },
      { q: "Can you clean all types of curtains?", a: "Yes! We clean all curtain types including sheers, blackout, thermal, velvet, silk, and heavy drapes. We adjust our methods based on fabric." },
      { q: "How often should I clean curtains?", a: "We recommend professional cleaning every 6-12 months, especially for homes with pets, allergies, or high dust exposure." },
      { q: "Do you clean duvets and comforters?", a: "Absolutely! We clean all bedding including duvets, comforters, quilts, bedspreads, and decorative pillows." },
      { q: "Can you remove smoke or pet odors?", a: "Yes, our cleaning process effectively removes odors from smoke, pets, cooking, and other sources while deep cleaning the fabric." }
    ],

    testimonials: [
      { name: "Emma Walker", location: "Shoreditch, London", image: "/assets/testimonial-1.jpg", quote: "Cassio cleaned all my curtains and they look brand new! The pickup service made it so easy. Highly recommend!" },
      { name: "Sophie Clarke", location: "Notting Hill, London", image: "/assets/testimonial-3.jpg", quote: "My velvet curtains came back perfect. Cassio knows how to handle delicate home textiles. Very impressed!" },
      { name: "James Bennett", location: "Chelsea, London", image: "/assets/testimonial-2.jpg", quote: "Used Cassio for our entire home's curtains and bedding. Professional service and everything looks and smells fresh." }
    ]
  },

  "shoe-care": {
    title: "Shoe Care & Restoration",
    slug: "shoe-care",
    Icon: ShoppingBag,
    description: "Professional shoe cleaning, polishing, and restoration for all types of footwear.",
    image: "/assets/service-washfold.jpg",
    overview: "Cassio's shoe care service brings your footwear back to life. From leather dress shoes to suede boots, we provide professional cleaning, polishing, and restoration services.",
    
    includes: [
      "Deep cleaning",
      "Professional polishing",
      "Suede & nubuck care",
      "Stain removal",
      "Odor treatment",
      "Color restoration",
      "Conditioning",
      "Protective finishing"
    ],

    benefits: [
      { Icon: ShoppingBag, title: "Shoe Experts", description: "Specialized care for all footwear types" },
      { Icon: Sparkles, title: "Restoration", description: "Bring worn shoes back to life" },
      { Icon: Shield, title: "Protection", description: "Extend the life of your footwear" }
    ],

    process: [
      { title: "Assessment", description: "Evaluate shoe type, material, and condition" },
      { title: "Cleaning", description: "Deep clean with appropriate methods" },
      { title: "Treatment", description: "Polish, condition, or restore as needed" },
      { title: "Protection", description: "Apply protective finish" }
    ],

    fabrics: ["Leather", "Suede", "Nubuck", "Patent Leather", "Canvas", "Synthetic"],

    careTips: [
      "Clean shoes regularly to prevent dirt buildup",
      "Use shoe trees to maintain shape",
      "Rotate shoes to allow them to air out",
      "Professional cleaning every 3-6 months",
      "Waterproof suede and nubuck shoes"
    ],

    warnings: [
      "Some stains may be permanent",
      "Heavily worn soles may need cobbler repair",
      "Exotic leathers require special care",
      "Color restoration results may vary"
    ],

    faqs: [
      { q: "What types of shoes do you clean?", a: "We clean all footwear including dress shoes, boots, sneakers, suede shoes, leather shoes, and more. Each type receives appropriate specialized care." },
      { q: "Can you restore color to faded shoes?", a: "Yes! We offer color restoration services for leather shoes that have faded or lost their luster. Results depend on the shoe's condition." },
      { q: "Do you clean sneakers?", a: "Absolutely! We clean all types of sneakers including leather, canvas, and synthetic materials. We can restore white sneakers and remove scuffs." },
      { q: "How do you clean suede shoes?", a: "Suede requires specialized dry cleaning and brushing techniques. We never use water on suede, which can cause permanent staining." },
      { q: "Can you remove salt stains from winter boots?", a: "Yes, we can remove salt stains and water marks from leather and suede boots. The sooner you bring them in, the better the results." }
    ],

    testimonials: [
      { name: "James Bennett", location: "Chelsea, London", image: "/assets/testimonial-2.jpg", quote: "Cassio restored my expensive dress shoes perfectly. They look brand new! Best shoe care service in London." },
      { name: "Sophie Clarke", location: "Notting Hill, London", image: "/assets/testimonial-3.jpg", quote: "My suede boots were ruined by salt stains - Cassio worked magic! They look perfect now. So impressed!" },
      { name: "Emma Walker", location: "Shoreditch, London", image: "/assets/testimonial-1.jpg", quote: "Use Cassio for all my shoe cleaning. They handle everything from sneakers to designer heels with expert care." }
    ]
  }
};
