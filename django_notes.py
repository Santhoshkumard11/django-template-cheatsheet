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


#doc string
""" Add a relavant description of the method here
    Args:
    
        username (str,required): email id of the user
    
    Returns:

       (bool) : true if the user has devices else false

"""

#if you want to see a list of items in the admin page
@admin.register(models.Post)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('title', 'id', 'status', 'slug', 'author')
    
#NOTE: you have to replace the entire code of admin register to this and make sure the field names are the same
#----------------
#access django db shell
python manage.py dbshell
#-----------------
#don't name the apps with the default names of the packages.
''''
allauth.account',
is same as 'account',

change the apps settings to the following,
class ProfileConfig(AppConfig):
    name = 'account'
    label="profile"


and add this to installed apps
'account.apps.ProfileConfig',

'''
#-----------------
#if you have more than one backend auth then specify which one to use in login methond

auth.login(request,user,backend='django.contrib.auth.backends.ModelBackend')

#-----------------



