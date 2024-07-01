
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudSearchOutline from "../../src/components/MdiCloudSearchOutline.vue";

test("MdiCloudSearchOutline snapshot", () => {
  const wrapper = mount(MdiCloudSearchOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
