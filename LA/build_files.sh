

echo "BUILD START"
python3.9 -m pip install -r requirements.txt
python3.9 manage.py collect static --noinput --clear
echo "BUILD END"
