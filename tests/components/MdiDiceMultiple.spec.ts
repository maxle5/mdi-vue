
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiceMultiple from "../../src/components/MdiDiceMultiple.vue";

test("MdiDiceMultiple snapshot", () => {
  const wrapper = mount(MdiDiceMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
