
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPercentCircleOutline from "../../src/components/MdiPercentCircleOutline.vue";

test("MdiPercentCircleOutline snapshot", () => {
  const wrapper = mount(MdiPercentCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
