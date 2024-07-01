
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadPlusOutline from "../../src/components/MdiHeadPlusOutline.vue";

test("MdiHeadPlusOutline snapshot", () => {
  const wrapper = mount(MdiHeadPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
