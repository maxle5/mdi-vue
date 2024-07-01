
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaEBox from "../../src/components/MdiAlphaEBox.vue";

test("MdiAlphaEBox snapshot", () => {
  const wrapper = mount(MdiAlphaEBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
