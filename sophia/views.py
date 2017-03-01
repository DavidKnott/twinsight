from rest_framework import viewsets
from comments.serializers import CommentSerializer
import json
import tweepy
from django.http import HttpResponse


def home(request):
  auth = tweepy.OAuthHandler("X3Yvtl1VrPYWMZE6Qtlg0SiUg", "5lXQozuhif3c4ptod8Biecgfl9Yhlw8UNNc8kErt7yXsnNEgYs")
  auth.set_access_token("811004653215350789-og5cwSTNNhnQblE2EdeigA0aZmlplZc", "tIDGoj2UXgl6QE9D0rQikuHFIfDfrazyuv4B5z06zHx6d")
  api = tweepy.API(auth)
  public_tweets = api.home_timeline()
  context = {'user': request.user, 'request': request, 'tweets': public_tweets }
  return HttpResponse(public_tweets, content_type='application/json')