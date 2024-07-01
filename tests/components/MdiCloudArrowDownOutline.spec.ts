
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudArrowDownOutline from "../../src/components/MdiCloudArrowDownOutline.vue";

test("MdiCloudArrowDownOutline snapshot", () => {
  const wrapper = mount(MdiCloudArrowDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
