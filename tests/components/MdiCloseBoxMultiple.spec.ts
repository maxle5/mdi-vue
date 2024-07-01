
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloseBoxMultiple from "../../src/components/MdiCloseBoxMultiple.vue";

test("MdiCloseBoxMultiple snapshot", () => {
  const wrapper = mount(MdiCloseBoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
