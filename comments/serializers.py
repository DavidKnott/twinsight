from comments.models import Comment
from rest_framework import serializers

class CommentSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model   = Comment
    fields  = ('author', 'content', 'created_date')