
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTriangleWave from "../../src/components/MdiTriangleWave.vue";

test("MdiTriangleWave snapshot", () => {
  const wrapper = mount(MdiTriangleWave, {});
  expect(wrapper.html()).toMatchSnapshot();
});
