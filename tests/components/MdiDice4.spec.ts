
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDice4 from "../../src/components/MdiDice4.vue";

test("MdiDice4 snapshot", () => {
  const wrapper = mount(MdiDice4, {});
  expect(wrapper.html()).toMatchSnapshot();
});
