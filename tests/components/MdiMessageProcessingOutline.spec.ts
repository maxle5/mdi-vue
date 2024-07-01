
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageProcessingOutline from "../../src/components/MdiMessageProcessingOutline.vue";

test("MdiMessageProcessingOutline snapshot", () => {
  const wrapper = mount(MdiMessageProcessingOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
