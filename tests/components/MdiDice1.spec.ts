
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDice1 from "../../src/components/MdiDice1.vue";

test("MdiDice1 snapshot", () => {
  const wrapper = mount(MdiDice1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
