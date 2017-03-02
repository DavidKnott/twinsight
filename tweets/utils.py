import dateutil.parser
import re
from textblob import TextBlob


def geojson_format(tweet, location):
    t = dateutil.parser.parse(tweet['created_at'])
    f = {
        "type": "Feature",
        "properties": {
            "name": tweet["user"]["name"],
            "screen_name": tweet["user"]["screen_name"],
            "created_at": t.isoformat("T") + "Z",
            "text": tweet["text"],
            "sentiment": get_sentiment(tweet["text"]),
            "profile_image_url": tweet["user"]["profile_image_url"],
            "url": "http://twitter.com/%s/status/%s" % (
                tweet["user"]["screen_name"],
                tweet["id_str"]
            )
        }
    }

    f['geometry'] = {
                "type": "Point",
                "coordinates": [
                    location[1].longitude,
                    location[1].latitude
                ]
            }
    return f

def get_sentiment(tweet):
    analysis = TextBlob(clean_tweet(tweet))
    if analysis.sentiment.polarity > 0:
        return "positive"
    elif analysis.sentiment.polarity < 0:
        return "negative"
    else:
        return "neutral"

def clean_tweet(tweet):
    return ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)", " ", tweet).split())

