
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaGBox from "../../src/components/MdiAlphaGBox.vue";

test("MdiAlphaGBox snapshot", () => {
  const wrapper = mount(MdiAlphaGBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
