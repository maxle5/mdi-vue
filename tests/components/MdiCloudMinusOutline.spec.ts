
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudMinusOutline from "../../src/components/MdiCloudMinusOutline.vue";

test("MdiCloudMinusOutline snapshot", () => {
  const wrapper = mount(MdiCloudMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
