
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDice3 from "../../src/components/MdiDice3.vue";

test("MdiDice3 snapshot", () => {
  const wrapper = mount(MdiDice3, {});
  expect(wrapper.html()).toMatchSnapshot();
});
