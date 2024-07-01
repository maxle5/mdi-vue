
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartHalfOutline from "../../src/components/MdiHeartHalfOutline.vue";

test("MdiHeartHalfOutline snapshot", () => {
  const wrapper = mount(MdiHeartHalfOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
