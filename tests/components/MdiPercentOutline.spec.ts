
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPercentOutline from "../../src/components/MdiPercentOutline.vue";

test("MdiPercentOutline snapshot", () => {
  const wrapper = mount(MdiPercentOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
