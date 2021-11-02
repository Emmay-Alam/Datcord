# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

demo = User.create!(username: "demo", email: "demouser@gmail.com", password: "password", dob: "2000-01-01", tag: 9001)
user1 = User.create!(username: "sunshinenim", email: "mansoo@gmail.com", password: "password", dob: "1993-06-09", tag: 4171)
user2 = User.create!(username: "wood", email: "wood@gmail.com", password: "password", dob: "1997-03-04", tag: 1234)
user3 = User.create!(username: "stelluhhh", email: "stella@gmail.com", password: "password", dob: "1997-09-13", tag: 229)
user4 = User.create!(username: "8eanie", email: "subin@gmail.com", password: "password", dob: "1996-04-08", tag: 0001)
user5 = User.create!(username: "suzinator", email: "suz@gmail.com", password: "password", dob: "1994-07-29", tag: 6969)
user6 = User.create!(username: "soheep", email: "sohee@gmail.com", password: "password", dob: "1991-01-14", tag: 4582)
user7 = User.create!(username: "arebiter", email: "pasan@gmail.com", password: "password", dob: "1996-09-14", tag: 9675)
user8 = User.create!(username: "mothammer", email: "matt@gmail.com", password: "password", dob: "1988-04-22", tag: 1836)

Server.destroy_all