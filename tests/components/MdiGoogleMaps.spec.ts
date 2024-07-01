
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleMaps from "../../src/components/MdiGoogleMaps.vue";

test("MdiGoogleMaps snapshot", () => {
  const wrapper = mount(MdiGoogleMaps, {});
  expect(wrapper.html()).toMatchSnapshot();
});
