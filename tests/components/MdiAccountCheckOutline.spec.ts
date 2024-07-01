
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountCheckOutline from "../../src/components/MdiAccountCheckOutline.vue";

test("MdiAccountCheckOutline snapshot", () => {
  const wrapper = mount(MdiAccountCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
