
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudArrowUpOutline from "../../src/components/MdiCloudArrowUpOutline.vue";

test("MdiCloudArrowUpOutline snapshot", () => {
  const wrapper = mount(MdiCloudArrowUpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
