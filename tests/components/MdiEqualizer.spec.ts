
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEqualizer from "../../src/components/MdiEqualizer.vue";

test("MdiEqualizer snapshot", () => {
  const wrapper = mount(MdiEqualizer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
