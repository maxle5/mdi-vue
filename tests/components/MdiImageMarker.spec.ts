
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageMarker from "../../src/components/MdiImageMarker.vue";

test("MdiImageMarker snapshot", () => {
  const wrapper = mount(MdiImageMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
