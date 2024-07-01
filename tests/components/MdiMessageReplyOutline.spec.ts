
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageReplyOutline from "../../src/components/MdiMessageReplyOutline.vue";

test("MdiMessageReplyOutline snapshot", () => {
  const wrapper = mount(MdiMessageReplyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
