
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNumeric9PlusBox from "../../src/components/MdiNumeric9PlusBox.vue";

test("MdiNumeric9PlusBox snapshot", () => {
  const wrapper = mount(MdiNumeric9PlusBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
