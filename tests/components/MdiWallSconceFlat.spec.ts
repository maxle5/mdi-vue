
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWallSconceFlat from "../../src/components/MdiWallSconceFlat.vue";

test("MdiWallSconceFlat snapshot", () => {
  const wrapper = mount(MdiWallSconceFlat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
