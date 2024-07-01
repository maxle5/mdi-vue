
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSetCenterRight from "../../src/components/MdiSetCenterRight.vue";

test("MdiSetCenterRight snapshot", () => {
  const wrapper = mount(MdiSetCenterRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
