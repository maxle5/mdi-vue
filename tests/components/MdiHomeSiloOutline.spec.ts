
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeSiloOutline from "../../src/components/MdiHomeSiloOutline.vue";

test("MdiHomeSiloOutline snapshot", () => {
  const wrapper = mount(MdiHomeSiloOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
