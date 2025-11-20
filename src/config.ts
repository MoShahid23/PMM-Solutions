// Site-wide configuration
// Update these values with your actual business information

export const siteConfig = {
  name: "PMMSolutions",
  tagline: "Fast, Affordable Tech Repair Near You",
  description:
    "Professional Apple authorized tech repair services for laptops, phones, and data recovery. Serving Morden, Wimbledon, Kingston, Sutton, Croydon, Epsom and surrounding areas within a 40-minute radius.",
  url: "https://www.example.com", // Update with actual domain
  author: "PMMSolutions",
  locale: "en-GB",
};

// NAP (Name, Address, Phone) - Critical for local SEO
export const businessInfo = {
  name: "PMMSolutions",
  address: {
    street: "27 London Rd",
    city: "Morden",
    county: "London",
    postcode: "SM4 5HT",
    country: "United Kingdom",
    latitude: 51.4019,
    longitude: -0.1958,
  },
  phone: "020 8127 1850",
  email: "info@pmmsolutions.co.uk",
  companyRegistration: "Company Registered in England and Wales No. 11832760",
  openingHours: {
    monday: "09:00-18:00",
    tuesday: "09:00-18:00",
    wednesday: "09:00-18:00",
    thursday: "09:00-18:00",
    friday: "09:00-18:00",
    saturday: "10:00-16:00",
    sunday: "Closed",
  },
};

// Service areas - Towns within 40 minutes of Morden
// You can optionally add latitude/longitude for each location for more precise geo-targeting
export const serviceAreas = [
  {
    name: "Morden",
    slug: "morden",
    latitude: 51.4019,
    longitude: -0.1958,
    intro:
      "Morden is home to our main repair shop, making it the heart of our on-site and in-store service network. From laptop repairs to phone screen replacements, our local team handles everything quickly and professionally.",
    localHighlight:
      "We regularly assist customers across the Morden area — from Morden Hall Park to South Wimbledon — offering fast same-day tech support and repairs.",
  },
  {
    name: "Wimbledon",
    slug: "wimbledon",
    latitude: 51.4224,
    longitude: -0.2062,
    intro:
      "Wimbledon’s busy mix of homes and small businesses keeps our team on the move, providing quick on-site computer and phone repair services right where they’re needed most.",
    localHighlight:
      "We frequently serve customers near Wimbledon Broadway, Southfields, and Wimbledon Village, offering convenient collection and same-day repair options.",
  },
  {
    name: "Kingston upon Thames",
    slug: "kingston",
    latitude: 51.4105,
    longitude: -0.3004,
    intro:
      "As one of South West London’s major retail and commercial hubs, Kingston’s demand for reliable tech repair is constant — and we’re here to meet it with fast, on-site service.",
    localHighlight:
      "We often visit homes and offices around Kingston town centre, Norbiton, and Surbiton, offering professional laptop and mobile repairs with transparent pricing.",
  },
  {
    name: "Sutton",
    slug: "sutton",
    latitude: 51.36,
    longitude: -0.1917,
    intro:
      "Sutton’s mix of residential and business districts makes it a key service area for our mobile technicians. We handle computer repairs, data recovery, and phone issues quickly on-site.",
    localHighlight:
      "Our Sutton visits cover areas near Sutton High Street, Carshalton Beeches, and Cheam, offering same-day availability where possible.",
  },
  {
    name: "Croydon",
    slug: "croydon",
    latitude: 51.3762,
    longitude: -0.0982,
    intro:
      "Croydon’s fast-paced tech scene and growing business sector mean downtime isn’t an option — that’s why our technicians provide prompt, on-site repair solutions across the area.",
    localHighlight:
      "We regularly work with clients around East Croydon, South Croydon, and Purley, providing reliable computer and phone repair services on demand.",
  },
  {
    name: "Epsom",
    slug: "epsom",
    latitude: 51.3308,
    longitude: -0.269,
    intro:
      "Known for its racecourse and family-friendly neighborhoods, Epsom is a growing area we proudly serve with mobile computer and phone repairs right at your doorstep.",
    localHighlight:
      "We cover Epsom town centre, Ewell, and surrounding postcodes, providing same-day appointments where possible.",
  },
  {
    name: "Ewell",
    slug: "ewell",
    latitude: 51.3494,
    longitude: -0.2494,
    intro:
      "Ewell’s residential communities rely on us for dependable computer, phone, and data recovery services — all delivered on-site by our expert technicians.",
    localHighlight:
      "We regularly assist customers near Ewell Village, West Ewell, and Stoneleigh, ensuring quick turnaround and fair pricing.",
  },
  {
    name: "Mitcham",
    slug: "mitcham",
    latitude: 51.4032,
    longitude: -0.1683,
    intro:
      "Our Mitcham clients trust us for fast, affordable repairs — whether it’s a cracked screen, failing hard drive, or business laptop that needs urgent attention.",
    localHighlight:
      "We cover all of Mitcham, including Colliers Wood and Figges Marsh, offering both pickup and on-site options for maximum convenience.",
  },
  {
    name: "Tooting",
    slug: "tooting",
    latitude: 51.4275,
    longitude: -0.1708,
    intro:
      "From busy Tooting Broadway to quiet residential streets, our mobile team provides fast, expert repair service without the hassle of visiting a shop.",
    localHighlight:
      "We frequently visit customers near Tooting Bec, Balham, and Earlsfield, handling everything from laptop issues to phone repairs.",
  },
  {
    name: "New Malden",
    slug: "new-malden",
    latitude: 51.4028,
    longitude: -0.2564,
    intro:
      "New Malden’s thriving community of home users and small businesses depends on us for reliable computer and phone repair services, delivered on-site or via quick collection.",
    localHighlight:
      "We serve customers across New Malden, Motspur Park, and Coombe, ensuring seamless tech support across the area.",
  },
  {
    name: "Surbiton",
    slug: "surbiton",
    latitude: 51.3937,
    longitude: -0.3039,
    intro:
      "Surbiton’s growing mix of young professionals and businesses makes it a key area for our on-site repair services — from laptops to smartphones and beyond.",
    localHighlight:
      "We cover the Surbiton town centre, Berrylands, and Tolworth, offering quick appointments and expert diagnostics.",
  },
  {
    name: "Leatherhead",
    slug: "leatherhead",
    latitude: 51.2958,
    longitude: -0.3289,
    intro:
      "Our Leatherhead clients value efficiency — we provide same-day tech repairs for both residential and business customers, right where they need it.",
    localHighlight:
      "From Fetcham to Ashtead, we offer reliable laptop, PC, and phone repair across the Leatherhead area with minimal downtime.",
  },
  {
    name: "Dorking",
    slug: "dorking",
    latitude: 51.2329,
    longitude: -0.3338,
    intro:
      "Dorking’s mix of rural and town life makes it a perfect fit for our mobile tech repair model — fast, flexible, and on your doorstep.",
    localHighlight:
      "We regularly serve areas near Dorking High Street, Westcott, and North Holmwood, helping both households and small offices with their devices.",
  },
  {
    name: "Banstead",
    slug: "banstead",
    latitude: 51.3233,
    longitude: -0.2067,
    intro:
      "Banstead’s quiet residential setting doesn’t mean you should wait days for repairs — our on-site team brings professional computer and phone repair straight to your home.",
    localHighlight:
      "We handle service calls across Banstead Village, Nork, and Chipstead, offering same-day and weekend appointments where available.",
  },
  {
    name: "Carshalton",
    slug: "carshalton",
    latitude: 51.3657,
    longitude: -0.1675,
    intro:
      "Carshalton customers benefit from our local reach — we provide fast on-site repair for laptops, phones, and PCs throughout the area.",
    localHighlight:
      "We serve homes and offices across Carshalton Beeches, Carshalton Village, and nearby Sutton, ensuring quick turnaround times.",
  },
  {
    name: "Wallington",
    slug: "wallington",
    latitude: 51.3608,
    longitude: -0.1508,
    intro:
      "Wallington’s busy residents rely on our on-site tech repair service to save time and avoid the hassle of traveling to a store.",
    localHighlight:
      "We cover Wallington town centre, Beddington, and nearby Croydon suburbs — all with the same professional care and fair pricing.",
  },
  {
    name: "Cheam",
    slug: "cheam",
    latitude: 51.3614,
    longitude: -0.2142,
    intro:
      "Cheam’s combination of family homes and small offices makes it a perfect area for our mobile repair team, offering fast service at your convenience.",
    localHighlight:
      "We regularly help customers near Cheam Village, North Cheam, and Sutton Borders with computer, laptop, and phone repairs.",
  },
  {
    name: "Raynes Park",
    slug: "raynes-park",
    latitude: 51.4264,
    longitude: -0.1975,
    intro:
      "Raynes Park residents benefit from quick access to our on-site and in-store repair services, with technicians often nearby handling same-day appointments.",
    localHighlight:
      "We frequently serve clients near Cannon Hill, Cottenham Park, and Wimbledon Chase, offering fast and reliable computer and phone repair.",
  },
];

// Main services
export const services = [
  {
    name: "Laptop Repair",
    slug: "laptop-repair",
    description: "Professional laptop repair for all brands including Apple, Dell, HP, and Lenovo. Screen replacements, keyboard repairs, battery replacements, and hardware diagnostics.",
    icon: "computer",
  },
  {
    name: "Phone Repair",
    slug: "phone-repair",
    description: "Fast phone repair services for iPhone, Samsung, and all major brands. Screen replacement, battery replacement, charging port repair, and data recovery.",
    icon: "device",
  },
  {
    name: "Data Recovery",
    slug: "data-recovery",
    description: "Professional data recovery services from damaged hard drives, SSDs, USB drives, and memory cards. Class 100 clean room facility for complex recoveries.",
    icon: "database",
  },
  {
    name: "Computer Repair",
    slug: "computer-repair",
    description: "Desktop PC repair and diagnostics. Hardware troubleshooting, component replacement, power supply repairs, and motherboard diagnostics for home and office computers.",
    icon: "desktop",
  },
  {
    name: "Virus & Malware Removal",
    slug: "virus-removal",
    description: "Complete virus, spyware, and malware removal. System cleaning, security software installation, and ongoing protection to keep your devices safe and running smoothly.",
    icon: "shield",
  },
  {
    name: "Business IT Support",
    slug: "business-it-support",
    description: "Managed IT services for small businesses. Server support, network solutions, cloud-hosted email, virtual server hosting, and ongoing maintenance contracts.",
    icon: "truck",
  },
  {
    name: "Hardware Upgrades",
    slug: "hardware-upgrades",
    description: "Computer and laptop upgrades including RAM installation, SSD upgrades, graphics card installation, and component replacements to boost performance.",
    icon: "chip",
  },
  {
    name: "System Tune-Up",
    slug: "system-tuneup",
    description: "Performance optimization service to speed up slow computers. Includes disk cleanup, startup optimization, driver updates, and system maintenance.",
    icon: "speedometer",
  },
  {
    name: "Network Setup",
    slug: "network-setup",
    description: "Home and office network installation and configuration. WiFi setup, router configuration, network security, and connectivity troubleshooting.",
    icon: "network",
  },
  {
    name: "Remote Support",
    slug: "remote-support",
    description: "Virtual IT support and troubleshooting. Remote desktop assistance for software issues, configuration help, and technical guidance without leaving your home.",
    icon: "computer",
  },
  {
    name: "Printer Services",
    slug: "printer-services",
    description: "Printer repair, setup, and troubleshooting. Support for all major printer brands including HP, Canon, Epson, and Brother. Installation and configuration included.",
    icon: "printer",
  },
  {
    name: "Software Installation",
    slug: "software-installation",
    description: "Operating system installation and software setup. Windows and macOS installation, driver updates, application installation, and system configuration.",
    icon: "code",
  },
];

// Google Analytics 4 ID (update with actual ID)
export const gaId = "G-XXXXXXXXXX"; // Update with actual GA4 ID

// Form handling (Formspree or IONOS FormMail)
export const formEndpoint = "https://formspree.io/f/YOUR_FORM_ID"; // Update with actual endpoint

// Social media links
export const socialMedia = {
  facebook: "https://www.facebook.com/profile.php?id=100063863760954",
  youtube: "https://www.youtube.com/channel/UCwJoXWyQ7P7avbWsP4E8y8Q",
  instagram: "https://www.instagram.com/pmmsolutions/",
};

// Newsletter subscription endpoint (can use same as formEndpoint or separate)
export const newsletterEndpoint = formEndpoint; // Update with actual newsletter endpoint if different