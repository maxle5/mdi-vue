
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMarker from "../../src/components/MdiMarker.vue";

test("MdiMarker snapshot", () => {
  const wrapper = mount(MdiMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
