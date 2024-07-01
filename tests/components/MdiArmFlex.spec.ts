
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArmFlex from "../../src/components/MdiArmFlex.vue";

test("MdiArmFlex snapshot", () => {
  const wrapper = mount(MdiArmFlex, {});
  expect(wrapper.html()).toMatchSnapshot();
});
