
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMinusBox from "../../src/components/MdiMinusBox.vue";

test("MdiMinusBox snapshot", () => {
  const wrapper = mount(MdiMinusBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
