from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Record
from .serializers import RecordSerializer
# Create your views here.


class RecordViewSet(viewsets.ModelViewSet):
    serializer_class = RecordSerializer

    def get_queryset(self):
        return Record.objects.all()

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
