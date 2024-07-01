
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric9PlusCircle from "../../src/components/MdiNumeric9PlusCircle.vue";

test("MdiNumeric9PlusCircle snapshot", () => {
  const wrapper = mount(MdiNumeric9PlusCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
