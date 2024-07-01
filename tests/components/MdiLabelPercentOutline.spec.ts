
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLabelPercentOutline from "../../src/components/MdiLabelPercentOutline.vue";

test("MdiLabelPercentOutline snapshot", () => {
  const wrapper = mount(MdiLabelPercentOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
