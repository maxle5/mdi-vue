
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDishwasherOff from "../../src/components/MdiDishwasherOff.vue";

test("MdiDishwasherOff snapshot", () => {
  const wrapper = mount(MdiDishwasherOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
