
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableMultiple from "../../src/components/MdiTableMultiple.vue";

test("MdiTableMultiple snapshot", () => {
  const wrapper = mount(MdiTableMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
