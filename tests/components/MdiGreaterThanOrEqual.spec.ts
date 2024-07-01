
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGreaterThanOrEqual from "../../src/components/MdiGreaterThanOrEqual.vue";

test("MdiGreaterThanOrEqual snapshot", () => {
  const wrapper = mount(MdiGreaterThanOrEqual, {});
  expect(wrapper.html()).toMatchSnapshot();
});
