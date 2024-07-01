
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSmokeDetectorAlert from "../../src/components/MdiSmokeDetectorAlert.vue";

test("MdiSmokeDetectorAlert snapshot", () => {
  const wrapper = mount(MdiSmokeDetectorAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
