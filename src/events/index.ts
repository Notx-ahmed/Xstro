import { evaluator } from './eval';
import { autoSaveBroadCast } from './autosave';
import { Message } from '../../types/Message';
import { WASocket } from 'baileys';

export const Xevents = async (messages: Message, client: WASocket) => {
    const tasks = [evaluator(messages), autoSaveBroadCast(messages)];

    try {
        const results = await Promise.all(
            tasks.map((task) =>
                task.catch((err) => {
                    console.error(`Task failed:`, err);
                    return null;
                })
            )
        );
        return results.filter((result) => result !== null);
    } catch (error) {
        console.error('Critical error in Xevents:', error);
        throw error; // Re-throw critical errors for upstream handling
    }
};