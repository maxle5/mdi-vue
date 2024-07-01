
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSatellite from "../../src/components/MdiSatellite.vue";

test("MdiSatellite snapshot", () => {
  const wrapper = mount(MdiSatellite, {});
  expect(wrapper.html()).toMatchSnapshot();
});
