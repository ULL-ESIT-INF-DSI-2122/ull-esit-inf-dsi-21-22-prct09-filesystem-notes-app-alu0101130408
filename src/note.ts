import chalk from "chalk";

export type ColorNotes = 'Red' | 'Green' | 'Blue' | 'Yellow';

export class Note {
  constructor(private title: string, private body: string, private color: ColorNotes) {
    this.title = title;
    this.body = body;
    this.color = color;
  }

  seTitle(newTitle: string): void {
    this.title = newTitle;
  }

  setBody(newBody: string): void {
    this.body = newBody;
  }

  setColor(newColor: ColorNotes): void {
    this.color = newColor;
  }

  geTitle(): string {
    return this.title;
  }

  getBody(): string {
    return this.body;
  }

  getColor(): ColorNotes {
    return this.color;
  }

  printTitle() {
    switch (this.color) {
      case 'Red':
        console.log(chalk.red(this.title));
        break;
      case 'Green':
        console.log(chalk.green(this.title));
        break;
      case 'Blue':
        console.log(chalk.blue(this.title));
        break;
      case 'Yellow':
        console.log(chalk.yellow(this.title));
        break;
    }
  }

  printBody() {
    switch (this.color) {
      case 'Red':
        console.log(chalk.red(this.body));
        break;
      case 'Green':
        console.log(chalk.green(this.body));
        break;
      case 'Blue':
        console.log(chalk.blue(this.body));
        break;
      case 'Yellow':
        console.log(chalk.yellow(this.body));
        break;
    }
  }
};
