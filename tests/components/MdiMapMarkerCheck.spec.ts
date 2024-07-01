
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerCheck from "../../src/components/MdiMapMarkerCheck.vue";

test("MdiMapMarkerCheck snapshot", () => {
  const wrapper = mount(MdiMapMarkerCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
