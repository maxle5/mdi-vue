
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeFloorB from "../../src/components/MdiHomeFloorB.vue";

test("MdiHomeFloorB snapshot", () => {
  const wrapper = mount(MdiHomeFloorB, {});
  expect(wrapper.html()).toMatchSnapshot();
});
