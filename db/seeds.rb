# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Users Seed Data
require 'faker'
require 'uri'
require 'net/http'
require 'openssl'
require 'open-uri'

# ApplicationRecord.transaction do 
#   puts "Destroying tables..."
#   # Unnecessary if using `rails db:seed:replant`
#   User.destroy_all

#   puts "Resetting primary keys..."
#   # For easy testing, so that after seeding, the first `User` has `id` of 1
#   ActiveRecord::Base.connection.reset_pk_sequence!('users')

#   puts "Creating users..."
#   # Create one user with an easy to remember username, email, and password:
#   User.create!(
#     email: 'demo@user.io', 
#     password: 'password'
#   )

#   # More users
#   10.times do 
#     User.create!({
#       email: Faker::Internet.unique.email,
#       password: 'password'
#     }) 
#   end
#   puts "Done!"
# end



  puts 'Destroying tables...'
  Product.destroy_all

  puts "Resetting primary keys..."
  ActiveRecord::Base.connection.reset_pk_sequence!('products')

  puts 'Seeding Products...'

  p1 = Product.create({
    name: "Nike Sportswear Tech Fleece",
    sku: 'CU4495-010',
    p_type: "Men's Apparel",
    color: 'Black/Black',
    description: 'Ready for cooler weather, the Nike Sportswear Tech Fleece Joggers feature an updated fit perfect for everyday wear. Roomy through the thigh, this tapered design narrows at the knee to give you a comfortable feel without losing the clean, tailored look you love. Tall ribbed cuffs complete the jogger look while a zippered pocket on the right leg provides secure small-item storage and elevate the look.',
    category: 'men',
    price: 110.00
  })

  p2 = Product.create({
    name: "Nike Tech Fleece Lightweight",
    sku: 'DX0822-010',
    p_type: "Men's Apparel",
    color: 'Black/Black',
    description: 'Perfect for warmer weather, this classic full-zip design gives you a dose of signature Tech Fleece DNA in a lightweight, stretchy knit fabric. Premium finishes, like the taped trim and silicone Futura logo give you a polished look you can dress up or down.',
    category: 'men',
    price: 125.00
  })

  p3 = Product.create({
    name: "Nike Tech Fleece Lightweight",
    sku: 'DX0822-783',
    p_type: "Men's Apparel",
    color: 'Team Gold/Team Gold',
    description: 'Perfect for warmer weather, this classic full-zip design gives you a dose of signature Tech Fleece DNA in a lightweight, stretchy knit fabric. Premium finishes, like the taped trim and silicone Futura logo give you a polished look you can dress up or down.',
    category: 'men',
    price: 125.00
  })

  p4 = Product.create({
    name: "Nike Tech Fleece Lightweight",
    sku: 'DX0828-010',
    p_type: "Men's Apparel",
    color: 'Black/Black',
    description: 'Perfect for those laid-back warm weather days, these lightweight shorts channel the look of Tech Fleece with cool, breathable fabric. Side seam pockets provide quick storage, while an elastic drawstring waist lets you adjust the fit on the fly.',
    category: 'men',
    price: 70.00
  })

  p5 = Product.create({
    name: "Nike Tech Fleece Lightweight",
    sku: 'DX0828-725',
    p_type: "Men's Apparel",
    color: 'Wheat Gold/Wheat Gold',
    description: 'Perfect for those laid-back warm weather days, these lightweight shorts channel the look of Tech Fleece with cool, breathable fabric. Side seam pockets provide quick storage, while an elastic drawstring waist lets you adjust the fit on the fly.',
    category: 'men',
    price: 70.00
  })

  p6 = Product.create({
    name: "Nike Sportswear Tech Fleece",
    sku: 'CU4495-491',
    p_type: "Men's Apparel",
    color: 'Diffused Blue/Black',
    description: 'Ready for cooler weather, the Nike Sportswear Tech Fleece Joggers feature an updated fit perfect for everyday wear. Roomy through the thigh, this tapered design narrows at the knee to give you a comfortable feel without losing the clean, tailored look you love. Tall ribbed cuffs complete the jogger look while a zippered pocket on the right leg provides secure small-item storage and elevate the look.',
    category: 'men',
    price: 110
  })

  p7 = Product.create({
    name: "Nike Sportswear Tech Fleece",
    sku: 'CU4495-010',
    p_type: "Men's Apparel",
    color: 'Black/Black',
    description: 'Ready for cooler weather, the Nike Sportswear Tech Fleece Joggers feature an updated fit perfect for everyday wear. Roomy through the thigh, this tapered design narrows at the knee to give you a comfortable feel without losing the clean, tailored look you love. Tall ribbed cuffs complete the jogger look while a zippered pocket on the right leg provides secure small-item storage and elevate the look.',
    category: 'men',
    price: 110
  })


  p8 = Product.create({
    name: "Nike ACG ",
    title: "Therma-FIT Fleece Allover Print Crew",
    sku: 'DV9541-885',
    p_type: "Men's Apparel",
    color: 'Bright Mandarin/Summit White',
    description: 'With an allover print inspired by the High Sierras, this heavyweight fleece crew brings the warmth. Nike Therma-Fit tech helps to manage your body’s natural heat and the roomy fit makes it perfect for layering.',
    category: 'men',
    price: 125.00
  })

  p9 = Product.create({
    name: "Nike ACG",
    title: "Therma-FIT Fleece Allover Print Crew",
    sku: 'DV9541-085',
    p_type: "Men's Apparel",
    color: 'Football Grey/Summit White',
    description: 'With an allover print inspired by the High Sierras, this heavyweight fleece crew brings the warmth. Nike Therma-Fit tech helps to manage your body’s natural heat and the roomy fit makes it perfect for layering.',
    category: 'men',
    price: 125.00
  })

  p10 = Product.create({
    name: "Nike Primary",
    title: "Dri-FIT Versatile Tank",
    sku: 'DV9833-815',
    p_type: "Men's Apparel",
    color: 'Monarch/Heather/Monarch',
    description: "Run, spin, lift, stretch—no matter where your workout takes you, we have you covered in the sweat-wicking Primary Tank. It's ultra soft and comfortable, with underarm ventilation to help keep you cool during your reps.",
    category: 'men',
    price: 55.00
  })

  p11 = Product.create({
    name: "Nike Primary",
    title: "Dri-FIT Versatile Tank",
    sku: 'DV9833-010',
    p_type: "Men's Apparel",
    color: 'Black/Black',
    description: "Run, spin, lift, stretch—no matter where your workout takes you, we have you covered in the sweat-wicking Primary Tank. It's ultra soft and comfortable, with underarm ventilation to help keep you cool during your reps.",
    category: 'men',
    price: 55.00
  })

  p12 = Product.create({
    name: "Nike AIr Max 97",
    sku: '921826-001',
    p_type: "Men's Shoes",
    color: 'Black/White',
    description: 'Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colors and crisp details, it lets you ride in first-class comfort.',
    category: 'men',
    price: 175.00
  })

  p13 = Product.create({
    name: "Nike AIr Max 97",
    sku: '921826-015',
    p_type: "Men's Shoes",
    color: 'Black/Anthracite/White',
    description: 'Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colors and crisp details, it lets you ride in first-class comfort.',
    category: 'men',
    price: 175.00
  })

  p14 = Product.create({
    name: "Nike Air Max 97",
    sku: '921826-101',
    p_type: "Men's Shoes",
    color: 'White/Black/Wolf Grey',
    description: 'Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colors and crisp details, it lets you ride in first-class comfort.',
    category: 'men',
    price: 175.00
  })

  p15 = Product.create({
    name: "Nike Air Max 90",
    sku: 'CN8490-001',
    p_type: "Men's Shoes",
    color: 'Wolf Grey/Black/White/Black',
    description: 'Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.',
    category: 'men',
    price: 130.00
  })

  p16 = Product.create({
    name: "Nike Air Max 90",
    sku: 'CN8490-002',
    p_type: "Men's Shoes",
    color: 'Iron Grey/Dark Smoke Grey/Black/White',
    description: 'Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.',
    category: 'men',
    price: 130.00
  })

  p17 = Product.create({
    name: "Nike Air Max 90",
    sku: 'CN8490-003',
    p_type: "Men's Shoes",
    color: 'Black/Black/Black/Black',
    description: 'Nothing as fly, nothing as comfortable, nothing as proven. The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details. Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.',
    category: 'men',
    price: 130.00
  })

  p18 = Product.create({
    name: "Nike Air Max 97 OG",
    sku: 'DM0028-001',
    p_type: "Men's Shoes",
    color: 'Metallic Silver/Midnight Navy/Summit White/Chlorine Blue',
    description: 'Push your style full speed ahead with the Nike Air Max 97 OG. Its iconic design takes inspiration from water droplets and Japanese bullet trains. Full-length Nike Air cushioning lets you ride in first class comfort.',
    category: 'men',
    price: 185.00,
    sale_price: 129.97
  })

  p19 = Product.create({
    name: "Nike Air Max 97 OG",
    sku: 'DM0028-700',
    p_type: "Men's Shoes",
    color: 'Metallic Gold/Black/White/Varsity Red',
    description: 'Push your style full speed ahead with the Nike Air Max 97 OG. Its iconic design takes inspiration from water droplets and Japanese bullet trains. Full-length Nike Air cushioning lets you ride in first class comfort.',
    category: 'men',
    price: 185.00
  })

  p20 = Product.create({
    name: "Nike Air Force 1 '07 Fresh",
    sku: 'DM0211-001',
    p_type: "Men's Shoes",
    color: 'Black/Black/Black/Anthracite',
    description: "You can't stop aging, but the Air Force 1 'Fresh' gets pretty close. Soft, textured leather helps conceal creasing and is easy to clean. The debossed branding, which replaces the woven labels, pairs with extra laces so you can eat that jelly doughnut in peace. And the perforated sockliner keeps it airy and breathable. Now, there's really no reason not to rock white-on-white.",
    category: 'men',
    price: 140.00
  })

  p21 = Product.create({
    name: "Nike Air Force 1 '07 Fresh",
    sku: 'DM0211-100',
    p_type: "Men's Shoes",
    color: 'White/White/White',
    description: "You can't stop aging, but the Air Force 1 'Fresh' gets pretty close. Soft, textured leather helps conceal creasing and is easy to clean. The debossed branding, which replaces the woven labels, pairs with extra laces so you can eat that jelly doughnut in peace. And the perforated sockliner keeps it airy and breathable. Now, there's really no reason not to rock white-on-white.",
    category: 'men',
    price: 140.00
  })

  p22 = Product.create({
    name: "Nike Air Max Pulse",
    sku: 'DR0453-001',
    p_type: "Men's Shoes",
    color: 'Phantom/High Voltage/White/Reflective Silver',
    description: "Keeping it real, the Air Max Pulse pulls inspiration from the London music scene, bringing an underground touch to the iconic Air Max line. Its textile-wrapped midsole and vacuum-sealed accents keep 'em looking fresh and clean, while colors inspired by the London music scene give your look the edge. Point-loaded Air cushioning—revamped from the incredibly plush Air Max 270—delivers better bounce, helping you push past your limits.",
    category: 'men',
    price: 150.00
  })

  p23 = Product.create({
    name: "Nike Air Max Pulse",
    sku: 'DR0453-004',
    p_type: "Men's Shoes",
    color: 'Cobblestone/Light Orewood Brown/Black/Reflect Silver',
    description: "Keeping it real, the Air Max Pulse pulls inspiration from the London music scene, bringing an underground touch to the iconic Air Max line. Its textile-wrapped midsole and vacuum-sealed accents keep 'em looking fresh and clean, while colors inspired by the London music scene give your look the edge. Point-loaded Air cushioning—revamped from the incredibly plush Air Max 270—delivers better bounce, helping you push past your limits.",
    category: 'men',
    price: 150.00
  })

  p24 = Product.create({
    name: "Nike Air More Uptempo '96",
    sku: 'DV0819-001',
    p_type: "Men's Shoes",
    color: 'Black/Multi-Color/Cobalt Bliss/White',
    description: "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavor at its finest. Big and bold, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    category: 'men',
    price: 165.00,
    sale_price: 140.97
  })

  p25 = Product.create({
    name: "Nike Air More Uptempo '96",
    sku: 'DV6993-200',
    p_type: "Men's Shoes",
    color: 'Limestone/Limestone/Valerian Blue',
    description: "More than perhaps any other silhouette, the Air More Uptempo encapsulates '90s basketball flavor at its finest. Big and bold, the unapologetic design represents a hybrid of style and innovation that made major waves when it debuted—and still turns heads today. This crafted take keeps it simple and easy to style in classic black and white, while pops of blue add a breath of fresh air. Speaking of air, the graffiti-style AIR graphic (an off-court fave) extends down the midsole for extra punch. Visible Nike Air cushioning finishes it off, giving you the edge in comfort.",
    category: 'men',
    price: 165.00
  })

  p26 = Product.create({
    name: "Nike Air Presto",
    sku: '878068-001',
    p_type: "Women's Shoes",
    color: 'Black/White/Black',
    description: "The Nike Air Presto Women's Shoe delivers the same unrivaled fit and comfort that marked the 2000 debut of the original.",
    category: 'women',
    price: 135.00
  })

  p27 = Product.create({
    name: "Nike Blazer Mid '77",
    sku: 'CZ1055-100',
    p_type: "Women's Shoes",
    color: 'White/Sail/Peach/Black',
    description: "Styled for the '70s. Loved in the '80s. Classic in the '90s. Ready for the future. The Nike Blazer Mid '77 delivers a timeless design that's easy to wear. Its unbelievably crisp leather upper breaks in beautifully and pairs with bold retro branding and luscious suede accents for a premium feel. Exposed foam on the tongue and a special midsole finish make it look like you've just pulled them from the history books. Go ahead, perfect your outfit.",
    category: 'women',
    price: 105.00
  })

  p27 = Product.create({
    name: "Nike Blazer Mid '77",
    sku: 'CZ1055-123',
    p_type: "Women's Shoes",
    color: 'White/Picante Red/Fuchsia Dream/Stadium Green',
    description: "Styled for the '70s. Loved in the '80s. Classic in the '90s. Ready for the future. The Nike Blazer Mid '77 delivers a timeless design that's easy to wear. Its unbelievably crisp leather upper breaks in beautifully and pairs with bold retro branding and luscious suede accents for a premium feel. Exposed foam on the tongue and a special midsole finish make it look like you've just pulled them from the history books. Go ahead, perfect your outfit.",
    category: 'women',
    price: 105.00
  })

  p28 = Product.create({
    name: "Nike Air Force 1 '07",
    sku: 'DD8959-001',
    p_type: "Women's Shoes",
    color: 'Black/Black/Black/Black',
    description: "The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine.",
    category: 'women',
    price: 110.00
  })

  p29 = Product.create({
    name: "Nike Air Force 1 '07",
    sku: 'DD8959-100',
    p_type: "Women's Shoes",
    color: 'White/White/White/White',
    description: "The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine.",
    category: 'women',
    price: 110.00
  })

  p30 = Product.create({
    name: "Nike Waffle Debut",
    sku: 'DH9523-100',
    p_type: "Women's Shoes",
    color: 'White/Black/Orange/White',
    description: "Retro gets modernized with these sleek sneaks inspired by the Nike Daybreak. Era-echoing suede and nylon are paired in complementary colors, and the updated wedge midsole gives you an extra lift. Style, comfort, iconic Waffle outsole—this is a perfect new addition to your daily rotation.",
    category: 'women',
    price: 75.00
  })

  p31 = Product.create({
    name: "Nike Waffle Debut",
    sku: 'DH9523-200',
    p_type: "Women's Shoes",
    color: 'Sesame/Desert Ochre/Black/Baroque Brown',
    description: "Retro gets modernized with these sleek sneaks inspired by the Nike Daybreak. Era-echoing suede and nylon are paired in complementary colors, and the updated wedge midsole gives you an extra lift. Style, comfort, iconic Waffle outsole—this is a perfect new addition to your daily rotation.",
    category: 'women',
    price: 75.00
  })

  p32 = Product.create({
    name: "Nike Dunk High 1985",
    sku: 'DV1143-300',
    p_type: "Women's Shoes",
    color: 'Enamel Green/Summit White/Pro Green/Enamel Green',
    description: "Celebrate heritage with an updated version of the Dunk High, recrafted to reflect the original from 1985. Matching the shape, look and feel that started it all, it delivers true vintage style while keeping the familiar comfort you love.",
    category: 'women',
    price: 140.00
  })

  p33 = Product.create({
    name: "Nike Dunk High 1985",
    sku: 'DV1143-800',
    p_type: "Women's Shoes",
    color: 'Arctic Orange/Summit White/Orange Blaze/Arctic Orange',
    description: "Celebrate heritage with an updated version of the Dunk High, recrafted to reflect the original from 1985. Matching the shape, look and feel that started it all, it delivers true vintage style while keeping the familiar comfort you love.",
    category: 'women',
    price: 140.00
  })

  p34 = Product.create({
    name: "Nike Pegasus 40",
    sku: 'DV3854-100',
    p_type: "Women's Shoes",
    color: 'White/Coconut Milk/Black',
    description: "A springy ride for every run, the Peg's familiar, just-for-you feel returns to help you accomplish your goals. This version has the same responsiveness and neutral support you love, but with improved comfort in those sensitive areas of your foot, like the arch and toes. Whether you're logging long marathon miles, squeezing in a speed session before the sun goes down or hopping into a spontaneous group jaunt, it's still the established road runner you can put your faith in, day after day, run after run.",
    category: 'women',
    price: 130.00
  })

  p35 = Product.create({
    name: "Nike Pegasus 40",
    sku: 'DV3854-600',
    p_type: "Women's Shoes",
    color: 'Pearl Pink/Pink Foam/Hemp/White',
    description: "A springy ride for every run, the Peg's familiar, just-for-you feel returns to help you accomplish your goals. This version has the same responsiveness and neutral support you love, but with improved comfort in those sensitive areas of your foot, like the arch and toes. Whether you're logging long marathon miles, squeezing in a speed session before the sun goes down or hopping into a spontaneous group jaunt, it's still the established road runner you can put your faith in, day after day, run after run.",
    category: 'women',
    price: 130.00
  })

  p36 = Product.create({
    name: "Nike Air Presto",
    sku: 'DZ4406-001',
    p_type: "Women's Shoes",
    color: 'Black/Racer Blue/Bright Crimson/Hyper Pink',
    description: "With a sleek design meant to feel more comfortable than your favorite tee, the Nike Air Presto is made to feel good and look fast. Its stretchy sleeve creates a cozy, sock-like fit while soft foam and a Zoom Air unit in the heel help cushion your every step. Put them on and you'll never want to take them off.",
    category: 'women',
    price: 135.00,
    sale_price: 82.97
  })

  p37 = Product.create({
    name: "Nike Dunk Low SE",
    sku: 'FD0868-133',
    p_type: "Women's Shoes",
    color: 'Sail/Cashmere/Team Gold/Sail',
    description: "Lace up and make your mark in shoes that carry a legacy. A legend in the basketball world and an icon in skate culture, the Nike Dunk has been a sneaker favorite for decades. A durable canvas upper gives this special edition a new look and feel while screen-printed graphics celebrate the future.",
    category: 'women',
    price: 110.00
  })

  p38 = Product.create({
    name: "Nike Alate Trace",
    title: "Light-Support Padded Strappy Sports Bra",
    sku: 'DO6608-655',
    p_type: "Women's Apparel",
    color: 'Adobe/Sail',
    description: "Feel confident all day long in this light-support Alate bra. A sewn-in 1-piece pad offers enhanced coverage and shaping while sweat-wicking technology keeps you cool and comfortable. The Infinalon fabric of the body and straps feels like you’re being hugged by a silky cloud and stretches easily, giving you the ultimate freedom of movement. A rounded V-neck tops the bra off with a clean finish, so you might just forget you're wearing it.",
    category: 'women',
    price: 55.00,
    sale_price: 42.97
  })

  p39 = Product.create({
    name: "Nike Alate Trace",
    title: "Light-Support Padded Strappy Sports Bra",
    sku: 'DO6608-010',
    p_type: "Women's Apparel",
    color: 'Black/Sail',
    description: "Feel confident all day long in this light-support Alate bra. A sewn-in 1-piece pad offers enhanced coverage and shaping while sweat-wicking technology keeps you cool and comfortable. The Infinalon fabric of the body and straps feels like you’re being hugged by a silky cloud and stretches easily, giving you the ultimate freedom of movement. A rounded V-neck tops the bra off with a clean finish, so you might just forget you're wearing it.",
    category: 'women',
    price: 55.00
  })

  p40 = Product.create({
    name: "Nike Sportswear Essential",
    title: "High-Rise Woven Cargo Pants",
    sku: 'DO7209-272',
    p_type: "Women's Apparel",
    color: 'Diffused Taupe/White',
    description: "These pants are relaxed through the leg for a carefree, comfortable feel. Unlined woven fabric feels soft and smooth against your skin while still looking crisp. Patch cargo pockets offer a utility look and quick storage.",
    category: 'women',
    price: 80.00
  })

  p41 = Product.create({
    name: "Nike Sportswear Essential",
    title: "High-Rise Woven Cargo Pants",
    sku: 'DO7209-010',
    p_type: "Women's Apparel",
    color: 'Black/White',
    description: "These pants are relaxed through the leg for a carefree, comfortable feel. Unlined woven fabric feels soft and smooth against your skin while still looking crisp. Patch cargo pockets offer a utility look and quick storage.",
    category: 'women',
    price: 80.00
  })

  p42 = Product.create({
    name: "Nike Sportswear Essentials",
    sku: 'DN5697-519',
    p_type: "Women's Apparel",
    color: 'Indigo Haze/White',
    description: "With a loose fit and slightly dropped shoulders, this T-shirt is sure to become one of your staples. A simple Swoosh adds a signature Nike look. This product is made with at least 75% organic cotton fibers.",
    category: 'women',
    price: 30.00
  })

  p43 = Product.create({
    name: "Nike Sportswear Essentials",
    sku: 'DN5697-010',
    p_type: "Women's Apparel",
    color: 'Black/White',
    description: "With a loose fit and slightly dropped shoulders, this T-shirt is sure to become one of your staples. A simple Swoosh adds a signature Nike look. This product is made with at least 75% organic cotton fibers.",
    category: 'women',
    price: 30.00
  })

  p44 = Product.create({
    name: "Nike Sportswear Collection",
    title: "Woven Jacket",
    sku: 'DV8307-200',
    p_type: "Women's Apparel",
    color: 'Hemp/Black/Sanddrift/Hemp',
    description: "Layer up and get out there in this oversized, lightweight woven jacket. Inspired by heritage Nike Sportswear, its design refreshes a staple with panel details that help reshape your warm-weather wardrobe. A 2-way zipper lets you change up your look with ease.",
    category: 'women',
    price: 125.00
  })

  p45 = Product.create({
    name: "Nike Sportswear Collection",
    title: "Woven Jacket",
    sku: 'DV8307-410',
    p_type: "Women's Apparel",
    color: 'Midnight Navy/Diffused Blue/Ashen Slate/Midnight Navy',
    description: "Layer up and get out there in this oversized, lightweight woven jacket. Inspired by heritage Nike Sportswear, its design refreshes a staple with panel details that help reshape your warm-weather wardrobe. A 2-way zipper lets you change up your look with ease.",
    category: 'women',
    price: 125.00
  })

  p46 = Product.create({
    name: "Nike Sportswear Essential",
    title: "Midi Dress",
    sku: 'DV7878-272',
    p_type: "Women's Apparel",
    color: 'Diffused Taupe/White',
    description: "Just add sneakers to this snug-fitting dress to get your day started off on the right foot. Soft and stretchy, the thick, double-knit jersey fabric feels cool and sleek. A slit at the bottom hem helps you move without restriction.",
    category: 'women',
    price: 65.00
  })

  p47 = Product.create({
    name: "Nike Sportswear Essential",
    title: "Midi Dress",
    sku: 'DV7878-010',
    p_type: "Women's Apparel",
    color: 'Black/White',
    description: "Just add sneakers to this snug-fitting dress to get your day started off on the right foot. Soft and stretchy, the thick, double-knit jersey fabric feels cool and sleek. A slit at the bottom hem helps you move without restriction.",
    category: 'women',
    price: 65.00
  })

  p48 = Product.create({
    name: "Nike Sportswear",
    title: "Phoenix Fleece Over-Oversized Pullover Hoodie",
    sku: 'DQ5858-010',
    p_type: "Women's Apparel",
    color: 'Black/Sail',
    description: "Rise up and transform your fleece wardrobe with strong cozy vibes. With an extreme drop in the shoulders and extra room in the body, this voluminous Phoenix Fleece hoodie will never hold you back or hem you in. Exaggerated details (like extra-tall ribbing and an oversized front pocket) ensure your look is anything but basic.",
    category: 'women',
    price: 75.00
  })

  p49 = Product.create({
    name: "Nike Sportswear",
    title: "Phoenix Fleece Over-Oversized Pullover Hoodie",
    sku: 'DQ5858-133',
    p_type: "Women's Apparel",
    color: 'Sail/Black',
    description: "Rise up and transform your fleece wardrobe with strong cozy vibes. With an extreme drop in the shoulders and extra room in the body, this voluminous Phoenix Fleece hoodie will never hold you back or hem you in. Exaggerated details (like extra-tall ribbing and an oversized front pocket) ensure your look is anything but basic.",
    category: 'women',
    price: 75.00
  })

  p50 = Product.create({
    name: "Nike Blazer Mid '77",
    sku: 'DA4086-002',
    p_type: "Kid's Shoes",
    color: 'Black/White/Team Orange/Sail',
    description: "The Nike Blazer Mid '77 channels the old-school look of Nike basketball with a vintage midsole finish. Throwback style with modern materials means you can run, skip and jump in comfort.",
    category: 'kids',
    price: 85.00
  })

  p51 = Product.create({
    name: "Nike Blazer Mid '77",
    sku: 'DA4086-100',
    p_type: "Kid's Shoes",
    color: 'White/Total Orange/Black',
    description: "The Nike Blazer Mid '77 channels the old-school look of Nike basketball with a vintage midsole finish. Throwback style with modern materials means you can run, skip and jump in comfort.",
    category: 'kids',
    price: 85.00
  })

  p52 = Product.create({
    name: "Air Jordan 1 Mid",
    sku: 'DQ8423-615',
    p_type: "Kid's Shoes",
    color: 'Cherrywood Red/Cement Grey/White',
    description: "This iteration of the AJ1 reimagines Mike's first signature model with a fresh mix of colors. Premium materials, soft cushioning and a padded ankle collar offer total support and celebrate the shoe that started it all.",
    category: 'kids',
    price: 110.00,
    sale_price: 83.97
  })


  p53 = Product.create({
    name: "Nike Air Max 270 GO",
    sku: 'DV1968-100',
    p_type: "Kid's Shoes",
    color: 'Summit White/Blue Lightning/Diffused Blue/Laser Orange',
    description: "The Nike Air Max 270 GO is ready for you to do just that—'GO!' What's GO, you ask? It's our answer to making shoes super easy to take on and off—hands free! Step on the collapsible heel and watch it widen. Slip your foot in, and see the heel snap back into place. And done! Don't forget the B-I-G 270 Air unit for that lightweight and bouncy feel with each step to recess, after-school activities or just all-day play.",
    category: 'kids',
    price: 130.00
  })

  p53 = Product.create({
    name: "Nike Air Max 270 GO",
    sku: 'DV1968-102',
    p_type: "Kid's Shoes",
    color: 'Summit White/Cobalt Bliss/Pearl Pink/Cosmic Fuchsia',
    description: "The Nike Air Max 270 GO is ready for you to do just that—'GO!' What's GO, you ask? It's our answer to making shoes super easy to take on and off—hands free! Step on the collapsible heel and watch it widen. Slip your foot in, and see the heel snap back into place. And done! Don't forget the B-I-G 270 Air unit for that lightweight and bouncy feel with each step to recess, after-school activities or just all-day play.",
    category: 'kids',
    price: 130.00
  })

  p54 = Product.create({
    name: "Nike Air Force 1 LV8 2",
    sku: 'DX1656-800',
    p_type: "Kid's Shoes",
    color: 'Monarch/Sail',
    description: "There's a lot to love about the AF1: Its tough stitching and grippy tread helps you find your footing on first days and rainy days alike. It's the shoe that was as cool 20 years ago as it is today, and will be even when it's covered in stains, scuffs and scrapes. Actually, it might even be better.",
    category: 'kids',
    price: 95.00
  })

  p55 = Product.create({
    name: "Air Jordan 1 Mid",
    sku: 'DQ8423-014',
    p_type: "Kid's Shoes",
    color: 'Cement Grey/True Blue/White',
    description: "This iteration of the AJ1 reimagines Mike's first signature model with a fresh mix of colors. Premium materials, soft cushioning and a padded ankle collar offer total support and celebrate the shoe that started it all.",
    category: 'kids',
    price: 95.00
  })

  p56 = Product.create({
    name: "Air Jordan 13 Retro",
    sku: '884129-041',
    p_type: "Kid's Shoes",
    color: 'Black/White/University Blue',
    description: "The Air Jordan 13 Retro gives kids a throwback version of MJ's 13th signature model, the one known as the 'Black Cat.' It's built with luxe materials and encapsulated Nike Air technology. Paw-like pods on the outsole and the holographic detail at the collar add distinction.",
    category: 'kids',
    price: 150.00
  })

  p57 = Product.create({
    name: "Nike Air Max 90",
    sku: 'DZ4844-001',
    p_type: "Kid's Shoes",
    color: 'Light Iron Ore/Summit White/Black/University Red',
    description: "How do you make an icon even better? Unleash its wild side! A medley of animal prints lends new energy and power to the Nike Air Max 90. The shaped toe box gives your toes more wiggle room while Max Air units tuned just for you help keep playtime comfy. Waffle outsoles, stitched overlays and classic molded plastic accents bring a '90s fave to a new generation.",
    category: 'kids',
    price: 110.00,
    sale_price: 76.97
  })

  p58 = Product.create({
    name: "Nike Jr. Zoom Mercurial Vapor 15 Academy XXV TF",
    sku: 'FJ2039-060',
    p_type: "Kid's Shoes",
    color: 'Metallic Silver/Black/Volt/Volt',
    description: "Celebrate the 25th anniversary of 1 of our fastest cleats ever created with the Vapor 15 Academy XXV. Iconic colors synonymous with the Mercurial complement hints of its decorated history. The stunning chrome effect puts even more electricity into these lightning bolts loaded with Zoom Air, which begs the question: What moments will you etch into our memories over the next 25 years?",
    category: 'kids',
    price: 65.00
  })

  p59 = Product.create({
    name: "Nike Jr. Zoom Mercurial Vapor 15 Academy XXV TF",
    sku: 'DJ5621-605',
    p_type: "Kid's Shoes",
    color: 'Pink Blast/Gridiron/Volt',
    description: "Celebrate the 25th anniversary of 1 of our fastest cleats ever created with the Vapor 15 Academy XXV. Iconic colors synonymous with the Mercurial complement hints of its decorated history. The stunning chrome effect puts even more electricity into these lightning bolts loaded with Zoom Air, which begs the question: What moments will you etch into our memories over the next 25 years?",
    category: 'kids',
    price: 65.00
  })

  p60 = Product.create({
    name: "Nike Sportswear",
    title: "Club Fleece French Terry Short-Sleeve Sweatshirt",
    sku: 'FB1333-491',
    p_type: "Kid's Apparel",
    color: 'Diffused Blue/Midnight Navy',
    description: "Short sleeves on a sweatshirt? Yes, please. Tie-dye, too? Let's go! Rock it every day of the year, this lightweight layer has a little extra room through the body so you can shoot hoops, build forts and chase your friends in total comfort.",
    category: 'kids',
    price: 55.00
  })

  p61 = Product.create({
    name: "Nike Sportswear",
    title: "Club Fleece French Terry Short-Sleeve Sweatshirt",
    sku: 'FB1333-836',
    p_type: "Kid's Apparel",
    color: 'Vivid Orange/Safety Orange',
    description: "Short sleeves on a sweatshirt? Yes, please. Tie-dye, too? Let's go! Rock it every day of the year, this lightweight layer has a little extra room through the body so you can shoot hoops, build forts and chase your friends in total comfort.",
    category: 'kids',
    price: 55.00
  })

  p62 = Product.create({
    name: "Nike Sportswear Club Fleece",
    sku: 'FB1337-491',
    p_type: "Kid's Apparel",
    color: 'Diffused Blue/Midnight Navy',
    description: "It's like getting your own tie-dye kit and throwing it on your favorite shorts. But WAY more awesome because it's less messy. Let the colors and design spark your imagination! Worth rocking any day of the week, these soft and lightweight Club Fleece shorts are the go-to warm-weather style you'll instantly love.",
    category: 'kids',
    price: 48.00
  })

  p63 = Product.create({
    name: "Nike Sportswear Club Fleece",
    sku: 'FB1337-836',
    p_type: "Kid's Apparel",
    color: 'Vivid Orange/Safety Orange',
    description: "It's like getting your own tie-dye kit and throwing it on your favorite shorts. But WAY more awesome because it's less messy. Let the colors and design spark your imagination! Worth rocking any day of the week, these soft and lightweight Club Fleece shorts are the go-to warm-weather style you'll instantly love.",
    category: 'kids',
    price: 48.00
  })

  p64 = Product.create({
    name: "Nike Sportswear Woven Shorts",
    sku: 'DO6582-010',
    p_type: "Kid's Apparel",
    color: 'Black/White',
    description: "Shorts for playtime—or all the time! The Nike Sportswear Shorts are made of lightweight woven fabric that's versatile enough to go with all your favorite tees and tops.",
    category: 'kids',
    price: 35.00
  })

  p65 = Product.create({
    name: "Nike Sportswear Woven Shorts",
    sku: 'DO6582-480',
    p_type: "Kid's Apparel",
    color: 'Game Royal/White',
    description: "Shorts for playtime—or all the time! The Nike Sportswear Shorts are made of lightweight woven fabric that's versatile enough to go with all your favorite tees and tops.",
    category: 'kids',
    price: 35.00
  })

  p66 = Product.create({
    name: "Nike Sportswear",
    title: "Tech Fleece Full-Zip Hoodie",
    sku: 'CU9223-010',
    p_type: "Kid's Apparel",
    color: 'Black/Black',
    description: "Make the most of chilly days with the Nike Sportswear Tech Fleece Hoodie. This full-zip is all about our innovative premium fleece that’s soft, lightweight and warm. Added bonus: There’s a zippered pocket on your left sleeve.",
    category: 'kids',
    price: 100.00
  })

  p67 = Product.create({
    name: "Nike Sportswear",
    title: "Tech Fleece Full-Zip Hoodie",
    sku: 'CU9223-553',
    p_type: "Kid's Apparel",
    color: 'Canyon Purple/Canyon Rust/Light Bone/Light Bone',
    description: "Make the most of chilly days with the Nike Sportswear Tech Fleece Hoodie. This full-zip is all about our innovative premium fleece that’s soft, lightweight and warm. Added bonus: There’s a zippered pocket on your left sleeve.",
    category: 'kids',
    price: 100.00,
    sale_price: 85.97
  })

  p68 = Product.create({
    name: "Nike Icon Fleece",
    title: "Oversized Pullover Basketball Hoodie",
    sku: 'DX5519-100',
    p_type: "Kid's Apparel",
    color: 'White/Metallic Silver',
    description: "What's it mean to be an all-star? To us, it's being your best and shining bright—from the classroom to your favorite sport or activity. Inspired by the star within everyone, the Nike Icon Fleece hoodie celebrates what you're great at. Big graphics bring extra star power to your oversized soft fleece hoodie.",
    category: 'kids',
    price: 65.00,
    sale_price: 55.97
  })

  p69 = Product.create({
    name: "Nike Icon Fleece",
    title: "Oversized Pullover Basketball Hoodie",
    sku: 'DX5519-010',
    p_type: "Kid's Apparel",
    color: 'Black/Metallic Silver',
    description: "What's it mean to be an all-star? To us, it's being your best and shining bright—from the classroom to your favorite sport or activity. Inspired by the star within everyone, the Nike Icon Fleece hoodie celebrates what you're great at. Big graphics bring extra star power to your oversized soft fleece hoodie.",
    category: 'kids',
    price: 65.00,
    sale_price: 55.97
  })

  puts "Done!"

products = Product.all

products.each do |product|
  (1..12).each do |i|
    product_webp = "https://helios-seeds.s3.us-west-1.amazonaws.com/#{product.sku}-#{i < 10 ? ('0' + i.to_s ) : i}.webp"
    product_webm = "https://helios-seeds.s3.us-west-1.amazonaws.com/#{product.sku}-02.webm"
    product_jpeg = "https://helios-seeds.s3.us-west-1.amazonaws.com/#{product.sku}-#{i < 10 ? ('0' + i.to_s ) : i}.jpeg"

    if File.exists?(product_webp)
      product.photos.attach(
        io: URI.open("https://helios-seeds.s3.us-west-1.amazonaws.com/#{product.sku}-#{i < 10 ? ('0' + i.to_s ) : i}.webp"), 
        filename: "#{product.sku}-#{i < 10 ? ('0' + i.to_s ) : i}.webp"
      )
    elsif File.exists?(product_webm)
      product.photos.attach(
        io: URI.open("https://helios-seeds.s3.us-west-1.amazonaws.com/#{product.sku}-02.webm"), 
        filename: `#{product.sku}-02.webm`
      )
    elsif File.exists?(product_jpeg)
      product.photos.attach(
        io: URI.open("https://helios-seeds.s3.us-west-1.amazonaws.com/#{product.sku}-#{i < 10 ? ('0' + i.to_s ) : i}.jpeg"), 
        filename: "#{product.sku}-#{i < 10 ? ('0' + i.to_s ) : i}.jpeg"
      )
    end
  end
end
