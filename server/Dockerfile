FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

ARG PIP_INDEX_URL=https://pypi.org/simple
ENV PIP_INDEX_URL=${PIP_INDEX_URL}

ARG PIP_DEFAULT_TIMEOUT=120
ENV PIP_DEFAULT_TIMEOUT=${PIP_DEFAULT_TIMEOUT}

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . ./

# 转换行尾符并设置执行权限
RUN sed -i 's/\r$//' /app/entrypoint.sh \
    && chmod +x /app/entrypoint.sh \
    && mkdir -p /app/upload

EXPOSE 80

CMD ["/app/entrypoint.sh"]
