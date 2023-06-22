import string
import random

from visual import visual

def hangman():
    stand = string.ascii_uppercase

    path = 'words'
    words = open(path, 'r').read().splitlines()

    w = gen_word(words) ### char set in the given word

    pool = set(w) ### letters remaining in w
    used = set() ### char guessed

    life = 7

    while len(pool) > 0 and life > 0:
        # print('You got',len(used),'letters right:',' '.join(used))

        print('\nLives left:',life)

        # current situation (ie W - R D)
        board = [c if c in used else '-' for c in w]

        ### GRAPHIC
        print(visual[life])

        print('Current word: ', ' '.join(board))

        c = input('Guess a letter: ').upper()

        if c in pool:
            # if c in stand - used: ### expression "-" doesnt work
            if c in stand and c not in used:
                used.add(c)
                pool.remove(c)
        elif c in stand and c not in pool:

            if c in used:
                print('\n\n*** Reminder: You have guessed this letter before. \n*** Please choose another one.')
            else:
                life -= 1
                used.add(c)
                if life > 0:
                    print('\nYour letter', c,  'is not in the word.')

        else:
            print('\nInvalid character. Choose again.')

    if life == 0:
        ### GRAPHIC
        print(visual[life])
        print('\nYou died, sorry. The word was',w,'.\n')

    else:
        print('\nCongrats! You got the word ', w.upper(), '!!\n')


def gen_word(words):
    word = random.choice(words)
    while '-' in words or ' ' in word:
        word = random.choice(words)

    return word.upper()

if __name__ == '__main__':
    hangman()
