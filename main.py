import os
import random

check = """<input type="checkbox" id="{}" name="chord" value="{}">
<label for="{}"> {}</label><br>\n"""


def s(note):
    t = note.lower()
    return t[0] + "_" + t[2:5]

to_print = ""
for note in os.listdir("./Chords"):
    to_print += check.format(note[:-4], note, s(note), note[:-4])
    

with open("check.html", "w") as fi:
    fi.write(to_print)