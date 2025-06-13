"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatAiModule = void 0;
const common_1 = require("@nestjs/common");
const chat_ai_controller_1 = require("./chat-ai.controller");
const mongoose_1 = require("@nestjs/mongoose");
const product_schemas_1 = require("../modules/products/schemas/product.schemas");
const chat_ai_provider_1 = require("./chat-ai.provider");
const interactive_agent_service_1 = require("./ultils/interactive-agent.service");
const vector_store_module_1 = require("../vector-store/vector-store.module");
const vector_store_schema_1 = require("../vector-store/schemas/vector-store.schema");
const inventory_product_schemas_1 = require("../modules/inventory-product/schemas/inventory-product.schemas");
const get_time_tool_1 = require("./tools/get-time.tool");
const search_product_tool_1 = require("./tools/search-product.tool");
const search_vector_document_tool_1 = require("./tools/search-vector-document.tool");
const reset_conversation_tool_1 = require("./tools/reset-conversation.tool ");
let ChatAiModule = class ChatAiModule {
};
exports.ChatAiModule = ChatAiModule;
exports.ChatAiModule = ChatAiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: product_schemas_1.Product.name, schema: product_schemas_1.ProductSchema },
                { name: vector_store_schema_1.VectorDocument.name, schema: vector_store_schema_1.VectorSchema },
                { name: inventory_product_schemas_1.InventoryProduct.name, schema: inventory_product_schemas_1.InventoryProductSchema }
            ]),
            vector_store_module_1.VectorStoreModule,
        ],
        controllers: [chat_ai_controller_1.ChatAiController],
        providers: [
            chat_ai_provider_1.GeminiChatProvider,
            interactive_agent_service_1.InteractiveAgentService,
            get_time_tool_1.GetTimeTool,
            search_product_tool_1.SearchProductTool,
            search_vector_document_tool_1.SearchVectorDocumentTool,
            reset_conversation_tool_1.ResetConversationTool
        ],
        exports: [
            chat_ai_provider_1.GeminiChatProvider,
            interactive_agent_service_1.InteractiveAgentService
        ]
    })
], ChatAiModule);
//# sourceMappingURL=chat-ai.module.js.map