export const types = `
  type ClientPortal {
    _id: String!
    name: String!
    description: String
    logo: String
    icon: String
    knowledgeBaseLabel: String
    knowledgeBaseTopicId: String
    ticketLabel: String
    taskLabel: String
    taskStageId: String
    taskPipelineId: String
    taskBoardId: String
    ticketStageId: String
    ticketPipelineId: String
    ticketBoardId: String
  }
`;

export const queries = `
  configClientPortal: ClientPortal
`;

export const mutations = `
  configUpdateClientPortal(
    name: String!
    description: String
    logo: String
    icon: String
    knowledgeBaseLabel: String
    knowledgeBaseTopicId: String
    ticketLabel: String
    taskLabel: String
    taskStageId: String
    taskPipelineId: String
    taskBoardId: String
    ticketStageId: String
    ticketPipelineId: String
    ticketBoardId: String
  ): JSON
`;
