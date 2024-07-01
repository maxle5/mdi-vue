
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric9PlusCircleOutline from "../../src/components/MdiNumeric9PlusCircleOutline.vue";

test("MdiNumeric9PlusCircleOutline snapshot", () => {
  const wrapper = mount(MdiNumeric9PlusCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
