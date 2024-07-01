
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpotlightBeam from "../../src/components/MdiSpotlightBeam.vue";

test("MdiSpotlightBeam snapshot", () => {
  const wrapper = mount(MdiSpotlightBeam, {});
  expect(wrapper.html()).toMatchSnapshot();
});
