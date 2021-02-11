from .views import RecordViewSet
from rest_framework import routers
from django.urls import include, path
app_name = "core"

router = routers.DefaultRouter()
router.register(r"records", RecordViewSet, basename="records")

# urls = []
urlpatterns = [
    path("", include(router.urls))
]
# urlpatterns = router.urls  # + urls
