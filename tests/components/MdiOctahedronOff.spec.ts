
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOctahedronOff from "../../src/components/MdiOctahedronOff.vue";

test("MdiOctahedronOff snapshot", () => {
  const wrapper = mount(MdiOctahedronOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
