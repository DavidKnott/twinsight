from __future__ import unicode_literals

from django.db import models
from django.utils import timezone

class Comment(models.Model):
  author        = models.CharField(max_length=50)
  content       = models.TextField()
  created_date  = models.DateTimeField(default=timezone.now)
  updated_date  = models.DateTimeField(default=timezone.now)

