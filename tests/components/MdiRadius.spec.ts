
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadius from "../../src/components/MdiRadius.vue";

test("MdiRadius snapshot", () => {
  const wrapper = mount(MdiRadius, {});
  expect(wrapper.html()).toMatchSnapshot();
});
