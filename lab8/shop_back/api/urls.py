from django.contrib import admin
from django.urls import path, include
from api.views import *

urlpatterns = [
    path('categories/', get_categories),
    path('categories/<int:id>/', get_single_category),
    path('categories/<int:id>/products/', get_products_of_category),
    path('products/', get_products),
    path('products/<int:id>/', get_single_product),
]