
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadMinusOutline from "../../src/components/MdiHeadMinusOutline.vue";

test("MdiHeadMinusOutline snapshot", () => {
  const wrapper = mount(MdiHeadMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
