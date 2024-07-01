
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudCancelOutline from "../../src/components/MdiCloudCancelOutline.vue";

test("MdiCloudCancelOutline snapshot", () => {
  const wrapper = mount(MdiCloudCancelOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
