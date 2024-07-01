
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWallSconce from "../../src/components/MdiWallSconce.vue";

test("MdiWallSconce snapshot", () => {
  const wrapper = mount(MdiWallSconce, {});
  expect(wrapper.html()).toMatchSnapshot();
});
