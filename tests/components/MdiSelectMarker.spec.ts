
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectMarker from "../../src/components/MdiSelectMarker.vue";

test("MdiSelectMarker snapshot", () => {
  const wrapper = mount(MdiSelectMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
