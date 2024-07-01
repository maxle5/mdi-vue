
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArtboard from "../../src/components/MdiArtboard.vue";

test("MdiArtboard snapshot", () => {
  const wrapper = mount(MdiArtboard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
