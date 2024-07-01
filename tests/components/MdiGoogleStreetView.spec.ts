
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleStreetView from "../../src/components/MdiGoogleStreetView.vue";

test("MdiGoogleStreetView snapshot", () => {
  const wrapper = mount(MdiGoogleStreetView, {});
  expect(wrapper.html()).toMatchSnapshot();
});
