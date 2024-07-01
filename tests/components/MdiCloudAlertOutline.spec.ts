
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloudAlertOutline from "../../src/components/MdiCloudAlertOutline.vue";

test("MdiCloudAlertOutline snapshot", () => {
  const wrapper = mount(MdiCloudAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
