from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_list, name='company-list'),
    path('companies/<int:id>/', views.company_detail, name='company-detail'),
    path('companies/<int:id>/vacancies/', views.company_vacancies_list, name='company-vacancies'),
    path('vacancies/', views.vacancy_list, name='vacancy-list'),
    path('vacancies/<int:id>/', views.vacancy_detail, name='vacancy-detail'),
    path('vacancies/top_ten/', views.top_ten_vacancies_list, name='top-ten-vacancies'),
]
