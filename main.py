import random

game_number = random.randint(1,10)
guess_count = 0
#print(game_number)

guess = int(input("guess a # between 1-10:"))

while(True):
    guess = int(input("guess a # between 1-10:"))
    guess_count += 1

    if guess > game_number:
        print("too high")
    elif guess < game_number:
        print("too low")
    else: 
        print(
            f"Correct! It took you {guess_count} "
            f"{'guess' if guess_count == 1 else 'guesses'}."
            )
        break




   
