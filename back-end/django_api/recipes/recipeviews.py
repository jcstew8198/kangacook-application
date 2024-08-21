from django.http import HttpResponse
from django.template import loader
from rest_framework import viewsets
from .serializers import RecipeSerializer
from .models import Recipe

class RecipeView(viewsets.ModelViewSet):
    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()