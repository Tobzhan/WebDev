from django.http import JsonResponse
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return JsonResponse(serializer.data, safe=False)

def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)

def company_vacancies_list(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = company.vacancy_set.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data)
    except Vacancy.DoesNotExist:
        return JsonResponse({'error': 'Vacancy not found'}, status=404)

def top_ten_vacancies_list(request):
    top_ten_vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(top_ten_vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)