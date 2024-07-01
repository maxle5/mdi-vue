
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountMultipleCheckOutline from "../../src/components/MdiAccountMultipleCheckOutline.vue";

test("MdiAccountMultipleCheckOutline snapshot", () => {
  const wrapper = mount(MdiAccountMultipleCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
