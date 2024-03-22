def sleep_in(weekday, vacation):
  if not weekday or vacation:
    return True
  else:
    return False

def diff21(n):
  if n <= 21:
    return 21 - n
  else:
    return (n - 21) * 2

def missing_char(str, n):
  front = str[:n]   # up to but not including n
  back = str[n+1:]  # n+1 through end of string
  return front + back

def monkey_trouble(a_smile, b_smile):
  if a_smile and b_smile:
    return True
  if not a_smile and not b_smile:
    return True
  return False

def makes10(a, b):
  return (a == 10 or b == 10 or a+b == 10)