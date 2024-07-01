
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageBrokenVariant from "../../src/components/MdiImageBrokenVariant.vue";

test("MdiImageBrokenVariant snapshot", () => {
  const wrapper = mount(MdiImageBrokenVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
