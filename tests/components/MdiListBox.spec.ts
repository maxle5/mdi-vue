
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiListBox from "../../src/components/MdiListBox.vue";

test("MdiListBox snapshot", () => {
  const wrapper = mount(MdiListBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
