
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeFloorNegative1 from "../../src/components/MdiHomeFloorNegative1.vue";

test("MdiHomeFloorNegative1 snapshot", () => {
  const wrapper = mount(MdiHomeFloorNegative1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
