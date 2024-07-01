
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookMarker from "../../src/components/MdiBookMarker.vue";

test("MdiBookMarker snapshot", () => {
  const wrapper = mount(MdiBookMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
