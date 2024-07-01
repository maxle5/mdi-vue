
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileCloudOutline from "../../src/components/MdiFileCloudOutline.vue";

test("MdiFileCloudOutline snapshot", () => {
  const wrapper = mount(MdiFileCloudOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
