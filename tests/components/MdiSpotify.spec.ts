
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpotify from "../../src/components/MdiSpotify.vue";

test("MdiSpotify snapshot", () => {
  const wrapper = mount(MdiSpotify, {});
  expect(wrapper.html()).toMatchSnapshot();
});
