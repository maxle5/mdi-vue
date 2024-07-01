
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSkull from "../../src/components/MdiSkull.vue";

test("MdiSkull snapshot", () => {
  const wrapper = mount(MdiSkull, {});
  expect(wrapper.html()).toMatchSnapshot();
});
