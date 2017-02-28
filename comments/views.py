from comments.models import Comment
from rest_framework import viewsets
from comments.serializers import CommentSerializer

class CommentViewSet(viewsets.ModelViewSet):
  queryset          = Comment.objects.all().order_by('created_date')
  serializer_class  = CommentSerializer
