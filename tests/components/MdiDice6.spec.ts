
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDice6 from "../../src/components/MdiDice6.vue";

test("MdiDice6 snapshot", () => {
  const wrapper = mount(MdiDice6, {});
  expect(wrapper.html()).toMatchSnapshot();
});
