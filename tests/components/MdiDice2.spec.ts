
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDice2 from "../../src/components/MdiDice2.vue";

test("MdiDice2 snapshot", () => {
  const wrapper = mount(MdiDice2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
