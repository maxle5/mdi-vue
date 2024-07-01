
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmokeDetectorAlertOutline from "../../src/components/MdiSmokeDetectorAlertOutline.vue";

test("MdiSmokeDetectorAlertOutline snapshot", () => {
  const wrapper = mount(MdiSmokeDetectorAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
