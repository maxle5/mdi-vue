
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessagePlusOutline from "../../src/components/MdiMessagePlusOutline.vue";

test("MdiMessagePlusOutline snapshot", () => {
  const wrapper = mount(MdiMessagePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
