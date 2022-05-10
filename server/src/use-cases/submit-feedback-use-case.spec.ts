import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMail = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMail }
);

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Exemple comment',
      screenshot: 'data:image/png;base64,uadheuihaudehdtaAs123i',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMail).toHaveBeenCalled();
  });

  it('should not be able to submit feedback without a type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'Exemple comment',
      screenshot: 'data:image/png;base64,uadheuihaudehdtaAs123i',
    })).rejects.toThrow();
  });

  it('should not be able to submit feedback without a comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,uadheuihaudehdtaAs123i',
    })).rejects.toThrow();
  });

  it('should not be able to submit feedback without an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Test comment',
      screenshot: 'jpg.jpg',
    })).rejects.toThrow();
  });
  
});