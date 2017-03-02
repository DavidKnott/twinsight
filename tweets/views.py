from comments.serializers import CommentSerializer
from django.http import JsonResponse
from tweets.utils import *
import json
import tweepy
import carmen

def home(request):
  s = "dam"
  # topic = request.GET.get("q","trump")
  # geo_tweets = []
  # auth = tweepy.OAuthHandler("X3Yvtl1VrPYWMZE6Qtlg0SiUg", "5lXQozuhif3c4ptod8Biecgfl9Yhlw8UNNc8kErt7yXsnNEgYs")
  # auth.set_access_token("811004653215350789-og5cwSTNNhnQblE2EdeigA0aZmlplZc", "tIDGoj2UXgl6QE9D0rQikuHFIfDfrazyuv4B5z06zHx6d")
  # api = tweepy.API(auth)
  # resolver = carmen.get_resolver()
  # resolver.load_locations()
  # for tweet in api.search(q = topic, count="10000"):
  #   json_tweet = tweet._json;
  #   location = resolver.resolve_tweet(json_tweet);
  #   if location:
  #     geo_tweets.append(geojson_format(json_tweet, location))
  # return JsonResponse({"geo_tweets":geo_tweets})

