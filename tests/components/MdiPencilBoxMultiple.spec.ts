
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilBoxMultiple from "../../src/components/MdiPencilBoxMultiple.vue";

test("MdiPencilBoxMultiple snapshot", () => {
  const wrapper = mount(MdiPencilBoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
