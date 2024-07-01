
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarthBoxRemove from "../../src/components/MdiEarthBoxRemove.vue";

test("MdiEarthBoxRemove snapshot", () => {
  const wrapper = mount(MdiEarthBoxRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
