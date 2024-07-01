
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageCheckOutline from "../../src/components/MdiMessageCheckOutline.vue";

test("MdiMessageCheckOutline snapshot", () => {
  const wrapper = mount(MdiMessageCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
