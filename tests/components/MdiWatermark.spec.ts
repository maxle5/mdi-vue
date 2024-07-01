
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWatermark from "../../src/components/MdiWatermark.vue";

test("MdiWatermark snapshot", () => {
  const wrapper = mount(MdiWatermark, {});
  expect(wrapper.html()).toMatchSnapshot();
});
