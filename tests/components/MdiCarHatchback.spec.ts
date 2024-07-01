
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarHatchback from "../../src/components/MdiCarHatchback.vue";

test("MdiCarHatchback snapshot", () => {
  const wrapper = mount(MdiCarHatchback, {});
  expect(wrapper.html()).toMatchSnapshot();
});
