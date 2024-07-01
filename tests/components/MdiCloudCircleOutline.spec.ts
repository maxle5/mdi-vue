
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudCircleOutline from "../../src/components/MdiCloudCircleOutline.vue";

test("MdiCloudCircleOutline snapshot", () => {
  const wrapper = mount(MdiCloudCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
