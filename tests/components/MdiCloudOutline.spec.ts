
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudOutline from "../../src/components/MdiCloudOutline.vue";

test("MdiCloudOutline snapshot", () => {
  const wrapper = mount(MdiCloudOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
