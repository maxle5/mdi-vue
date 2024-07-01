
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCrystalBall from "../../src/components/MdiCrystalBall.vue";

test("MdiCrystalBall snapshot", () => {
  const wrapper = mount(MdiCrystalBall, {});
  expect(wrapper.html()).toMatchSnapshot();
});
