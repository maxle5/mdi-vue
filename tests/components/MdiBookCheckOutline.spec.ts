
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookCheckOutline from "../../src/components/MdiBookCheckOutline.vue";

test("MdiBookCheckOutline snapshot", () => {
  const wrapper = mount(MdiBookCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
