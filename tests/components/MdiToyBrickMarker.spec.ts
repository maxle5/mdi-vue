
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiToyBrickMarker from "../../src/components/MdiToyBrickMarker.vue";

test("MdiToyBrickMarker snapshot", () => {
  const wrapper = mount(MdiToyBrickMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
