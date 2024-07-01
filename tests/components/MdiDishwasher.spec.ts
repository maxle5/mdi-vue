
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDishwasher from "../../src/components/MdiDishwasher.vue";

test("MdiDishwasher snapshot", () => {
  const wrapper = mount(MdiDishwasher, {});
  expect(wrapper.html()).toMatchSnapshot();
});
