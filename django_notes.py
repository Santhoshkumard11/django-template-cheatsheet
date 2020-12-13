#when creating the user don't add the password right away

u  = User("enter the fields")
u.set_password("raw passowrd string")
u.save

#getting the id for a model

user_id = User.objects.all().first().id
print(user_id)



#get distinct values (will give you the list of email id's)

SubUser.objects.filter(username=username).values_list('email_id', flat=True).distinct()
#will return only the sepecified field inside the values list

#if you want to set a expiry time for your session - you can also put datetime object in the params

request.session.set_expiry(300) would make the session expire in 5 minutes.
