from django.shortcuts import render
from api.models import Category, Product
from django.http.response import JsonResponse, HttpResponse

def get_categories(request):
    data = Category.objects.all()
    json_data = [category.to_json() for category in data]
    return JsonResponse(json_data, safe = False)

def get_products(request):
    data = Product.objects.all()
    json_data = [category.to_json() for category in data]
    return JsonResponse(json_data, safe = False)

def get_single_category(request, id):
    data = Category.objects.get(id=id)
    data = data.to_json()
    return JsonResponse(data, safe = False)

def get_single_product(request, id):
    data = Product.objects.get(id=id)
    data = data.to_json()
    return JsonResponse(data, safe = False)

def get_products_of_category(request, id):
    data = Product.objects.all()
    json_data = [category.to_json() for category in data]
    return JsonResponse(json_data, safe = False)
