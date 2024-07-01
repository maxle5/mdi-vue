
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric9PlusBoxMultipleOutline from "../../src/components/MdiNumeric9PlusBoxMultipleOutline.vue";

test("MdiNumeric9PlusBoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric9PlusBoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
