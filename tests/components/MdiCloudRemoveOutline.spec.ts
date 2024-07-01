
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudRemoveOutline from "../../src/components/MdiCloudRemoveOutline.vue";

test("MdiCloudRemoveOutline snapshot", () => {
  const wrapper = mount(MdiCloudRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
