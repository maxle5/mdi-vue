
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPillMultiple from "../../src/components/MdiPillMultiple.vue";

test("MdiPillMultiple snapshot", () => {
  const wrapper = mount(MdiPillMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
