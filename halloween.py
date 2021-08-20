# tutorial to connect PIR sensor to RPi at: https://www.raspberrypi.org/learning/parent-detector/worksheet/
# download the Pygame package at: http://www.pygame.org/download.shtml
# download free .wav audio files at: http://soundbible.com/
# this scream horror .wav file is a favoriate: http://soundbible.com/1627-Female-Scream-Horror.html
from gpiozero import MotionSensor
import pygame.mixer
from pygame.mixer 
import Sound
import random
from time import sleep

pygame.init()
pygame.mixer.init()

pir = MotionSensor(4)

sounds = ["Scary Scream.wav"
    # add .wav files in quotes to this list with commas in between, i.e. "scream.wav", "chainsaw.wav", etc
    ]

while True:

    if pir.motion_detected:
    
        print("Motion detected")
        random_sound = random.choice(sounds) # chooses a random .wav file from the sounds list
        play_random = pygame.mixer.Sound(random_sound)
        play_random.play()
        sleep(10)
        play_random.stop()

    else:
        print("Waiting for motion")