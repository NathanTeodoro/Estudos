import logging
from telegram import Update, ForceReply, ReplyKeyboardMarkup
from telegram.ext import (Application,CommandHandler,MessageHandler,filters,CallbackContext,ConversationHandler)
import mysql.connector as mysql
import warnings as warnings
#conexão banco de dados
#def mysql_con(host, user , password, database):
#     connection= mysql.connect(
#          host = host,
#          user = user,
#          password = password,
#          database = database
#    )
#     return connection
#
#global connection 
#connection = mysql_con('localhost',' root', 'root123@nathaN', 'pythonbot')
#
#cursor = connection.cursor()

#habilitar login
logging.basicConfig(
    format="%(asctime)s - %(name)s -%(levelname) %(message)s" , level=logging.INFO
)
#comentar depois
logging.getLogger("httpx").setLevel(logging.WARNING)

logger = logging.getLogger(__name__)

MSG , CONFIRM ,THANKS, CANCEL = range(4)

#denifindo manipuladores (argumento , contexto)
async def inico(update:Update, context: CallbackContext):
     #manda uma mensagem quando "iniciar" e enviado
    user = update.effective_user
    await update.message.reply_html(
        rf"Oi {user.mention_html()}!",
        reply_markup=ForceReply(selective=True),
    )
    
    await update.message.reply_text("Te mandarei um versiculo na hora desejada!\U0001F603 \n"
                                    "Insira hora para o envio.\U0001F609 \n \U0001F6A8 Ex.: 10, 13, 9. Sem pontos, virgulas e afins somente nùmeros.\n Ou Cancele com /cancel",
    
    )
    return MSG

async def msg(update:Update, context: CallbackContext):
    #global hora
    #hora=update.message.text
    #global usuario
    #usuario = str(update.message.from_user.id)
    keyboard=[["sim","não"]]
    await update.message.reply_text(f"Mandarei as {hora.lower()}h! ok?",
        reply_markup=ReplyKeyboardMarkup(keyboard, one_time_keyboard=True, input_field_placeholder="sim ou não")
    )
    #cursor = connection.cursor()
    #cursor.execute('''
    #               INSERT INTO users VALUES
    #               ${usuario}, ${hora}
    #               ''')
    #cursor.close()
    return CONFIRM
    
async def confirm(update:Update, context: CallbackContext) -> int:
    await update.message.reply_text("OK!")
    return THANKS

async def thanks(update:Update, context: CallbackContext) -> int:
    await update.message.reply_text("Que Deus lhe abençoe e os anjos do senhor lhe guardem!!! \U0001F64F \n \U0001F916 cancelado \U0001F64F")
    return ConversationHandler.END


async def obg(update:Update, context: CallbackContext) -> int:
    await update.message.reply_text("\U0001F6D0 Amem meu irmão || irmã \U0001F64F")
    dados = context.user_data.get(usuario, 'not found')
    await update.message.reply_text(dados)
    return ConversationHandler.END
  

async def ajuda(update:Update, context: CallbackContext) -> None:
    await update.message.reply_text("-> Inicie com /start e siga as instruções\n-> Insira a data apenas com numeros, sem virgulas, espaços, dois pontos e etc. Ex.: 10, 17, 5")
   
async def cancel(update:Update, context:CallbackContext) -> int:
     await update.message.reply_text(
          "\U0001F916 cancelado \U0001F64F"
     )

def main() -> None:
    #"iniciar bot com o token"
    aplicacao = Application.builder().token('6378218111:AAFkIuDmJ7ODQJam3dDDlE5eJ_I0xbg-uJI').build()

    #'acionando comandos'
    aplicacao.add_handler(CommandHandler("help",ajuda))
  
    #replicar de volta
    conv_handler =ConversationHandler(
         entry_points=[CommandHandler("start", inico)],
         states={
              MSG: [MessageHandler(filters.Regex(r'\b(0?[1-9]|1\d|2[0-4])\b'), msg)],
              CONFIRM: [
                   MessageHandler(filters.Regex("^(sim)$"), obg), 
                   MessageHandler(filters.Regex("^(não)$"), thanks)  
                   ],
              CANCEL:[CommandHandler("cancel", cancel)],
              THANKS: [MessageHandler(filters.Regex(f''),obg)]
              },
         fallbacks=[CommandHandler("cancel",cancel)],)
    #aplicacao.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, imprimir))
    aplicacao.add_handler(conv_handler)
    aplicacao.run_polling(allowed_updates=Update.ALL_TYPES)
#warnings.filterwarnings('ignore', category = RuntimeWarning)
if __name__ == "__main__":
        main()