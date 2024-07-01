
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMotion from "../../src/components/MdiMotion.vue";

test("MdiMotion snapshot", () => {
  const wrapper = mount(MdiMotion, {});
  expect(wrapper.html()).toMatchSnapshot();
});
