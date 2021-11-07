# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# USERS

demo1 = User.create!(username: "demo", email: "demouser@gmail.com", password: "password", dob: "2000-01-01", tag: 9001)
demo2 = User.create!(username: "demo2", email: "demouser2@gmail.com", password: "password", dob: "2000-01-01", tag: 8999)
user1 = User.create!(username: "sunshinenim", email: "mansoo@gmail.com", password: "password", dob: "1993-06-09", tag: 4171)
user2 = User.create!(username: "wood", email: "wood@gmail.com", password: "password", dob: "1997-03-04", tag: 1234)
user3 = User.create!(username: "stelluhhh", email: "stella@gmail.com", password: "password", dob: "1997-09-13", tag: 229)
user4 = User.create!(username: "8eanie", email: "subin@gmail.com", password: "password", dob: "1996-04-08", tag: 0001)
user5 = User.create!(username: "suzinator", email: "suz@gmail.com", password: "password", dob: "1994-07-29", tag: 6969)
user6 = User.create!(username: "soheep", email: "sohee@gmail.com", password: "password", dob: "1991-01-14", tag: 4582)
user7 = User.create!(username: "arebiter", email: "pasan@gmail.com", password: "password", dob: "1996-09-14", tag: 9675)
user8 = User.create!(username: "mothammer", email: "matt@gmail.com", password: "password", dob: "1988-04-22", tag: 1836)

# SERVERS / CHANNELS / MEMBERSHIPS

server1 = Server.create!(name: "True Study Buddies Come to FL", owner_id: user1.id)

channel1A = Channel.create!(name: "general", server_id: server1.id)
channel1B = Channel.create!(name: "code", server_id: server1.id)
channel1C = Channel.create!(name: "vic-shots", server_id: server1.id)
channel1D = Channel.create!(name: "vc-text", server_id: server1.id)

membership1A = Membership.create!(user_id: demo1.id, membership_type: server1.class.name, membership_id: server1.id)
membership1B = Membership.create!(user_id: user1.id, membership_type: server1.class.name, membership_id: server1.id)
membership1C = Membership.create!(user_id: user2.id, membership_type: server1.class.name, membership_id: server1.id)
membership1D = Membership.create!(user_id: user3.id, membership_type: server1.class.name, membership_id: server1.id)
membership1E = Membership.create!(user_id: user4.id, membership_type: server1.class.name, membership_id: server1.id)
membership1F = Membership.create!(user_id: user5.id, membership_type: server1.class.name, membership_id: server1.id)
membership1G = Membership.create!(user_id: user6.id, membership_type: server1.class.name, membership_id: server1.id)
membership1H = Membership.create!(user_id: user7.id, membership_type: server1.class.name, membership_id: server1.id)
membership1I = Membership.create!(user_id: user8.id, membership_type: server1.class.name, membership_id: server1.id)

server2 = Server.create!(name: "a/A 08-09-2021 Discord", owner_id: demo2.id)

channel2A = Channel.create!(name: "general", server_id: server2.id)
channel2B = Channel.create!(name: "homework-help", server_id: server2.id)
channel2C = Channel.create!(name: "resources", server_id: server2.id)

membership2A = Membership.create!(user_id: demo1.id, membership_type: server2.class.name, membership_id: server2.id)
membership2B = Membership.create!(user_id: demo2.id, membership_type: server2.class.name, membership_id: server2.id)

server3 = Server.create!(name: "soybean", owner_id: user4.id)

channel3A = Channel.create!(name: "general", server_id: server3.id)

membership3A = Membership.create!(user_id: demo1.id, membership_type: server3.class.name, membership_id: server3.id)
membership3B = Membership.create!(user_id: user1.id, membership_type: server3.class.name, membership_id: server3.id)
membership3C = Membership.create!(user_id: user2.id, membership_type: server3.class.name, membership_id: server3.id)
membership3D = Membership.create!(user_id: user3.id, membership_type: server3.class.name, membership_id: server3.id)
membership3E = Membership.create!(user_id: user4.id, membership_type: server3.class.name, membership_id: server3.id)
membership3F = Membership.create!(user_id: user5.id, membership_type: server3.class.name, membership_id: server3.id)

server4 = Server.create!(name: "One Brain One Cohort", owner_id: user2.id)

channel4A = Channel.create!(name: "general", server_id: server4.id)

membership4A = Membership.create!(user_id: demo1.id, membership_type: server4.class.name, membership_id: server4.id)
membership4B = Membership.create!(user_id: user2.id, membership_type: server4.class.name, membership_id: server4.id)