
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanoramaSphere from "../../src/components/MdiPanoramaSphere.vue";

test("MdiPanoramaSphere snapshot", () => {
  const wrapper = mount(MdiPanoramaSphere, {});
  expect(wrapper.html()).toMatchSnapshot();
});
