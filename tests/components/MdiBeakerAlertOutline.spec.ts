
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeakerAlertOutline from "../../src/components/MdiBeakerAlertOutline.vue";

test("MdiBeakerAlertOutline snapshot", () => {
  const wrapper = mount(MdiBeakerAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
