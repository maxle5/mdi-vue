
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudCheckOutline from "../../src/components/MdiCloudCheckOutline.vue";

test("MdiCloudCheckOutline snapshot", () => {
  const wrapper = mount(MdiCloudCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
