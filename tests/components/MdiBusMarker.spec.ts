
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBusMarker from "../../src/components/MdiBusMarker.vue";

test("MdiBusMarker snapshot", () => {
  const wrapper = mount(MdiBusMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
