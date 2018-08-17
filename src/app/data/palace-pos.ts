export class Palace {
    getPalacePosition(c: number) {
        switch (c) {
        case 1: {
        return {x: 1, y: 1};
        }
        case 2: {
        return  {x: 2, y: 1};
        }
        case 3: {
        return  {x: 3, y: 1};
        }
        case 4: {
        return  {x: 4, y: 1};
        }
        case 5: {
        return  {x: 4, y: 2};
        }
        case 6: {
        return  {x: 4, y: 3};
        }
        case 7: {
        return  {x: 4, y: 4};
        }
        case 8: {
        return  {x: 3, y: 4};
        }
        case 9: {
        return  {x: 2, y: 4};
        }
        case 10: {
        return {x: 1, y: 4};
        }
        case 11: {
        return  {x: 1, y: 3};
        }
        case 12: {
        return  {x: 1, y: 2};
        }
    }
  }

  getFourPointerTriangle(c: number): {x, y}[] {
    const palacePos = this.getPalacePosition(c);
    const posX = palacePos.x;
    const posY = palacePos.y;

    switch ([posX, posY].toString()) {
      case [1, 1].toString(): {
        return [
          {x: 1, y: 1},
          {x: 4, y: 2},
          {x: 2, y: 4},
          {x: 1, y: 1},
          {x: 4, y: 4}
       ];
      }
      case [2, 1].toString(): {
        return [
          {x: 2, y: 1},
          {x: 1, y: 4},
          {x: 4, y: 3},
          {x: 2, y: 1},
          {x: 3, y: 4}
       ];
      }
      case [3, 1].toString(): {
        return [
          {x: 3, y: 1},
          {x: 1, y: 3},
          {x: 4, y: 4},
          {x: 3, y: 1},
          {x: 2, y: 4}
       ];
      }
      case [4, 1].toString(): {
        return [
          {x: 4, y: 1},
          {x: 1, y: 2},
          {x: 3, y: 4},
          {x: 4, y: 1},
          {x: 1, y: 4}
       ];
      }
      case [4, 2].toString(): {
        return [
          {x: 4, y: 2},
          {x: 1, y: 1},
          {x: 2, y: 4},
          {x: 4, y: 2},
          {x: 1, y: 3}
       ];
      }
      case [4, 3].toString(): {
        return [
          {x: 4, y: 3},
          {x: 2, y: 1},
          {x: 1, y: 4},
          {x: 4, y: 3},
          {x: 1, y: 2}
       ];
      }
      case [4, 4].toString(): {
        return [
          {x: 4, y: 4},
          {x: 3, y: 1},
          {x: 1, y: 3},
          {x: 4, y: 4},
          {x: 1, y: 1}
       ];
      }
      case [3, 4].toString(): {
        return [
          {x: 3, y: 4},
          {x: 4, y: 1},
          {x: 1, y: 2},
          {x: 3, y: 4},
          {x: 2, y: 1}
       ];
      }
      case [2, 4].toString(): {
        return [
          {x: 2, y: 4},
          {x: 1, y: 1},
          {x: 4, y: 2},
          {x: 2, y: 4},
          {x: 3, y: 1}
       ];
      }
      case [1, 4].toString(): {
        return [
          {x: 1, y: 4},
          {x: 2, y: 1},
          {x: 4, y: 3},
          {x: 1, y: 4},
          {x: 4, y: 1}
       ];
      }
      case [1, 3].toString(): {
        return [
          {x: 1, y: 3},
          {x: 3, y: 1},
          {x: 4, y: 4},
          {x: 1, y: 3},
          {x: 4, y: 2}
       ];
      }
      case [1, 2].toString(): {
        return [
          {x: 1, y: 2},
          {x: 4, y: 1},
          {x: 3, y: 4},
          {x: 1, y: 2},
          {x: 4, y: 3}
       ];
      }
    }
  }
}
