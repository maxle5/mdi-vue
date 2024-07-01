
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextBox from "../../src/components/MdiTextBox.vue";

test("MdiTextBox snapshot", () => {
  const wrapper = mount(MdiTextBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
