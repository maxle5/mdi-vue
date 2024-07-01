
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeakerMinusOutline from "../../src/components/MdiBeakerMinusOutline.vue";

test("MdiBeakerMinusOutline snapshot", () => {
  const wrapper = mount(MdiBeakerMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
