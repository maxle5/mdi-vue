
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeFloor0 from "../../src/components/MdiHomeFloor0.vue";

test("MdiHomeFloor0 snapshot", () => {
  const wrapper = mount(MdiHomeFloor0, {});
  expect(wrapper.html()).toMatchSnapshot();
});
