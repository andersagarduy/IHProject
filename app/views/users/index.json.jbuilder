json.users @users do |user|
  json.id user.id
  json.name user.name
  json.job user.job
  json.img <%= image_tag(user.avatar.url(:thumb)) %>
end