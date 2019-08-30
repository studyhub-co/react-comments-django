# -*- coding: utf-8
from __future__ import unicode_literals, absolute_import

from django.conf.urls import url, include

from react_comments_django.urls_api import urlpatterns as react_comments_django_urls_api

from django.contrib.sitemaps.views import sitemap
from django.contrib.staticfiles.views import serve

from django.views.decorators.csrf import ensure_csrf_cookie

from react_comments_django.sitemaps import ThreadSitemap

sitemaps = {
    'djeddit': ThreadSitemap
}

# from django.views.generic.base import TemplateView

urlpatterns = [
    url(r'^api/v1/', include(react_comments_django_urls_api)),
    url(r'^accounts/', include('allauth.urls')),
    url(r'^sitemap\.xml$', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
    url(r'^$', serve, {
        'path': 'index.html',
    }),
    # exclude url with dot (files extension)
    url(r'^[^.]*$', ensure_csrf_cookie(serve), {
         'path': 'index.html',
     }),
    url(r'^(?P<path>.*)$', serve,  {}),
]
