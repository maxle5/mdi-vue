
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMapMarker from "../../src/components/MdiMapMarker.vue";

test("MdiMapMarker snapshot", () => {
  const wrapper = mount(MdiMapMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
