
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSatelliteUplink from "../../src/components/MdiSatelliteUplink.vue";

test("MdiSatelliteUplink snapshot", () => {
  const wrapper = mount(MdiSatelliteUplink, {});
  expect(wrapper.html()).toMatchSnapshot();
});
