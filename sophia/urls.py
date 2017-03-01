"""sophia URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from rest_framework_swagger.views import get_swagger_view
from django.contrib import admin
from sophia import views as home_views
from tweets import views as tweet_views
from comments import views as comment_views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'comments', comment_views.CommentViewSet)

schema_view = get_swagger_view(title='Pastebin API')

urlpatterns = [
    url('', include('django.contrib.auth.urls', namespace='auth')),
    url('', include('social.apps.django_app.urls', namespace='social')),
    url(r'^$', schema_view),
    url(r'^tweets/', tweet_views.home),
    url(r'^admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
