
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookMultiple from "../../src/components/MdiBookMultiple.vue";

test("MdiBookMultiple snapshot", () => {
  const wrapper = mount(MdiBookMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
