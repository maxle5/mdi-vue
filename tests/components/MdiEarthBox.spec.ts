
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEarthBox from "../../src/components/MdiEarthBox.vue";

test("MdiEarthBox snapshot", () => {
  const wrapper = mount(MdiEarthBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
