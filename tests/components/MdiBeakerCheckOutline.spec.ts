
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeakerCheckOutline from "../../src/components/MdiBeakerCheckOutline.vue";

test("MdiBeakerCheckOutline snapshot", () => {
  const wrapper = mount(MdiBeakerCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
