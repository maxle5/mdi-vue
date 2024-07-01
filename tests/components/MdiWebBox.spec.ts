
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWebBox from "../../src/components/MdiWebBox.vue";

test("MdiWebBox snapshot", () => {
  const wrapper = mount(MdiWebBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
