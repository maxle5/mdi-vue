
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerAlertOutline from "../../src/components/MdiMapMarkerAlertOutline.vue";

test("MdiMapMarkerAlertOutline snapshot", () => {
  const wrapper = mount(MdiMapMarkerAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
