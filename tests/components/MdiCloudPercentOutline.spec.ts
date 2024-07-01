
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudPercentOutline from "../../src/components/MdiCloudPercentOutline.vue";

test("MdiCloudPercentOutline snapshot", () => {
  const wrapper = mount(MdiCloudPercentOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
