{% if theme.github.enable and theme.github.username and theme.github.shape and theme.github.position and theme.github.color %}
  {% set github_url = 'https://github.com/' + theme.github.username %}
  {% set url = theme.github.shape + '/' + theme.github.position + '/' + theme.github.color + '.swig' %}
  {% include url with github_url %}
{% endif %}
