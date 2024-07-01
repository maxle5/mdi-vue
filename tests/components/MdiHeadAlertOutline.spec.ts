
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeadAlertOutline from "../../src/components/MdiHeadAlertOutline.vue";

test("MdiHeadAlertOutline snapshot", () => {
  const wrapper = mount(MdiHeadAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
