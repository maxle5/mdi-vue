
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeFloor3 from "../../src/components/MdiHomeFloor3.vue";

test("MdiHomeFloor3 snapshot", () => {
  const wrapper = mount(MdiHomeFloor3, {});
  expect(wrapper.html()).toMatchSnapshot();
});
