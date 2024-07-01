
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeFloorL from "../../src/components/MdiHomeFloorL.vue";

test("MdiHomeFloorL snapshot", () => {
  const wrapper = mount(MdiHomeFloorL, {});
  expect(wrapper.html()).toMatchSnapshot();
});
