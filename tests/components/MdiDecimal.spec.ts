
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDecimal from "../../src/components/MdiDecimal.vue";

test("MdiDecimal snapshot", () => {
  const wrapper = mount(MdiDecimal, {});
  expect(wrapper.html()).toMatchSnapshot();
});
