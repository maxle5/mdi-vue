
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiceMultipleOutline from "../../src/components/MdiDiceMultipleOutline.vue";

test("MdiDiceMultipleOutline snapshot", () => {
  const wrapper = mount(MdiDiceMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
