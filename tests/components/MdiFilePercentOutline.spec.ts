
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilePercentOutline from "../../src/components/MdiFilePercentOutline.vue";

test("MdiFilePercentOutline snapshot", () => {
  const wrapper = mount(MdiFilePercentOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
