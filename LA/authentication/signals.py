# from django.contrib.auth.signals import user_logged_in
# from django.core.mail import send_mail
# from django.dispatch import receiver
# import logging
# logging.basicConfig(level=logging.DEBUG)



# from django.contrib.auth.signals import user_logged_in
# from django.core.mail import send_mail
# from django.dispatch import receiver

# @receiver(user_logged_in)
# def send_thank_you_email(sender, request, user, **kwargs):
#     subject = "Thank you for signing in"
#     message = f"Hello {user.username},\n\nThank you for signing in using Google.\n\nBest regards,\nLocale-Abode Team"
#     from_email = "komalnaseem147@gmail.com"  # replace with your email
#     recipient_list = [user.email]


#     send_mail(subject, message, from_email, recipient_list)