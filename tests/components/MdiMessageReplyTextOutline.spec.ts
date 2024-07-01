
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageReplyTextOutline from "../../src/components/MdiMessageReplyTextOutline.vue";

test("MdiMessageReplyTextOutline snapshot", () => {
  const wrapper = mount(MdiMessageReplyTextOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
