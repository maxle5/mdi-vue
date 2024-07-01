
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailOpenMultiple from "../../src/components/MdiEmailOpenMultiple.vue";

test("MdiEmailOpenMultiple snapshot", () => {
  const wrapper = mount(MdiEmailOpenMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
