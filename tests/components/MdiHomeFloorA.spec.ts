
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeFloorA from "../../src/components/MdiHomeFloorA.vue";

test("MdiHomeFloorA snapshot", () => {
  const wrapper = mount(MdiHomeFloorA, {});
  expect(wrapper.html()).toMatchSnapshot();
});
