
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeFloor2 from "../../src/components/MdiHomeFloor2.vue";

test("MdiHomeFloor2 snapshot", () => {
  const wrapper = mount(MdiHomeFloor2, {});
  expect(wrapper.html()).toMatchSnapshot();
});
