
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaM from "../../src/components/MdiAlphaM.vue";

test("MdiAlphaM snapshot", () => {
  const wrapper = mount(MdiAlphaM, {});
  expect(wrapper.html()).toMatchSnapshot();
});
