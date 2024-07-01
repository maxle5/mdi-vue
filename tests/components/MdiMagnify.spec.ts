
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMagnify from "../../src/components/MdiMagnify.vue";

test("MdiMagnify snapshot", () => {
  const wrapper = mount(MdiMagnify, {});
  expect(wrapper.html()).toMatchSnapshot();
});
