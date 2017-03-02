from django.http import JsonResponse
from sophia.secrets import *
from tweets.utils import *
import json
import tweepy
import carmen

def tweets(request):
  topic = request.GET.get("q","trump")
  geo_tweets = []
  auth = tweepy.OAuthHandler(TWITTER_KEY, TWITTER_SECRET)
  auth.set_access_token(TWITTER_TOKEN, TWITTER_TOKEN_SECRET)
  api = tweepy.API(auth)
  resolver = carmen.get_resolver()
  resolver.load_locations()
  for tweet in api.search(q = topic, count="10000"):
    json_tweet = tweet._json;
    location = resolver.resolve_tweet(json_tweet);
    if location:
      geo_tweets.append(geojson_format(json_tweet, location))
  return JsonResponse({"geo_tweets":geo_tweets})

