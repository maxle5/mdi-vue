
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudOffOutline from "../../src/components/MdiCloudOffOutline.vue";

test("MdiCloudOffOutline snapshot", () => {
  const wrapper = mount(MdiCloudOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
