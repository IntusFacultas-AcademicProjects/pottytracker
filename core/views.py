from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from django.views import View
from django.shortcuts import render
from .models import Record
from .serializers import RecordSerializer
# Create your views here.


class App(View):
    def get(self, request):
        return render(request, "build/index.html", {})


class RecordViewSet(viewsets.ModelViewSet):
    serializer_class = RecordSerializer

    def get_queryset(self):
        queryset = Record.objects.all()
        if not self.request.query_params:
            return queryset
        if 'datetime__gte' in self.request.query_params:
            queryset = queryset.filter(
                datetime__gte=self.request.query_params.get('datetime__gte'))
        if 'datetime__lte' in self.request.query_params:
            queryset = queryset.filter(
                datetime__lte=self.request.query_params.get('datetime__lte'))
        return queryset.order_by("datetime")

    def retrieve(self, request, pk=None):
        queryset = Record.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = RecordSerializer(user)
        return Response(serializer.data)

    def create(self, request):
        data = request.data
        serializer = self.get_serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(data={"message": "success"}, status=status.HTTP_200_OK)
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
