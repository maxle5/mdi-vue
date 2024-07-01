
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeFloor1 from "../../src/components/MdiHomeFloor1.vue";

test("MdiHomeFloor1 snapshot", () => {
  const wrapper = mount(MdiHomeFloor1, {});
  expect(wrapper.html()).toMatchSnapshot();
});
