
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageReply from "../../src/components/MdiMessageReply.vue";

test("MdiMessageReply snapshot", () => {
  const wrapper = mount(MdiMessageReply, {});
  expect(wrapper.html()).toMatchSnapshot();
});
