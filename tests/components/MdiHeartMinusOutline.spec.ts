
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartMinusOutline from "../../src/components/MdiHeartMinusOutline.vue";

test("MdiHeartMinusOutline snapshot", () => {
  const wrapper = mount(MdiHeartMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
