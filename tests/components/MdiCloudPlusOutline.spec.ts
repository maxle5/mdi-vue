
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudPlusOutline from "../../src/components/MdiCloudPlusOutline.vue";

test("MdiCloudPlusOutline snapshot", () => {
  const wrapper = mount(MdiCloudPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
