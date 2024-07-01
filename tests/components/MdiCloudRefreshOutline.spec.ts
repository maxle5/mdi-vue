
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudRefreshOutline from "../../src/components/MdiCloudRefreshOutline.vue";

test("MdiCloudRefreshOutline snapshot", () => {
  const wrapper = mount(MdiCloudRefreshOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
