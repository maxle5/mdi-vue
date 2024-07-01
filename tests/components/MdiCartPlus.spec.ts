
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCartPlus from "../../src/components/MdiCartPlus.vue";

test("MdiCartPlus snapshot", () => {
  const wrapper = mount(MdiCartPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
