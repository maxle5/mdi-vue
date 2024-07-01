
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlusMinusBox from "../../src/components/MdiPlusMinusBox.vue";

test("MdiPlusMinusBox snapshot", () => {
  const wrapper = mount(MdiPlusMinusBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
