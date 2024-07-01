
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarkerLeft from "../../src/components/MdiMapMarkerLeft.vue";

test("MdiMapMarkerLeft snapshot", () => {
  const wrapper = mount(MdiMapMarkerLeft, {});
  expect(wrapper.html()).toMatchSnapshot();
});
