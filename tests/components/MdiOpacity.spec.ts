
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOpacity from "../../src/components/MdiOpacity.vue";

test("MdiOpacity snapshot", () => {
  const wrapper = mount(MdiOpacity, {});
  expect(wrapper.html()).toMatchSnapshot();
});
