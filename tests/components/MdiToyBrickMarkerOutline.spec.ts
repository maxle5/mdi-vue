
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToyBrickMarkerOutline from "../../src/components/MdiToyBrickMarkerOutline.vue";

test("MdiToyBrickMarkerOutline snapshot", () => {
  const wrapper = mount(MdiToyBrickMarkerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
