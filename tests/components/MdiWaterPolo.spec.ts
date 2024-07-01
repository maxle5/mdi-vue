
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWaterPolo from "../../src/components/MdiWaterPolo.vue";

test("MdiWaterPolo snapshot", () => {
  const wrapper = mount(MdiWaterPolo, {});
  expect(wrapper.html()).toMatchSnapshot();
});
