
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCartPercent from "../../src/components/MdiCartPercent.vue";

test("MdiCartPercent snapshot", () => {
  const wrapper = mount(MdiCartPercent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
