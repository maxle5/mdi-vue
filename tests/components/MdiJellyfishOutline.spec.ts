
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiJellyfishOutline from "../../src/components/MdiJellyfishOutline.vue";

test("MdiJellyfishOutline snapshot", () => {
  const wrapper = mount(MdiJellyfishOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
