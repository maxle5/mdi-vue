
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageMultiple from "../../src/components/MdiImageMultiple.vue";

test("MdiImageMultiple snapshot", () => {
  const wrapper = mount(MdiImageMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
