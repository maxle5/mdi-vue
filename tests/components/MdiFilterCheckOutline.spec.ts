
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterCheckOutline from "../../src/components/MdiFilterCheckOutline.vue";

test("MdiFilterCheckOutline snapshot", () => {
  const wrapper = mount(MdiFilterCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
