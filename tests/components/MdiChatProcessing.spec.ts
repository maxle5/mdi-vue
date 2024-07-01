
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChatProcessing from "../../src/components/MdiChatProcessing.vue";

test("MdiChatProcessing snapshot", () => {
  const wrapper = mount(MdiChatProcessing, {});
  expect(wrapper.html()).toMatchSnapshot();
});
