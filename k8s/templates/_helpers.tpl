{{- define "btcdiagrams.name" -}}
{{- .Chart.Name -}}
{{- end -}}

{{- define "btcdiagrams.fullname" -}}
{{- .Release.Name -}}
{{- end -}}

{{- define "btcdiagrams.labels" -}}
app.kubernetes.io/name: {{ include "btcdiagrams.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end -}}

{{- define "btcdiagrams.selectorLabels" -}}
app.kubernetes.io/name: {{ include "btcdiagrams.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end -}}
