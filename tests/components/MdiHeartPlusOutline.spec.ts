
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartPlusOutline from "../../src/components/MdiHeartPlusOutline.vue";

test("MdiHeartPlusOutline snapshot", () => {
  const wrapper = mount(MdiHeartPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
