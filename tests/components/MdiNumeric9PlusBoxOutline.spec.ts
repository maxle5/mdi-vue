
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric9PlusBoxOutline from "../../src/components/MdiNumeric9PlusBoxOutline.vue";

test("MdiNumeric9PlusBoxOutline snapshot", () => {
  const wrapper = mount(MdiNumeric9PlusBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
