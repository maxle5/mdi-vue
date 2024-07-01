
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCrosshairsGps from "../../src/components/MdiCrosshairsGps.vue";

test("MdiCrosshairsGps snapshot", () => {
  const wrapper = mount(MdiCrosshairsGps, {});
  expect(wrapper.html()).toMatchSnapshot();
});
