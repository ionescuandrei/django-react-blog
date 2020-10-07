from django.db import models
import datetime

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    img = models.TextField(
        default='https://drive.google.com/uc?export=view&id=1dQzsqdmBKoLpEzXAHmbJgkrENZmNmHYE')
    autor = models.TextField(default="John Doe")
    createDate = models.DateField(default=datetime.date.today)

    def __str__(self):
        return self.title
