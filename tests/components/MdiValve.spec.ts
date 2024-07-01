
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiValve from "../../src/components/MdiValve.vue";

test("MdiValve snapshot", () => {
  const wrapper = mount(MdiValve, {});
  expect(wrapper.html()).toMatchSnapshot();
});
