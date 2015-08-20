# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Cowork.create characteristics: "1 Room ·20 Desks ·80m2 <br> Prosperidad, Madrid", description: "Utopic_US is the biggest coworking space in Spain, with 3 original <br>
																								spaces in the centre of Madrid open to freelances, <br>
																								self-employed workers and firms that want to change the world <br>
																								and to work  in a collaborative environment of exchange of services, <br>
																								products, ideas and knowledge. <br>
																								What moves us is the union of talents and their creative potential <br>
																								as a road to change the world trough an endless training. <br>
																								In utopic_US, every professional feels a part of the team <br>
																								and learns everyday from and with themselves. <br>
																								If you want to be a coworker but you don’t live in Madrid, you can <br>
																								be a virtual user through our platform www.utopicusvirtual.com <br>
																								Besides the coworking, utopic_US hosts different schools, <br>
																								(design, humanities, photography, urban art), an art gallery <br>
																								(utopic_Gallery), two gastronomic bar (mmm_Us and La Cabaña), <br>
																								and a lot of crazy and innovative projects. <br>
																								Of course we provide all the services the coworker will need <br>
																								to work happy every day: <br>
																								Office services: <br>
																								- Open coworking space, private offices and shared table <br>
																								  depending of your necessity. <br>
																								- Meeting Rooms for coworkers and external clientes, <br>
																								  to rent for day, houres and minutes. <br>
																								- Printer, photocopier, scanner, etc <br>
																								- Private rooms for training, meeting, workshops, etc.. <br>
																								- Space for event: totally equipped (screen,sound system,projector) <br>
																								  to present new projects, products, networking eventos, etc. <br>
																								Business services: Mentoring, consulting, internationalization, etc. <br>
																								External services: Catering, courier service, printing service, <br> 
																								virtual secretary, car-sharing, computer service.", services: "Coffee/ Tea/ Filtered Water <br> WiFi <br> Wheelchair Accessible <br> Shared Kitchen <br> Meeting Rooms <br> Mail Service <br> Vending machine", companies: "Cocouse Comparko Tangram Welcome Innovation Chameleon Studios", latitude: "40.412741", longitude: "-3.705843", name: "Utopic_US"

Cowork.create characteristics: "5 Rooms ·24 Desks ·24m2 <br> Madrid, Madrid", description: "Almirante 5, L´Espace, coworking located in one of the best streets <br>
																							of Madrid, with very good accessibility and great atmosphere! <br>
																							It is a new living space, versatile, able to transform again <br>
																							and again before each new look to surprise and captivate. <br>
																							We have created a space for independent professionals <br>
																							from different sectors share the same office or same workspace <br>
																							and for this we offer you over 200 m2 that merge seamlessly <br>
																							with an avant-garde vintage items. <br>
																							In the neighborhood of Justice, L'Espace Almirante 5 offers you the <br>
																							possibility of having your own office at an affordable price", services: "Wi-Fi / Internet <br> Kitchen <br> Air Conditioner <br> 24/7 Available <br> Weelchair Accessible", companies: "Cocouse Comparko Tangram Welcome Innovation Chameleon Studios", latitude: "40.42259", longitude: "-3.69503", name: "Almirante 5, L´Espace"




paul, alia, leto = User.create([
  {name: 'Paul Atreides',  email: 'paul@arrakis.com', password: 'ironhack', password_confirmation: 'ironhack'},
  {name: 'Alia Atreides',  email: 'alia@arrakis.com',  password: 'ironhack', password_confirmation: 'ironhack'},
  {name: 'Leto Atreides', email: 'leto@arrakis.com',  password: 'ironhack', password_confirmation: 'ironhack'}
])














