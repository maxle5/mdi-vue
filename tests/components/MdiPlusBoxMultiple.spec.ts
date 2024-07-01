
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlusBoxMultiple from "../../src/components/MdiPlusBoxMultiple.vue";

test("MdiPlusBoxMultiple snapshot", () => {
  const wrapper = mount(MdiPlusBoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
