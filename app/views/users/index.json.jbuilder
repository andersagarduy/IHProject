json.users @users do |user|
  json.id user.id
  json.name user.name
  json.job user.job
  json.img user.avatar_file_name
end