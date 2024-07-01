
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEqualBox from "../../src/components/MdiEqualBox.vue";

test("MdiEqualBox snapshot", () => {
  const wrapper = mount(MdiEqualBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
