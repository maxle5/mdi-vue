
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMarkerCheck from "../../src/components/MdiMarkerCheck.vue";

test("MdiMarkerCheck snapshot", () => {
  const wrapper = mount(MdiMarkerCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
