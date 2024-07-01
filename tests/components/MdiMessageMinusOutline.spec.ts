
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageMinusOutline from "../../src/components/MdiMessageMinusOutline.vue";

test("MdiMessageMinusOutline snapshot", () => {
  const wrapper = mount(MdiMessageMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
