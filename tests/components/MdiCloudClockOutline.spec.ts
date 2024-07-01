
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudClockOutline from "../../src/components/MdiCloudClockOutline.vue";

test("MdiCloudClockOutline snapshot", () => {
  const wrapper = mount(MdiCloudClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
