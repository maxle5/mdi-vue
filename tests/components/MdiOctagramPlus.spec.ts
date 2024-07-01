
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOctagramPlus from "../../src/components/MdiOctagramPlus.vue";

test("MdiOctagramPlus snapshot", () => {
  const wrapper = mount(MdiOctagramPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
