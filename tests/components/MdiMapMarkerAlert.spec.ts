
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerAlert from "../../src/components/MdiMapMarkerAlert.vue";

test("MdiMapMarkerAlert snapshot", () => {
  const wrapper = mount(MdiMapMarkerAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
