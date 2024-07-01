
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignalDistanceVariant from "../../src/components/MdiSignalDistanceVariant.vue";

test("MdiSignalDistanceVariant snapshot", () => {
  const wrapper = mount(MdiSignalDistanceVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
