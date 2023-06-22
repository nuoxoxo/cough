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
        if life == 7:
            print('你有:',life,'條命')
        else:
            print('你仲有:',life,'條命')

        # current situation (ie W - R D)
        board = [c if c in used else '-' for c in w]

        ### GRAPHIC
        print(visual[life])

        print('進度: ', ' '.join(board))

        c = input('請輸入一個字母: ').upper()

        if c in pool:
            # if c in stand - used: ### expression "-" doesnt work
            if c in stand and c not in used:
                used.add(c)
                pool.remove(c)
        elif c in stand and c not in pool:

            if c in used:
                print('\n\n之前已估過',c)
            else:
                life -= 1
                used.add(c)
                if life > 0:
                    print('\n冇', c,'呢個字母')

        else:
            print('\n可能輸錯，請再揀過')

    if life == 0:
        ### GRAPHIC
        print(visual[life])
        print('\n妳並未猜中 ',w,'\n水平有待提高\n')

    else:
        print('\n冇錯，呢個單詞就係：', w.upper(), '\n')


def gen_word(words):
    word = random.choice(words)
    while '-' in words or ' ' in word:
        word = random.choice(words)

    return word.upper()

if __name__ == '__main__':
    hangman()
