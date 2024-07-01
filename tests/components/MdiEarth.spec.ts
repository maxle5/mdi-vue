
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarth from "../../src/components/MdiEarth.vue";

test("MdiEarth snapshot", () => {
  const wrapper = mount(MdiEarth, {});
  expect(wrapper.html()).toMatchSnapshot();
});
