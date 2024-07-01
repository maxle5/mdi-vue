
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadCheckOutline from "../../src/components/MdiHeadCheckOutline.vue";

test("MdiHeadCheckOutline snapshot", () => {
  const wrapper = mount(MdiHeadCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
