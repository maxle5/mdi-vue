
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaOBox from "../../src/components/MdiAlphaOBox.vue";

test("MdiAlphaOBox snapshot", () => {
  const wrapper = mount(MdiAlphaOBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
