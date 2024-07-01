
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiChatProcessingOutline from "../../src/components/MdiChatProcessingOutline.vue";

test("MdiChatProcessingOutline snapshot", () => {
  const wrapper = mount(MdiChatProcessingOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
