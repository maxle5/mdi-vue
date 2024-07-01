
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageReplyText from "../../src/components/MdiMessageReplyText.vue";

test("MdiMessageReplyText snapshot", () => {
  const wrapper = mount(MdiMessageReplyText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
