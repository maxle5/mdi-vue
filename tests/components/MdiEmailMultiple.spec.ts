
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailMultiple from "../../src/components/MdiEmailMultiple.vue";

test("MdiEmailMultiple snapshot", () => {
  const wrapper = mount(MdiEmailMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
