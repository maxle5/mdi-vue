
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerUp from "../../src/components/MdiMapMarkerUp.vue";

test("MdiMapMarkerUp snapshot", () => {
  const wrapper = mount(MdiMapMarkerUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
